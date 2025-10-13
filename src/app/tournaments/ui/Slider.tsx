import React from "react";
import { Calendar, Trophy, Check } from "lucide-react";
const Slider = ({ currentStep }: { currentStep: number }) => {
  const disabled =
    "flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 bg-white text-gray-400 border-2 border-gray-200";
  const active =
    "flex items-center justify-center w-13 h-13 rounded-xl transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg";

  return (
    <div className="mb-8">
      <div className="flex items-center justify-center space-x-8">
        <div className={currentStep >= 1 ? active : disabled}>
          <Trophy />
        </div>
        <div
          className={`w-16 h-1 mx-4 rounded-full transition-all duration-300  ${
            currentStep >= 2
              ? "bg-gradient-to-r from-blue-500 to-purple-600 "
              : "bg-gray-200"
          }`}
        />
        <div className="flex items-center justify-center space-x-8">
          <div className={currentStep >= 2 ? active : disabled}>
            <Calendar />
          </div>
          <div
            className={`w-16 h-1 mx-4 rounded-full transition-all duration-300  ${
              currentStep == 3
                ? "bg-gradient-to-r from-blue-500 to-purple-600 "
                : "bg-gray-200"
            }`}
          />
        </div>
        <div className="flex items-center justify-center space-x-8">
          <div className={currentStep == 3 ? active : disabled}>
            <Check />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
