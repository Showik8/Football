"use client";
import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import type { News } from "@/app/types";
import { gsap } from "gsap";

const HeadlinesCard = ({ news, first }: { news: News; first?: boolean }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const imageWrapRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);

  useLayoutEffect(() => {
    if (first) return; // Skip anim for first (rendered as hero)
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(cardRef.current, { opacity: 0, y: 24, duration: 0.4 })
        .from(imageWrapRef.current, { scale: 1.06, duration: 0.6 }, "<")
        .from(textRef.current, { opacity: 0, y: 12, duration: 0.3 }, "-0.2");
    }, cardRef);
    return () => ctx.revert();
  }, [first]);

  if (first) return null;

  if (!news) return null;

  return (
    <div
      ref={cardRef}
      className={`group relative flex items-center gap-3 w-auto min-h-22 my-2 pr-2 mb-3 rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition-colors`}
    >
      <div ref={imageWrapRef} className="shrink-0 overflow-hidden rounded-lg">
        <Image
          className="w-[128px] h-[90px] object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
          priority
          src={news.photo_url}
          width={230}
          height={170}
          alt="News Image"
        />
      </div>
      <h4
        ref={textRef}
        className="text-white md:text-[14px] text-[12px] leading-snug pr-2 line-clamp-3"
      >
        {news.text}
      </h4>
    </div>
  );
};

export default HeadlinesCard;
