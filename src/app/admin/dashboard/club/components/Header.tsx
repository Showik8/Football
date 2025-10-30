// src/components/Header.tsx
interface HeaderProps {
  coach: string;
  onChangeCoach: () => void;
}

const Header = ({ coach, onChangeCoach }: HeaderProps) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-2xl shadow-lg mb-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2">Club Management</h1>
          <p className="text-blue-100">
            Manage your team roster and coaching staff
          </p>
        </div>
        <button
          onClick={onChangeCoach}
          className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-md"
        >
          Change Coach
        </button>
      </div>
      <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-lg p-4">
        <p className="text-sm text-blue-100 mb-1">Current Coach</p>
        <p className="text-2xl font-semibold">{coach}</p>
      </div>
    </div>
  );
};

export default Header;
