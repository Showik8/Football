"use client";
import React, { useEffect, useState } from "react";
import type { TeamRow } from "@/app/types";
import Tbody from "./Tbody";

const AgeOptions = [
  { value: "u-19", label: "U-19" },
  { value: "u-17", label: "U-17" },
];

const TournamentOptions = [
  { value: "gff", label: "GFF" },
  { value: "imereti", label: "Imereti" },
  { value: "league", label: "League" },
];

const Table = () => {
  const baseUrl = process.env.NEXT_PUBLIC_URL!;
  const [ageCategory, setAgeCategory] = useState("u-19");
  const [tournament, setTournament] = useState("gff");
  const [error, setError] = useState<string | null>(null);
  const [rows, setRows] = useState<TeamRow[] | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function sendGet(updatedAge?: string, updatedTournament?: string) {
      try {
        setError(null);

        const params = new URLSearchParams({
          ageCategory: updatedAge ?? ageCategory,
          tournament: updatedTournament ?? tournament,
        });

        const res = await fetch(`${baseUrl}/tournaments?${params.toString()}`, {
          method: "GET",
          signal,
        });

        if (!res.ok) {
          throw new Error(`Fetch failed: ${res.status}`);
        }

        const data = await res.json();
        const rows: TeamRow[] = data.tournaments ?? data;

        if (rows) {
          const sorted = rows.sort(
            (a, b) => b.points - a.points || b.won - a.won
          );
          setRows(sorted);
        }
      } catch (error: unknown) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }
        setError(`ამ ტურნირის მონაცემები ${ageCategory} -ში არ მოიძებნა`);
        console.error(
          "Error fetching data:",
          error instanceof Error ? error.message : error
        );
        setRows(null);
      }
    }

    sendGet();

    return () => {
      controller.abort(); // cleanup cancels the fetch
    };
  }, [tournament, ageCategory, baseUrl]);

  return (
    <section className="w-full p-2 bg-[#F7F9FB] md:p-6 lg:p-10 ">
      <div className="px-2 py-6 bg-white">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">League Phase</h2>
          <form
            className="flex items-center gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="ageCategory">
              Choose Age:
              <select
                id="ageCategory"
                name="ageCategory"
                value={ageCategory}
                onChange={(e) => {
                  setAgeCategory(e.target.value);
                }}
              >
                <optgroup label="Age Category">
                  {AgeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </optgroup>
              </select>
            </label>

            <label htmlFor="tournament">
              Tournament:
              <select
                id="tournament"
                name="tournament"
                value={tournament}
                onChange={(e) => {
                  setTournament(e.target.value);
                }}
              >
                <optgroup label="Tournament">
                  {TournamentOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </optgroup>
              </select>
            </label>
          </form>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
          <table className="min-w-[760px] w-full border-separate border-spacing-y-3">
            <thead className="sticky top-0 z-10">
              <tr className="text-left text-xs md:text-sm text-black/70">
                <th className="py-3 pl-4 font-medium">Team</th>
                <th className="py-3 font-medium text-center">Played</th>
                <th className="py-3 font-medium text-center">Won</th>
                <th className="py-3 font-medium text-center">Drawn</th>
                <th className="py-3 font-medium text-center">Lost</th>
                <th className="py-3 font-medium text-center">For</th>
                <th className="py-3 font-medium text-center">Against</th>
                <th className="py-3 font-medium text-center">Goal diff</th>
                <th className="py-3 font-medium text-center pr-4">Points</th>
              </tr>
            </thead>

            {rows && <Tbody rows={rows} />}
          </table>
          {error && <div className="text-red-500">{error}</div>}
        </div>
      </div>
    </section>
  );
};

export default Table;
