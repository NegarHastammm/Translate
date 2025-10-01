
"use client";

interface Props {
  onClose: () => void;
}

export default function NewReportModal({ onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl w-11/12 md:w-1/2 p-6 relative">
        {/* هدر */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">ثبت گزارش جدید</h2>
          <button onClick={onClose} className="text-xl font-bold">
            ✕
          </button>
        </div>

        {/* فرم */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="عنوان گزارش"
            className="w-full border rounded-lg p-2 dark:bg-gray-700"
          />
          <textarea
            placeholder="متن گزارش"
            rows={4}
            className="w-full border rounded-lg p-2 dark:bg-gray-700"
          />
          <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
            ثبت یادداشت
          </button>
        </div>
      </div>
    </div>
  );
}
