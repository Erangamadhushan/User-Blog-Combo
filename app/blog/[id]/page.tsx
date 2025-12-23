import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { TimeCalculation } from "@/components/ui/time-calculation";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;
  
  const res = await fetch(
    `http://localhost:3000/api/blog/${id}`,
    { cache: "no-store"}
  );

  console.log('Fetching blog with id:', id);
  const blogData = await res.json();
  if (!blogData) {
    return <div>Blog not found</div>;
  }
  

  return (
    <article className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-2">{blogData.title}</h1>
      <p className="text-gray-500 text-sm mb-6">
        <TimeCalculation createdAt={blogData.createdAt} />
      </p>

      <div className="prose prose-lg max-w-none bg-gray-100 dark:prose-invert my-2 dark:bg-gray-800 p-4 rounded">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight]}
        >
          {blogData.content}
        </ReactMarkdown>
      </div>
    </article>
    
  );
}
