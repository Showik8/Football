"use client";
import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

type news = {
  photo_url?: string;
  text?: string;
};

const NewsCard = ({ news }: { news: news | null }) => {
  const { photo_url = "", text = "" } = news || {};
  const cardRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(cardRef.current, { opacity: 0, y: 40, duration: 0.6 })
        .from(imageRef.current, { scale: 1.08, duration: 1.1 }, "<")
        .from(overlayRef.current, { y: 40, opacity: 0, duration: 0.6 }, "-0.4");
    }, cardRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cardRef}
      className="group relative h-[450px] md:h-[680px] w-full md:max-w-[65%] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/20 backdrop-blur-sm"
    >
      <div ref={imageRef} className="w-full h-full">
        <Image
          src={photo_url}
          width={1200}
          height={800}
          priority
          alt={text}
          className="w-full h-full object-cover object-center transition-transform duration-700 will-change-transform group-hover:scale-[1.03]"
        />
      </div>
      <div
        ref={overlayRef}
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
      />
      <h2 className="absolute bottom-5 left-5 right-5 text-white md:text-4xl text-2xl font-semibold leading-snug drop-shadow-xl">
        {text}
      </h2>
    </div>
  );
};

export default NewsCard;
