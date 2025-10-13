import { ArrowRight, ArrowLeft } from "lucide-react";
import React from "react";

const Buttons = ({
  stepsController,
  currentStep,
  active,
  submitForm,
}: {
  currentStep: number;
  stepsController: CallableFunction;
  active: boolean;
  submitForm: CallableFunction;
}) => {
  return (
    <div className="flex w-full justify-end px-5 py-2">
      {currentStep > 1 && (
        <div className="flex items-center space-x-3 mr-auto">
          <button
            className="flex items-center px-6 py-3 text-gray-600 bg-white hover:bg-gray-50 border-2 border-gray-300 rounded-xl transition-all duration-200 hover:shadow-md"
            onClick={() => stepsController(-1)}
          >
            <ArrowLeft />
            უკან
          </button>
        </div>
      )}
      <div className="flex items-center space-x-3 justify-self-end ">
        <button className="px-6 py-3 text-gray-600 bg-white hover:bg-gray-50 border-2 border-gray-300 rounded-xl transition-all duration-200 hover:shadow-md">
          გაუქმება
        </button>

        {currentStep < 3 && (
          <button
            disabled={!active}
            style={{ opacity: !active ? 0.5 : 1 }}
            onClick={() => stepsController(1)}
            className="flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            შემდეგ
            <ArrowRight />
          </button>
        )}

        {currentStep === 3 && (
          <button
            onClick={() => submitForm()}
            disabled={!active}
            style={{ opacity: !active ? 0.5 : 1 }}
            className="flex items-center px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            რეგისტრაცია
          </button>
        )}
      </div>
    </div>
  );
};

export default Buttons;
