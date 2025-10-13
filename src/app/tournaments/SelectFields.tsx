"use client";
import { Trophy } from "lucide-react";

const SelectFields = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-3 mb-6">
        <Trophy className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-900">
          ძირითადი ინფორმაცია
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="lg:col-span-2">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            ტურნირის სახელი *
          </label>
          <input
            className="className={`w-full px-4 py-4 bg-white/70 border-2 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-gray-900 placeholder-gray-400"
            type="text"
            placeholder="მაგ. თბილისის ბავშვთა ფეხბურთის ლიგა 2024"
            name="tournament_name"
          />
        </div>
      </div>
    </div>
  );
};

export default SelectFields;
