"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <main className="min-h-[70vh] dark:bg-black grid grid-cols-1 md:grid-cols-2 bg-gray-50 py-12">
      <div className="grid col-span-1 mx-auto px-6">
        {/* Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-3xl">Get in Touch</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              We'd love to hear from you! Whether you have questions, feedback,
              or just want to say hello, feel free to reach out.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Email: support@blogify.com</li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Address: 123 Blog St, Blog City, BL 12345</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <div className="grid col-span-1 mx-auto p-5 border shadow-md px-6">
        {submitted ? (
          <p className="text-green-600">
            Thank you! Your message has been received.
          </p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-5 w-[500px] max-w-full"
          >
            <Input placeholder="Your name" required />
            <Input type="email" placeholder="Your email" required />
            <Textarea placeholder="Your message" rows={4} required />
            <Button type="submit">Send Message</Button>
          </form>
        )}
      </div>
    </main>
  );
}
