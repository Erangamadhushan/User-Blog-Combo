import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Button } from "./ui/button";
import LogoutButton from "./LogoutButton";
import ToggleTheme from "./ui/toggle-theme";

export default async function Navbar() {
  let session = null;

  try {
    session = await getServerSession(authOptions);
  } catch (err) {
    console.error("Session error:", err);
  }
  return (
    <nav className="w-full border-b sticky top-0 z-50 dark:text-white bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold dark:text-white">
          Blogify
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-6 text-gray-600">
          <Link href="/" className="dark:hover:text-white hover:text-black">
            Home
          </Link>
          <Link
            href="/blogs"
            className="dark:hover:text-white hover:text-black"
          >
            Blogs
          </Link>
          <Link
            href="/about"
            className="dark:hover:text-white hover:text-black"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="dark:hover:text-white hover:text-black"
          >
            Contact
          </Link>
        </div>

        {/* Auth buttons */}
        <div className="flex gap-3">
          <div className="hidden md:block">
            <ToggleTheme />
          </div>
          {session ? (
            <>
              <Link
                href="/create-blog"
                className="text-gray-600 hover:text-black"
              >
                Create
              </Link>
              <span className="text-sm text-gray-600">
                {session.user?.email || " "}
              </span>
              <LogoutButton />
            </>
          ) : (
            <>
              <Button asChild variant="ghost" size="lg">
                <Link href="/login" className="text-gray-600 hover:text-white">
                  Login
                </Link>
              </Button>
              <Button asChild size="lg">
                <Link
                  href="/register"
                  className="text-gray-600 dark:hover:text-black"
                >
                  Register
                </Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
