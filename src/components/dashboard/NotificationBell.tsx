
import { FC } from "react";
import { Bell } from "lucide-react";

const NotificationBell: FC = () => {
  return (
    <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200">
      <Bell size={20} />
    </button>
  );
};

export default NotificationBell;
