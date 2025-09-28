
import { FC } from "react";

const PhoneInput: FC = () => (
  <label className="form-control w-full">
    <div className="w-full text-right mb-2">
      <span className=" text-base font-medium dark:text-gray-200">
        شماره تلفن خود را وارد کنید
      </span>
    </div>
    <div className="flex items-center border rounded-lg overflow-hidden bg-white dark:bg-gray-800 dark:border-gray-700">
      <span className="px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm whitespace-nowrap">
        +98
      </span>
      <input
        type="tel"
        maxLength={10}
        placeholder="9123456789"
        className="input input-bordered w-full focus:outline-none dark:bg-gray-800 dark:text-white px-3"
      />
    </div>
  </label>
);

export default PhoneInput;
