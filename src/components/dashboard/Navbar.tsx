// components/layout/Navbar.tsx
"use client";

import { Bell, Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

interface NavbarProps {
  onMenuClick?: () => void;
}



export default function Navbar({ onMenuClick }: NavbarProps) {
  const { theme, setTheme } = useTheme();
  const [notifications, setNotifications] = useState(false);

  return (
    <header className="flex justify-between items-center bg-white dark:bg-gray-800 shadow px-4 py-3 sticky top-0 z-30">
      {/* دکمه موبایل (باز کردن سایدبار) */}
      <button
        className="lg:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
        onClick={onMenuClick}
        aria-label="open menu"
      >
        <Menu />
      </button>

      {/* عنوان یا لوگو (دلخواه) */}
      <div className="flex items-center gap-3">
        <span className="text-lg font-bold">اپ من</span>
      </div>

      {/* سمت راست (پروفایل و آیکن‌ها) */}
      <div className="flex items-center gap-4 ml-auto">
  <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
        <button
          className={`p-2 rounded-full ${
            notifications
              ? "bg-green-800 text-white"
              : "hover:bg-gray-100 dark:hover:bg-gray-700"
          }`}
          onClick={() => setNotifications(!notifications)}
          aria-label="notifications"
        >
          <Bell />
        </button>

        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700" />
          <span className="font-medium hidden sm:block">نام کاربر</span>
        </div>
      </div>
    </header>
  );
}
