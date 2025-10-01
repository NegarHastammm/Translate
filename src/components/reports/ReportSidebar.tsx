
"use client";

import { useState } from "react";
import NewReportModal from "./NewReportModal";
import ReportList from "./ReportList";

export default function ReportSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-6">
      {/* دکمه ثبت گزارش جدید */}
      <button
        onClick={() => setIsOpen(true)}
        className="w-full bg-green-600 text-white rounded-lg py-2 hover:bg-green-700"
      >
        ثبت گزارش جدید
      </button>

      {/* لیست گزارشات */}
      <div>
        <h3 className="font-bold mb-2">لیست گزارشات (3)</h3>
        <ReportList />
      </div>

      {/* مودال */}
      {isOpen && <NewReportModal onClose={() => setIsOpen(false)} />}
    </div>
  );
}
