"use client";
import { X } from "lucide-react";
import { useState } from "react";

export default function TOCSidebar() {
  const [open, setOpen] = useState(true);

  return (
    <>
      {/* دکمه بازکردن وقتی بسته باشه */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="absolute left-2 top-20 z-20 bg-emerald-600 text-white px-3 py-1 rounded-md shadow"
        >
          فهرست مطالب
        </button>
      )}

      {/* خود سایدبار */}
      {open && (
        <aside className="w-64 bg-gray-100 border-l p-4 relative">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-gray-800">فهرست مطالب</h2>
            <button
              onClick={() => setOpen(false)}
              className="p-1 text-gray-600 hover:text-red-600"
            >
              <X size={20} />
            </button>
          </div>

          <ul className="space-y-2">
            {Array.from({ length: 7 }).map((_, i) => (
              <li
                key={i}
                className="p-2 bg-white rounded shadow hover:bg-emerald-100 cursor-pointer"
              >
                گزارش {i + 1}
              </li>
            ))}
          </ul>
        </aside>
      )}
    </>
  );
}
