
import { FC } from "react";
import LogoPlaceholder from "@/components/auth/LogoPlaceholder";
import PhoneInput from "@/components/auth/PhoneInput";
import SubmitButton from "@/components/auth/SubmitButton";
import AlternateLoginLink from "@/components/auth/AlternateLoginLink";

const LoginPage: FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-50 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-xl rounded-2xl p-8 space-y-6">
        <LogoPlaceholder />
        <PhoneInput />
        <SubmitButton />
        <AlternateLoginLink />
      </div>
    </div>
  );
};

export default LoginPage;
