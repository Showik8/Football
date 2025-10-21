// src/components/team-squad/TeamSquadClientWrapper.tsx
"use client";

import { useState, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Swords, ShieldCheck, TrendingUp, Goal } from "lucide-react";
import { TeamPageData } from "..//types";
import PlayerCard from "./PlayerCard";
import StatCard from "./StatCard";

type WrapperProps = {
  teamData: TeamPageData;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export default function TeamSquadClientWrapper({ teamData }: WrapperProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const squadCategories = useMemo(
    () => teamData.squads.map((s) => s.category),
    [teamData.squads]
  );

  const [selectedCategory, setSelectedCategory] = useState<string>(() => {
    const categoryFromUrl = searchParams.get("category");
    if (categoryFromUrl && squadCategories.includes(categoryFromUrl)) {
      return categoryFromUrl;
    }
    return squadCategories[0] || "";
  });

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    const params = new URLSearchParams(searchParams);
    params.set("category", category);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const currentSquad = teamData.squads.find(
    (s) => s.category === selectedCategory
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* --- Header --- */}
      <header className="flex items-center gap-4 sm:gap-6 mb-8">
        {teamData.logoUrl && (
          <Image
            src={teamData.logoUrl}
            alt={`${teamData.teamName} logo`}
            width={80}
            height={80}
            className="h-14 w-14 sm:h-20 sm:w-20 object-contain"
          />
        )}
        <div>
          <h1 className="text-2xl sm:text-4xl font-extrabold">
            {teamData.teamName}
          </h1>
          <p className="text-md sm:text-lg text-gray-400">
            {teamData.academyName}
          </p>
        </div>
      </header>

      {/* --- Category Filters --- */}
      <nav className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
        {squadCategories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors whitespace-nowrap ${
              selectedCategory === category
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white/5 hover:bg-white/10"
            }`}
          >
            {category}
          </button>
        ))}
      </nav>

      <AnimatePresence mode="wait">
        {currentSquad ? (
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* --- Stats Section --- */}
            {currentSquad.stats && (
              <motion.section
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <StatCard
                  icon={Swords}
                  label="MATCHES PLAYED"
                  value={currentSquad.stats.matchesPlayed}
                />
                <StatCard
                  icon={Goal}
                  label="GOALS SCORED"
                  value={currentSquad.stats.goalsScored}
                />
                <StatCard
                  icon={ShieldCheck}
                  label="CLEAN SHEETS"
                  value={currentSquad.stats.cleanSheets}
                />
                <StatCard
                  icon={TrendingUp}
                  label="WIN RATE"
                  value={currentSquad.stats.winRate}
                  suffix="%"
                />
              </motion.section>
            )}

            {/* --- Squad Section --- */}
            <section>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl sm:text-2xl font-bold">
                  {currentSquad.category} Squad
                </h2>
                <p className="text-sm font-medium text-gray-400">
                  {currentSquad.players.length} PLAYERS
                </p>
              </div>

              {currentSquad.players.length > 0 ? (
                <motion.div
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {currentSquad.players.map((player) => (
                    <PlayerCard key={player.id} player={player} />
                  ))}
                </motion.div>
              ) : (
                <div className="flex flex-col items-center justify-center text-center py-16 bg-white/5 rounded-lg border border-dashed border-white/10">
                  <Users className="h-12 w-12 text-gray-500 mb-4" />
                  <h3 className="text-lg font-semibold">Squad Not Available</h3>
                  <p className="text-gray-400">
                    The player list for the {currentSquad.category} category is
                    not yet available.
                  </p>
                </div>
              )}
            </section>
          </motion.div>
        ) : (
          <div className="text-center py-16 text-gray-400">
            Please select a category to view the squad.
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
