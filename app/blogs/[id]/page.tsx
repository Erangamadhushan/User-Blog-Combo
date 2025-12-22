import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

async function getBlog(id: string) {
  const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function BlogPage({
  params,
}: {
  params: { id: string };
}) {
  const blog = await getBlog(params.id);

  return (
    <article className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
      <p className="text-gray-500 text-sm mb-6">
        By {blog.author.email}
      </p>

      <div className="prose prose-lg max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
        >
          {blog.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
