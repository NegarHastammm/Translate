
"use client";
import { useState } from "react";
import Link from "next/link";
import { LayoutDashboard, BookOpen, FileWarning, LogOut } from "lucide-react";
import SidebarSubmenu from "./SidebarSubmenu";

export default function Sidebar({ onClose }: { onClose?: () => void }) {
  const [openSubmenu, setOpenSubmenu] = useState(false);

  return (
    <aside className="w-64 bg-white dark:bg-gray-900 shadow-lg h-screen fixed lg:static right-0 top-0 p-4">
      <nav className="flex flex-col gap-4">
        {/* لینک داشبورد */}
        <Link href="/dashboard" className="flex items-center gap-2 hover:text-green-600">
          <LayoutDashboard size={20} />
          داشبورد
        </Link>

        {/* لینک کتابخانه هوشمند */}
        <button
          onClick={() => setOpenSubmenu(!openSubmenu)}
          className="flex items-center gap-2 hover:text-green-600"
        >
          <BookOpen size={20} />
          کتابخانه هوشمند
        </button>
        {openSubmenu && <SidebarSubmenu />}

        {/* لینک گزارش خطا */}
        <Link href="/dashboard/reports" className="flex items-center gap-2 hover:text-green-600">
          <FileWarning size={20} />
          گزارش‌ها
        </Link>

        {/* خروج */}
        <Link href="/" className="flex items-center gap-2 text-red-500 mt-auto">
          <LogOut size={20} />
          خروج
        </Link>
      </nav>
    </aside>
  );
}
