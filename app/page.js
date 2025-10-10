"use client";

import React from 'react';
import Navbar from "./componets/Navbar";
import { FaCarSide, FaBus, FaPlane, FaIdCard } from 'react-icons/fa';
import Link from 'next/link';
import WhyChooseZipRide from './componets/ServiceSection';
import ServiceExperience from './componets/home3';
import Testimonials from './componets/home4';
import DownloadAppSection from "./componets/home5"
import Footer from './componets/footer/page';

const HeroSection = () => (
  <header className="bg-yellow-50 text-dark-text relative">
    {/* Navbar fixed at top */}
    <div className="fixed top-0 left-0 w-full z-50 bg-yellow-50 shadow-md">
      <Navbar />
    </div>

    {/* Hero Section with top padding to prevent overlap */}
    <div className="pt-28 pb-40 md:pb-64 text-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Decorative circles */}
        <div className="absolute -left-20 w-96 h-96 bg-yellow-100 rounded-full blur-xs opacity-50"></div>
        <div className="absolute top-60 right-0 w-96 h-96 bg-yellow-100 rounded-full blur-xs opacity-50"></div>

        {/* Hero Title */}
        <h1 className="text-5xl md:text-5xl font-extrabold leading-tight mb-4 text-black">
          Book a Ride in Seconds
        </h1>
        <p className="text-xl text-gray-600 mb-10">
          Your one-stop solution for quick, safe, and affordable transportation.
        </p>

        {/* Ride Form */}
        <div className="max-w-4xl mx-auto relative z-30">
          <div className="bg-primary p-3 rounded-xl shadow-form">
            <form className="flex flex-col md:flex-row bg-white p-4 rounded-lg gap-3 items-center">
              <input
                type="text"
                placeholder="Enter Location"
                className="flex-grow p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black"
              />
              <input
                type="text"
                placeholder="Enter Destination"
                className="flex-grow p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black"
              />
              <Link
                href="/ridebooking"
                className="w-full md:w-auto px-8 py-4 bg-yellow-200 text-black font-bold rounded-lg hover:bg-yellow-400 transition duration-300 text-center"
              >
                Go Ride
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>

    {/* Our Services Section */}
    <section className="pt-32 pb-20 bg-yellow-50 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-16 text-black">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          <div className="p-6 flex flex-col items-center">
            <FaCarSide className="text-yellow-400 text-6xl mb-6" />
            <p className="text-base text-gray-700">
              Choose from our diverse lineup of Cars, Bikes, and Autos.
            </p>
          </div>

          <div className="p-6 flex flex-col items-center">
            <FaBus className="text-yellow-400 text-6xl mb-6" />
            <p className="text-base text-gray-700">
              Skip the wait—book your perfect ride instantly.
            </p>
          </div>

          <div className="p-6 flex flex-col items-center">
            <FaPlane className="text-yellow-400 text-6xl mb-6" />
            <p className="text-base text-gray-700">
              Never miss your flight — we’ll drop you on time, every time.
            </p>
          </div>

          <div className="p-6 flex flex-col items-center">
            <FaIdCard className="text-yellow-400 text-6xl mb-6" />
            <p className="text-base text-gray-700">
              Ride safely with verified, professional, and friendly drivers.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <WhyChooseZipRide/>
    </section>
    <section>
      <ServiceExperience/>
    </section>
    <section>
      <Testimonials/>
    </section>
    <section>
      <DownloadAppSection/>
    </section>
    <section>
      <Footer/>
    </section>
  </header>
);

export default HeroSection;
