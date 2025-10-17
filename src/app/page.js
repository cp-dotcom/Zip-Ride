// "use client";

// import React from 'react';
// import Navbar from "./componets/Navbar";
// import { FaCarSide, FaBus, FaPlane, FaIdCard } from 'react-icons/fa';
// import Link from 'next/link';
// import WhyChooseZipRide from './componets/ServiceSection';
// import ServiceExperience from './componets/home3';
// import Testimonials from './componets/home4';
// import DownloadAppSection from "./componets/home5";
// import Footer from './componets/footer/page';
// import HeroBanner from './componets/home1';  

// const HomePage = () => (   
//   <header className="bg-yellow-50 text-dark-text relative">

//     <div className="fixed top-0 left-0 w-full z-50 bg-yellow-50 shadow-md">
//       <Navbar />
//     </div>

//     {/* Hero Section */}
//     <section>
//       <HeroBanner />   
//     </section>

//     {/* Our Services Section - Further reduced gap */}
// <section className="mt-[-80px] md:mt-[-100px] pb-12 bg-yellow-50 relative z-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-extrabold text-center mb-10 text-black">
//           Our Services
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
//           {/* Car */}
//           <div className="p-6 bg-transparent rounded-2xl shadow-xl flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
//             <div className="bg-transparent p-4 rounded-full mb-6">
//               <img
//                 src="/images/services(car).png"
//                 alt="Car"
//                 className="w-24 h-24 object-contain"
//               />
//             </div>
//             <p className="text-base text-gray-700">
//               Choose from our diverse lineup of Cars, Bikes, and Autos.
//             </p>
//           </div>

//           {/* Bus */}
//           <div className="p-6 bg-transparent rounded-2xl shadow-xl flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
//             <div className="bg-transparent p-4 rounded-full mb-6">
//               <img
//                 src="/images/services(bus).png"
//                 alt="Bus"
//                 className="w-24 h-24 object-contain"
//               />
//             </div>
//             <p className="text-base text-gray-700">
//               Skip the wait—book your perfect ride instantly.
//             </p>
//           </div>

//           {/* Plane */}
//           <div className="p-6 bg-transparent rounded-2xl shadow-xl flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
//             <div className="bg-transparent p-4 rounded-full mb-6">
//               <img
//                 src="/images/services(airport).png"
//                 alt="Plane"
//                 className="w-24 h-24 object-contain"
//               />
//             </div>
//             <p className="text-base text-gray-700">
//               Never miss your flight — we'll drop you on time, every time.
//             </p>
//           </div>

//           {/* Verified Driver */}
//           <div className="p-6 bg-transparent rounded-2xl shadow-xl flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
//             <div className="bg-transparent p-4 rounded-full mb-6">
//               <img
//                 src="/images/services(Driver).png"
//                 alt="Verified Driver"
//                 className="w-24 h-24 object-contain"
//               />
//             </div>
//             <p className="text-base text-gray-700">
//               Ride safely with verified, professional, and friendly drivers.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>

//     {/* Other sections */}
//     <section><WhyChooseZipRide /></section>
//     <section><ServiceExperience /></section>
//     <section><Testimonials /></section>
//     <section><DownloadAppSection /></section>
//     <section><Footer /></section>
//   </header>
// );

// export default HomePage;





// "use client";

// import React from "react";
// import "../lib/i18n"; // import i18n setup
// import { useTranslation } from "react-i18next";
// const Navbar = dynamic(() => import("./componets/Navbar"), { ssr: false });
// import { FaCarSide, FaBus, FaPlane, FaIdCard } from "react-icons/fa";
// import Link from "next/link";
// import WhyChooseZipRide from "./componets/ServiceSection";
// import ServiceExperience from "./componets/home3";
// import Testimonials from "./componets/home4";
// import DownloadAppSection from "./componets/home5";
// import Footer from "./componets/footer/page";
// import HeroBanner from "./componets/home1";
// import LanguageSwitcher from "./componets/LanguageSwitcher";
// import dynamic from "next/dynamic";

// const HomePage = () => {
//   const { t } = useTranslation();

