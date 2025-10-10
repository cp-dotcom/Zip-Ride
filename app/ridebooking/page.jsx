"use client";
import React from "react";
import {
  MapPinIcon,
  ClockIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import Navbar from "../componets/Navbar";
import Link from "next/link";

export default function RideBookingPage() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <div className="min-h-screen bg-white relative flex flex-col md:flex-row items-center justify-center px-6 py-10">
        {/* Back Arrow */}
        <Link
          href="/"
          className="absolute top-5 left-6 z-10 p-2 bg-white rounded-full hover:bg-gray-100 shadow text-black"
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </Link>

        {/* Background Circles */}
        <div className="absolute -left-20 -top-20 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-50 -z-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-50 -z-10"></div>

        {/* Left Section */}
        <div className="flex flex-col justify-center w-full md:w-1/3 px-4 md:pl-10 mb-10 md:mb-0">
          {/* Page Title */}
          <div className="text-left mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Book Your Ride</h1>
            <p className="text-gray-500 mt-2">
              Choose your pickup and destination to get started
            </p>
          </div>

          {/* Form Section */}
          <div className="bg-[#FAF8F2] rounded-3xl shadow-md p-8 flex flex-col w-full">
            <div className="flex flex-col gap-6">
              <div className="bg-white flex items-center px-5 py-4 rounded-xl shadow-md">
                <MapPinIcon className="w-5 h-5 mr-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Pickup Location"
                  className="outline-none bg-transparent flex-1 text-lg text-gray-700 placeholder-gray-400"
                />
              </div>

              <div className="bg-white flex items-center px-5 py-4 rounded-xl shadow-md">
                <MapPinIcon className="w-5 h-5 mr-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Drop Location"
                  className="outline-none bg-transparent flex-1 text-lg text-gray-700 placeholder-gray-400"
                />
              </div>

              <div className="bg-white flex items-center px-5 py-4 rounded-xl shadow-md">
                <ClockIcon className="w-5 h-5 mr-3 text-gray-400" />
                <input
                  type="time"
                  placeholder="Pickup Time"
                  className="outline-none bg-transparent flex-1 text-lg text-gray-700 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Confirm Button */}
            <button className="bg-[#F6E7B4] hover:bg-[#e3d69f] text-gray-800 font-semibold rounded-full px-8 py-3 shadow-lg mt-8 flex items-center justify-center transition-all duration-200">
              Select Vehicle
              <span className="ml-3 text-xl">→</span>
            </button>
          </div>

          {/* Info Text */}
          <p className="text-gray-600 text-sm mt-6">
            After selecting your pickup and destination, you’ll see available
            vehicles, fare estimates, and driver details.
          </p>
        </div>

        {/* Right Section (Map) */}
        <div className="flex-1  h-[80vh] w-full rounded-3xl overflow-hidden shadow-lg bg-gray-200 flex justify-center items-center">
          {/* Replace this with your map component */}
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <span className="text-gray-400 italic text-sm">
              Map will appear here
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
