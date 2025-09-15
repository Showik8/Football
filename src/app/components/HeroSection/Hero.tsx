"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Ball from "@/app/Ball.svg";
import Image from "next/image";

const Index = () => {
  const soccerBallRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const fieldRef = useRef<HTMLDivElement>(null);
  const goalPostLeftRef = useRef<HTMLDivElement>(null);
  const goalPostRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial setup - hide elements
    gsap.set([titleRef.current, subtitleRef.current], {
      opacity: 0,
      y: 50,
    });
    gsap.set([goalPostLeftRef.current, goalPostRightRef.current], {
      scaleY: 0,
      transformOrigin: "bottom",
    });

    // Soccer ball animation
    if (soccerBallRef.current) {
      gsap.set(soccerBallRef.current, { x: -100, y: 100, rotation: 0 });

      tl.to(soccerBallRef.current, {
        x: 0,
        y: 0,
        rotation: 360,
        duration: 2,
        ease: "bounce.out",
      });
    }

    if (fieldRef.current) {
      gsap.fromTo(
        fieldRef.current,
        { scaleX: 0, transformOrigin: "center" },
        { scaleX: 1, duration: 1.5, ease: "power2.out", delay: 0.5 }
      );
    }

    // Goal posts animation
    tl.to(
      [goalPostLeftRef.current, goalPostRightRef.current],
      {
        scaleY: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.2,
      },
      "-=1"
    );

    // Text animations
    tl.to(
      titleRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.5"
    ).to(
      subtitleRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.3"
    );

    // Continuous ball rotation
    gsap.to(soccerBallRef.current, {
      rotation: "+=360",
      duration: 8,
      ease: "none",
      repeat: -1,
      delay: 2,
    });

    // Floating animation for the ball
    gsap.to(soccerBallRef.current, {
      y: -10,
      duration: 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: 2,
    });
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-green-950">
      {/* Soccer Field Background */}
      <div ref={fieldRef} className="absolute inset-0">
        {/* Field lines */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/30 transform -translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-0.5 h-full bg-white/30 transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 border-2 border-white/30 rounded-full transform -translate-x-1/2 -translate-y-1/2" />

        {/* Goal posts */}
        <div
          ref={goalPostLeftRef}
          className="absolute left-8 top-1/2 transform -translate-y-1/2"
        >
          <div className="w-2 h-24 bg-white/80" />
          <div className="w-2 h-24 bg-white/80 absolute -left-16 top-0" />
          <div className="w-16 h-2 bg-white/80 absolute -left-16 -top-1" />
          <div className="w-16 h-2 bg-white/80 absolute -left-16 top-22" />
        </div>

        <div
          ref={goalPostRightRef}
          className="absolute right-8 top-1/2 transform -translate-y-1/2"
        >
          <div className="w-2 h-24 bg-white/80" />
          <div className="w-2 h-24 bg-white/80 absolute left-14 top-0" />
          <div className="w-16 h-2 bg-white/80 absolute top-0" />
          <div className="w-16 h-2 bg-white/80 absolute top-22" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Soccer Ball */}
        <div ref={soccerBallRef} className="mb-8">
          <Image src={Ball} alt={"ball"} width={70} height={70} />
        </div>

        {/* Hero Text */}
        <div className="text-center space-y-6 max-w-4xl">
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl font-bold text-foreground leading-tight bg-green-500"
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Youth Georgian Football
          </h1>

          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-white"
          >
            ვებსაიტი რომელიც ქართველ ტალანტებს მსოფლიოს გააცნობს
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
