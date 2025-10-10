"use client";
import React, { useState } from "react";
import {
  ArrowLeftIcon,
  StarIcon,
  ChatBubbleLeftRightIcon,
  PhoneIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Navbar from "../componets/Navbar";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Modal component for the call screen
const CallModal = ({ isOpen, onClose }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeakerOn, setIsSpeakerOn] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="bg-[#FFF9DA] rounded-3xl w-[320px] p-6 flex flex-col items-center shadow-[7px_7px_0_0_rgba(0,0,0,0.12)] relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        {/* Avatar */}
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

        {/* Name & Status */}
        <h2 className="text-xl font-bold mb-1">Arun Das</h2>
        <p className="text-sm text-gray-600 mb-1">Driver</p>
        <p className="text-xs text-blue-500 mb-6 animate-pulse">● Calling...</p>

        {/* Controls */}
        <div className="flex gap-4 mb-6 w-full justify-center">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className={`w-24 py-3 rounded-lg flex items-center justify-center gap-2 ${
              isMuted ? "bg-gray-200" : "bg-[#FFF7C7]"
            }`}
          >
            <svg className="w-5 h-5" fill="currentColor"></svg>
            <span className="font-semibold text-sm">
              {isMuted ? "Muted" : "Mute"}
            </span>
          </button>

          <button
            onClick={() => setIsSpeakerOn(!isSpeakerOn)}
            className={`w-24 py-3 rounded-lg flex items-center justify-center gap-2 ${
              isSpeakerOn ? "bg-yellow-200" : "bg-[#FFF7C7]"
            }`}
          >
            <svg className="w-5 h-5" fill="currentColor"></svg>
            <span className="font-semibold text-sm">
              {isSpeakerOn ? "On" : "Speaker"}
            </span>
          </button>
        </div>

        {/* End Call */}
        <button
          onClick={onClose}
          className="bg-red-500 hover:bg-red-600 text-white w-full rounded-lg py-3 font-semibold flex items-center justify-center gap-2"
        >
          <PhoneIcon className="w-5 h-5 rotate-45" />
          End Call
        </button>
      </div>
    </div>
  );
};

const statusSteps = [
  { label: "Driver Accepted", time: "10:22 PM", active: true },
  { label: "Driver Arrived", active: false },
  { label: "Trip Started", active: false },
  { label: "Trip Ended", active: false },
];

const DriverArriving = () => {
  const router = useRouter();
  const [isCallOpen, setIsCallOpen] = useState(false); // State for modal

  return (
    <>
      <header>
        <Navbar />
      </header>

      <div className="min-h-screen bg-white flex items-center justify-center relative py-4 px-3">
        {/* Background circles */}
        <div className="absolute -left-20 w-96 h-96 bg-yellow-100 rounded-full blur-xs opacity-30"></div>
        <div className="absolute bottom-0 top-40 right-0 left-220 w-96 h-96 bg-yellow-100 rounded-full blur-xs opacity-30"></div>

        <Link
          href="/"
          className="absolute top-5 left-6 z-10 p-2 bg-white rounded-full hover:bg-gray-100 shadow text-black"
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </Link>

        <div className="w-full max-w-6xl flex gap-7 justify-between z-10">
          {/* Map & Search */}
          <div className="flex flex-col">
            <div className="rounded-3xl overflow-hidden shadow-md ml-5 h-130 mb-20 ">
              <div className="relative w-[610px] h-[610px] bg-gray-100">
                <input
                  className="absolute top-4 left-4 right-4 z-10 rounded-lg bg-white border border-gray-200 px-6 py-2 w-[320px] shadow text-lg focus:outline-none"
                  placeholder="Where to ?"
                />
                <div className="w-full h-full"></div>
              </div>
            </div>
          </div>

          {/* Driver & Status */}
          <div className="flex flex-col gap-6 flex-1">
            {/* Driver Card */}
            <div className="bg-[#FFFBDE] px-7 py-6 rounded-2xl shadow-[6px_6px_0_0_rgba(0,0,0,0.15)] mb-1 flex flex-col">
              <div className="flex items-center mb-2">
                <UserCircleIcon className="w-14 h-14 text-gray-400 bg-yellow-200 rounded-full mr-5" />
                <div className="flex flex-col flex-1">
                  <span className="font-bold text-xl text-black">
                    Your Driver, Arun, is arriving
                  </span>
                  <div className="flex items-center">
                    <span className="text-gray-700 text-sm mr-3">
                      KL-10-w-4545
                    </span>
                    <StarIcon className="w-4 h-4 text-[#FFD600]" />
                    <span className="text-[#FFD600] font-bold text-sm ml-1">
                      4.5
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-3 mb-0.5">
                <button
                  className="bg-[#FFEFA0] hover:bg-[#FFEF80] text-black font-semibold rounded-xl px-7 py-2 flex items-center shadow"
                  onClick={() => router.push("/chat")}
                >
                  <ChatBubbleLeftRightIcon className="h-5 w-5 mr-2" /> Chat
                </button>
                <button
                  className="bg-[#FFEFA0] hover:bg-[#FFEF80] text-black font-semibold rounded-xl px-10 py-2 flex items-center shadow"
                  onClick={() => setIsCallOpen(true)}

                >
                  <PhoneIcon className="h-5 w-5 mr-2" /> Call
                </button>
                <button className="bg-[#FFD766] hover:bg-[#FFD600] text-black font-semibold rounded-xl px-5 py-2 flex items-center shadow"
                onClick={() => router.push("/review&rating")}
                >
                  <svg
                    className="h-5 w-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 17v-2h6v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zM12 3v12M7 12h10"
                    ></path>
                  </svg>
                  Rating & Review
                </button>
              </div>

              {/* Cancel Ride */}
              <button className="bg-[#FEF7CE] hover:bg-[#FFEE99] font-bold text-black rounded-xl px-9 py-2 shadow mt-5">
                Ride Cancel
              </button>
            </div>

            {/* Ride Status Card */}
            <div className="bg-[#FFFBDE] px-7 py-6 rounded-2xl shadow-[6px_6px_0_0_rgba(0,0,0,0.15)] flex flex-col w-[380px]">
              <div className="font-bold text-lg mb-4 text-black">Ride Status</div>
              <ul>
                {statusSteps.map((step, i) => (
                  <li key={i} className="flex items-center mb-4">
                    <span
                      className={
                        step.active
                          ? "text-green-500 font-semibold"
                          : "text-gray-700"
                      }
                    >
                      {step.active && (
                        <svg
                          className="inline mr-1 w-5 h-5"
                          fill="none"
                          stroke="#7DDA51"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="#7DDA51"
                            strokeWidth="2"
                            fill="none"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            stroke="#7DDA51"
                            d="M9 12l2 2 4-4"
                          />
                        </svg>
                      )}
                      {step.label}
                    </span>
                    {step.time && (
                      <span className="ml-3 text-gray-500 text-xs">
                        {step.time}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Call Modal */}
      <CallModal isOpen={isCallOpen} onClose={() => setIsCallOpen(false)} />
    </>
  );
};

export default DriverArriving;
