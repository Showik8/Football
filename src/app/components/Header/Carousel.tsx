"use client";
import React from "react";
import { Card } from "./Card";
import type { Matches } from "@/app/types";
import { useCachedFetch } from "@/app/utils/useCachedFetch";

const Carousel: React.FC = () => {
  const baseUrl = process.env.NEXT_PUBLIC_URL!;

  const { data: matches, loading: matchesLoading } = useCachedFetch<Matches[]>(
    "matches",
    `${baseUrl}/matches`,
    60000
  );

  const skeletonCount = 5;

  return (
    <div className="flex gap-4 items-center w-screen px-6">
      <div className="grid grid-flow-col auto-cols-[minmax(200px,1fr)] gap-2 overflow-x-auto snap-x rounded-[10px] w-screen">
        {matchesLoading
          ? Array.from({ length: skeletonCount }).map((_, i) => (
              <Card key={i} loading={true} />
            ))
          : matches?.map((d, index) => (
              <Card key={index} loading={false} data={d} />
            ))}
      </div>

      <button className="rounded-2xl bg-gradient-to-r from-[var(--light-background)] to-blue-950 hover:bg-cyan-50 hover:animate-pulse cursor-pointer md:text-[16px] p-2 whitespace-nowrap">
        View All Matches
      </button>
    </div>
  );
};

export default Carousel;
