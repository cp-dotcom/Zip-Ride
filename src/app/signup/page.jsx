// "use client";

// import React, { useState } from "react";
// import { FcGoogle } from "react-icons/fc";
// import { useRouter } from "next/navigation";
// import { ArrowLeft, ArrowLeftIcon } from "lucide-react"; 
// import Link from "next/link";

// export default function SignUp() {
//   const [mobile, setMobile] = useState("");
//   const [error, setError] = useState("");
//   const router = useRouter();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!mobile || mobile.length < 10) {
//       setError("Please enter a valid mobile number");
//       return;
//     }
//     <Link
//   href="/OTP-validation"/>
//     setError("");
//     alert(`Mobile Number: ${mobile}`);
//     router.push("/OTP-varification");
//   };

//   return (
//     <>
    
//     <div className="min-h-screen flex flex-col justify-center items-center bg-white relative overflow-hidden ">
   
//       <div className="absolute -top-20 -left-20 w-96 h-96 bg-yellow-100 rounded-full blur-2xl opacity-60"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100 rounded-full blur-2xl opacity-60"></div>

//   <Link href="/" className="absolute top-5 left-6 z-10 p-2 bg-white rounded-full hover:bg-gray-100 shadow text-black">
//       <ArrowLeftIcon className="w-6 h-6" />
//     </Link>
//       <div className="z-10 text-center w-80">
//         <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome to ZipRide</h1>
//         <p className="text-sm text-gray-500 mb-8">
//           Enter your mobile number to get started
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="tel"
//             value={mobile}
//             onChange={(e) => setMobile(e.target.value)}
//             placeholder="Enter your mobile number"
//             className="w-full p-3 bg-gray-50 rounded-xl border shadow-sm focus:outline-none   text-black"
//           />

//           {error && <p className="text-red-500 text-sm">{error}</p>}

//           <button
//             type="submit"
//             className="w-full bg-yellow-400 text-black font-semibold p-3 rounded-xl hover:bg-yellow-500 transition-all shadow-md"
//           >
//             Continue
//           </button>
//         </form>

//         <div className="flex items-center my-6">
//           <div className="flex-grow h-px bg-gray-300"></div>
//           <span className="text-gray-400 text-sm px-2">Or Continue With</span>
//           <div className="flex-grow h-px bg-gray-300"></div>
//         </div>

//         <button
//           type="button"
//           className="flex items-center justify-center w-full bg-gray-50 border shadow-sm p-3 rounded-xl hover:bg-gray-100 transition"
//         >
//           <FcGoogle size={22} className="mr-2" />
//           <span className="font-medium text-gray-700">Continue With Google</span>
//         </button>
//       </div>
//     </div>
//     </>
//   );
// }


// "use client";
// import React, { useState } from "react";
// import { FcGoogle } from "react-icons/fc";
// import { useRouter } from "next/navigation";
// import { ArrowLeftIcon } from "lucide-react";
// import Link from "next/link";
// import { useTranslation } from "react-i18next";
// import PhoneInput from "react-phone-input-2";
// import 'react-phone-input-2/lib/style.css'; // required for flags

// export default function SignUp() {
//   const [mobile, setMobile] = useState("");
//   const [error, setError] = useState("");
//   const router = useRouter();
//   const { t } = useTranslation();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted");
//     if (!mobile || mobile.length < 10) {
//       setError(t("signUp.invalidMobile") || "Please enter a valid mobile number");
//       return;
//     }
//     setError("");
//     alert(t("signUp.mobileNumber", { mobile }) || `Mobile: ${mobile}`);
//     router.push("auth/verifyOtp"); // path to your OTP page
//   };

//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center bg-white relative overflow-hidden">
//       {/* Background circles */}
//       <div className="absolute -top-20 -left-20 w-96 h-96 bg-yellow-100 rounded-full blur-2xl opacity-60"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100 rounded-full blur-2xl opacity-60"></div>

//       {/* Back button */}
//       <Link
//         href="/"
//         className="absolute top-5 left-6 z-10 p-2 bg-white rounded-full hover:bg-gray-100 shadow text-black"
//         aria-label={t("signUp.back") || "Back"}
//       >
//         <ArrowLeftIcon className="w-6 h-6" />
//       </Link>

//       {/* Form container */}
//       <div className="z-10 text-center w-80">
//         <h1 className="text-2xl font-bold text-gray-900 mb-2">{t("signUp.welcome") || "Welcome to ZipRide"}</h1>
//         <p className="text-sm text-gray-500 mb-8">{t("signUp.enterMobile") || "Enter your mobile number to get started"}</p>

