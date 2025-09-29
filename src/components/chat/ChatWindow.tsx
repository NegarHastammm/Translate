
"use client";

import { useState } from "react";
import MessageBubble from "./MessageBubble";
import { Send } from "lucide-react";

interface Message {
  id: number;
  role: "user" | "assistant";
  text: string;
}

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, role: "assistant", text: "سلام! چطور می‌توانم کمکتان کنم؟" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      role: "user",
      text: input,
    };

    setMessages([...messages, newMessage]);
    setInput("");

    // شبیه‌سازی پاسخ مدل GPT
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "assistant",
          text: "این یک پاسخ نمونه از مدل GPT-3.5 است. 📚",
        },
      ]);
    }, 800);
  };

  return (
    <div className="flex flex-col h-full">
      {/* بخش پیام‌ها */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} role={msg.role} text={msg.text} />
        ))}
      </div>

      {/* بخش ورودی */}
      <div className="p-4 border-t bg-white dark:bg-gray-800 flex gap-2">
        <input
          type="text"
          placeholder="پیام خود را بنویسید..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white outline-none"
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg flex items-center justify-center"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}
