"use client";

interface BookDetailModalProps {
  onClose: () => void;
}

export default function BookDetailModal({ onClose }: BookDetailModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 🔹 پس‌زمینه کدر */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>

      {/* 🔹 باکس اصلی */}
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg w-11/12 sm:w-3/4 md:w-1/2 lg:w-2/5 p-6 z-10">
        <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-100">
          هویت کتاب
        </h2>

        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              نام کتاب
            </label>
            <input
              type="text"
              className="w-full border rounded-lg p-2 dark:bg-gray-700 dark:text-white"
              placeholder="نام کتاب..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              نویسنده
            </label>
            <input
              type="text"
              className="w-full border rounded-lg p-2 dark:bg-gray-700 dark:text-white"
              placeholder="نام نویسنده..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              سال درگذشت نویسنده
            </label>
            <input
              type="number"
              className="w-full border rounded-lg p-2 dark:bg-gray-700 dark:text-white"
              placeholder="مثلا 1362"
            />
          </div>

          {/* 📚 بقیه فیلدها به همین ترتیب */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              موضوع
            </label>
            <input
              type="text"
              className="w-full border rounded-lg p-2 dark:bg-gray-700 dark:text-white"
              placeholder="موضوع..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              سال چاپ
            </label>
            <input
              type="number"
              className="w-full border rounded-lg p-2 dark:bg-gray-700 dark:text-white"
              placeholder="مثلا 1402"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              ناشر
            </label>
            <input
              type="text"
              className="w-full border rounded-lg p-2 dark:bg-gray-700 dark:text-white"
              placeholder="نام ناشر..."
            />
          </div>

          {/* دکمه */}
          <button className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 mt-4">
            مطالعه
          </button>
        </div>

        {/* ❌ دکمه بستن */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
        >
          ✖
        </button>
      </div>
    </div>
  );
}