//         {/* Phone input form */}
//         <form onSubmit={handleSubmit} className="space-y-4 w-full">
//           <PhoneInput
//   country={'in'} // default country (India)
//   value={mobile}
//   onChange={(phone) => setMobile(phone)}
//   inputClass="w-full p-3 bg-gray-50 rounded-xl border shadow-sm focus:outline-none text-black"
//   buttonClass="border-none"
//   placeholder={t("signUp.mobilePlaceholder") || "Enter your mobile number"}
//   dropdownStyle={{ color: "black" }} // Make country names black
// />

//           {error && <p className="text-red-500 text-sm">{error}</p>}

//           <button
//             type="submit"
//             className="w-full bg-yellow-400 text-black font-semibold p-3 rounded-xl hover:bg-yellow-500 transition-all shadow-md"
//           >
//             {t("signUp.continue") || "Continue"}
//           </button>
//         </form>

//         {/* Divider */}
//         <div className="flex items-center my-6">
//           <div className="flex-grow h-px bg-gray-300"></div>
//           <span className="text-gray-400 text-sm px-2">{t("signUp.orContinueWith") || "Or continue with"}</span>
//           <div className="flex-grow h-px bg-gray-300"></div>
//         </div>

//         {/* Google button */}
//         <button
//           type="button"
//           className="flex items-center justify-center w-full bg-gray-50 border shadow-sm p-3 rounded-xl hover:bg-gray-100 transition"
//         >
//           <FcGoogle size={22} className="mr-2" />
//           <span className="font-medium text-gray-700">{t("signUp.continueWithGoogle") || "Continue with Google"}</span>
//         </button>
//       </div>
//     </div>
//   );
// }


//...............// After add api's\\..................\\


"use client";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function SignUp() {
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const router = useRouter();
  const { t } = useTranslation();

  const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8080";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!mobile || mobile.length < 10) {
      setError(t("signUp.invalidMobile") || "Please enter a valid mobile number");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/sendOtp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mobile }),
      });
      if (!res.ok) throw new Error("API Error");
      const data = await res.json();
      // store token (for demo we use localStorage)
      localStorage.setItem("token", data.token);
      alert(`OTP sent to ${mobile}`);
      router.push("/auth/verifyOtp");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    setError("");
    setGoogleLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/auth/google`);
      if (!res.ok) throw new Error("Google auth failed");
      const data = await res.json();
      localStorage.setItem("token", data.token);
      alert("Google login successful");
      router.push("/dashboard"); // or wherever
    } catch (err) {
      console.error(err);
      setError("Google login failed");
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-yellow-100 rounded-full blur-2xl opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100 rounded-full blur-2xl opacity-60"></div>

      <Link href="/" className="absolute top-5 left-6 z-10 p-2 bg-white rounded-full hover:bg-gray-100 shadow text-black">
        <ArrowLeftIcon className="w-6 h-6" />
      </Link>

      <div className="z-10 text-center w-80">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{t("signUp.welcome") || "Welcome to ZipRide"}</h1>
        <p className="text-sm text-gray-500 mb-8">{t("signUp.enterMobile") || "Enter your mobile number to get started"}</p>

        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <PhoneInput
            country={"in"}
            value={mobile}
            onChange={(phone) => setMobile(phone)}
            inputClass="w-full p-3 bg-gray-50 rounded-xl border shadow-sm focus:outline-none text-black"
            buttonClass="border-none"
            placeholder={t("signUp.mobilePlaceholder") || "Enter your mobile number"}
            dropdownStyle={{ color: "black" }}
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button type="submit" disabled={loading} className={`w-full bg-yellow-400 text-black font-semibold p-3 rounded-xl shadow-md transition-all ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-yellow-500"}`}>
            {loading ? t("signUp.loading") || "Sending..." : t("signUp.continue") || "Continue"}
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="text-gray-400 text-sm px-2">{t("signUp.orContinueWith") || "Or continue with"}</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <button type="button" onClick={handleGoogleAuth} disabled={googleLoading} className={`flex items-center justify-center w-full bg-gray-50 border shadow-sm p-3 rounded-xl transition ${googleLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}`}>
          <FcGoogle size={22} className="mr-2" />
          <span className="font-medium text-gray-700">{googleLoading ? "Connecting..." : t("signUp.continueWithGoogle") || "Continue with Google"}</span>
        </button>
      </div>
    </div>
  );
}

