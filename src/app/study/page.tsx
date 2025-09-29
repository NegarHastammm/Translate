"use client";
import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout"
import StudyHeader from "@/components/study/StudyHeader";
import PdfGrid from "@/components/study/PdfGrid";
import SearchBox from "@/components/study/SearchBox";
import SearchBar from "@/components/study/SearchBar";
import SearchHistory from "@/components/study/SearchHistory";

import BookDetail from "@/components/study/BookDetail";
export default function StudyPage() {
    const [showDetail, setShowDetail] = useState(false);
      const pdfs = [
    { id: 1, title: "کتاب فارسی" },
    { id: 2, title: "کتاب عربی" },
    { id: 3, title: "کتاب انگلیسی" },
  ];
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* بخش سمت راست */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <StudyHeader />
    {!showDetail ? (
        <PdfGrid results={pdfs} onDetail={() => setShowDetail(true)} />
      ) : (
        <BookDetail onClose={() => setShowDetail(false)} />
      )}
        </div>

        {/* بخش سمت چپ (جستجوی هوشمند) */}
        <div className="lg:col-span-1">
          <SearchBox />
        </div>
        <div className="p-4 space-y-6">
      <SearchBar />
      <SearchHistory />

     
    </div>
      </div>
      
    </DashboardLayout>
    
  );
}