//   return (
//     <header className="bg-yellow-50 text-dark-text relative">
//       {/* Fixed Navbar */}
//       <div className="fixed top-0 left-0 w-full z-50 bg-yellow-50 shadow-md flex justify-between items-center px-4 md:px-10">
//         <Navbar />
//         {/* <LanguageSwitcher /> Language Switcher */}
//       </div>

//       {/* Hero Section */}
//       <section>
//         <HeroBanner />
//       </section>

//       {/* Our Services Section */}
//       <section className="mt-[-80px] md:mt-[-100px] pb-12 bg-yellow-50 relative z-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-extrabold text-center mb-10 text-black">
//             {t("our_services")}
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
//             {/* Car */}
//             <div className="p-6 bg-transparent rounded-2xl shadow-xl flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
//               <div className="bg-transparent p-4 rounded-full mb-6">
//                 <img
//                   src="/images/services(car).png"
//                   alt={t("car_alt")}
//                   className="w-24 h-24 object-contain"
//                 />
//               </div>
//               <p className="text-base text-gray-700">{t("car_description")}</p>
//             </div>

//             {/* Bus */}
//             <div className="p-6 bg-transparent rounded-2xl shadow-xl flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
//               <div className="bg-transparent p-4 rounded-full mb-6">
//                 <img
//                   src="/images/services(bus).png"
//                   alt={t("bus_alt")}
//                   className="w-24 h-24 object-contain"
//                 />
//               </div>
//               <p className="text-base text-gray-700">{t("bus_description")}</p>
//             </div>

//             {/* Plane */}
//             <div className="p-6 bg-transparent rounded-2xl shadow-xl flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
//               <div className="bg-transparent p-4 rounded-full mb-6">
//                 <img
//                   src="/images/services(airport).png"
//                   alt={t("plane_alt")}
//                   className="w-24 h-24 object-contain"
//                 />
//               </div>
//               <p className="text-base text-gray-700">{t("plane_description")}</p>
//             </div>

//             {/* Verified Driver */}
//             <div className="p-6 bg-transparent rounded-2xl shadow-xl flex flex-col items-center hover:shadow-2xl transition-shadow duration-300">
//               <div className="bg-transparent p-4 rounded-full mb-6">
//                 <img
//                   src="/images/services(Driver).png"
//                   alt={t("driver_alt")}
//                   className="w-24 h-24 object-contain"
//                 />
//               </div>
//               <p className="text-base text-gray-700">{t("driver_description")}</p>
//             </div>
//           </div>
//         </div>
//       </section>



//       <section>
//         <WhyChooseZipRide />
//       </section>
//       <section>
//         <ServiceExperience />
//       </section>
//       <section>
//         <Testimonials />
//       </section>
//       <section>
//         <DownloadAppSection />
//       </section>
//       <section>
//         <Footer />
//       </section>
//     </header>
//   );
// };

// export default HomePage;






"use client";

import React, { useState, useEffect } from "react";
import "../../lib/i18n"; // import i18n setup
import { useTranslation } from "react-i18next";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./components/Navbar"), { ssr: false });
import { FaCarSide, FaBus, FaPlane, FaIdCard } from "react-icons/fa";
import Link from "next/link";
import WhyChooseZipRide from "./components/ServiceSection";
import ServiceExperience from "./components/home3";
import Testimonials from "./components/home4";
import DownloadAppSection from "./components/home5";
import Footer from "./components/footer/page";
import HeroBanner from "./components/home1";
import LanguageSwitcher from "./components/LanguageSwitcher";
import HomePageSection from "./components/shedule";
import OurServicesSection from "./components/ourservises";

const HomePage = () => {
  const { t } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header className="bg-yellow-50 text-dark-text relative">
      {/* Fixed Navbar */}
        <Navbar />
      <section>
        <HeroBanner />
      </section>
      <section>
        <OurServicesSection/>
      </section>
      <section>
        <HomePageSection/>
      </section>
      <section>
        <WhyChooseZipRide />
      </section>
      <section>
        <ServiceExperience />
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <DownloadAppSection />
      </section>
      <section>
        <Footer />
      </section>
    </header>
  );
};

export default HomePage;





