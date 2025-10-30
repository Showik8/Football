"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // ✅ Safe localStorage access (client-only)
    const admin =
      typeof window !== "undefined" ? localStorage.getItem("adminAuth") : null;

    if (admin !== "true") {
      router.push("/admin");
    } else {
      setIsLoading(false); // authenticated, show content
    }
  }, [router]);

  function handleTeamsClick() {
    router.push("/admin/dashboard/club");
  }

  function handleTournamentsClick() {
    router.push("/admin/dashboard/tournaments");
  }

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">Checking authentication...</p>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen flex justify-center flex-col items-center gap-4">
      <button
        className="p-5 bg-red-600 text-white rounded-2xl"
        onClick={handleTeamsClick}
      >
        Club
      </button>
      <button
        className="p-5 bg-blue-600 text-white rounded-2xl"
        onClick={handleTournamentsClick}
      >
        Tournaments
      </button>
    </div>
  );
};

export default Page;
