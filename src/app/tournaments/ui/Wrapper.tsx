import React from "react";
import { Trophy } from "lucide-react";
import Slider from "./Slider";
const Wrapper = ({ currentStep }: { currentStep: number }) => {
  return (
    <div className=" ">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4 shadow-xl">
          <Trophy className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-2">
          ახალი ტურნირი
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          შეავსეთ ყველა საჭირო ველი ტურნირის შესაქმნელად
        </p>
      </div>
      <Slider currentStep={currentStep} />
    </div>
  );
};

export default Wrapper;
