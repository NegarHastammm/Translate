"use client";

import { useState } from "react";
import { Bell, BellOff } from "lucide-react";

export default function NotificationBell() {
  const [enabled, setEnabled] = useState(false);

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      title={enabled ? "اعلان‌ها فعال هستند" : "اعلان‌ها غیرفعال هستند"}
    >
      {enabled ? (
        <Bell className="text-green-500" size={24} />
      ) : (
        <BellOff className="text-gray-500" size={24} />
      )}
    </button>
  );
}
