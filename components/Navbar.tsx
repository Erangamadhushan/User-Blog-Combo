"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-900">
            Blogify
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-6 text-gray-600">
          <Link href="/" className="hover:text-black">Home</Link>
          <Link href="/blogs" className="hover:text-black">Blogs</Link>
          <Link href="/about" className="hover:text-black">About</Link>
          <Link href="/contact" className="hover:text-black">Contact</Link>
        </div>

        {/* Auth buttons */}
        <div className="flex gap-3">
          <Link
            href="/login"
            className="px-4 py-2 text-sm border-black border text-black rounded-md hover:bg-black hover:text-white"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="px-4 py-2 text-sm bg-black text-white rounded-md hover:bg-gray-800"
          >
            Sign Up
          </Link>
        </div>

      </div>
    </nav>
  );
}
