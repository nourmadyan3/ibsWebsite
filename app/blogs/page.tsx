"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: string;
  imageUrl?: string;
}

function getExcerpt(text: string, maxLength = 100) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

const BlogsPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedPostId, setExpandedPostId] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/admin/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-8">Loading...</div>;

  if (posts.length === 0) {
    return (
      <div className="max-w-3xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8 text-[#ed253c]">Blog</h1>
        <p className="text-gray-500">No blog posts found.</p>
      </div>
    );
  }

  const [featured, ...rest] = posts;
  const sidebarPosts = rest.slice(0, 4);

  return (
    <div className="min-h-screen bg-[#fafafa] py-10 px-2">
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8 mt-5 text-[#ed253c]">Our blogs</h1>
        <div className="max-w-2xl mx-auto py-12 px-4">
          {posts.map(post => {
            const isExpanded = expandedPostId === post.id;
            const preview = post.content.slice(0, 200);

            return (
              <div
                key={post.id}
                className="bg-white rounded-2xl shadow-lg mb-10 overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow"
              >
                {post.imageUrl && (
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-82 object-contain"
                  />
                )}
                <div className="p-8">
                  <h2 className="text-3xl font-bold mb-2 text-[#ed253c]">{post.title}</h2>
                  <p className="text-gray-400 text-sm mb-4">
                    {new Date(post.date).toLocaleDateString()}
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {isExpanded ? post.content : `${preview}...`}
                  </p>
                  <button
                    className="inline-block bg-[#ed253c] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#c41e32] transition"
                    onClick={() => setExpandedPostId(isExpanded ? null : post.id)}
                  >
                    {isExpanded ? "Show Less" : "Read More"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
