"use client";

import { useState } from "react";
import Navbar from "@/components/dashboard/Navbar"
import Sidebar from "@/components/dashboard/Sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* سایدبار دسکتاپ (ثابت در سمت راست) */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:right-0 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 p-4">
        <Sidebar /> {/* دسکتاپ نیازی به onLinkClick نداره */}
      </aside>

      {/* سایدبار موبایل (Drawer) */}
      {sidebarOpen && (
        <>
          {/* بک‌گراند شفاف */}
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setSidebarOpen(false)}
          />
          {/* پنل سایدبار */}
          <aside className="fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 z-50 p-4 shadow-xl">
            <Sidebar onLinkClick={() => setSidebarOpen(false)} /> 
          </aside>
        </>
      )}

      {/* بخش اصلی */}
      <div className="flex flex-col flex-1 lg:mr-64">
        {/* نوبار بالا */}
        <Navbar onMenuClick={() => setSidebarOpen(true)} />

        {/* محتوای جاری */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
