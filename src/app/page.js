


"use client";

import React, { useState, useEffect } from "react";
import "../../lib/i18n"; 
import { useTranslation } from "react-i18next";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./components/Navbar"), { ssr: false });
// import { FaCarSide, FaBus, FaPlane, FaIdCard } from "react-icons/fa";
// import Link from "next/link";
import WhyChooseZipRide from "./components/ServiceSection";
import ServiceExperience from "./components/home3";
import Testimonials from "./components/home4";
import DownloadAppSection from "./components/home5";
import Footer from "./components/footer/page";
import HeroBanner from "./components/home1";
// import LanguageSwitcher from "./components/LanguageSwitcher";
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





