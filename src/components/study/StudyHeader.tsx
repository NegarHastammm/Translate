
"use client";

import { useState } from "react";
import FilterDrawer from "./FilterDrawer";

export default function StudyHeader() {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="flex justify-between items-center bg-white dark:bg-gray-800 rounded-2xl p-4 shadow">
      {/* عنوان */}
      <h2 className="text-xl font-bold">مطالعه آنلاین</h2>

      {/* دکمه فیلتر */}
      <button
        onClick={() => setFilterOpen(true)}
        className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800"
      >
        فیلتر هوشمند
      </button>

      <FilterDrawer open={filterOpen} onClose={() => setFilterOpen(false)} />
    </div>
  );
}
