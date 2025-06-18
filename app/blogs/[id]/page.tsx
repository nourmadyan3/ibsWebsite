import { notFound } from "next/navigation";

async function getPost(id: string) {
  const baseUrl =
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : process.env.NEXT_PUBLIC_BASE_URL
        ? process.env.NEXT_PUBLIC_BASE_URL
        : "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/admin/posts/${id}`, { cache: "no-store" });
  if (!res.ok) return null;
  return res.json();
}

export default async function BlogDetailPage({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);
  if (!post) return notFound();

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      {post.imageUrl && (
        <img src={post.imageUrl} alt={post.title} className="w-full h-80 object-cover rounded-lg mb-6" />
      )}
      <h1 className="text-4xl font-bold mb-4 text-[#ed253c]">{post.title}</h1>
      <p className="text-gray-400 text-sm mb-6">{new Date(post.date).toLocaleDateString()}</p>
      <div className="text-gray-800 leading-relaxed whitespace-pre-line">{post.content}</div>
    </div>
  );
} 