// "use client";
// import React, { useState } from "react";
// import { UserIcon } from "@heroicons/react/24/outline";
// import Navbar from "../componets/Navbar";
// import { ArrowLeftIcon } from "lucide-react";

// const vehicles = [
//   {
//     name: "Car",
//     seats: 4,
//     price: 350,
//     oldPrice: 480,
//     description: "AC and comfortable Car for long rides",
//   },
//   {
//     name: "Auto",
//     seats: 4,
//     price: 240,
//     oldPrice: 350,
//     description: "Auto rickshaw at your doorstep",
//   },
//   {
//     name: "Bike",
//     seats: 2,
//     price: 130,
//     oldPrice: 250,
//     description: "Bike Rides for quick commutes",
//   },
// ];

// const ChooseVehicle = () => {
//   const [selectedVehicle, setSelectedVehicle] = useState(null);

//   const closeModal = () => setSelectedVehicle(null);

//   return (
//     <>
//       {/* Navbar */}
//       <div className="fixed top-0 left-0 w-full z-50 bg-yellow-50 shadow-md">
//         <Navbar />
//       </div>

//       {/* Page content */}
//       <div className="relative min-h-screen bg-white flex flex-col md:flex-row items-start justify-center pt-20 px-4 sm:px-10 overflow-hidden">
//         {/* Decorative circles */}
//         <div className="absolute -left-32 -top-32 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-50 z-0"></div>
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-50 z-0"></div>

//         {/* Vehicle selection */}
//         <div className="relative flex-1 max-w-2xl z-10">
//           <h1 className="text-4xl font-bold mb-2 mt-5 text-black">
//             Choose a Vehicle
//           </h1>
//           <p className="text-lg text-gray-500 mb-7">
//             Rides we think you'll like
//           </p>

//           <div className="flex flex-col gap-4">
//             {vehicles.map((v) => (
//               <div
//                 key={v.name}
//                 onClick={() => setSelectedVehicle(v)}
//                 className={`flex items-center justify-between px-6 py-4 rounded-2xl shadow cursor-pointer hover:scale-[1.02] transition-transform ${
//                   v.seats > 2 ? "bg-[#FFF7C7]" : "bg-white"
//                 }`}
//               >
//                 <img
//                   src={`/vehicles/${v.name.toLowerCase()}.png`}
//                   alt={v.name}
//                   className="w-20 h-16 object-contain ml-2 mr-3"
//                 />
//                 <div className="flex-1 flex flex-col ml-1">
//                   <span className="text-2xl font-bold text-black flex items-center gap-2">
//                     {v.name}
//                     <UserIcon className="w-4 h-4" />
//                     <span className="text-lg font-bold text-black">{v.seats}</span>
//                   </span>
//                   <span className="text-base text-black font-normal leading-tight mt-1">
//                     {v.description}
//                   </span>
//                 </div>
//                 <div className="flex flex-col items-end text-black">
//                   <span className="text-2xl font-extrabold">₹{v.price}</span>
//                   <span className="text-md text-gray-400 font-semibold line-through mt-2">
//                     ₹{v.oldPrice}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Modal */}
//       {selectedVehicle && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
//           <div className="bg-[#FAF8E4] rounded-3xl p-6 max-w-md w-full relative shadow-lg">
//             {/* Close button */}
//             <button
//               onClick={closeModal}
//               className="absolute top-4 right-4 text-black hover:text-gray-700"
//             >
//               ✕
//             </button>

//             {/* Vehicle Summary */}
//             <div className="flex items-center mb-4">
//               <img
//                 src={`/vehicles/${selectedVehicle.name.toLowerCase()}.png`}
//                 alt={selectedVehicle.name}
//                 className="w-20 h-16 object-contain mr-4"
//               />
//               <div>
//                 <h2 className="font-bold text-xl">{selectedVehicle.name}</h2>
//                 <p className="text-sm text-gray-700">{selectedVehicle.description}</p>
//               </div>
//             </div>

//             {/* Fare Breakdown */}
//             <div className="mb-4">
//               <h3 className="font-bold mb-2">Fare Breakdown</h3>
//               <div className="flex justify-between text-black font-semibold text-sm">
//                 <span>Base Fare</span>
//                 <span>₹50</span>
//               </div>
//               <div className="flex justify-between text-black font-semibold text-sm">
//                 <span>Distance(5 KM)</span>
//                 <span>₹{selectedVehicle.price}</span>
//               </div>
//               <div className="flex justify-between text-black font-semibold text-sm mt-1">
//                 <span>Total</span>
//                 <span>₹{selectedVehicle.price + 50}</span>
//               </div>
//             </div>

