
"use client";
interface ToolbarProps {
  pageNumber: number;
  numPages: number;
  scale: number;
  setScale: (v: number) => void;
  rotate: number;
  setRotate: (v: number) => void;
  setPageNumber: (v: number) => void;
}

export default function PdfToolbar({
  pageNumber,
  numPages,
  scale,
  setScale,
  rotate,
  setRotate,
  setPageNumber,
}: ToolbarProps) {
  return (
    <div className="flex items-center justify-between bg-gray-200 dark:bg-gray-700 p-2">
      <div className="flex gap-2">
        <button onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}>⬅️</button>
        <span>
          {pageNumber} / {numPages}
        </span>
        <button onClick={() => setPageNumber(Math.min(numPages, pageNumber + 1))}>➡️</button>
      </div>

      <div className="flex gap-2">
        <button onClick={() => setScale(scale + 0.2)}>➕</button>
        <button onClick={() => setScale(Math.max(0.6, scale - 0.2))}>➖</button>
        <button onClick={() => setRotate(rotate + 90)}>🔄</button>
        <button onClick={() => window.print()}>🖨️</button>
        <button onClick={() => window.open("/sample.pdf")}>⬇️</button>
        <button onClick={() => document.documentElement.requestFullscreen()}>⛶</button>
      </div>
    </div>
  );
}
