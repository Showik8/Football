"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const checkCredentials = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // ✅ safer check — NEXT_PUBLIC_ vars are always strings
    const validLogin = process.env.NEXT_PUBLIC_login;
    const validPassword = process.env.NEXT_PUBLIC_password;

    if (login === validLogin && password === validPassword) {
      // ✅ localStorage exists only in browser
      if (typeof window !== "undefined") {
        localStorage.setItem("adminAuth", "true");
      }
      router.push("/admin/dashboard");
    } else {
      alert("Access Denied");
    }
  };

  // ✅ Redirect if already logged in
  useEffect(() => {
    if (typeof window !== "undefined") {
      const auth = localStorage.getItem("adminAuth");
      if (auth === "true") {
        router.push("/admin/dashboard");
      }
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Admin Portal
          </h1>
          <p className="text-gray-600">
            Please enter your credentials to continue
          </p>
        </div>

        {/* ✅ handle submit on the <form> element instead of button */}
        <form onSubmit={checkCredentials} className="space-y-6">
          <div>
            <label
              htmlFor="login"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Admin Login
            </label>
            <input
              id="login"
              type="text"
              placeholder="Enter your username"
              autoComplete="username"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Admin Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">Secure admin access only</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
