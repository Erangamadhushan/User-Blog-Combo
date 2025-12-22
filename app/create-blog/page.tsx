"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateBlogPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitBlog = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    router.push("/");
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Create Blog (Markdown)</h1>

      <form onSubmit={submitBlog} className="space-y-4">
        <input
          className="w-full border p-2 rounded"
          placeholder="Blog title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          className="w-full border p-3 rounded font-mono min-h-[300px]"
          placeholder={`# My Blog Title

## Introduction

Write your blog like a README.md

\`\`\`js
console.log("Hello World");
\`\`\`
`}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <button className="bg-black text-white px-4 py-2 rounded">
          Publish
        </button>
      </form>
    </div>
  );
}
