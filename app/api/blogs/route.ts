import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req: Request) {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { title, content } = await req.json();

    const blog = await prisma.blog.create({
        data: {
            title,
            content,
            authorId: session.user.id,
        },
    });

    return NextResponse.json(blog);
}

export async function GET() {
    const blogs = await prisma.blog.findMany({
        where: {
            published: true
        },
        orderBy: {
            createdAt: "desc"
        },
        include: {
            author: true
        }
    });

    return NextResponse.json(blogs);
}