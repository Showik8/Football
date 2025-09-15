"use client";
import React from "react";
import { useRouter } from "next/navigation";
import type { Player } from "@/app/types";
type StatisticType = "goal" | "assist" | "view" | "match_played";

enum statisticLabels {
  goal = "ყველაზე მეტი გოლი",
  assist = "ყველაზე მეტი ასისტი",
  view = "ყველაზე მეტი მაყურებელი",
  match_played = "ყველაზე მეტი მატჩი",
}

const colorSchemes = {
  goal: {
    primary: "from-sky-400 via-sky-500 to-sky-600",
    secondary: "from-sky-500 to-sky-600",
    accent: "bg-sky-100 text-sky-800",
    border: "border-sky-200",
    shadow: "shadow-sky-300/30",
    icon: "⚽",
  },
  assist: {
    primary: "from-teal-400 via-teal-500 to-teal-600",
    secondary: "from-teal-500 to-teal-600",
    accent: "bg-teal-100 text-teal-800",
    border: "border-teal-200",
    shadow: "shadow-teal-300/30",
    icon: "🎯",
  },
  view: {
    primary: "from-orange-400 via-orange-500 to-orange-600",
    secondary: "from-orange-500 to-orange-600",
    accent: "bg-orange-100 text-orange-800",
    border: "border-orange-200",
    shadow: "shadow-orange-300/30",
    icon: "🌟",
  },
  match_played: {
    primary: "from-emerald-400 via-emerald-500 to-emerald-600",
    secondary: "from-emerald-500 to-emerald-600",
    accent: "bg-emerald-100 text-emerald-800",
    border: "border-emerald-200",
    shadow: "shadow-emerald-300/30",
    icon: "🏟️",
  },
};

type Props = {
  data: Player[];
  type: StatisticType;
};

const StatisticCards: React.FC<Props> = ({ data, type }) => {
  const colors = colorSchemes[type];
  const router = useRouter();

  const seeProfile = (id: number) => {
    router.push(`/players/${id}`);
  };

  return (
    <div className="group relative   ">
      <div className="relative overflow-hidden grid rounded-3xl bg-white shadow-xl transition-all duration-500 ease-out hover:shadow-2xl hover:scale-[1.03] border border-gray-100 min-h-[300px]">
        <div
          className={`relative bg-gradient-to-r ${colors.primary} p-8 text-white rounded-t-3xl`}
        >
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-4">
              <span className="text-4xl">{colors.icon}</span>
              <h2 className="text-xl font-bold leading-snug">
                {statisticLabels[type]}
              </h2>
            </div>
            <div className="text-right">
              <div className="text-3xl font-extrabold">{data?.length || 0}</div>
              <div className="text-sm opacity-80">Players</div>
            </div>
          </div>
        </div>

        <div className="p-2 xl:p-6">
          <ol className="space-y-4">
            {data?.map((player, index) => (
              <li
                onClick={() => seeProfile(player.id)}
                key={player.id}
                id={`${player.id}`}
                className={`cursor-pointer w-full relative flex items-center justify-between p-5 rounded-2xl transition-all duration-300 ${
                  index === 0
                    ? `bg-gradient-to-r ${colors.secondary} text-white shadow-lg`
                    : "bg-gray-50 hover:bg-gray-100 text-gray-900"
                } ${
                  index === 0
                    ? "border-2 border-white/20"
                    : "border border-gray-200"
                }`}
              >
                <div
                  className="flex items-center flex-1 gap-4"
                  id="player info"
                >
                  <div
                    className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm ${
                      index === 0
                        ? "bg-white/20 text-white"
                        : `bg-gradient-to-r ${colors.primary} text-white`
                    }`}
                  >
                    {index + 1}
                  </div>

                  <div className="flex flex-col">
                    <span
                      className={`font-semibold truncate text-wrap ${
                        index === 0 ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {player.name} #{player.jersey}
                    </span>
                  </div>

                  <span
                    className={`ml-auto px-4 py-1 rounded-full text-sm font-bold ${
                      index === 0 ? "bg-white/20 text-white" : colors.accent
                    }`}
                  >
                    {player[type]}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full" />
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-white/5 to-transparent rounded-tr-full" />
      </div>

      <div
        className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${colors.primary} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-25 -z-10`}
      />
    </div>
  );
};

export default StatisticCards;
