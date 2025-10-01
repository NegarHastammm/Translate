
"use client";
export default function PdfViewer() {
  return (
    <div className="bg-white dark:bg-gray-700 h-full rounded shadow flex flex-col">
      {/* بالا ابزارها */}
      <div className="flex items-center justify-between p-2 border-b">
        <div className="flex gap-2">
          <button className="p-1 border rounded">B</button>
          <button className="p-1 border rounded">I</button>
          <button className="p-1 border rounded">U</button>
          <button className="p-1 border rounded">🔄</button>
        </div>
        <div>صفحه: 1 / 10</div>
      </div>
      {/* محتوای PDF */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-gray-400">نمایشگر PDF اینجا خواهد بود</div>
      </div>
    </div>
  );
}
