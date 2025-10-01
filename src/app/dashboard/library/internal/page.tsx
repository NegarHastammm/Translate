"use client";
import { useState } from "react";
import PdfViewer from "./PdfViewer";
import PdfSidebar from "./PdfSidebar";
import BookIdentity from "./BookIdentity";

export default function InternalPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isBookIdentityOpen, setIsBookIdentityOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* محتوا اصلی با سایدبار ثابت */}
      <div className="flex flex-1 overflow-hidden">
        {/* PdfViewer */}
        <div className="flex-1 bg-gray-100 dark:bg-gray-800 p-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-bold">بررسی پی‌دی‌اف</h2>
            <button
              className="lg:hidden p-2 bg-gray-300 rounded"
              onClick={() => setIsBookIdentityOpen(!isBookIdentityOpen)}
            >
              |||
            </button>
          </div>
          <PdfViewer />
        </div>

        {/* PdfSidebar */}
        {isSidebarOpen && (
          <PdfSidebar onClose={() => setIsSidebarOpen(false)} />
        )}

        {/* BookIdentity */}
        {isBookIdentityOpen && <BookIdentity onClose={() => setIsBookIdentityOpen(false)} />}
      </div>
    </div>
  );
}
