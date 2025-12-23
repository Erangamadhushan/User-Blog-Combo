import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypeHighlight from "rehype-highlight";
import { TimeCalculation } from "@/components/ui/time-calculation";

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
          <h2 className="text-xl font-semibold">
            {blog.title}
          </h2>
          <div className="prose prose-lg max-w-none bg-gray-100 dark:prose-invert my-2 dark:bg-gray-800 p-4 rounded">
            <ReactMarkdown
             remarkPlugins={[
                remarkGfm,
                [remarkToc, { heading: "contents" }],
              ]}
              rehypePlugins={[rehypeHighlight]}
              >
              {blog.content}
            </ReactMarkdown>
          </div>
          <p>
            <span className="text-sm text-gray-500">
               <TimeCalculation createdAt={blog.createdAt} />
            </span>
          </p>

          <Link href={`/blogs/${blog.id}`} className="underline text-sm">
            Read →
          </Link>
        </div>
      ))}
    </div>
  );
}
