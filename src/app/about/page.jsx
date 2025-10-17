// "use client"
// import React from "react";
// import Navbar from "../componets/Navbar";

// const features = [
//   {
//     icon: (
//      <img src={"/about/car.png"} className="w-15 ml-25"></img>
//     ),
//     title: "Find a Ride",
//     desc: "Focuses on the map interface and finding available vehicles.",
//   },
//   {
//     icon: (
//            <img src={"/about/customer-service.png"} className="w-15 ml-28"></img>

//     ),
//     title: "Connect with a Driver",
//     desc: "Highlights direct communication between passengers and drivers.",
//   },
//   {
//     icon: (
//            <img src={"/about/way.png"} className="w-15 ml-27"></img>

//     ),
//     title: "Enjoy Your Journey",
//     desc: "Emphasizes comfort, affordability, and local drivers.",
//   },
// ];

// const cards = [
//   {
//     image: "/about/3D map.jpg", // Use your actual image paths
//     title: "Navigate Your City",
//     desc: "The Future of Ride-Sharing. Available Online",
//   },
//   {
//     image: "/about/about(3).png",
//     title: "Low Fare, High Efficiency",
//     desc: "The Future of Affordable Urban Transportation",
//   },
//   {
//     image: "/about/about(4).png",
//     title: "Spot the Speed",
//     desc: "ZipRide's Affordable Promise Brightens the Urban Commute",
//   },
// ];

// const StorySection = () => (
//     <>
//     <header>
//         <Navbar/>
//     </header>
//   <div className="bg-yellow-50 min-h-screen">
//     {/* Top Banner */}
//     <div className="relative h-56 md:h-100 bg-gray-800 flex items-center justify-center">
//       <img
//         className="absolute inset-0 h-full w-full object-cover opacity-90 shadow-2xl"
//         src="/about/about(1).png" // Use your banner image path
//         alt="Move Smarter Banner"
//       />
//       <div className="relative z-10 px-4 text-center">
//         <h1 className="text-white font-extrabold text-2xl md:text-4xl mb-2">
//           Move Smarter<br />with<span className="text-yellow-400"> ZipRide</span>
//         </h1>
//         <p className="text-gray-100">
//           Your city rides simplified — affordable, comfortable,<br className="hidden md:block"/> and just a click away.
//         </p>
//       </div>
//     </div>

//     {/* Our Story */}
//     <section className="max-w-4xl mx-auto bg-yellow-50 rounded-xl shadow-lg p-8 mt-[-40px] relative z-10 text-center">
//       <h2 className="text-2xl font-bold mb-4 text-black">Our Story</h2>
//       <p className="text-gray-700 mb-2">
//         ZipRide was created with a simple goal — to make urban travel faster, smarter, and more reliable. We believe in connecting people and places through technology that’s easy to use and accessible for everyone.
//       </p>
//       <p className="text-gray-700 mb-2">
//         Our platform empowers riders with real-time tracking, multiple ride options, and secure payments, while helping local drivers grow through fair opportunities and transparent systems.
//       </p>
//       <p className="text-gray-700">
//         At ZipRide, every journey matters — built on trust, comfort, and community.
//       </p>
//     </section>

//     {/* Icons */}
//     <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-center gap-4 my-8 text-black">
//       {features.map((f, i) => (
//         <div className="flex-1 text-center px-2" key={i}>
//           {f.icon}
//           <h3 className="text-lg font-bold mb-1">{f.title}</h3>
//           <p className="text-gray-600 text-sm">{f.desc}</p>
//         </div>
//       ))}
//     </div>

//     {/* Feature Cards */}
//     <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 text-center">
//       {cards.map((c, i) => (
//         <div key={i} className="rounded-lg overflow-hidden bg-transparant shadow-lg text-black">
//           <img src={c.image} alt={c.title} className="h-45 w-full object-cover"/>
//           <div className="p-4">
//             <div className="font-semibold mb-1">{c.title}</div>
//             <div className="text-gray-600 text-sm">{c.desc}</div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
//   </>
// );

// export default StorySection;




"use client";
import React from "react";
import Navbar from "../components/Navbar";
import FeaturesList from "../components/about/FeaturesList";
import FeatureCards from "../components/about/FeatureCards";

import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <img src={"/about/car.png"} className="w-15 ml-25" alt={t("story.features.findRideAlt")} />,
      title: t("story.features.findRide.title"),
      desc: t("story.features.findRide.desc"),
    },
    {
      icon: <img src={"/about/customer-service.png"} className="w-15 ml-28" alt={t("story.features.connectDriverAlt")} />,
      title: t("story.features.connectDriver.title"),
      desc: t("story.features.connectDriver.desc"),
    },
    {
      icon: <img src={"/about/way.png"} className="w-15 ml-27" alt={t("story.features.enjoyJourneyAlt")} />,
      title: t("story.features.enjoyJourney.title"),
      desc: t("story.features.enjoyJourney.desc"),
    },
  ];

  const cards = [
    {
      image: "/about/3D map.jpg",
      title: t("story.cards.navigateCity.title"),
      desc: t("story.cards.navigateCity.desc"),
    },
    {
      image: "/about/about(3).png",
      title: t("story.cards.lowFare.title"),
      desc: t("story.cards.lowFare.desc"),
    },
    {
      image: "/about/about(4).png",
      title: t("story.cards.spotSpeed.title"),
      desc: t("story.cards.spotSpeed.desc"),
    },
  ];

  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="bg-yellow-50 min-h-screen">
        <div className="relative h-56 md:h-100 bg-gray-800 flex items-center justify-center">
          <img
            className="absolute inset-0 h-full w-full object-cover opacity-90 shadow-2xl"
            src="/about/about(1).png"
            alt={t("story.topBannerAlt")}
          />
          <div className="relative z-10 px-4 text-center">
            <h1 className="text-white font-extrabold text-2xl md:text-4xl mb-2">
              {t("story.topBanner.title1")}
              <br />
              {t("story.topBanner.title2")} <span className="text-yellow-400"> ZipRide</span>
            </h1>
            <p className="text-gray-100">
              {t("story.topBanner.subtitle")}
              <br className="hidden md:block" />
            </p>
          </div>
        </div>
        <section className="max-w-4xl mx-auto bg-yellow-50 rounded-xl shadow-lg p-8 mt-[-40px] relative z-10 text-center">
          <h2 className="text-2xl font-bold mb-4 text-black">{t("story.ourStoryTitle")}</h2>
          <p className="text-gray-700 mb-2">{t("story.ourStory.paragraph1")}</p>
          <p className="text-gray-700 mb-2">{t("story.ourStory.paragraph2")}</p>
          <p className="text-gray-700">{t("story.ourStory.paragraph3")}</p>
        </section>

        <FeaturesList features={features} />

        <FeatureCards cards={cards} />
      </div>
    </>
  );
};

export default AboutPage;
