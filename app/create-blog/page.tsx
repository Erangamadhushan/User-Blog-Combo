"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypeHighlight from "rehype-highlight";
import { useRouter } from "next/navigation";

export default function CreateBlogPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitBlog = async () => {
    await fetch("/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    router.push("/");
  };

  return (
    <main className="max-w-7xl mx-auto p-6">
      <Card>
        <CardHeader>
          <h1 className="text-2xl font-semibold">Create Blog</h1>
        </CardHeader>

        <CardContent className="grid md:grid-cols-2 gap-6">
          {/* Editor */}
          <div className="space-y-3">
            <Input
              placeholder="Blog title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[400px] font-mono"
              placeholder="# Write like a README.md"
              required
            />
          </div>

          {/* Preview */}
          <div className="border rounded-md p-4 overflow-auto prose dark:prose-invert max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm, remarkToc]}
              rehypePlugins={[rehypeHighlight]}
            >
              {content || "Start writing to see preview"}
            </ReactMarkdown>
          </div>

          <div className="md:col-span-2">
            <Button onClick={submitBlog}>Publish</Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
