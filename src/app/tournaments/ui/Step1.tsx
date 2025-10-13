import React from "react";
import { Trophy, Users, MapPin } from "lucide-react";

const ageCategories = [
  {
    value: "U6",
    text: "U6 (6 წლამდე)",
  },
  {
    value: "U8",
    text: "U8 (8 წლამდე)",
  },
  {
    value: "U10",
    text: "U10(10 წლამდე)",
  },
  {
    value: "U12",
    text: "U12(12 წლამდე)",
  },
  {
    value: "U14",
    text: "U14(14 წლამდე)",
  },
  {
    value: "U16",
    text: "U16(16 წლამდე)",
  },
  {
    value: "U18",
    text: "U18(18 წლამდე)",
  },
];

const Step1 = ({ handleForms }: { handleForms: CallableFunction }) => {
  return (
    <form className="p-8">
      <div className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <Trophy className="w-10 h-10 text-blue" />
          <h2 className="text-2xl font-bold text-gray-900">
            ძირითადი ინფორმაცია
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="lg:col-span-2">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            ტურნირის სახელი *
          </label>
          <div className="relative">
            <input
              onChange={(e) => handleForms(e)}
              required
              className="w-full px-4 py-4 bg-white/70 border-2 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-gray-900 placeholder-gray-400 border-gray-200 hover:border-gray-300"
              placeholder="მაგ. თბილისის ბავშვთა ფეხბურთის ლიგა 2024"
              type="text"
              name="name"
            />
          </div>
        </div>
        <div className="lg:col-span-1">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            ასაკობრივი კატეგორია *
          </label>
          <div className="relative ">
            <Users className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
            <select
              required
              name="age_category"
              onClick={(e) => handleForms(e)}
              className="w-full pl-12 pr-4 py-4 bg-white/70 border-2 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-gray-900 border-gray-200 hover:border-gray-300"
            >
              <option value="">აირჩიეთ ასაკობრივი კატეგორია</option>
              {ageCategories.map((el, i) => (
                <option key={i} value={el.value}>
                  {el.text}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            ადგილმდებარეობა *
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
            <input
              required
              onChange={(e) => handleForms(e)}
              className="w-full pl-12 pr-4 py-4 bg-white/70 border-2 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-gray-900 placeholder-gray-400 border-gray-200 hover:border-gray-300"
              placeholder="მაგ. დინამოს სტადიონი, თბილისი"
              type="text"
              name="location"
            />
          </div>
        </div>
        <div className="lg:col-span-2">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            აღწერა
          </label>
          <textarea
            onChange={(e) => handleForms(e)}
            required
            name="description"
            rows={4}
            className="w-full px-4 py-4 bg-white/70 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 resize-none text-gray-900 placeholder-gray-400 hover:border-gray-300"
            placeholder="ტურნირის მოკლე აღწერა..."
          ></textarea>
        </div>
      </div>
    </form>
  );
};

export default Step1;
