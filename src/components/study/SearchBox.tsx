
export default function SearchBox() {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow text-end">
      <h3 className="text-lg font-bold mb-3">جست‌وجوی هوشمند</h3>
      <input
        type="text"
        placeholder="...عبارت مورد نظر را وارد کنید"
        className="w-full border p-2 rounded-md text-end"
      />
      <button className="mt-3 w-full py-2 bg-green-700 text-white rounded-lg hover:bg-green-900">
        جستجو
      </button>
    </div>
  );
}
