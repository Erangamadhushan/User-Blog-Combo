import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const exists = await prisma.user.findUnique({
    where: { email },
  });

  if (exists) {
    return new Response("User already exists", { status: 409 });
  }

  const hashed = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      email,
      password: hashed,
    },
  });

  return Response.json({ success: true });
}
