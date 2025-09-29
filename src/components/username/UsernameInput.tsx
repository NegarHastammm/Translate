import { FC } from "react";

const UsernameInput: FC = () => (
  <div className="form-control w-full">
    <label className="w-full text-right mb-2">
      <span className="text-base font-medium dark:text-gray-200">نام کاربری</span>
    </label>
    <div className="bg-white dark:bg-gray-800 border rounded-xl p-2 shadow-sm">
      <input
        type="text"
        placeholder="نام کاربری"
        className="w-full focus:outline-none bg-transparent dark:text-white text-gray-800 px-2 py-2"
      />
    </div>
  </div>
);

export default UsernameInput;
