"use client";
import React, { useEffect, useState } from 'react';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: string;
  imageUrl?: string;
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

  return (
    <div className="min-h-screen bg-[#fafafa] py-10 px-2">
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8 mt-5 text-[#ed253c]">Our blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Featured Post */}
          <div className="md:col-span-2">
            {posts[0] && (
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 mb-8">
                {posts[0].imageUrl && (
                  <img
                    src={posts[0].imageUrl}
                    alt={posts[0].title}
                    className="w-full h-115 object-contain"
                  />
                )}
                <div className="p-8 bg-[#fcfcfc] rounded-b-2xl">
                  <h2 className="text-3xl font-bold mb-2 text-[#ed253c]">{posts[0].title}</h2>
                  <p className="text-gray-400 text-sm mb-4">
                    {new Date(posts[0].date).toLocaleDateString()}
                  </p>
                  <p
                    className={
                      "text-gray-700 mb-6 leading-relaxed text-lg break-words whitespace-pre-line transition-all duration-300 " +
                      (expandedPostId === posts[0].id ? "" : "line-clamp-1")
                    }
                    style={{ wordBreak: "break-word" }}
                  >
                    {posts[0].content}
                  </p>
                  <button
                    className="inline-block bg-[#ed253c] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#c41e32] transition"
                    onClick={() => setExpandedPostId(expandedPostId === posts[0].id ? null : posts[0].id)}
                  >
                    {expandedPostId === posts[0].id ? "Show Less" : "Read More"}
                  </button>
                </div>
              </div>
            )}
          </div>
          {/* Sidebar */}
          <div>
            <div className="space-y-6">
              {posts.slice(1, 6).map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-xl shadow border border-gray-200 flex items-center gap-4 p-4 hover:shadow-lg transition"
                >
                  {post.imageUrl && (
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-24 h-20 object-cover rounded"
                    />
                  )}
                  <div>
                    <h3 className="font-semibold text-lg text-[#ed253c] mb-1">{post.title}</h3>
                    <p className="text-gray-400 text-xs mb-1">
                      {new Date(post.date).toLocaleDateString()}
                    </p>
                    <p
                      className={
                        "text-gray-700 text-sm break-words whitespace-pre-line transition-all duration-300 " +
                        (expandedPostId === post.id ? "" : "line-clamp-1")
                      }
                      style={{ wordBreak: "break-word" }}
                    >
                      {post.content}
                    </p>
                    <button
                      className="text-xs text-[#ed253c] font-semibold mt-1"
                      onClick={() => setExpandedPostId(expandedPostId === post.id ? null : post.id)}
                    >
                      {expandedPostId === post.id ? "Show Less" : "Read More"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
