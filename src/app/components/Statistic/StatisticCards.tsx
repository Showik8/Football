"use client";
import React from "react";

type Player = {
  id: number;
  name: string;
  jersey: number;
  goal: number;
  matchPlayed?: number;
  assist: number;
  view: number;
};

type StatisticType = "goal" | "assist" | "view" | "matchPlayed";

enum statisticLabels {
  goal = "ყველაზე მეტი გოლი",
  assist = "ყველაზე მეტი ასისტი",
  view = "ყველაზე მეტი მაყურებელი",
  matchPlayed = "ყველაზე მეტი მატჩი",
}

// Color schemes for different statistic types
const colorSchemes = {
  goal: {
    primary: "from-sky-500 to-sky-600",
    secondary: "from-sky-400 to-sky-500",
    accent: "bg-sky-100 text-sky-800",
    border: "border-sky-200",
    shadow: "shadow-sky-500/20",
    icon: "⚽",
  },
  assist: {
    primary: "from-teal-500 to-teal-600",
    secondary: "from-teal-400 to-teal-500",
    accent: "bg-teal-100 text-teal-800",
    border: "border-teal-200",
    shadow: "shadow-teal-500/20",
    icon: "🎯",
  },
  view: {
    primary: "from-orange-500 to-orange-600",
    secondary: "from-orange-400 to-orange-500",
    accent: "bg-orange-100 text-orange-800",
    border: "border-orange-200",
    shadow: "shadow-orange-500/20",
    icon: "🌟",
  },
  matchPlayed: {
    primary: "from-emerald-500 to-emerald-600",
    secondary: "from-emerald-400 to-emerald-500",
    accent: "bg-emerald-100 text-emerald-800",
    border: "border-emerald-200",
    shadow: "shadow-emerald-500/20",
    icon: "🏟️",
  },
};

type Props = {
  data: Player[];
  type: StatisticType;
};

const StatisticCards: React.FC<Props> = ({ data, type }) => {
  const colors = colorSchemes[type];

  return (
    <div className="group relative">
      {/* Card Container */}
      <div
        className={`
        relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500 ease-out
        hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1
        border border-gray-100 min-h-[280px]
      `}
      >
        {/* Header with gradient background */}
        <div
          className={`
          relative bg-gradient-to-r ${colors.primary} p-6 text-white
          before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/10 before:to-transparent
        `}
        >
          <div className="flex items-center justify-between ">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">{colors.icon}</span>
              <h2 className="text-lg font-bold leading-tight">
                {statisticLabels[type]}
              </h2>
            </div>
            <div className="text-right ">
              <div className="text-2xl font-bold">{data?.length || 0}</div>
              <div className="text-xs opacity-80">Players</div>
            </div>
          </div>
        </div>

        {/* Players List */}
        <div className="p-4">
          <ol className="space-y-3">
            {data?.map((player, index) => (
              <li
                key={player.id}
                className={`
                  cursor-pointer
                  relative flex items-center justify-between p-4 rounded-xl transition-all duration-300
                  ${
                    index === 0
                      ? `bg-gradient-to-r ${colors.secondary} text-white shadow-lg`
                      : "bg-gray-50 hover:bg-gray-100 text-gray-800"
                  }
                  ${
                    index === 0
                      ? "border-2 border-white/20"
                      : "border border-gray-200"
                  }
                `}
              >
                {/* Player Info */}
                <div className="flex items-center space-x-3 flex-1">
                  {/* Rank Badge */}
                  <div
                    className={`
                    flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                    ${
                      index === 0
                        ? "bg-white/20 text-white"
                        : `bg-gradient-to-r ${colors.primary} text-white`
                    }
                  `}
                  >
                    {index + 1}
                  </div>

                  {/* Player Name */}
                  <div className="min-w-0 flex-1">
                    <div
                      className={`font-semibold truncate ${
                        index === 0 ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {player.name}
                    </div>
                    <div
                      className={`text-xs ${
                        index === 0 ? "text-white/80" : "text-gray-500"
                      }`}
                    >
                      #{player.jersey}
                    </div>
                  </div>
                </div>

                {/* Statistic Value */}
                <div className="flex-shrink-0">
                  <div
                    className={`
                    px-3 py-1 rounded-full text-sm font-bold
                    ${index === 0 ? "bg-white/20 text-white" : colors.accent}
                  `}
                  >
                    {player[type]}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full" />
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white/5 to-transparent rounded-tr-full" />
      </div>

      {/* Hover effect shadow */}
      <div
        className={`
        absolute inset-0 rounded-2xl bg-gradient-to-r ${colors.primary} opacity-0 
        blur-xl transition-opacity duration-500 group-hover:opacity-20 -z-10
      `}
      />
    </div>
  );
};

export default StatisticCards;
