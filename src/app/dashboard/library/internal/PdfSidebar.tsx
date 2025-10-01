
"use client";
interface PdfSidebarProps {
  onClose: () => void;
}

export default function PdfSidebar({ onClose }: PdfSidebarProps) {
  const reports = Array.from({ length: 9 }, (_, i) => `گزارش ${i + 1}`);
  return (
    <div className="w-64 bg-white dark:bg-gray-900 p-4 shadow-lg flex flex-col">
      {/* بالای فهرست */}
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="جست‌وجو..."
          className="flex-1 p-2 border rounded"
        />
        <button onClick={onClose} className="ml-2 p-2 bg-gray-300 rounded">
          ×
        </button>
      </div>

      {/* فهرست مطالب */}
      <div className="flex flex-col gap-2 flex-1 overflow-y-auto">
        <div className="font-bold mb-2">فهرست مطالب</div>
        {reports.map((r) => (
          <div key={r} className="p-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-700">
            {r}
          </div>
        ))}
      </div>
    </div>
  );
}
