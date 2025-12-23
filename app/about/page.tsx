import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <main className="min-h-[80vh] dark:bg-black bg-white py-12">
      <div className="max-w-4xl mx-auto px-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">
              About Blogify
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6 text-muted-foreground">
            <p>
              This is a developer-focused blogging platform inspired by
              <span className="font-medium text-foreground"> README.md </span>
              files and open-source documentation.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Why This Platform?
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Markdown-based blogging</li>
                  <li>Live preview while writing</li>
                  <li>Developer-friendly UI</li>
                  <li>NextAuth authentication</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Technology Stack
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Next.js (App Router)</li>
                  <li>Prisma ORM</li>
                  <li>PostgreSQL</li>
                  <li>shadcn/ui</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
