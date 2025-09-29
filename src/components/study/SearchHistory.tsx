"use client";

import { useState, useEffect, useRef } from "react";
import { Clock, PenLine,Pin,FileX } from "lucide-react";
interface Result {
  id: number;
  title: string;
}

interface SearchResultsProps {
  results: Result[];
  onDetail: () => void;
}
export default function SearchHistory() {
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  const history = [
    "فقه اسلامی",
    "تاریخ ایران",
    "نهج البلاغه",
    "مولوی",
  ];
    useEffect(() => {
    function handleClickOutside() {
      setOpenMenu(null);
    }

    if (openMenu !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenu]);


  return (
    <div className="mb-4">
      <h3 className="flex items-center gap-2 font-semibold mb-2">
        <Clock size={18} /> تاریخچه جست‌وجو
      </h3>
      <ul className="space-y-2">
        {history.map((item, idx) => (
          <li
            key={idx}
            className="flex justify-between items-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm"
          >
            <span>{item}</span>
            <div className="relative">
              <button
                onClick={() => setOpenMenu(openMenu === idx ? null : idx)}
                className="text-gray-700 dark:text-gray-200 text-xl"
              >
                <i className="fas fa-ellipsis-v"></i>
              </button>
              {openMenu === idx && (
                <div className="absolute left-0 mt-2 w-44 bg-white dark:bg-gray-700 border rounded-lg shadow-lg text-sm z-50">
                  <button className="block w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-left ">
                     ویرایش عنوان  <PenLine size={16}/>
                  </button>
                  <button className="block w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-left">
                     پین کردن<Pin size={16}/>
                  </button>
                  <button className="block w-full px-4 py-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-600 text-left">
                     حذف<FileX size={16} />
                  </button>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
