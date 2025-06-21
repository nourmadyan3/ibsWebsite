"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ManageOurPeoplePage from "./our-people/page";
import ManageOurClientsPage from "./our-clients/page";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: string;
  imageUrl?: string;
  author?: string;
  readTime?: number;
}

interface JobPost {
  id: number;
  code: string;
  text: string;
  position: string;
  contractDuration: string;
  field: string;
  workLocation: string;
  workingHours: string;
  daysOff: string;
  insurance: string;
  otherBenefits: string;
  jobDescription: string;
  qualifications: string;
  howToApply: string;
}

const AdminDashboard: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ title: '', content: '', date: '', image: null as File | null });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [editPost, setEditPost] = useState<BlogPost | null>(null);
  const [activeTab, setActiveTab] = useState<'blog' | 'careers' | 'our-people' | 'our-clients'>('blog');
  const [jobs, setJobs] = useState<JobPost[]>([]);
  const [isJobsLoading, setIsJobsLoading] = useState(true);
  const [showJobModal, setShowJobModal] = useState(false);
  const [jobForm, setJobForm] = useState({
    code: '', text: '', position: '', contractDuration: '', field: '', workLocation: '', workingHours: '', daysOff: '', insurance: '', otherBenefits: '', jobDescription: '', qualifications: '', howToApply: ''
  });
  const [submittingJob, setSubmittingJob] = useState(false);
  const [jobError, setJobError] = useState('');
  const [editJob, setEditJob] = useState<JobPost | null>(null);
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

  const fetchJobs = () => {
    fetch('/api/admin/jobs')
      .then(res => res.json())
      .then(data => {
        setJobs(data);
        setIsJobsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching jobs:', error);
        setIsJobsLoading(false);
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
    fetchJobs();
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

  const handleJobFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setJobForm(f => ({ ...f, [name]: value }));
  };

  const openEditJobModal = (job: JobPost) => {
    setEditJob(job);
    setJobForm({
      ...job,
      otherBenefits: job.otherBenefits ?? ""
    });
    setShowJobModal(true);
  };

  const handleDeleteJob = async (id: number) => {
    if (!confirm('Are you sure you want to delete this job?')) return;
    await fetch(`/api/admin/jobs/${id}`, { method: 'DELETE' });
    fetchJobs();
  };

  const handleJobSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittingJob(true);
    setJobError('');
    try {
      const method = editJob ? 'PUT' : 'POST';
      const url = editJob ? `/api/admin/jobs/${editJob.id}` : '/api/admin/jobs';
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jobForm),
      });
      if (res.ok) {
        setShowJobModal(false);
        setJobForm({ code: '', text: '', position: '', contractDuration: '', field: '', workLocation: '', workingHours: '', daysOff: '', insurance: '', otherBenefits: '', jobDescription: '', qualifications: '', howToApply: '' });
        setEditJob(null);
        fetchJobs();
      } else {
        const data = await res.json();
        setJobError(data.error || 'Failed to save job');
      }
    } catch {
      setJobError('Failed to save job');
    } finally {
      setSubmittingJob(false);
    }
  };

  if (isLoading) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-between items-center p-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
      <div className="p-4">
        <div className="flex space-x-4 mb-4">
          <button
            onClick={() => setActiveTab('blog')}
            className={`px-4 py-2 rounded ${activeTab === 'blog' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Blog
          </button>
          <button
            onClick={() => setActiveTab('careers')}
            className={`px-4 py-2 rounded ${activeTab === 'careers' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Careers
          </button>
          <button
            onClick={() => setActiveTab('our-people')}
            className={`px-4 py-2 rounded ${activeTab === 'our-people' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Our People
          </button>
          <button
            onClick={() => setActiveTab('our-clients')}
            className={`px-4 py-2 rounded ${activeTab === 'our-clients' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Our Clients
          </button>
        </div>

        {activeTab === 'blog' && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Blog Posts</h2>
              <button
                onClick={() => setShowModal(true)}
                className="bg-[#ed253c] text-white px-4 py-2 rounded hover:bg-[#c41e32]"
              >
                Add New Post
              </button>
            </div>
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
        )}

        {activeTab === 'careers' && (
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Job Posts</h2>
                <button
                  onClick={() => { setShowJobModal(true); setEditJob(null); setJobForm({ code: '', text: '', position: '', contractDuration: '', field: '', workLocation: '', workingHours: '', daysOff: '', insurance: '', otherBenefits: '', jobDescription: '', qualifications: '', howToApply: '' }); }}
                  className="bg-[#ed253c] text-white px-4 py-2 rounded hover:bg-[#c41e32]"
                >
                  Add New Job
                </button>
              </div>
              {showJobModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
                  <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg relative">
                    <button className="absolute top-2 right-2 text-gray-500" onClick={() => { setShowJobModal(false); setEditJob(null); }}>&times;</button>
                    <h2 className="text-xl font-bold mb-4">{editJob ? 'Edit Job Post' : 'Add New Job Post'}</h2>
                    {jobError && <div className="text-red-600 mb-2">{jobError}</div>}
                    <form onSubmit={handleJobSubmit} className="space-y-2 max-h-[60vh] overflow-y-auto pr-2">
                      <input type="text" name="code" value={jobForm.code} onChange={handleJobFormChange} placeholder="Code" className="w-full border rounded px-3 py-2" required />
                      <input type="text" name="text" value={jobForm.text} onChange={handleJobFormChange} placeholder="Text" className="w-full border rounded px-3 py-2" required />
                      <input type="text" name="position" value={jobForm.position} onChange={handleJobFormChange} placeholder="Position" className="w-full border rounded px-3 py-2" required />
                      <input type="text" name="contractDuration" value={jobForm.contractDuration} onChange={handleJobFormChange} placeholder="Contract Duration" className="w-full border rounded px-3 py-2" required />
                      <input type="text" name="field" value={jobForm.field} onChange={handleJobFormChange} placeholder="Field" className="w-full border rounded px-3 py-2" required />
                      <input type="text" name="workLocation" value={jobForm.workLocation} onChange={handleJobFormChange} placeholder="Work Location" className="w-full border rounded px-3 py-2" required />
                      <input type="text" name="workingHours" value={jobForm.workingHours} onChange={handleJobFormChange} placeholder="Working Hours" className="w-full border rounded px-3 py-2" required />
                      <input type="text" name="daysOff" value={jobForm.daysOff} onChange={handleJobFormChange} placeholder="Days Off" className="w-full border rounded px-3 py-2" required />
                      <input type="text" name="insurance" value={jobForm.insurance} onChange={handleJobFormChange} placeholder="Medical/life & Social insurance" className="w-full border rounded px-3 py-2" required />
                      <input type="text" name="otherBenefits" value={jobForm.otherBenefits} onChange={handleJobFormChange} placeholder="Other Benefits" className="w-full border rounded px-3 py-2" />
                      <textarea name="jobDescription" value={jobForm.jobDescription} onChange={handleJobFormChange} placeholder="Job Description" className="w-full border rounded px-3 py-2" required />
                      <textarea name="qualifications" value={jobForm.qualifications} onChange={handleJobFormChange} placeholder="Qualifications" className="w-full border rounded px-3 py-2" required />
                      <textarea name="howToApply" value={jobForm.howToApply} onChange={handleJobFormChange} placeholder="How to Apply" className="w-full border rounded px-3 py-2" required />
                      <button type="submit" className="w-full bg-[#ed253c] text-white py-2 rounded font-semibold hover:bg-[#c41e32]" disabled={submittingJob}>
                        {submittingJob ? (editJob ? 'Saving...' : 'Adding...') : (editJob ? 'Save Changes' : 'Add Job')}
                      </button>
                    </form>
                  </div>
                </div>
              )}
              {isJobsLoading ? (
                <div>Loading...</div>
              ) : jobs.length === 0 ? (
                <p className="text-gray-500">No jobs found.</p>
              ) : (
                <div className="space-y-4">
                  {jobs.map(job => (
                    <div key={job.id} className="border-b pb-4 last:border-b-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{job.position}</h3>
                          <p className="text-sm text-gray-500">{job.field} | {job.workLocation}</p>
                          <p className="text-xs text-gray-400">Code: {job.code}</p>
                          <p className="text-xs text-gray-400">Contract: {job.contractDuration}</p>
                          <p className="text-xs text-gray-400">Working Hours: {job.workingHours}</p>
                          <p className="text-xs text-gray-400">Days Off: {job.daysOff}</p>
                          <p className="text-xs text-gray-400">Medical/life & Social insurance: {job.insurance}</p>
                          <p className="text-xs text-gray-400">Other Benefits: {job.otherBenefits}</p>
                          <p className="text-xs text-gray-400">Description: {job.jobDescription}</p>
                          <p className="text-xs text-gray-400">Qualifications: {job.qualifications}</p>
                          <p className="text-xs text-gray-400">How to Apply: {job.howToApply}</p>
                        </div>
                        <div className="space-x-2">
                          <button onClick={() => openEditJobModal(job)} className="text-blue-600 hover:text-blue-800">Edit</button>
                          <button onClick={() => handleDeleteJob(job.id)} className="text-red-600 hover:text-red-800">Delete</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'our-people' && <ManageOurPeoplePage />}
        {activeTab === 'our-clients' && <ManageOurClientsPage />}
      </div>
    </div>
  );
};

export default AdminDashboard; 