//             <button className="w-full bg-yellow-200 hover:bg-yellow-400 py-3 rounded-full font-bold mt-3">
//               Confirm & Book Ride
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ChooseVehicle;





"use client";

import React, { useState } from "react";
import {
  ArrowLeftIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const vehicles = [
  {
    name: "car",
    seats: 4,
    price: 350,
    oldPrice: 480,
    description: "acComfortableCar",
  },
  {
    name: "auto",
    seats: 4,
    price: 240,
    oldPrice: 350,
    description: "autoRickshaw",
  },
  {
    name: "bike",
    seats: 2,
    price: 130,
    oldPrice: 250,
    description: "bikeRides",
  },
];

const ChooseVehicle = () => {
  const { t } = useTranslation();
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const closeModal = () => setSelectedVehicle(null);

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-yellow-50 shadow-md">
        <Navbar />
      </div>

      {/* Page content */}
      <div className="relative min-h-screen bg-white flex flex-col md:flex-row items-start justify-center pt-20 px-4 sm:px-10 overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -left-32 -top-32 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-50 z-0"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-50 z-0"></div>

        {/* Vehicle selection */}
        <div className="relative flex-1 max-w-2xl z-10">
          <h1 className="text-4xl font-bold mb-2 mt-5 text-black">{t("chooseVehicle.title")}</h1>
          <p className="text-lg text-gray-500 mb-7">{t("chooseVehicle.subtitle")}</p>

          <div className="flex flex-col gap-4">
            {vehicles.map((v) => {
              const Icon = UserIcon; // Optional if you want to show dynamic icons
              return (
                <div
                  key={v.name}
                  onClick={() => setSelectedVehicle(v)}
                  className={`flex items-center justify-between px-6 py-4 rounded-2xl shadow cursor-pointer hover:scale-[1.02] transition-transform ${
                    v.seats > 2 ? "bg-[#FFF7C7]" : "bg-white"
                  }`}
                >
                  <img
                    src={`/vehicles/${v.name}.png`}
                    alt={t(`chooseVehicle.${v.name}Alt`)}
                    className="w-20 h-16 object-contain ml-2 mr-3"
                  />
                  <div className="flex-1 flex flex-col ml-1">
                    <span className="text-2xl font-bold text-black flex items-center gap-2">
                      {t(`chooseVehicle.${v.name}`)}
                      <UserIcon className="w-4 h-4" />
                      <span className="text-lg font-bold text-black">{v.seats}</span>
                    </span>
                    <span className="text-base text-black font-normal leading-tight mt-1">
                      {t(`chooseVehicle.${v.name}Desc`)}
                    </span>
                  </div>
                  <div className="flex flex-col items-end text-black">
                    <span className="text-2xl font-extrabold">₹{v.price}</span>
                    <span className="text-md text-gray-400 font-semibold line-through mt-2">
                      ₹{v.oldPrice}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedVehicle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-[#FAF8E4] rounded-3xl p-6 max-w-md w-full relative shadow-lg">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-black hover:text-gray-700"
            >
              ✕
            </button>

            {/* Vehicle Summary */}
            <div className="flex items-center mb-4">
              <img
                src={`/vehicles/${selectedVehicle.name}.png`}
                alt={t(`chooseVehicle.${selectedVehicle.name}Alt`)}
                className="w-20 h-16 object-contain mr-4"
              />
              <div>
                <h2 className="font-bold text-xl">{t(`chooseVehicle.${selectedVehicle.name}`)}</h2>
                <p className="text-sm text-gray-700">{t(`chooseVehicle.${selectedVehicle.name}Desc`)}</p>
              </div>
            </div>

            {/* Fare Breakdown */}
            <div className="mb-4">
              <h3 className="font-bold mb-2">{t("chooseVehicle.fareBreakdown")}</h3>
              <div className="flex justify-between text-black font-semibold text-sm">
                <span>{t("chooseVehicle.baseFare")}</span>
                <span>₹50</span>
              </div>
              <div className="flex justify-between text-black font-semibold text-sm">
                <span>{t("chooseVehicle.distance")}(5 KM)</span>
                <span>₹{selectedVehicle.price}</span>
              </div>
              <div className="flex justify-between text-black font-semibold text-sm mt-1">
                <span>{t("chooseVehicle.total")}</span>
                <span>₹{selectedVehicle.price + 50}</span>
              </div>
            </div>

            <Link href={"/ridestatus"} className="w-full bg-yellow-200 hover:bg-yellow-400 py-3 rounded-full font-bold mt-3">
              {t("chooseVehicle.confirmBook")}
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default ChooseVehicle;
