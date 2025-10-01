
"use client";

import { useState } from "react";

export default function ReportChat() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-full">
      {/* لیست پیام‌ها */}
      <div className="flex-1 overflow-y-auto border rounded-lg p-4 space-y-2 mb-4">
        {messages.length === 0 && (
          <p className="text-gray-400">گزارش خود را وارد کنید...</p>
        )}
        {messages.map((msg, i) => (
          <div
            key={i}
            className="bg-gray-100 dark:bg-gray-700 p-2 rounded-lg text-sm"
          >
            {msg}
          </div>
        ))}
      </div>

      {/* اینپوت ارسال */}
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="گزارش خود را وارد کنید..."
          className="flex-1 border rounded-l-lg p-2 dark:bg-gray-700"
        />
        <button
          onClick={handleSend}
          className="bg-green-600 text-white px-4 rounded-r-lg hover:bg-green-700"
        >
          ارسال
        </button>
      </div>
    </div>
  );
}
