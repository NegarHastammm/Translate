
import { FC } from "react";
import UserAvatar from "./UserAvatar";
import DarkModeToggle from "./DarkModeToggle";
import NotificationBell from "./NotificationBell";

const Navbar: FC = () => {
  return (
    <div className="w-full flex items-center justify-between p-4 bg-white dark:bg-gray-900 border-b dark:border-gray-800">
      {/* سمت راست */}
      <UserAvatar name="علی رضایی" />

      {/* سمت چپ */}
      <div className="flex items-center gap-4">
        <DarkModeToggle />
        <NotificationBell />
      </div>
    </div>
  );
};


export default Navbar;
