import NextAuth from "next-auth";
import { CredentialsProvider } from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import bcrypt from 'bcryptjs';
import { adapter } from "next/dist/server/web/adapter";

export const authOptions = {
    adapter: PrismaAdapter(prisma);
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "jsmith@example.com" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }
                const user = await prisma.user.findUnique({
                    where: { email: credentials.email },
                });

                if (user && user.password) {
                    const isPasswordValid = await bcrypt.compare(
                        credentials.password,
                        user.password
                    );
                    if (isPasswordValid) {
                        return { id: user.id, email: user.email };
                    }
                }
                return null;
            }
        })
    ],
    session: {
        strategy: "database",
    },
    secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };