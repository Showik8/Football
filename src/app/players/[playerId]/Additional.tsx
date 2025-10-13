import React from "react";
import type { Player } from "@/app/types";

const Additional = ({ player }: { player: Player }) => {
  return (
    <div className="container mx-auto px-6 pb-20 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-8 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg">
          <h3 className="text-2xl font-bold mb-6">Player Information</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-400">Full Name:</span>
              <span className="font-semibold">{player.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Jersey Number:</span>
              <span className="text-blue-400 font-bold text-xl">
                #{player.jersey}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Position:</span>
              <span className="font-semibold">{player.position}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Current Team:</span>
              <span className="font-semibold">{player.team}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Nationality:</span>
              <span className="font-semibold">{player.nationality}</span>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg ">
          <h3 className="text-2xl font-bold mb-6">Physical Stats</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-400">Age:</span>
              <span className="font-semibold">{player.age} years</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Height:</span>
              <span className="font-semibold">{player.height} cm</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Weight:</span>
              <span className="font-semibold">{player.weight} kg</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Profile Views:</span>
              <span className="text-blue-400 font-bold">{player.views}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Additional;
