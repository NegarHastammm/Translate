
"use client";
interface BookIdentityProps {
  onClose: () => void;
}
export default function BookIdentity({ onClose }: BookIdentityProps) {
  return (
    <div className="fixed top-20 left-1/3 w-1/3 bg-white dark:bg-gray-900 p-4 shadow-lg rounded z-50">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-lg">شناسنامه کتاب</h3>
        <button onClick={onClose}>×</button>
      </div>
      <div className="flex flex-col gap-2">
        <div>نام کتاب: ...</div>
        <div>نویسنده: ...</div>
        <div>سال درگذشت نویسنده: ...</div>
        <div>موضوع: ...</div>
        <div>سال چاپ: ...</div>
        <div>ناشر: ...</div>
        <div>نوبت چاپ: ...</div>
        <div>زبان: ...</div>
      </div>
    </div>
  );
}
