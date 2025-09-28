
import { FC } from "react";
import Link from "next/link";

const AlternateLoginLink: FC = () => (
  <div className="text-center mt-2">
    <Link
      href="/login/username"
      className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
    >
      ورود با نام کاربری و رمز عبور
    </Link>
  </div>
);

export default AlternateLoginLink;
