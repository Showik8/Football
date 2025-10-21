"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Ball from "./Ball.svg";
import gsap from "gsap";

const Hero = () => {
  const soccerBallRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const fieldRef = useRef<HTMLDivElement | null>(null);
  const fieldLinesRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!gsap) return;

    const tl = gsap.timeline();

    gsap.set([titleRef.current, subtitleRef.current], {
      opacity: 0,
      y: 50,
    });

    gsap.set(soccerBallRef.current, { x: -100, y: 100, rotation: 0 });

    if (fieldLinesRef.current) {
      const paths = fieldLinesRef.current.querySelectorAll("path");
      const centerSpot = fieldLinesRef.current.querySelector(
        "circle[fill='white']"
      );

      paths.forEach((path) => {
        if (typeof (path as SVGPathElement).getTotalLength === "function") {
          const length = (path as SVGPathElement).getTotalLength();
          gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });
        }
      });

      if (centerSpot) {
        gsap.set(centerSpot, { scale: 0, transformOrigin: "center" });
      }

      // Ball enters
      tl.to(soccerBallRef.current, {
        x: 0,
        y: 0,
        rotation: 360,
        duration: 2,
        ease: "bounce.out",
      });

      tl.addLabel("startDraw", 1.5);

      // Field lines draw
      tl.to(
        paths,
        {
          strokeDashoffset: 0,
          duration: 2.5,
          ease: "power2.inOut",
        },
        "startDraw"
      );

      // Center spot
      if (centerSpot) {
        tl.to(
          centerSpot,
          {
            scale: 1,
            duration: 0.5,
            ease: "back.out(1.7)",
          },
          "startDraw+=1.0"
        );
      }

      // Title + subtitle
      tl.to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        "startDraw+=1.0"
      ).to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.7"
      );
    }

    // Continuous animations
    gsap.to(soccerBallRef.current, {
      rotation: "+=360",
      duration: 8,
      ease: "none",
      repeat: -1,
      delay: 2,
    });

    gsap.to(soccerBallRef.current, {
      y: -10,
      duration: 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: 2,
    });
  }, []);

  const fieldPathData = {
    boundary: "M0 0 L1000 0 L1000 600 L0 600 Z",
    centerLine: "M500 0 L500 600",
    centerCircle: "M500 227 A 73 73 0 1 0 500 373 A 73 73 0 1 0 500 227",
    leftPenaltyArea: "M0 139 L132 139 L132 461 L0 461 Z",
    leftGoalArea: "M0 227 L44 227 L44 373 L0 373 Z",
    leftPenaltySpot: "M88 300 h1",
    leftDBox: "M132 241.75 A 73 73 0 0 1 132 358.25",
    rightPenaltyArea: "M1000 139 L868 139 L868 461 L1000 461 Z",
    rightGoalArea: "M1000 227 L956 227 L956 373 L1000 373 Z",
    rightPenaltySpot: "M912 300 h1",
    rightDBox: "M868 241.75 A 73 73 0 0 0 868 358.25",
    cornerTL: "M8 0 A 8 8 0 0 1 0 8",
    cornerBL: "M0 592 A 8 8 0 0 1 8 600",
    cornerTR: "M992 0 A 8 8 0 0 0 1000 8",
    cornerBR: "M1000 592 A 8 8 0 0 0 992 600",
  };

  return (
    <>
      <div className="min-h-screen relative overflow-hidden hero-image bg-[url('/grass-bb.jpg')]">
        <div
          ref={fieldRef}
          className="absolute inset-0 flex justify-center items-center mt-20"
        >
          <svg
            ref={fieldLinesRef}
            className="w-full h-full block absolute p-4"
            viewBox="0 0 1000 600"
            preserveAspectRatio="xMidYMid meet"
          >
            {Object.values(fieldPathData).map((d, index) => (
              <path
                key={index}
                d={d}
                stroke="white"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ))}
            <circle cx="500" cy="300" r="2" fill="white" />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center gap-15 mt-[-80px] min-h-screen px-4">
          <div className="text-center space-y-6 max-w-4xl">
            <h1
              ref={titleRef}
              className="text-5xl md:text-5xl font-bold text-foreground leading-tight bg-white bg-clip-text"
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ქართული ფეხბურთი
            </h1>

            <p
              ref={subtitleRef}
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto  text-white"
            >
              ვებსაიტი რომლითაც ქართველ ტალანტებს სამყარო გაიცნობს
            </p>
          </div>

          <div
            ref={soccerBallRef}
            className="relative mb-8 w-16 h-16 md:w-20 md:h-20"
          >
            <Image
              src={Ball}
              alt="Football"
              fill={true}
              priority={true}
              sizes="(max-width: 768px) 64px, 80px"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
