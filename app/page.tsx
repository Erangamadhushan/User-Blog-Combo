import Footer from "../components/Footer";
import Link from "next/link";

async function getBlogs() {
  const res = await fetch("http://localhost:3000/api/blogs", {
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
            Read. Write. Share Stories.
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            A modern blogging platform where users share ideas, tutorials, and
            experiences with the world.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="/blogs"
              className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800"
            >
              Explore Blogs
            </a>
            <a
              href="/create-blog"
              className="px-6 py-3 border rounded-md hover:bg-gray-100"
            >
              Write a Blog
            </a>
          </div>
        </section>

        {/* Featured Blogs */}
        <section className="py-12">
          <h2 className="text-2xl font-semibold mb-8">Featured Posts</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="border rounded-lg p-5 hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg mb-2">
                  Sample Blog Title {item}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  This is a short description of the blog post to give readers
                  an idea about the content.
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>By John Doe</span>
                  <a
                    href={`/blogs/${item}`}
                    className="text-black font-medium hover:underline"
                  >
                    Read more →
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            {blogs.map((blog: any) => (
              <div key={blog.id} className="border p-4 rounded">
                <h2 className="text-xl font-semibold">{blog.title}</h2>
                <p className="text-sm text-gray-500">by {blog.author?.email}</p>

                <Link
                  href={`/blogs/${blog.id}`}
                  className="inline-block mt-2 underline"
                >
                  Read more →
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
