"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      setError("User already exists");
      return;
    }

    router.push("/login");
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <form
        onSubmit={handleRegister}
        className="w-full max-w-sm border p-6 rounded-lg space-y-4"
      >
        <h1 className="text-2xl font-semibold text-center">Register</h1>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          Register
        </button>

        <p className="text-sm text-center">
          Already have an account?{" "}
          <a href="/login" className="underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}
