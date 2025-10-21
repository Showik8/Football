// components/team-squad/AgeCategoryFilter.tsx
'use client';

interface AgeCategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function AgeCategoryFilter({ categories, selectedCategory, onSelectCategory }: AgeCategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 rounded-full cursor-pointer text-sm font-semibold transition-colors
            ${selectedCategory === category
              ? 'bg-indigo-600 text-white shadow-md'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}