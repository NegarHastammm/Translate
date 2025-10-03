"use client";

import { X } from "lucide-react";
import { useState } from "react";

export default function BookIdentity() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* دکمه شناور */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-emerald-600 text-white px-4 py-2 rounded-full shadow-lg z-30"
      >
        شناسنامه کتاب
      </button>

      {/* باکس شناسنامه */}
      {open && (
        <div className="fixed inset-0 flex justify-end bg-black/40 z-40">
          <div className="bg-white w-80 p-4 shadow-xl relative">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-gray-800">هویت کتاب</h2>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-600 hover:text-red-600"
              >
                <X size={22} />
              </button>
            </div>

            <div className="space-y-3 text-sm text-gray-700">
              <p><strong>نام کتاب:</strong> نمونه</p>
              <p><strong>نویسنده:</strong> فلانی</p>
              <p><strong>سال درگذشت:</strong> ۱۳۶۲</p>
              <p><strong>موضوع:</strong> تاریخ</p>
              <p><strong>سال چاپ:</strong> ۱۴۰۰</p>
              <p><strong>ناشر:</strong> انتشارات X</p>
              <p><strong>زبان:</strong> فارسی</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
