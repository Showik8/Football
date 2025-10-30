"use client";
import { useState } from "react";
import type { Player } from "../types";

const PlayerForm = ({ onAdd }: { onAdd: (player: Player) => void }) => {
  const [formData, setFormData] = useState({
    name: "",
    jersey: "",
    position: "",
    date_of_birth: "",
    nationality: "",
    height: "",
    weight: "",
    joined_at: "",
    is_active: true,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked =
      e.target instanceof HTMLInputElement ? e.target.checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.position || !formData.date_of_birth) {
      alert("Please fill all required fields");
      return;
    }

    onAdd({
      id: Date.now(),
      ...formData,
      jersey: Number(formData.jersey),
      height: formData.height ? Number(formData.height) : undefined,
      weight: formData.weight ? Number(formData.weight) : undefined,
    });

    setFormData({
      name: "",
      jersey: "",
      position: "",
      date_of_birth: "",
      nationality: "",
      height: "",
      weight: "",
      joined_at: "",
      is_active: true,
    });
  };

  return (
    <div className="bg-gray-50 rounded-xl p-6 mb-6 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Add New Player
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full border border-gray-300 p-2.5 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Jersey # <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="jersey"
            placeholder="Number"
            className="w-full border border-gray-300 p-2.5 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
            value={formData.jersey}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Position <span className="text-red-500">*</span>
          </label>
          <select
            name="position"
            className="w-full border border-gray-300 p-2.5 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
            value={formData.position}
            onChange={handleChange}
          >
            <option value="">Select Position</option>
            <option value="Goalkeeper">Goalkeeper</option>
            <option value="Defender">Defender</option>
            <option value="Midfielder">Midfielder</option>
            <option value="Forward">Forward</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date of Birth <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="date_of_birth"
            className="w-full border border-gray-300 p-2.5 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
            value={formData.date_of_birth}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nationality
          </label>
          <input
            type="text"
            name="nationality"
            placeholder="Country"
            className="w-full border border-gray-300 p-2.5 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
            value={formData.nationality}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Height (cm)
          </label>
          <input
            type="number"
            name="height"
            placeholder="Height"
            className="w-full border border-gray-300 p-2.5 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
            value={formData.height}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Weight (kg)
          </label>
          <input
            type="number"
            name="weight"
            placeholder="Weight"
            className="w-full border border-gray-300 p-2.5 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
            value={formData.weight}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Joined Date
          </label>
          <input
            type="date"
            name="joined_at"
            className="w-full border border-gray-300 p-2.5 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
            value={formData.joined_at}
            onChange={handleChange}
          />
        </div>

        <div className="flex items-end">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="is_active"
              checked={formData.is_active}
              onChange={handleChange}
              className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-200"
            />
            <span className="text-sm font-medium text-gray-700">
              Active Player
            </span>
          </label>
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={handleSubmit}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all shadow-md hover:shadow-lg"
        >
          Add Player
        </button>
      </div>
    </div>
  );
};

export default PlayerForm;
