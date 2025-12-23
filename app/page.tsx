import Link from "next/link";

async function getBlogs() {
  const res = await fetch("http://localhost:3000/api/blog", {
    cache: "no-store",
  });
  return res.json();
}

export default async function HomePage() {
  const blogs = await getBlogs();
  return (
    <>
      <main className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Read. Write. Share Technological Stories.
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Dive into a world of tech insights, tutorials, and stories from
            industry experts. Whether you're here to learn or share, our
            community welcomes you.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href="/blog"
              className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800"
            >
              Explore Blogs
            </Link>
            <Link
              href="/create-blog"
              className="px-6 py-3 border rounded-md hover:bg-gray-100"
            >
              Write a Blog
            </Link>
          </div>
        </section>

        {/* Featured Blogs */}
        <section className="py-12">
          <h2 className="text-2xl font-semibold mb-8">Featured Posts</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {blogs.map((blog: any) => (
              <div key={blog.id} className="border p-4 rounded">
                <h2 className="text-xl font-semibold">{blog.title}</h2>
                <p className="text-sm text-gray-500">by {blog.author?.email}</p>

                <Link
                  href={`/blog/${blog.id}`}
                  className="inline-block mt-2 underline"
                >
                  Read more →
                </Link>
              </div>
            ))}
          </div>
          
        </section>
      </main>
    </>
  );
}
