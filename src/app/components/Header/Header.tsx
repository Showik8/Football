"use client";

import Navigation from "./Navigation";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Header: React.FC = () => {
  const width = typeof window !== "undefined" ? window.innerWidth : 1440;
  const isPhone = width < 760;

  const headerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1 },
      });

      tl.from(headerRef.current, {
        opacity: 0,
        y: 50,
      })
        .from(
          titleRef.current,
          {
            opacity: 0,
            x: -30,
          },
          "+=0.2"
        )
        .from(
          navRef.current,
          {
            opacity: 0,
            y: -20,
          },
          "+=0.2"
        );

      if (inputRef.current) {
        tl.from(
          inputRef.current,
          {
            opacity: 0,
            scale: 0.4,
          },
          "+=0.2"
        );
      }
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={headerRef}
      className="w-screen flex flex-col items-center bg-green-950 text-white p-6 gap-10 md:w-screen md:items-center"
    >
      <div className="flex w-screen justify-between px-5" ref={navRef}>
        <h1 ref={titleRef} className="text-xl font-bold md:mb-0">
          FootBall
        </h1>

        <Navigation />

        {!isPhone && (
          <input
            ref={inputRef}
            name="choose Team"
            className="border-2 border-white p-2 rounded-2xl outline-0"
            placeholder="Choose Your Team"
          />
        )}
      </div>
    </header>
  );
};

export default Header;
