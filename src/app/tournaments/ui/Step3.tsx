import { Check } from "lucide-react";
import type { FormData } from "../TournamentForm";

function Step3({ values }: { values: FormData }) {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-indigo-100 align-center  pb-3 inline-flex items-center space-x-3 mb-6">
        <Check className="h-6 w-6 text-indigo-600" /> გადამოწმება
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-500">სახელი</span>
          <span className="mt-1 text-lg font-semibold text-gray-800">
            {values.name || "-"}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-500">აღწერა</span>
          <span className="mt-1 text-lg font-semibold text-gray-800">
            {values.description || "-"}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-500">
            ასაკობრივი კატეგორია
          </span>
          <span className="mt-1 text-lg font-semibold text-gray-800">
            {values.age_category || "-"}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-500">ლოკაცია</span>
          <span className="mt-1 text-lg font-semibold text-gray-800">
            {values.location || "-"}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-500">
            დაწყების თარიღი
          </span>
          <span className="mt-1 text-lg font-semibold text-gray-800">
            {values.start_date || "-"}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-500">
            დამთავრების თარიღი
          </span>
          <span className="mt-1 text-lg font-semibold text-gray-800">
            {values.end_date || "-"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Step3;
