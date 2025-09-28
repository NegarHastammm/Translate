
import { FC } from "react";
import Link from "next/link";

const SubmitOTP: FC = () => (
  <Link
    href="/dashboard"
    className="block w-full rounded-xl bg-green-700 text-white text-center py-3 font-medium hover:bg-green-800 transition"
  >
    تایید
  </Link>
);

export default SubmitOTP;
