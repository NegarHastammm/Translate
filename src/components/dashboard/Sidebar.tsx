
import { FC } from "react";
import { Home, User, Settings, BarChart2, HelpCircle, LogOut } from "lucide-react";
import Link from "next/link";

const Sidebar: FC = () => {
  const links = [
    { href: "/dashboard", label: "خانه", icon: <Home size={20} /> },
    { href: "/dashboard/profile", label: "پروفایل", icon: <User size={20} /> },
    { href: "/dashboard/reports", label: "گزارش‌ها", icon: <BarChart2 size={20} /> },
    { href: "/dashboard/settings", label: "تنظیمات", icon: <Settings size={20} /> },
    { href: "/dashboard/help", label: "راهنما", icon: <HelpCircle size={20} /> },
  ];

  return (
    <div className="w-64 h-screen bg-white dark:bg-gray-900 border-l dark:border-gray-800 flex flex-col justify-between">
      <ul className="p-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200"
            >
              {link.icon}
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="p-4">
        <button className="flex items-center gap-2 w-full p-2 rounded-lg bg-red-600 text-white hover:bg-red-700">
          <LogOut size={20} />
          خروج از سامانه
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
