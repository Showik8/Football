import { Calendar, Clock } from "lucide-react";
import React from "react";

const Step2 = ({ handleForms }: { handleForms: CallableFunction }) => {
  return (
    <form className="p-8">
      <div className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <Calendar className="lucide lucide-calendar w-6 h-6 text-green-600" />
          <h1 className="text-2xl font-bold text-gray-900">თარიღები</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label
              className="block text-sm font-semibold text-gray-700 mb-3"
              htmlFor="StartDate"
            >
              დაწყების თარიღი და დრო *
            </label>
            <div className="relative">
              <Clock className="lucide lucide-clock absolute left-3 top-4 w-5 h-5 text-gray-400" />
              <input
                onChange={(e) => handleForms(e)}
                required
                className="w-full pl-12 pr-4 py-4 bg-white/70 border-2 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-gray-900 border-gray-200 hover:border-gray-300"
                type="datetime-local"
                name="start_date"
              ></input>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              დამთავრების თარიღი და დრო
            </label>
            <div className="relative">
              <Clock className="lucide lucide-clock absolute left-3 top-4 w-5 h-5 text-gray-400" />
              <input
                onChange={(e) => handleForms(e)}
                className="w-full pl-12 pr-4 py-4 bg-white/70 border-2 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-gray-900 border-gray-200 hover:border-gray-300"
                type="datetime-local"
                name="end_date"
              ></input>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Step2;
