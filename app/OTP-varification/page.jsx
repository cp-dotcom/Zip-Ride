"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function VerifyOtp() {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [timer, setTimer] = useState(59);
  const inputRefs = useRef([]);
  const router = useRouter();

  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);


    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    if (!value && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = otp.join("");
    if (code.length < 6 || otp.includes("")) {
      alert("Please enter the full 6-digit code");
      return;
    }
    alert(`Verification successful! Code: ${code}`);
  };

  const handleResend = () => {
    setTimer(59);
    setOtp(Array(6).fill(""));
    alert("New OTP sent!");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white relative overflow-hidden">

      <div className="absolute -top-20 -left-20 w-96 h-96 bg-yellow-100 rounded-full blur-2xl opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100 rounded-full blur-2xl opacity-60"></div>


      <Link
        href="/signup"
        className="absolute top-10 left-8 text-black hover:text-black"
      >
        <ArrowLeft size={24} />
      </Link>


      <div className="z-10 text-center w-80">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Enter Verification Code
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          We've sent a 6-digit code to your email. Please enter it below to continue.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="flex justify-between mb-8">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                className="w-12 h-12 text-center border rounded-lg focus:outline-none focus:ring-1 focus:ring-black text-black"
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-semibold p-3 rounded-xl hover:bg-yellow-500 transition-all shadow-md"
          >
            Continue
          </button>
        </form>


        <p className="mt-4 text-sm text-gray-500">
          Code expires in{" "}
          <span className="font-semibold text-gray-800">
            00:{timer.toString().padStart(2, "0")}
          </span>
        </p>


        {timer === 0 && (
          <p className="mt-2 text-sm text-gray-700">
            Didn't receive the code?{" "}
            <button
              onClick={handleResend}
              className="text-yellow-500 font-semibold hover:underline"
            >
              Resend Code
            </button>
          </p>
        )}
      </div>
    </div>
  );
}
