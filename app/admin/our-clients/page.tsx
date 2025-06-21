'use client';

import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';

// Define interfaces for the data
interface Client {
    id: number;
    name: string;
    order: number;
    industryGroupId: number;
}

interface IndustryGroup {
    id: number;
    name: string;
    order: number;
    clients: Client[];
}

const ManageOurClientsPage: React.FC = () => {
    const [industryGroups, setIndustryGroups] = useState<IndustryGroup[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState<'add' | 'edit' | 'addGroup' | 'editGroup'>('add');
    const [currentClient, setCurrentClient] = useState<Partial<Client> | null>(null);
    const [currentGroup, setCurrentGroup] = useState<Partial<IndustryGroup> | null>(null);
    const [selectedGroupId, setSelectedGroupId] = useState<number | null>(null);

    const fetchIndustryGroups = async () => {
        try {
            const response = await fetch('/api/admin/industry-groups');
            const data = await response.json();
            setIndustryGroups(data);
        } catch (error) {
            console.error('Failed to fetch industry groups:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchIndustryGroups();
    }, []);

    const handleOpenModal = (type: 'add' | 'edit' | 'addGroup' | 'editGroup', data?: number | Partial<Client> | Partial<IndustryGroup>) => {
        setModalType(type);
        if (type === 'add' && typeof data === 'number') {
            setSelectedGroupId(data);
            setCurrentClient({ name: '', industryGroupId: data });
        } else if (type === 'edit' && typeof data === 'object' && data && 'industryGroupId' in data) {
            setCurrentClient(data as Client);
            setSelectedGroupId((data as Client).industryGroupId);
        } else if (type === 'addGroup') {
            setCurrentGroup({ name: '' });
        } else if (type === 'editGroup' && typeof data === 'object' && data && 'clients' in data) {
            setCurrentGroup(data as IndustryGroup);
        }
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setCurrentClient(null);
        setCurrentGroup(null);
        setSelectedGroupId(null);
    };

    const handleSave = async () => {
        if (modalType === 'add' || modalType === 'edit') {
            const method = modalType === 'add' ? 'POST' : 'PUT';
            const url = modalType === 'add' ? '/api/admin/clients' : `/api/admin/clients/${currentClient?.id}`;
            const body = JSON.stringify({ ...currentClient, industryGroupId: selectedGroupId });

            try {
                const response = await fetch(url, {
                    method,
                    headers: { 'Content-Type': 'application/json' },
                    body,
                });

                if (response.ok) {
                    await fetchIndustryGroups();
                } else {
                    console.error('Failed to save client');
                }
            } catch (error) {
                console.error('Failed to save client:', error);
            }
        } else if (modalType === 'addGroup' || modalType === 'editGroup') {
            const method = modalType === 'addGroup' ? 'POST' : 'PUT';
            const url = modalType === 'addGroup' ? '/api/admin/industry-groups' : `/api/admin/industry-groups/${currentGroup?.id}`;
            const body = JSON.stringify(currentGroup);

            try {
                const response = await fetch(url, {
                    method,
                    headers: { 'Content-Type': 'application/json' },
                    body,
                });
                if (response.ok) {
                    await fetchIndustryGroups();
                } else {
                    console.error('Failed to save industry group');
                }
            } catch (error) {
                console.error('Failed to save industry group:', error);
            }
        }
        handleCloseModal();
    };

    const handleDelete = async (type: 'client' | 'group', id: number) => {
        const url = type === 'client' ? `/api/admin/clients/${id}` : `/api/admin/industry-groups/${id}`;
        const confirmation = window.confirm(`Are you sure you want to delete this ${type}?`);

        if (confirmation) {
            try {
                const response = await fetch(url, { method: 'DELETE' });
                if (response.ok) {
                    await fetchIndustryGroups();
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
            const reorderedGroups = Array.from(industryGroups);
            const [moved] = reorderedGroups.splice(source.index, 1);
            reorderedGroups.splice(destination.index, 0, moved);

            setIndustryGroups(reorderedGroups);

            const updatedOrder = reorderedGroups.map((group, index) => ({ id: group.id, order: index }));
            await fetch('/api/admin/reorder', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ type: 'industry-groups', items: updatedOrder }),
            });
        } else {
            const sourceGroup = industryGroups.find(g => g.id.toString() === source.droppableId);
            const destGroup = industryGroups.find(g => g.id.toString() === destination.droppableId);
            if (!sourceGroup || !destGroup) return;

            const newIndustryGroups = [...industryGroups];
            const sourceGroupIndex = newIndustryGroups.findIndex(g => g.id === sourceGroup.id);
            const destGroupIndex = newIndustryGroups.findIndex(g => g.id === destGroup.id);
            
            const sourceClients = Array.from(sourceGroup.clients);
            const [movedClient] = sourceClients.splice(source.index, 1);

            if (source.droppableId === destination.droppableId) {
                sourceClients.splice(destination.index, 0, movedClient);
                newIndustryGroups[sourceGroupIndex] = { ...sourceGroup, clients: sourceClients };
                setIndustryGroups(newIndustryGroups);

                const updatedOrder = sourceClients.map((c, i) => ({ id: c.id, order: i }));
                await fetch('/api/admin/reorder', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ type: 'clients', items: updatedOrder }),
                });
            } else {
                movedClient.industryGroupId = destGroup.id;
                const destClients = Array.from(destGroup.clients);
                destClients.splice(destination.index, 0, movedClient);
                
                newIndustryGroups[sourceGroupIndex] = { ...sourceGroup, clients: sourceClients };
                newIndustryGroups[destGroupIndex] = { ...destGroup, clients: destClients };
                setIndustryGroups(newIndustryGroups);

                await fetch(`/api/admin/clients/${movedClient.id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ industryGroupId: destGroup.id }),
                });
                
                const sourceOrder = sourceClients.map((c, i) => ({ id: c.id, order: i }));
                await fetch('/api/admin/reorder', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ type: 'clients', items: sourceOrder }),
                });
                
                const destOrder = destClients.map((c, i) => ({ id: c.id, order: i }));
                await fetch('/api/admin/reorder', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ type: 'clients', items: destOrder }),
                });
            }
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="container mx-auto p-4">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">Manage Our Clients</h1>
                    <button onClick={() => handleOpenModal('addGroup')} className="bg-blue-500 text-white px-4 py-2 rounded">Add Industry Group</button>
                </div>

                {isModalOpen && (
                    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
                        <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">
                                {modalType === 'add' ? 'Add Client' : modalType === 'edit' ? 'Edit Client' : modalType === 'addGroup' ? 'Add Group' : 'Edit Group'}
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
                                    <input
                                        type="text"
                                        value={currentClient?.name || ''}
                                        onChange={(e) => setCurrentClient({ ...currentClient, name: e.target.value })}
                                        className="w-full p-2 border rounded mb-2"
                                        placeholder="Client Name"
                                    />
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
                            {industryGroups.map((group, index) => (
                                <Draggable key={group.id} draggableId={group.id.toString()} index={index}>
                                    {(provided) => (
                                        <div ref={provided.innerRef} {...provided.draggableProps} className="mb-8">
                                            <div className="flex justify-between items-center mb-2 bg-gray-100 p-2 rounded-t-lg" {...provided.dragHandleProps}>
                                                <h2 className="text-xl font-semibold">{group.name}</h2>
                                                <div>
                                                    <button onClick={() => handleOpenModal('editGroup', group)} className="text-blue-500 hover:text-blue-700 mr-2">Edit</button>
                                                    <button onClick={() => handleOpenModal('add', group.id)} className="text-green-500 hover:text-green-700 mr-2">Add Client</button>
                                                    <button onClick={() => handleDelete('group', group.id)} className="text-red-500 hover:text-red-700">Delete Group</button>
                                                </div>
                                            </div>
                                            <table className="min-w-full bg-white rounded-b-lg shadow-md">
                                                <thead className="bg-gray-50">
                                                    <tr>
                                                        <th className="px-4 py-2 border text-left w-3/4">Name</th>
                                                        <th className="px-4 py-2 border text-left w-1/4">Actions</th>
                                                    </tr>
                                                </thead>
                                                <Droppable droppableId={group.id.toString()} type="client">
                                                    {(provided) => (
                                                        <tbody ref={provided.innerRef} {...provided.droppableProps}>
                                                            {group.clients.map((client, index) => (
                                                                <Draggable key={client.id} draggableId={client.id.toString()} index={index}>
                                                                    {(provided) => (
                                                                        <tr ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="border-b hover:bg-gray-50">
                                                                            <td className="border px-4 py-2">{client.name}</td>
                                                                            <td className="border px-4 py-2">
                                                                                <button onClick={() => handleOpenModal('edit', client)} className="text-blue-500 hover:text-blue-700 mr-2">Edit</button>
                                                                                <button onClick={() => handleDelete('client', client.id)} className="text-red-500 hover:text-red-700">Delete</button>
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

export default ManageOurClientsPage; 