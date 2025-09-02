import React from "react";
import type { Matches } from "@/app/types";

type CardProps = {
  loading: boolean;
  data?: Matches;
};

export const Card: React.FC<CardProps> = ({ loading, data }) => {
  const { Home = "", Away = "", date = "", time = "" } = data || {};

  // Shared classes for both loading and data card
  const baseClasses =
    "h-[100px] p-2 text-[10px] rounded-2xl bg-gradient-to-r from-[var(--light-background)] to-blue-950";

  if (loading) {
    return (
      <div className={`${baseClasses} animate-pulse space-y-4`}>
        <div className="h-3 bg-gray-300 rounded w-1/4"></div>
        <div className="h-3 bg-gray-300 rounded w-3/4"></div>
        <div className="h-3 bg-gray-300 rounded w-3/4"></div>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <div className={`${baseClasses} flex flex-col justify-around`}>
      <span id="date" className="text-xs mb-1">
        {date}, {time}
      </span>
      <div className="flex flex-col ml-2">
        <h2 className="text-lg font-semibold">{Home}</h2>
        <h2 className="text-lg font-semibold">{Away}</h2>
      </div>
    </div>
  );
};
