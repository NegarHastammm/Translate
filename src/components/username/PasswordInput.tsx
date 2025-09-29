import { FC } from "react";

const PasswordInput: FC = () => (
  <div className="form-control w-full">
    <label className="w-full text-right mb-2">
      <span className="text-base font-medium dark:text-gray-200">رمز عبور</span>
    </label>
    <div className="bg-white dark:bg-gray-800 border rounded-xl p-2 shadow-sm">
      <input
        type="password"
        placeholder="رمز عبور"
        className="w-full focus:outline-none bg-transparent dark:text-white text-gray-800 px-2 py-2"
      />
    </div>
  </div>
);

export default PasswordInput;
