"use client";
import { FC } from "react";
import { HelpCircle, LogOut, BookMarked , ChartSpline,  LayoutDashboard, FileText, BookOpen, ChevronLeft,FileWarning, } from "lucide-react";
import Link from "next/link";
import SidebarSubmenu from "./SidebarSubmenu";
import { useState } from "react";
interface SidebarProps {
  onClose?: () => void;
}
export default function DashboardSidebar({ onClose }: SidebarProps) {
  const handleItemClick = () => {
    if (onClose) onClose();
    };
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [isMobileSubmenuOpen, setIsMobileSubmenuOpen] = useState(false);
    const [isDesktopSubmenuOpen, setIsDesktopSubmenuOpen] = useState(false);
  return (
    <nav className="flex flex-col gap-4">
      <Link href="/dashboard" onClick={handleItemClick} className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
        <LayoutDashboard size={20} /> داشبورد
      </Link>
{/* کتابخانه هوشمند */}
        <div
          className="relative"
          onMouseEnter={() => setIsDesktopSubmenuOpen(true)}
          onMouseLeave={() => setIsDesktopSubmenuOpen(false)}
        >
          {/* دسکتاپ */}
          <div className="hidden lg:flex items-center gap-2 cursor-pointer">
            <BookOpen size={20} />
            کتابخانه هوشمند
            <ChevronLeft
              size={16}
              className={`ml-auto transition-transform ${
                isDesktopSubmenuOpen ? "-rotate-90" : ""
              }`}
            />
          </div>
          {isDesktopSubmenuOpen && (
            <div className="absolute right-full top-0 flex-col bg-white dark:bg-gray-800 shadow-lg rounded-md p-2 w-48 hidden lg:flex">
              <SidebarSubmenu />
            </div>
          )}

          {/* موبایل */}
          <button
            className="flex lg:hidden items-center gap-2 w-full hover:text-green-600"
            onClick={() => setIsMobileSubmenuOpen(!isMobileSubmenuOpen)}
          >
            <BookOpen size={20} />
            کتابخانه هوشمند
            <ChevronLeft
              size={16}
              className={`ml-auto transition-transform ${
                isMobileSubmenuOpen ? "-rotate-90" : ""
              }`}
            />
          </button>
          {isMobileSubmenuOpen && (
            <div className="lg:hidden mt-2 pl-6">
              <SidebarSubmenu />
            </div>
          )}
        </div>
      <Link href="/notifications" onClick={handleItemClick} className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
        <ChartSpline size={20} /> گزارشگیری و آمار
      </Link>
    <Link
        href="/reports"
        onClick={handleItemClick}
        className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        <FileText size={18} />
        گزارش خطا و پیشنهاد
      </Link>
      <Link href="/logout" className="flex items-center gap-2 p-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700">
        <LogOut size={20} /> خروج از حساب کاربری
      </Link>



    </nav>
  );
}
