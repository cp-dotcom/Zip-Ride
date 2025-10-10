"use client";

import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowLeftIcon } from "lucide-react"; 
import Link from "next/link";

export default function SignUp() {
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!mobile || mobile.length < 10) {
      setError("Please enter a valid mobile number");
      return;
    }
    <Link
  href="/OTP-validation"/>
    setError("");
    alert(`Mobile Number: ${mobile}`);
    router.push("/OTP-varification");
  };

  return (
    <>
    
    <div className="min-h-screen flex flex-col justify-center items-center bg-white relative overflow-hidden ">
   
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-yellow-100 rounded-full blur-2xl opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100 rounded-full blur-2xl opacity-60"></div>

  <Link href="/" className="absolute top-5 left-6 z-10 p-2 bg-white rounded-full hover:bg-gray-100 shadow text-black">
      <ArrowLeftIcon className="w-6 h-6" />
    </Link>
      <div className="z-10 text-center w-80">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome to ZipRide</h1>
        <p className="text-sm text-gray-500 mb-8">
          Enter your mobile number to get started
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter your mobile number"
            className="w-full p-3 bg-gray-50 rounded-xl border shadow-sm focus:outline-none   text-black"
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-semibold p-3 rounded-xl hover:bg-yellow-500 transition-all shadow-md"
          >
            Continue
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="text-gray-400 text-sm px-2">Or Continue With</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <button
          type="button"
          className="flex items-center justify-center w-full bg-gray-50 border shadow-sm p-3 rounded-xl hover:bg-gray-100 transition"
        >
          <FcGoogle size={22} className="mr-2" />
          <span className="font-medium text-gray-700">Continue With Google</span>
        </button>
      </div>
    </div>
    </>
  );
}
