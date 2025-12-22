import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LogoutButton from "./LogoutButton";

export default async function Navbar() {
  let session = null;

  try {
    session = await getServerSession(authOptions);
  } catch (err) {
    console.error("Session error:", err);
  }
  return (
    <nav className="w-full border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-900">
          Blogify
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-6 text-gray-600">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <Link href="/blogs" className="hover:text-black">
            Blogs
          </Link>
          <Link href="/about" className="hover:text-black">
            About
          </Link>
          <Link href="/contact" className="hover:text-black">
            Contact
          </Link>
        </div>

        {/* Auth buttons */}
        <div className="flex gap-3">
          {session ? (
            <>
              <Link href="/create-blog" className="text-gray-600 hover:text-black">Create</Link>
              <span className="text-sm text-gray-600">
                {session.user.email}
              </span>
              <LogoutButton />
            </>
          ) : (
            <>
              <Link href="/login">Login</Link>
              <Link href="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
