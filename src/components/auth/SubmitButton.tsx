import { FC } from "react";
import Link from "next/link";

const SubmitLink: FC = () => (
  <Link
    href="/otp"
    className="block w-full rounded-xl bg-green-700 text-white text-center py-2 font-medium hover:bg-green-800 transition mt-6"
  >
    ارسال پیامک
  </Link>
);

export default SubmitLink;