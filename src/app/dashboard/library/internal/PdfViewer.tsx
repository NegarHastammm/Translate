"use client";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import PdfToolbar from "./PdfToolbar";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PdfViewer() {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);

  return (
    <div className="flex-1 flex flex-col bg-gray-50 dark:bg-gray-900">
      {/* نوار ابزار */}
      <PdfToolbar
        pageNumber={pageNumber}
        numPages={numPages}
        scale={scale}
        setScale={setScale}
        rotate={rotate}
        setRotate={setRotate}
        setPageNumber={setPageNumber}
      />

      {/* نمایش PDF */}
      <div className="flex-1 overflow-auto flex justify-center items-start">
        <Document
          file="/sample.pdf"
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        >
          <Page
            pageNumber={pageNumber}
            scale={scale}
            rotate={rotate}
          />
        </Document>
      </div>
    </div>
  );
}
