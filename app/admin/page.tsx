"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: string;
  imageUrl?: string;
  author?: string;
  readTime?: number;
}

const AdminDashboard: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ title: '', content: '', date: '', image: null as File | null });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [editPost, setEditPost] = useState<BlogPost | null>(null);
  const router = useRouter();

  const fetchPosts = () => {
    fetch("/api/admin/posts")
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error fetching posts:", error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    // Check if user is logged in
    fetch("/api/admin/check-auth")
      .then(res => {
        if (!res.ok) {
          router.push("/admin/login");
        }
      })
      .catch(() => {
        router.push("/admin/login");
      });
    fetchPosts();
  }, [router]);

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    if (
      name === 'image' &&
      target instanceof HTMLInputElement &&
      (target.files?.[0] ?? null) !== null
    ) {
      setForm(f => ({ ...f, image: target.files![0] }));
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  };

  const openEditModal = (post: BlogPost) => {
    setEditPost(post);
    setForm({ title: post.title, content: post.content, date: post.date.split('T')[0], image: null });
    setShowModal(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this post?')) return;
    await fetch(`/api/admin/posts/${id}`, { method: 'DELETE' });
    fetchPosts();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const formData = new FormData();
      formData.append('title', form.title);
      formData.append('content', form.content);
      formData.append('date', form.date);
      if (form.image) formData.append('image', form.image);
      let res;
      if (editPost) {
        res = await fetch(`/api/admin/posts/${editPost.id}`, {
          method: 'PUT',
          body: formData,
        });
      } else {
        res = await fetch('/api/admin/posts', {
          method: 'POST',
          body: formData,
        });
      }
      if (res.ok) {
        setShowModal(false);
        setForm({ title: '', content: '', date: '', image: null });
        setEditPost(null);
        fetchPosts();
      } else {
        const data = await res.json();
        setError(data.message || 'Failed to save post');
      }
    } catch {
      setError('Failed to save post');
    } finally {
      setSubmitting(false);
    }
  };

  if (isLoading) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#ed253c]">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-[#ed253c] text-white px-4 py-2 rounded hover:bg-[#c41e32]"
          >
            Logout
          </button>
        </div>

        {/* Add New Post Button */}
        <button
          onClick={() => setShowModal(true)}
          className="mb-6 bg-[#ed253c] text-white px-4 py-2 rounded hover:bg-[#c41e32]"
        >
          Add New Post
        </button>

        {/* Modal for Add Post */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg relative">
              <button className="absolute top-2 right-2 text-gray-500" onClick={() => { setShowModal(false); setEditPost(null); }}>&times;</button>
              <h2 className="text-xl font-bold mb-4">{editPost ? 'Edit Blog Post' : 'Add New Blog Post'}</h2>
              {error && <div className="text-red-600 mb-2">{error}</div>}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-semibold mb-1">Title</label>
                  <input type="text" name="title" value={form.title} onChange={handleFormChange} className="w-full border rounded px-3 py-2" required />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Content</label>
                  <textarea name="content" value={form.content} onChange={handleFormChange} className="w-full border rounded px-3 py-2" required />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Date</label>
                  <input type="date" name="date" value={form.date} onChange={handleFormChange} className="w-full border rounded px-3 py-2" required />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Image</label>
                  <input type="file" name="image" accept="image/*" onChange={handleFormChange} className="w-full" />
                </div>
                <button type="submit" className="w-full bg-[#ed253c] text-white py-2 rounded font-semibold hover:bg-[#c41e32]" disabled={submitting}>
                  {submitting ? (editPost ? 'Saving...' : 'Adding...') : (editPost ? 'Save Changes' : 'Add Post')}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Posts List */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Blog Posts</h2>
            {posts.length === 0 ? (
              <p className="text-gray-500">No posts found.</p>
            ) : (
              <div className="space-y-4">
                {posts.map(post => (
                  <div
                    key={post.id}
                    className="border-b pb-4 last:border-b-0"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{post.title}</h3>
                        <p className="text-sm text-gray-500">
                          {new Date(post.date).toLocaleDateString()}
                        </p>
                        {post.imageUrl && <img src={post.imageUrl} alt={post.title} className="mt-2 max-h-32 rounded" />}
                      </div>
                      <div className="space-x-2">
                        <button
                          onClick={() => openEditModal(post)}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(post.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 