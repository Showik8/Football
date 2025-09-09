"use client";
import React, { useLayoutEffect, useRef } from "react";
import { HeadlinesCard, Loading } from "./index";
import type { News } from "@/app/types";
import { gsap } from "gsap";

interface HeadLinesProps {
  data: News[] | null;
}

const HeadLines: React.FC<HeadLinesProps> = ({ data }) => {
  const listRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!listRef.current || !data?.length) return;

    const ctx = gsap.context(() => {
      const items = listRef.current!.querySelectorAll<HTMLElement>(
        "[data-headline-item]"
      );
      gsap.from(items, { opacity: 0, y: 18, stagger: 0.08, duration: 0.3 });
    }, listRef);

    return () => ctx.revert();
  }, [data?.length]);

  return (
    <div
      ref={listRef}
      className="flex flex-col gap-6 bg-[var(--light-background)]/80 p-4 rounded-2xl md:min-w-[45%] border border-white/10"
    >
      <h2 data-headline-item className="text-white mb-2 text-3xl font-semibold">
        Headlines
      </h2>

      {data && data.length > 0 ? (
        data.map((news, index) => (
          <div key={index} data-headline-item>
            <HeadlinesCard news={news} first={index === 0} />
          </div>
        ))
      ) : (
        <>
          <Loading />
          <Loading />
          <Loading />
        </>
      )}
    </div>
  );
};

export default HeadLines;
