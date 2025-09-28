
import { FC } from "react";

const TopImages: FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="h-40 bg-gray-200 dark:bg-gray-700 rounded-xl shadow-sm"
        />
      ))}
    </div>
  );
};

export default TopImages;
