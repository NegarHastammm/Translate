
"use client";

import { useState } from "react";
import { Plus, Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search:", query);
    // اینجا بعدا میشه وصل به بک‌اند
  };

  return (
    <div className="flex flex-col sm:flex-row gap-2 items-center mb-4">
      <form
        onSubmit={handleSearch}
        className="flex-1 flex items-center border rounded-lg bg-white dark:bg-gray-800 shadow-sm"
      >
        <input
          type="text"
          placeholder="جست‌وجوی هوشمند..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-3 py-2 bg-transparent outline-none text-sm"
        />
        <button type="submit" className="px-3 py-2">
          <Search size={18} />
        </button>
      </form>

      <button
        onClick={() => router.push("/chat")}
        className="flex items-center gap-2 px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800"
      >
        <Plus size={18} /> چت جدید
      </button>
    </div>
  );
}
