async function getBlog(id: string) {
  const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function BlogPage({ params }: { params: { id: string } }) {
  const blog = await getBlog(params.id);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-500 text-sm mb-6">by {blog.author.email}</p>
      <p className="leading-relaxed">{blog.content}</p>
    </div>
  );
}
