import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import type { Matches } from "@/app/types";
type MatchCardProps = Matches & {
  delay?: number;
};

const MatchCard = ({ date, time, Home, Away, delay = 0 }: MatchCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        {
          opacity: 0,
          y: 30,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: delay,
          ease: "power3.out",
        }
      );
    }
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className="min-w-[280px] p-4 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105  bg-gradient-to-r from-[var(--light-background)] to-blue-950"
    >
      <div className="text-sm text-muted-foreground mb-2">
        {date}, {time}
      </div>
      <div className="space-y-1">
        <div className="text-lg font-semibold text-foreground">{Home}</div>
        <div className="text-lg font-semibold text-foreground">{Away}</div>
      </div>
    </div>
  );
};

export default MatchCard;
