'use client';

import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';

// Define interfaces for the data
interface TeamMember {
    id: number;
    name: string;
    title?: string;
    imageUrl?: string;
    order: number;
    teamGroupId: number;
}

interface TeamGroup {
    id: number;
    name: string;
    order: number;
    members: TeamMember[];
}

const ManageOurPeoplePage: React.FC = () => {
    const [teamGroups, setTeamGroups] = useState<TeamGroup[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState<'add' | 'edit' | 'addGroup' | 'editGroup'>('add');
    const [currentMember, setCurrentMember] = useState<Partial<TeamMember> | null>(null);
    const [currentGroup, setCurrentGroup] = useState<Partial<TeamGroup> | null>(null);
    const [selectedGroupId, setSelectedGroupId] = useState<number | null>(null);
    const [uploading, setUploading] = useState(false);

    const fetchTeamGroups = async () => {
        try {
            const response = await fetch('/api/admin/team-groups');
            const data = await response.json();
            setTeamGroups(data);
        } catch (error) {
            console.error('Failed to fetch team groups:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTeamGroups();
    }, []);

    const handleOpenModal = (type: 'add' | 'edit' | 'addGroup' | 'editGroup', data?: number | Partial<TeamMember> | Partial<TeamGroup>) => {
        setModalType(type);
        if (type === 'add' && typeof data === 'number') {
            setSelectedGroupId(data);
            setCurrentMember({ name: '', title: '', imageUrl: '', teamGroupId: data });
        } else if (type === 'edit' && typeof data === 'object' && data && 'teamGroupId' in data) {
            setCurrentMember(data as TeamMember);
            setSelectedGroupId((data as TeamMember).teamGroupId);
        } else if (type === 'addGroup') {
            setCurrentGroup({ name: '' });
        } else if (type === 'editGroup' && typeof data === 'object' && data && 'members' in data) {
            setCurrentGroup(data as TeamGroup);
        }
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setCurrentMember(null);
        setCurrentGroup(null);
        setSelectedGroupId(null);
    };

    const handleSave = async () => {
        if (modalType === 'add' || modalType === 'edit') {
            const method = modalType === 'add' ? 'POST' : 'PUT';
            const url = modalType === 'add' ? '/api/admin/team-members' : `/api/admin/team-members/${currentMember?.id}`;
            const body = JSON.stringify({ ...currentMember, teamGroupId: selectedGroupId });

            try {
                const response = await fetch(url, {
                    method,
                    headers: { 'Content-Type': 'application/json' },
                    body,
                });

                if (response.ok) {
                    await fetchTeamGroups();
                } else {
                    console.error('Failed to save team member');
                }
            } catch (error) {
                console.error('Failed to save team member:', error);
            }
        } else if (modalType === 'addGroup' || modalType === 'editGroup') {
            const method = modalType === 'addGroup' ? 'POST' : 'PUT';
            const url = modalType === 'addGroup' ? '/api/admin/team-groups' : `/api/admin/team-groups/${currentGroup?.id}`;
            const body = JSON.stringify(currentGroup);

            try {
                const response = await fetch(url, {
                    method,
                    headers: { 'Content-Type': 'application/json' },
                    body,
                });
                if (response.ok) {
                    await fetchTeamGroups();
                } else {
                    console.error('Failed to save team group');
                }
            } catch (error) {
                console.error('Failed to save team group:', error);
            }
        }
        handleCloseModal();
    };

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;
        const file = event.target.files[0];
        if (!file) return;

        setUploading(true);
        try {
            const response = await fetch(`/api/admin/upload?filename=${file.name}`, {
                method: 'POST',
                body: file,
            });

            const newBlob = await response.json();

            if (!response.ok) {
                throw new Error(newBlob.message || 'Failed to upload file');
            }

            setCurrentMember(prev => ({ ...prev, imageUrl: newBlob.url }));

        } catch (error) {
            console.error('Upload failed:', error);
            alert(`Upload failed: ${error instanceof Error ? error.message : String(error)}`);
        } finally {
            setUploading(false);
        }
    }

    const handleDelete = async (type: 'member' | 'group', id: number) => {
        const url = type === 'member' ? `/api/admin/team-members/${id}` : `/api/admin/team-groups/${id}`;
        const confirmation = window.confirm(`Are you sure you want to delete this ${type}?`);

        if (confirmation) {
            try {
                const response = await fetch(url, { method: 'DELETE' });
                if (response.ok) {
                    await fetchTeamGroups();
                } else {
                    console.error(`Failed to delete ${type}`);
                }
            } catch (error) {
                console.error(`Failed to delete ${type}:`, error);
            }
        }
    };

    const onDragEnd = async (result: DropResult) => {
        if (!result.destination) return;

        const { source, destination, type } = result;

        if (type === 'group') {
            const reorderedGroups = Array.from(teamGroups);
            const [moved] = reorderedGroups.splice(source.index, 1);
            reorderedGroups.splice(destination.index, 0, moved);

            setTeamGroups(reorderedGroups);

            const updatedOrder = reorderedGroups.map((group, index) => ({ id: group.id, order: index }));
            await fetch('/api/admin/reorder', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ type: 'team-groups', items: updatedOrder }),
            });
        } else {
            const sourceGroup = teamGroups.find(g => g.id.toString() === source.droppableId);
            const destGroup = teamGroups.find(g => g.id.toString() === destination.droppableId);
            if (!sourceGroup || !destGroup) return;

            const newTeamGroups = [...teamGroups];
            const sourceGroupIndex = newTeamGroups.findIndex(g => g.id === sourceGroup.id);
            const destGroupIndex = newTeamGroups.findIndex(g => g.id === destGroup.id);
            
            const sourceMembers = Array.from(sourceGroup.members);
            const [movedMember] = sourceMembers.splice(source.index, 1);

            if (source.droppableId === destination.droppableId) {
                sourceMembers.splice(destination.index, 0, movedMember);
                newTeamGroups[sourceGroupIndex] = { ...sourceGroup, members: sourceMembers };
                setTeamGroups(newTeamGroups);

                const updatedOrder = sourceMembers.map((m, i) => ({ id: m.id, order: i }));
                await fetch('/api/admin/reorder', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ type: 'team-members', items: updatedOrder }),
                });
            } else {
                movedMember.teamGroupId = destGroup.id;
                const destMembers = Array.from(destGroup.members);
                destMembers.splice(destination.index, 0, movedMember);
                
                newTeamGroups[sourceGroupIndex] = { ...sourceGroup, members: sourceMembers };
                newTeamGroups[destGroupIndex] = { ...destGroup, members: destMembers };
                setTeamGroups(newTeamGroups);

                await fetch(`/api/admin/team-members/${movedMember.id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ teamGroupId: destGroup.id }),
                });
                
                const sourceOrder = sourceMembers.map((m, i) => ({ id: m.id, order: i }));
                await fetch('/api/admin/reorder', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ type: 'team-members', items: sourceOrder }),
                });
                
                const destOrder = destMembers.map((m, i) => ({ id: m.id, order: i }));
                await fetch('/api/admin/reorder', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ type: 'team-members', items: destOrder }),
                });
            }
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="container mx-auto p-4">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">Manage Our People</h1>
                    <button onClick={() => handleOpenModal('addGroup')} className="bg-blue-500 text-white px-4 py-2 rounded">Add Team Group</button>
                </div>

                {isModalOpen && (
                    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
                        <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">
                                {modalType === 'add' ? 'Add Member' : modalType === 'edit' ? 'Edit Member' : modalType === 'addGroup' ? 'Add Group' : 'Edit Group'}
                            </h3>
                            <div className="mt-2">
                                {modalType === 'addGroup' || modalType === 'editGroup' ? (
                                    <input
                                        type="text"
                                        value={currentGroup?.name || ''}
                                        onChange={(e) => setCurrentGroup({ ...currentGroup, name: e.target.value })}
                                        className="w-full p-2 border rounded"
                                        placeholder="Group Name"
                                    />
                                ) : (
                                    <>
                                        <input
                                            type="text"
                                            value={currentMember?.name || ''}
                                            onChange={(e) => setCurrentMember({ ...currentMember, name: e.target.value })}
                                            className="w-full p-2 border rounded mb-2"
                                            placeholder="Name"
                                        />
                                        <input
                                            type="text"
                                            value={currentMember?.title || ''}
                                            onChange={(e) => setCurrentMember({ ...currentMember, title: e.target.value })}
                                            className="w-full p-2 border rounded mb-2"
                                            placeholder="Title"
                                        />
                                        <label className="block text-gray-700 mb-1">Image</label>
                                        <input
                                            type="file"
                                            onChange={handleFileChange}
                                            className="w-full p-2 border rounded"
                                            accept="image/*"
                                        />
                                        {uploading && <p>Uploading...</p>}
                                        {currentMember?.imageUrl && (
                                            <div className="mt-2">
                                                <img src={currentMember.imageUrl} alt="preview" className="h-20 w-20 object-cover rounded" />
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                            <div className="items-center px-4 py-3">
                                <button onClick={handleSave} className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
                                    Save
                                </button>
                                <button onClick={handleCloseModal} className="mt-2 px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <Droppable droppableId="all-groups" direction="vertical" type="group">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {teamGroups.map((group, index) => (
                                <Draggable key={group.id} draggableId={group.id.toString()} index={index}>
                                    {(provided) => (
                                        <div ref={provided.innerRef} {...provided.draggableProps} className="mb-8">
                                            <div className="flex justify-between items-center mb-2 bg-gray-100 p-2 rounded-t-lg" {...provided.dragHandleProps}>
                                                <h2 className="text-xl font-semibold">{group.name}</h2>
                                                <div>
                                                    <button onClick={() => handleOpenModal('editGroup', group)} className="text-blue-500 hover:text-blue-700 mr-2">Edit</button>
                                                    <button onClick={() => handleOpenModal('add', group.id)} className="text-green-500 hover:text-green-700 mr-2">Add Member</button>
                                                    <button onClick={() => handleDelete('group', group.id)} className="text-red-500 hover:text-red-700">Delete Group</button>
                                                </div>
                                            </div>
                                            <table className="min-w-full bg-white rounded-b-lg shadow-md">
                                                <thead className="bg-gray-50">
                                                    <tr>
                                                        <th className="px-4 py-2 border text-left w-1/4">Name</th>
                                                        <th className="px-4 py-2 border text-left w-1/4">Title</th>
                                                        <th className="px-4 py-2 border text-left w-1/4">Image</th>
                                                        <th className="px-4 py-2 border text-left w-1/4">Actions</th>
                                                    </tr>
                                                </thead>
                                                <Droppable droppableId={group.id.toString()} type="member">
                                                    {(provided) => (
                                                        <tbody ref={provided.innerRef} {...provided.droppableProps}>
                                                            {group.members.map((member, index) => (
                                                                <Draggable key={member.id} draggableId={member.id.toString()} index={index}>
                                                                    {(provided) => (
                                                                        <tr ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="border-b hover:bg-gray-50">
                                                                            <td className="border px-4 py-2">{member.name}</td>
                                                                            <td className="border px-4 py-2">{member.title}</td>
                                                                            <td className="border px-4 py-2">
                                                                                {member.imageUrl && <img src={member.imageUrl} alt={member.name} className="h-10 w-10 object-cover rounded-full" />}
                                                                            </td>
                                                                            <td className="border px-4 py-2">
                                                                                <button onClick={() => handleOpenModal('edit', member)} className="text-blue-500 hover:text-blue-700 mr-2">Edit</button>
                                                                                <button onClick={() => handleDelete('member', member.id)} className="text-red-500 hover:text-red-700">Delete</button>
                                                                            </td>
                                                                        </tr>
                                                                    )}
                                                                </Draggable>
                                                            ))}
                                                            {provided.placeholder}
                                                        </tbody>
                                                    )}
                                                </Droppable>
                                            </table>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        </DragDropContext>
    );
};

export default ManageOurPeoplePage; 