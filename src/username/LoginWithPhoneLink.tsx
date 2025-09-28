
import { FC } from "react";
import Link from "next/link";

const LoginWithPhoneLink: FC = () => (
  <div className="text-center mt-2">
    <Link
      href="/login"
      className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
    >
      ورود با شماره موبایل
    </Link>
  </div>
);

export default LoginWithPhoneLink;
