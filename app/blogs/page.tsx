import Link from "next/link";

export default async function BlogsPage() {
  const res = await fetch("http://localhost:3000/api/blogs", {
    cache: "no-store",
  });
  const blogs = await res.json();

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">All Blogs</h1>

      {blogs.map((blog: any) => (
        <div key={blog.id} className="border-b py-4">
          <h2 className="text-xl font-semibold">{blog.title}</h2>
          <Link href={`/blogs/${blog.id}`} className="underline text-sm">
            Read →
          </Link>
        </div>
      ))}
    </div>
  );
}
