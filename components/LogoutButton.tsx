"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/login" })}
      className="text-sm underline text-gray-600 hover:text-black border border-black rounded-md px-3 py-1"
    >
      Logout
    </button>
  );
}
