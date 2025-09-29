
import { FC } from "react";
import { HelpCircle, LogOut, BookMarked , ChartSpline,  LayoutDashboard} from "lucide-react";
import Link from "next/link";
interface SidebarProps {
  onLinkClick?: () => void; // تابعی برای بستن سایدبار
}
export default function Sidebar({ onLinkClick }: SidebarProps) {
  return (
    <nav className="flex flex-col gap-4">
      <Link href="/dashboard" onClick={onLinkClick} className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
        <LayoutDashboard size={20} /> داشبورد
      </Link>
      <Link href="/study" onClick={onLinkClick} className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
        <BookMarked size={20} /> کتابخانه هوشمند
      </Link>
      <Link href="/notifications" onClick={onLinkClick} className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
        <ChartSpline size={20} /> گزارشگیری و آمار
      </Link>
      <Link href="/settings" onClick={onLinkClick} className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
        <HelpCircle size={20} /> گزارش خطا و پیشنهاد
      </Link>
      <Link href="/logout" className="flex items-center gap-2 p-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700">
        <LogOut size={20} /> خروج از حساب کاربری
      </Link>
 

    </nav>
  );
}
