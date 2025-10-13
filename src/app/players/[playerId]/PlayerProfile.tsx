"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { StatCard } from "./StatCard";
import Aditional from "./Additional";
import {
  Trophy,
  Target,
  Users,
  Calendar,
  AlertTriangle,
  Award,
  Ruler,
  Weight,
} from "lucide-react";
import Image from "next/image";
import png from "./src/image.png";
import type { Player } from "@/app/types";

gsap.registerPlugin(ScrollTrigger);

const PlayerProfile = ({ player }: { player: Player }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const jerseyRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, scale: 1.1 },
        { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }
      );
    }

    if (nameRef.current) {
      gsap.fromTo(
        nameRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power2.out" }
      );
    }

    if (jerseyRef.current) {
      gsap.fromTo(
        jerseyRef.current,
        { rotation: 180, scale: 0, opacity: 0 },
        {
          rotation: 0,
          scale: 1,
          opacity: 1,
          duration: 1.2,
          delay: 0.6,
          ease: "elastic.out(1, 0.3)",
        }
      );
    }

    if (statsRef.current) {
      gsap.fromTo(
        statsRef.current.children,
        { y: 100, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          delay: 1,
          ease: "power2.out",
        }
      );
    }
  }, []);

  const stats = [
    {
      icon: <Trophy className="w-6 h-6" />,
      label: "Goals",
      value: player.goals,
      color: "yellow",
    },
    {
      icon: <Target className="w-6 h-6" />,
      label: "Assists",
      value: player.assists,
      color: "cyan",
    },
    {
      icon: <Users className="w-6 h-6" />,
      label: "Matches",
      value: player.matches_played,
      color: "blue",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      label: "Age",
      value: player.age,
      color: "violet",
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      label: "Yellow Cards",
      value: player.yellow_cards,
      color: "yellow",
    },
    {
      icon: <Award className="w-6 h-6" />,
      label: "Red Cards",
      value: player.red_cards,
      color: "red",
    },
    {
      icon: <Ruler className="w-6 h-6" />,
      label: "Height",
      value: `${player.height} cm`,
      color: "emerald",
    },
    {
      icon: <Weight className="w-6 h-6" />,
      label: "Weight",
      value: `${player.weight} kg`,
      color: "emerald",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-black to-gray-950 text-white ">
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          ref={heroRef}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat h-screen"
        >
          <Image
            src={png}
            alt="ხვიჩა კვარაცხელია"
            fill
            priority
            className="object-cover object-center opacity-40"
          />
        </div>

        <div className="relative z-10 text-center px-4 ">
          <div
            ref={jerseyRef}
            className="text-9xl md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 opacity-30 absolute -top-20 left-1/2 transform -translate-x-1/2"
          >
            {player.jersey}
          </div>

          <div className="relative">
            <h1
              ref={nameRef}
              className="text-5xl md:text-7xl font-black mb-4 drop-shadow-lg"
            >
              {player.name}
            </h1>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="text-lg px-4 py-2 border border-blue-400 text-blue-400 rounded-full">
                {player.position}
              </div>
              <div className="text-lg px-4 py-2 border border-blue-400 text-blue-400 rounded-full">
                {player.team}
              </div>
              <div className="text-lg px-4 py-2 border border-blue-400 text-blue-400 rounded-full">
                {player.nationality}
              </div>
            </div>

            <div className="text-xl text-gray-300">
              {player.views} Profile Views
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20  ">
        <h2 className="text-4xl font-bold text-center mb-16">
          Career Statistics
        </h2>

        <div
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 "
        >
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              label={stat.label}
              value={stat.value!}
              color={stat.color}
            />
          ))}
        </div>
      </div>

      <Aditional player={player} />
    </div>
  );
};

export default PlayerProfile;
