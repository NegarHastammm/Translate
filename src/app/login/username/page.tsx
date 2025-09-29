// ---- app/login/username/page.tsx ----
import { FC } from "react";
import LogoPlaceholder from "@/components/username/LogoPlaceholder";
import UsernameInput from "@/components/username/UsernameInput";
import PasswordInput from "@/components/username/PasswordInput";
import SubmitUsernamePassword from "@/components/username/SubmitUsernamePassword";
import LoginWithPhoneLink from "@/components/username/LoginWithPhoneLink";

const UsernameLoginPage: FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-50 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-xl rounded-2xl p-8 space-y-6">
        {/* لوگو */}
        <LogoPlaceholder />

        {/* عنوان */}
        <h2 className="text-center text-lg font-medium text-gray-800 dark:text-gray-200">
          ورود به پنل
        </h2>

        {/* فرم نام کاربری و پسورد */}
        <UsernameInput />
        <PasswordInput />
        <SubmitUsernamePassword />

        {/* لینک ورود با شماره موبایل */}
        <LoginWithPhoneLink />
      </div>
    </div>
  );
};

export default UsernameLoginPage;