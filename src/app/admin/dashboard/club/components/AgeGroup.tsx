interface AgeGroupSelectorProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const AgeGroupSelector = ({ value, onChange }: AgeGroupSelectorProps) => {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Age Group
      </label>
      <select
        value={value}
        onChange={onChange}
        className="w-full md:w-64 border-2 border-gray-300 rounded-lg p-3 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
      >
        <option value="u-11">Under 11 (U-11)</option>
        <option value="u-17">Under 17 (U-17)</option>
        <option value="u-18">Under 18 (U-18)</option>
        <option value="u-19">Under 19 (U-19)</option>
      </select>
    </div>
  );
};
export default AgeGroupSelector;
