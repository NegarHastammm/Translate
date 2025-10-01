import Link from "next/link";
import { Album,SquareCode,NotebookText,Search } from 'lucide-react';
export default function SidebarSubmenu() {
  return (
    <div className="flex flex-col gap-2 text-sm text-gray-700 dark:text-gray-200">
      <Link href="/dashboard/library/internal" className="hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded">
        صفحه داخلی
        <Album size={12} />
      </Link>
      <Link href="/dashboard/library/resources" className="hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded">
        مدیریت منابع<SquareCode size={12}/>
      </Link>
      <Link href="/dashboard/library/notes" className="hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded">
        یادداشت‌های من<NotebookText size={12} />
      </Link>
      <Link href="/dashboard/library/search" className="hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded">
        جست‌وجوی هوشمند<Search size={12}/>
      </Link>
    </div>
  );
}
