
import { FC } from "react";

interface UserAvatarProps {
  name: string;
}

const UserAvatar: FC<UserAvatarProps> = ({ name }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700" />
      <span className="text-gray-800 dark:text-gray-200 font-medium">{name}</span>
    </div>
  );
};

export default UserAvatar;
