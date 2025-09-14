"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";
import Ball from "../../public/Ball.svg";

const NotFoundPage: React.FC = () => {
  const fieldRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!fieldRef.current || !ballRef.current || !contentRef.current) return;

    const [field, ball, content, btn] = [
      fieldRef.current,
      ballRef.current,
      contentRef.current,
      buttonRef.current,
    ];

    // Initial states
    gsap.set(content.querySelectorAll("*"), { opacity: 0, y: 50 });
    gsap.set(ball, { x: -100, y: window.innerHeight + 100, rotation: 0 });
    gsap.set(field, { scale: 0.8, opacity: 0 });

    const tl = gsap.timeline({ delay: 0.1 });

    // Field reveal
    tl.to(field, {
      scale: 1,
      opacity: 0.3,
      duration: 1,
      ease: "power2.out",
    });

    // Ball bounce in
    tl.to(
      ball,
      {
        x: window.innerWidth / 100 - 600,
        y: window.innerHeight / 5,
        rotation: 720,
        duration: 2,
        ease: "bounce.out",
      },
      "-=0.5"
    );

    // Content reveal
    tl.to(
      content.querySelector(".error-number"),
      { opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" },
      "-=1"
    )
      .to(
        content.querySelector(".error-title"),
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      )
      .to(
        content.querySelector(".error-message"),
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      )
      .to(
        btn,
        { opacity: 1, y: 0, duration: 0.6, ease: "back.out(1.7)" },
        "-=0.2"
      );

    // Ball idle floating
    gsap.to(ball, {
      y: "+=10",
      duration: 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: 3,
    });

    // Interactive button
    btn?.addEventListener("mouseenter", () => {
      gsap.to(btn, { scale: 1.05, duration: 0.3, ease: "power2.out" });
    });
    btn?.addEventListener("mouseleave", () => {
      gsap.to(btn, { scale: 1, duration: 0.3, ease: "power2.out" });
    });

    // Clickable ball spin
    ball.addEventListener("click", () => {
      gsap.to(ball, {
        rotation: "+=360",
        scale: 1.2,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(ball, { scale: 1, duration: 0.3, ease: "power2.out" });
        },
      });
    });

    // Parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX / window.innerWidth / 100 - 600;
      const mouseY = e.clientY / window.innerHeight / 5;

      gsap.to(field, {
        x: mouseX * 20,
        y: mouseY * 20,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(ball, {
        x: window.innerWidth / 100 - 400,
        y: window.innerHeight / 6,
        rotation: 720,
        duration: 0.8,
        ease: "power2.out",
      });
    };
    document.addEventListener("mousemove", handleMouseMove);

    // Responsive ball reposition
    const handleResize = () => {
      gsap.set(ball, {
        x: window.innerWidth / 2 - 350,
        y: window.innerHeight / 3 - 200,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-green-700 font-sans">
      {/* Field */}
      <div
        ref={fieldRef}
        className="absolute left-1/2 top-1/2 h-[80%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-gradient-to-r from-green-900 via-green-700 to-green-900 opacity-30 [transform:perspective(800px)_rotateX(60deg)]"
      >
        <div className="relative h-full w-full">
          <div className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 bg-white/50" />
          <div className="absolute left-1/2 top-1/2 h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/50" />
          <div className="absolute left-5 top-1/2 h-[200px] w-[80px] -translate-y-1/2 border-2 border-white/50 border-r-0" />
          <div className="absolute right-5 top-1/2 h-[200px] w-[80px] -translate-y-1/2 border-2 border-white/50 border-l-0" />
          <div className="absolute left-5 top-1/2 h-[300px] w-[120px] -translate-y-1/2 border-2 border-white/50 border-r-0" />
          <div className="absolute right-5 top-1/2 h-[300px] w-[120px] -translate-y-1/2 border-2 border-white/50 border-l-0" />
        </div>
      </div>

      {/* Clouds */}

      {/* Grass */}
      <div className="absolute bottom-[-20px] left-0 h-[100px] w-full bg-gradient-to-t from-green-900 to-transparent" />

      {/* Ball */}
      <div
        // ref={ballRef}
        id="ball"
      />

      <Image
        src={Ball}
        width={70}
        height={70}
        id="ball"
        alt="ballSvg"
        ref={ballRef}
        className="absolute z-10  rounded-full bg-gradient-to-br from-white via-gray-200 to-gray-400 shadow-xl shadow-black/40 before:absolute before:left-1/2 before:top-1/2 before:h-[32px] before:w-[32px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:border-2 before:border-black/70 after:absolute after:left-1/2 after:top-1/2 after:h-[2px] after:w-[20px] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-sm after:bg-black after:shadow-[0_-8px_0_#000,0_8px_0_#000,-8px_0_#000,8px_0_#000]"
      />

      {/* Error Content */}
      <div
        ref={contentRef}
        className="relative z-20 rounded-2xl bg-white/10 px-8 py-10 text-center text-white backdrop-blur-lg shadow-2xl"
      >
        <div className="error-number mb-6 text-8xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 drop-shadow-lg md:text-[6rem]">
          404
        </div>
        <h1 className="error-title mb-4 text-3xl font-bold drop-shadow-md md:text-4xl">
          Goal Not Found!
        </h1>
        <p className="error-message mb-10 text-lg opacity-90 drop-shadow">
          Looks like this page went off the field. Let&apos;s get you back to
          the game!
        </p>
        <Link
          ref={buttonRef}
          href="/"
          id="homeBtn"
          className="inline-block rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-10 py-4 text-lg font-bold uppercase tracking-wide text-white shadow-lg shadow-orange-500/40 transition-transform hover:-translate-y-1 hover:shadow-orange-500/60 active:translate-y-[1px]"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
