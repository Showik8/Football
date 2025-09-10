import React from "react";
import { useRef, useEffect } from "react";
import gsap from "gsap";

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  color: string;
}

export const StatCard = ({ icon, label, value, color }: StatCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className={`p-6 rounded-xl shadow-lg border border-white/10 
        backdrop-blur-lg bg-gradient-to-br from-${color}-500/20 to-${color}-700/10
        hover:shadow-${color}-500/50 hover:scale-105 transition-all duration-300`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`p-4 rounded-full bg-${color}-500 text-white 
            group-hover:scale-110 transition-transform duration-300 shadow-lg`}
        >
          {icon}
        </div>
        <div>
          <div
            className={`text-4xl font-extrabold text-white group-hover:text-${color}-400`}
          >
            {typeof value === "number" ? value.toLocaleString() : value}
          </div>
          <div className="uppercase tracking-wide text-sm text-white/70">
            {label}
          </div>
        </div>
      </div>
    </div>
  );
};
