"use client";

import { categories } from "@/data/products";

interface CategoryFilterProps {
  selected: string;
  onSelect: (category: string) => void;
}

export default function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          className={`flex items-center gap-1.5 flex-shrink-0 px-3 py-1.5 text-sm font-medium transition-all duration-200 whitespace-nowrap ${
            selected === cat.id
              ? "bg-[#FCD208] text-white shadow-sm"
              : "bg-gray-100 text-gray-600 border border-gray-200 hover:border-[#FCD208]/30 hover:text-[#FCD208] hover:bg-red-50"
          }`}
        >
          <span className="text-xs">{cat.icon}</span>
          {cat.label}
        </button>
      ))}
    </div>
  );
}
