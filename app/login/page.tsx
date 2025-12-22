"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { RxGithubLogo } from "react-icons/rx";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError("Invalid email or password");
      return;
    }

    router.push("/");
  };

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center">
      <div className="border w-full max-w-sm mb-6">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm  p-6 rounded-lg space-y-4"
        >
          <h1 className="text-2xl font-semibold text-center">Login</h1>

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
            Login
          </button>

          <p className="text-sm text-center">
            No account?{" "}
            <a href="/register" className="underline">
              Register
            </a>
          </p>
        </form>
        <div className="p-4 space-y-4">
          <button
            onClick={() => signIn("google")}
            className="w-full border py-2 rounded"
          >
            <FcGoogle className="inline mr-2" /> Continue with Google
          </button>

          <button
            onClick={() => signIn("github")}
            className="w-full border py-2 rounded"
          >
            <RxGithubLogo className="inline mr-2" /> Continue with GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
