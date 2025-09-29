
"use client";

interface FilterDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function FilterDrawer({ open, onClose }: FilterDrawerProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* بک‌گراند */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      ></div>

      {/* پنل فیلتر */}
      <div className="relative bg-white dark:bg-gray-900 w-80 h-full p-6 overflow-y-auto">
        <h3 className="text-lg font-bold mb-4">
          مرتب‌سازی لیست بر اساس
        </h3>

        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="نام کتاب"
            className="border p-2 rounded-md"
          />
          <input
            type="text"
            placeholder="نام نویسنده"
            className="border p-2 rounded-md"
          />
          <input
            type="text"
            placeholder="ناشر"
            className="border p-2 rounded-md"
          />

          {/* سال وفات */}
          <div>
            <label className="text-sm font-medium">سال وفات</label>
            <div className="flex gap-2 mt-1">
              <input
                type="number"
                placeholder="از"
                className="border p-2 rounded-md w-1/2"
              />
              <input
                type="number"
                placeholder="تا"
                className="border p-2 rounded-md w-1/2"
              />
            </div>
          </div>

          <input
            type="text"
            placeholder="موضوع"
            className="border p-2 rounded-md"
          />
          <input
            type="text"
            placeholder="تاریخ انتشار در کتابخانه"
            className="border p-2 rounded-md"
          />

          {/* زبان */}
          <div>
            <label className="text-sm font-medium">زبان</label>
            <div className="flex gap-2 mt-2">
              {["فارسی", "عربی", "انگلیسی"].map((lang) => (
                <button
                  key={lang}
                  className="px-3 py-1 border rounded-md hover:bg-amber-200"
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          {/* سایر فیلترها */}
          <div className="flex flex-col gap-2 mt-3">
            <label className="flex items-center gap-2">
              <input type="checkbox" /> حتما دارای متن
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> حتما دارای PDF
            </label>
          </div>

          {/* دکمه اعمال فیلتر */}
          <button className="mt-4 w-full py-2 bg-green-700 text-white rounded-lg hover:bg-green-800">
            اعمال فیلتر
          </button>
        </div>
      </div>
    </div>
  );
}
