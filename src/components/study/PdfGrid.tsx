"use client";

import { useState } from "react";

interface Result {
  id: number;
  title: string;
}

interface SearchResultsProps {
  results: Result[];
  onDetail: () => void;
}

export default function SearchResults({ results, onDetail }: SearchResultsProps) {
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {results.map((res, idx) => (
        <div
          key={res.id}
          className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm flex flex-col"
        >
          {/* عنوان + PDF Preview */}
          <div className="flex-1 mb-3">
            <p className="font-semibold mb-2">{res.title}</p>
            <div className="bg-gray-200 dark:bg-gray-700 h-40 flex items-center justify-center text-gray-500 dark:text-gray-300">
              PDF Preview
            </div>
          </div>

          {/* دکمه بررسی بیشتر + سه‌نقطه */}
          <div className="flex justify-between items-center">
            <button
              onClick={onDetail}
              className="bg-green-700 text-white px-3 py-2 rounded-lg hover:bg-green-800 flex-1 mr-2"
            >
              بررسی بیشتر
            </button>
         
          </div>
        </div>
      ))}
    </div>
  );
}
