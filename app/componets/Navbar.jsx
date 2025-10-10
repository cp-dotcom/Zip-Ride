"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { UserCircleIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check token on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1e1e1e] text-white py-3 shadow-md z-50">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 sm:px-10">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-yellow-400 hover:scale-105 hover:drop-shadow-[0_0_6px_rgba(250,204,21,0.8)] transition-all duration-300"
        >
          ZipRide
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-10 text-sm font-medium">
          {["ridebooking", "drive", "about", "help"].map((link, i) => (
            <Link
              key={i}
              href={`/${link}`}
              className="relative text-gray-300 hover:text-yellow-400 transition-colors duration-300 group"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}

              {/* Underline Animation */}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Right Side */}
        {isLoggedIn ? (
          <div className="relative group">
            <button className="flex items-center space-x-2 bg-gray-800 px-4 py-1.5 rounded-full hover:bg-gray-700 hover:scale-105 transition-all duration-300">
              <UserCircleIcon className="h-6 w-6 text-yellow-400" />
              <span className="font-medium">Profile</span>
            </button>

            {/* Dropdown */}
            <div className="absolute right-0 hidden group-hover:block mt-2 bg-[#2c2c2c] text-sm rounded-md shadow-lg w-44 border border-gray-700">
              <Link
                href="/profile"
                className="block px-4 py-2 hover:bg-gray-700 hover:text-yellow-300 transition-colors"
              >
                View Profile
              </Link>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 hover:bg-gray-700 hover:text-yellow-300 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <Link
            href="/signup"
            className="bg-yellow-400 text-black font-semibold px-5 py-1.5 rounded-full hover:bg-yellow-500 hover:scale-105 hover:shadow-[0_0_8px_rgba(250,204,21,0.6)] transition-all duration-300"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
