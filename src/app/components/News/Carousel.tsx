"use client";
import React, { useRef, useEffect } from "react";
import MatchCard from "./MatchCard";
import { gsap } from "gsap";
import type { Matches } from "@/app/types";

const Carousel = ({ matches }: { matches: Matches[] }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sliderRef.current) {
      gsap.fromTo(
        sliderRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out", delay: 0.3 }
      );
    }
  }, []);

  return (
    <div className="py-8 text-white">
      <div
        ref={sliderRef}
        className="flex items-center gap-4 overflow-x-auto scrollbar-hide px-6"
      >
        {matches?.map((match, index) => (
          <MatchCard key={index} {...match} delay={0.5 + index * 0.1} />
        ))}
        <button className="rounded-2xl p-5 bg-gradient-to-r bg-black hover:bg-blue-400 cursor-pointer md:text-[16px] whitespace-nowrap">
          View All Matches
        </button>
      </div>
    </div>
  );
};

export default Carousel;
