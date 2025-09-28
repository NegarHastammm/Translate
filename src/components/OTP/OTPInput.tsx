'use client';
import { FC } from "react";
import { useRef } from "react";

interface OTPInputProps {
  length?: number;
}

const OTPInput: FC<OTPInputProps> = ({ length = 5 }) => {
  // آرایه Ref برای input ها
  const inputsRef = useRef<HTMLInputElement[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const value = e.target.value;
    if (/^\d$/.test(value)) {
      if (idx < length - 1) {
        inputsRef.current[idx + 1]?.focus();
      }
    } else {
      e.target.value = "";
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
    if (e.key === "Backspace" && !e.currentTarget.value && idx > 0) {
      inputsRef.current[idx - 1]?.focus();
    }
  };

  return (
    <div className="flex justify-between mt-4 mb-4">
      {Array.from({ length }).map((_, idx) => (
        <input
          key={idx}
          type="text"
          maxLength={1}
          ref={(el) => {
            if (el) inputsRef.current[idx] = el; // assertion درست
          }}
          onChange={(e) => handleChange(e, idx)}
          onKeyDown={(e) => handleKeyDown(e, idx)}
          className="w-12 h-12 text-center border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 text-lg focus:outline-none"
        />
      ))}
    </div>
  );
};

export default OTPInput;
