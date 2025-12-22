import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
    const { email, password } = await req.json();

    const exists = await prisma.user.findUnique({
        where: { email}
    });

    if (exists) {
        return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            email,
            password: hashedPassword,
        },
    });

    return NextResponse.json(user);
}