import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return new Response("Unauthorized", { status: 401 });
  }

  const { title, content } = await req.json();

  const blog = await prisma.blog.create({
    data: {
      title,
      content,
      authorId: session.user.id,
    },
  });

  return Response.json(blog);
}

export async function GET() {
  return Response.json(
    await prisma.blog.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
      include: { author: true },
    })
  );
}
