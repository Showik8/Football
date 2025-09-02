import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import type { TeamRow } from "@/app/types";

const Tbody = ({ rows }: { rows: TeamRow[] }) => {
  const rowRefs = useRef<(HTMLTableRowElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      const validRows = rowRefs.current.filter(
        Boolean
      ) as HTMLTableRowElement[];
      if (validRows.length > 0) {
        tl.from(
          validRows,
          { opacity: 0, y: 16, duration: 0.45, stagger: 0.1 },
          "-0.1"
        );
      }
    }, rowRefs.current);

    return () => ctx.revert();
  }, [rows.length, rows]);
  return (
    <tbody>
      {rows?.map((r, i) => (
        <tr
          key={r.team}
          ref={(el: HTMLTableRowElement | null) => {
            rowRefs.current[i] = el;
          }}
          onMouseEnter={() =>
            rowRefs.current[i] &&
            gsap.to(rowRefs.current[i], {
              y: -2,
              boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
              duration: 0.25,
              ease: "power2.out",
            })
          }
          onMouseLeave={() =>
            rowRefs.current[i] &&
            gsap.to(rowRefs.current[i], {
              y: 0,
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              duration: 0.25,
              ease: "power2.out",
            })
          }
          className={
            "bg-white/70 dark:bg-white/10 backdrop-blur-md shadow-sm border border-white/10 transition-all rounded-xl " +
            (i === 0
              ? "ring-2 ring-blue-500/70 shadow-blue-500/20"
              : "hover:bg-white/80 dark:hover:bg-white/15")
          }
        >
          <td className="pl-4 py-4 text-sm md:text-base font-medium">
            {r.team}
          </td>
          <td className="py-4 text-center text-sm md:text-base">{r.played}</td>
          <td className="py-4 text-center text-sm md:text-base">{r.won}</td>
          <td className="py-4 text-center text-sm md:text-base">{r.drawn}</td>
          <td className="py-4 text-center text-sm md:text-base">{r.lost}</td>
          <td className="py-4 text-center text-sm md:text-base">{r.for}</td>
          <td className="py-4 text-center text-sm md:text-base">{r.against}</td>
          <td className="py-4 text-center text-sm md:text-base">
            {r.goalDifference}
          </td>
          <td className="py-4 pr-4 text-center font-semibold text-sm md:text-base">
            {r.points}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default Tbody;
