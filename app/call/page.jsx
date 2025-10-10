"use client";
import React from "react";
import {
  ArrowLeftIcon,
  MicrophoneIcon,
  SpeakerWaveIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

const CallScreen = () => {
  const router = useRouter();

  // 🔹 State for toggling mute/speaker (optional but realistic)
  const [isMuted, setIsMuted] = React.useState(false);
  const [isSpeakerOn, setIsSpeakerOn] = React.useState(false);

  return (
    <div className="relative min-h-screen bg-white flex flex-col items-center justify-center p-6 overflow-hidden">
      {/* 🌕 Background circles */}
      <div className="absolute -left-36 -top-36 w-[500px] h-[450px] bg-yellow-100 rounded-full blur-3xl opacity-40 z-0" />
      <div className="absolute right-0 bottom-10 w-[400px] h-[350px] bg-yellow-100 rounded-full blur-3xl opacity-30 z-0" />

      {/* 🔙 Back Button */}
      <button
        onClick={() => router.back()}
        className="absolute top-6 left-6 z-10 p-2 bg-white rounded-full hover:bg-gray-100 shadow transition"
        aria-label="Go back"
      >
        <ArrowLeftIcon className="w-6 h-6 text-gray-700" />
      </button>

      {/* 📞 Call Info Card */}
      <div className="relative z-10 bg-[#FFF9DA] rounded-3xl w-[320px] p-6 flex flex-col items-center shadow-[7px_7px_0_0_rgba(0,0,0,0.12)]">
        {/* 👤 Avatar */}
        <div className="bg-gray-300 rounded-full w-24 h-24 flex items-center justify-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.121 17.804A8.966 8.966 0 0112 15a8.966 8.966 0 016.879 2.804M15 11a3 3 0 01-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>

        {/* 🧍 Name & Role */}
        <h2 className="text-xl font-bold mb-1">Arun Das</h2>
        <p className="text-sm text-gray-600 mb-1">Driver</p>
        <p className="text-xs text-blue-500 mb-6 animate-pulse">● Calling...</p>

        {/* 🎚 Control Buttons */}
        <div className="flex gap-4 mb-6 w-full justify-center">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className={`w-24 py-3 rounded-lg flex items-center justify-center gap-2 transition-all shadow-[5px_5px_0_0_rgba(0,0,0,0.08)] ${
              isMuted ? "bg-gray-200" : "bg-[#FFF7C7]"
            }`}
          >
            <MicrophoneIcon
              className={`w-5 h-5 ${isMuted ? "text-gray-500" : "text-black"}`}
            />
            <span className="font-semibold text-sm">
              {isMuted ? "Muted" : "Mute"}
            </span>
          </button>

          <button
            onClick={() => setIsSpeakerOn(!isSpeakerOn)}
            className={`w-24 py-3 rounded-lg flex items-center justify-center gap-2 transition-all shadow-[5px_5px_0_0_rgba(0,0,0,0.08)] ${
              isSpeakerOn ? "bg-yellow-200" : "bg-[#FFF7C7]"
            }`}
          >
            <SpeakerWaveIcon
              className={`w-5 h-5 ${
                isSpeakerOn ? "text-yellow-600" : "text-black"
              }`}
            />
            <span className="font-semibold text-sm">
              {isSpeakerOn ? "On" : "Speaker"}
            </span>
          </button>
        </div>

        {/* 🔴 End Call Button */}
        <button
          onClick={() => router.push("/ridestatus")}
          className="bg-red-500 hover:bg-red-600 text-white w-full rounded-lg py-3 font-semibold shadow-[5px_5px_0_0_rgba(0,0,0,0.12)] flex items-center justify-center gap-2 transition"
        >
          <PhoneIcon className="w-5 h-5 rotate-45" />
          End Call
        </button>
      </div>
    </div>
  );
};

export default CallScreen;
