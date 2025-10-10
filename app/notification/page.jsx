"use client";
import React from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { FaCar, FaBus, FaPlane } from 'react-icons/fa';
import Navbar from '../componets/Navbar';
import Link from 'next/link';

const notifications = [
  { message: "Driver accepted your ride", time: "10:30 AM" },
  { message: "Your driver has arrived", time: "10:40 AM" },
  { message: "Driver accepted your ride", time: "1:00 PM" },
  { message: "Your driver has arrived", time: "1:10 PM" },
];

const Notifications = () => (
  <>
    {/* Fixed Navbar */}
    <div className="fixed top-0 left-0 w-full z-50 bg-yellow-50 shadow-md">
      <Navbar />
    </div>

    {/* Main Content with padding to avoid overlapping Navbar */}
    <div className="min-h-screen bg-white relative pt-28 px-6 md:px-16">
      
      {/* Back button below Navbar */}
      <div className="relative z-50 mb-6">
        <Link
          href="/"
          className="inline-flex items-center p-2 bg-white rounded-full hover:bg-gray-100 shadow text-black"
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </Link>
      </div>

      {/* Decorative circles with symbols */}
      <div className="absolute -left-36 -top-20 w-[320px] h-[320px] bg-yellow-100 rounded-full blur-3xl opacity-30 z-0 flex items-center justify-center">
        <FaCar className="text-yellow-400 text-6xl opacity-70" />
      </div>
      <div className="absolute -right-10 -top-14 w-[600px] h-[520px] bg-yellow-100 rounded-full blur-3xl opacity-20 z-0 flex items-center justify-center">
        <FaBus className="text-yellow-400 text-8xl opacity-50" />
      </div>

      {/* Centered title */}
      <h1 className="text-4xl font-bold text-center z-10 relative">Notifications</h1>

      {/* Notifications List */}
      <div className="mt-7 z-10">
        {notifications.map((n, i) => (
          <div className="flex items-center mb-7" key={i}>
            <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mr-6">
              <FaCar className="text-yellow-400 text-xl" />
            </div>
            <div>
              <div className="text-lg font-semibold">{n.message}</div>
              <div className="text-sm text-gray-600 mt-0.5">{n.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
);

export default Notifications;
