
import { FC } from "react";
import LogoPlaceholder from "@/components/auth/LogoPlaceholder";
import OTPInput from "@/components/OTP/OTPInput";
import SubmitOTP from "@/components/OTP/SubmitOTP";
import AlternateLoginLink from "@/components/auth/AlternateLoginLink";

const OTPPage: FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-50 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-xl rounded-2xl p-8 space-y-6">
        <LogoPlaceholder />
        <h2 className="text-center text-lg font-medium text-gray-800 dark:text-gray-200">
          کد تایید را وارد کنید
        </h2>

        <OTPInput />

        <SubmitOTP />

        <AlternateLoginLink />
      </div>
    </div>
  );
};

export default OTPPage;
