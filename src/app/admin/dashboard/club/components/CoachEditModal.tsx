"use client";
import { useState } from "react";

interface CoachEditModalProps {
  open: boolean;
  currentCoach: string;
  onClose: () => void;
  onSave: (name: string) => void;
}
const CoachEditModal = ({
  open,
  currentCoach,
  onClose,
  onSave,
}: CoachEditModalProps) => {
  const [name, setName] = useState(currentCoach);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-8 rounded-2xl w-full max-w-md shadow-2xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Change Coach</h2>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Coach Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 border-gray-300 w-full p-3 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
            placeholder="Enter coach name"
          />
        </div>
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 font-medium transition-all"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onSave(name);
              onClose();
            }}
            className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-all shadow-md"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};
export default CoachEditModal;
