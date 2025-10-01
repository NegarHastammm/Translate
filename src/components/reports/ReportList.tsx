"use client";

import { useState } from "react";
import { MoreVertical, Edit, Pin, Trash } from "lucide-react";



export default function ReportList() {
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  const reports = [
    { id: 1, title: "خطای لاگین" },
    { id: 2, title: "پیشنهاد برای داشبورد" },
    { id: 3, title: "باگ در مطالعه آنلاین" },
  ];

  return (
    <ul className="space-y-2 relative">
      {reports.map((report) => (
        <li
          key={report.id}
          className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg flex justify-between items-center"
        >
          <span>{report.title}</span>

          {/* آیکون سه نقطه */}
          <div className="relative">
            <button
              onClick={() =>
                setOpenMenu(openMenu === report.id ? null : report.id)
              }
              className="p-1 hover:bg-gray-300 dark:hover:bg-gray-600 rounded"
            >
              <MoreVertical size={18} />
            </button>

            {/* منو */}
            {openMenu === report.id && (
              <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 shadow-lg rounded-lg z-10">
                <button className="flex items-center gap-2 w-full p-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Edit size={14} /> ویرایش عنوان
                </button>
                <button className="flex items-center gap-2 w-full p-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Pin size={14} /> پین کردن
                </button>
                <button className="flex items-center gap-2 w-full p-2 text-sm text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Trash size={14} /> حذف
                </button>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
