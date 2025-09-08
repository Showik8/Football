"use client";
import React, { useLayoutEffect, useRef } from "react";
import StatisticCards from "./StatisticCards";
import StatisticCardSkeleton from "./StatisticCardSkeleton";
import { gsap } from "gsap";
import type { Statistics } from "@/app/types";

type Props = {
  statistic: Statistics;
};

const StatisticSection: React.FC<Props> = ({ statistic }) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleWrapRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const blob1Ref = useRef<HTMLDivElement | null>(null);
  const blob2Ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (sectionRef.current) {
        tl.from(sectionRef.current, { opacity: 0, y: 24, duration: 0.6 });
      }
      if (titleWrapRef.current) {
        tl.from(
          titleWrapRef.current,
          { opacity: 0, y: 16, duration: 0.5 },
          "-0.2"
        );
      }
      if (titleRef.current) {
        tl.from(titleRef.current, { opacity: 0, y: 10, duration: 0.4 }, "-0.2");
      }

      const statCards =
        gridRef.current?.querySelectorAll<HTMLElement>("[data-stat-card]");
      if (statCards && statCards.length > 0) {
        tl.from(
          statCards,
          { opacity: 0, y: 18, duration: 0.35, stagger: 0.07 },
          "-0.1"
        );
      }

      if (blob1Ref.current) {
        gsap.to(blob1Ref.current, {
          x: 25,
          y: -20,
          scale: 1.05,
          duration: 4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }
      if (blob2Ref.current) {
        gsap.to(blob2Ref.current, {
          x: -20,
          y: 20,
          scale: 0.95,
          duration: 5.5,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [statistic]);

  return (
    <section
      ref={sectionRef}
      id="statistics"
      className="relative text-center flex  flex-col pt-20 pb-32 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 min-h-screen"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-600/10 via-indigo-600/10 to-purple-600/10" />

      <div
        ref={blob1Ref}
        className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-15 blur-3xl"
      />
      <div
        ref={blob2Ref}
        className="absolute top-20 left-10 w-[400px] h-[400px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-15 blur-3xl"
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-full blur-3xl" />

      <div ref={titleWrapRef} className="inline-block mt-8 mb-6">
        <span className="text-sm font-bold tracking-widest text-cyan-100 uppercase bg-white/10 px-8 py-3 rounded-full border border-white/20 backdrop-blur-sm cursor-default">
          Season 2024/25
        </span>
      </div>

      <h1
        ref={titleRef}
        className="relative z-10 text-5xl md:text-6xl lg:text-7xl text-white font-bold mb-8 leading-tight cursor-default"
      >
        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent text-3xl md:text-6xl">
          ფეხბურთელების
        </span>
        <br />
        <span className="text-white text-3xl md:text-6xl">სტატისტიკა</span>
      </h1>

      <div
        ref={gridRef}
        className=" w-full  p-5 relative gap-8 z-10 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  xl:grid-cols-4 "
      >
        {statistic ? (
          <>
            <div
              data-stat-card
              className="transform transition-all duration-500 hover:scale-105"
            >
              <StatisticCards data={statistic.topViewers} type="view" />
            </div>
            <div
              data-stat-card
              className="transform transition-all duration-500 hover:scale-105"
            >
              <StatisticCards data={statistic.topGoalScorers} type="goal" />
            </div>
            <div
              data-stat-card
              className="transform transition-all duration-500 hover:scale-105"
            >
              <StatisticCards data={statistic.topAssists} type="assist" />
            </div>
            <div
              data-stat-card
              className="transform transition-all duration-500 hover:scale-105"
            >
              <StatisticCards
                data={statistic.topMatchPlayed}
                type="matchPlayed"
              />
            </div>
          </>
        ) : (
          <>
            <StatisticCardSkeleton />
            <StatisticCardSkeleton />
            <StatisticCardSkeleton />
            <StatisticCardSkeleton />
          </>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent" />
    </section>
  );
};

export default StatisticSection;
