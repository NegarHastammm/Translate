
import { FC } from "react";

const ContentGrid: FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="h-32 bg-gray-200 dark:bg-gray-700 rounded-xl shadow-sm"
          />
        ))}
      </div>
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="h-32 bg-gray-200 dark:bg-gray-700 rounded-xl shadow-sm"
          />
        ))}
      </div>
    </div>
  );
};

export default ContentGrid;
