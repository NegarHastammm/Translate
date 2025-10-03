"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Menu, FileText, ZoomIn, ZoomOut, RotateCcw, Maximize } from "lucide-react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;





// BookIdentity Props
interface BookIdentityProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const BookIdentity = ({ open, setOpen }: BookIdentityProps) => {
  if (!open) return null;
  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white shadow-lg rounded p-4 w-64">

      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold text-emerald-700">شناسنامه کتاب</h3>
        <button onClick={() => setOpen(false)} className="text-gray-500 hover:text-red-500">×</button>
      </div>
      <ul className="space-y-1 text-sm text-gray-700">
        <li>نام کتاب: ...</li>
        <li>نویسنده: ...</li>
        <li>سال درگذشت نویسنده: ...</li>
        <li>موضوع: ...</li>
        <li>سال چاپ: ...</li>
        <li>ناشر: ...</li>
        <li>نوبت چاپ: ...</li>
        <li>زبان: ...</li>
      </ul>
    </div>
  );
};

export default function LibraryPage() {
  
  const [tocOpen, setTocOpen] = useState(false);
  const [bookIdentityOpen, setBookIdentityOpen] = useState(false);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => setNumPages(numPages);

  return (
    <DashboardLayout>
    <div className="flex h-screen bg-gray-50 relative">
     
      {/* دکمه همبرگری موبایل */}
     

      {/* Sidebar */}
      

      {/* Main content */}
      <div className="flex-1 flex flex-col">

        {/* Navbar */}
        <header className="w-full  bg-white border-b p-4 flex justify-between items-center shadow-sm ">
          <h1 className="font-bold text-emerald-700 text-lg">مطالعه آنلاین</h1>
          <button onClick={() => setTocOpen(!tocOpen)} className="fixed top-4 right-4 z-50 bg-emerald-600 text-white px-4 py-2 rounded-lg shadow-lg md:static md:relative flex items-center gap-1">
            <FileText size={18} />
            <span>فهرست مطالب</span>
          </button>
        </header>

        {/* PDF Viewer */}
        <main className="flex-1 flex flex-col items-center justify-center p-4 overflow-auto">
          <div className="bg-white shadow rounded-lg p-4 w-full max-w-4xl flex flex-col items-center">

            {/* Controls */}
            <div className="flex gap-3 mb-4">
              <button onClick={() => setScale(scale + 0.2)} className="p-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"><ZoomIn size={18} /></button>
              <button onClick={() => setScale(scale - 0.2)} className="p-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"><ZoomOut size={18} /></button>
              <button onClick={() => setScale(1)} className="p-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"><RotateCcw size={18} /></button>
              <button onClick={() => window.open("/sample.pdf", "_blank")} className="p-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"><Maximize size={18} /></button>
            </div>

            {/* PDF */}
            <Document file="/sample.pdf" onLoadSuccess={onDocumentLoadSuccess} className="flex flex-col items-center">
              <Page pageNumber={pageNumber} scale={scale} />
            </Document>

            {/* Pagination */}
            {numPages && (
              <div className="flex items-center gap-3 mt-4">
                <button disabled={pageNumber <= 1} onClick={() => setPageNumber(pageNumber - 1)} className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50">قبلی</button>
                <span>صفحه {pageNumber} از {numPages}</span>
                <button disabled={pageNumber >= numPages} onClick={() => setPageNumber(pageNumber + 1)} className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50">بعدی</button>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Table of Contents */}
      {tocOpen && (
        <div className="  right-4 w-64 bg-white shadow-lg rounded p-4 z-40">
          <h2 className="font-bold text-gray-700 mb-2">فهرست مطالب</h2>
          <ul className="space-y-2">
            {Array.from({ length: 9 }).map((_, i) => (
              <li key={i} className="p-2 border rounded hover:bg-emerald-100">گزارش {i + 1}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Book Identity */}
      <BookIdentity open={bookIdentityOpen} setOpen={setBookIdentityOpen} />

      {/* دکمه باز کردن شناسنامه */}
      {!bookIdentityOpen && (
        <button onClick={() => setBookIdentityOpen(true)} className="fixed bottom-4 right-4 z-50 bg-emerald-600 text-white px-4 py-2 rounded-lg shadow-lg">
          شناسنامه کتاب
        </button>
      )}
    </div>
    </DashboardLayout>
  );
}
