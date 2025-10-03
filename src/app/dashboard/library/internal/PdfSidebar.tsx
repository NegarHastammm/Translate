"use client";
export default function PdfSidebar() {
  const reports = Array.from({ length: 5 }, (_, i) => `گزارش ${i + 1}`);
  return (
    <div className="w-64 bg-white dark:bg-gray-800 border-l p-4 flex flex-col">
      <h3 className="font-bold mb-2">گزارش‌ها</h3>
      <div className="flex-1 overflow-y-auto space-y-2">
        {reports.map((r) => (
          <div key={r} className="p-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-700">
            {r}
          </div>
        ))}
      </div>
    </div>
  );
}
