
import ReportSidebar from "@/components/reports/ReportSidebar";
import ReportChat from "@/components/reports/ReportChat";

export default function ReportsPage() {
  return (
    <div className="flex flex-col md:flex-row h-full">
      {/* ستون سمت راست */}
      <aside className="w-full md:w-1/3 border-l p-4">
        <ReportSidebar />
      </aside>

      {/* بخش اصلی */}
      <main className="flex-1 p-4">
        <ReportChat />
      </main>
    </div>
  );
}
