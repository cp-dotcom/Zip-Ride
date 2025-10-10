import React from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import Navbar from "../componets/Navbar";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

const vehicles = [
  {
    name: "Car",
    seats: 4,
    price: 350,
    oldPrice: 480,
    description: "AC and comfortable Car for long rides",
    highlight: true,
  },
  {
    name: "Auto",
    seats: 4,
    price: 240,
    oldPrice: 350,
    description: "Auto rickshaw at your doorstep",
    highlight: false,
  },
  {
    name: "Bike",
    seats: 2,
    price: 130,
    oldPrice: 250,
    description: "Bike Rides for quick commutes",
    highlight: true,
  },
];

const ChooseVehicle = () => (
  <>
    <header>
      <Navbar />
    </header>

    <div className="relative min-h-screen bg-white flex flex-col md:flex-row items-start justify-center pt-6 px-4 sm:px-10 overflow-hidden">
      {/* Decorative Background Circles */}
      <div className="absolute -left-32 -top-32 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-50 z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-50 z-0"></div>

      {/* Back Button */}
      <Link
        href="/"
        className="absolute top-6 left-6 z-10 p-2 bg-white rounded-full hover:bg-gray-100 shadow text-black"
      >
        <ArrowLeftIcon className="w-6 h-6" />
      </Link>

      {/* Vehicle Selection Section */}
      <div className="relative flex-1 max-w-2xl z-10">
        <h1 className="text-4xl font-bold mb-2 mt-5 text-black ml-40">Choose a Vehicle</h1>
        <p className="text-lg text-gray-500 mb-7 mt-10">Rides we think you'll like</p>

        <div className="flex flex-col gap-4">
          {vehicles.map((v) => (
            <div
              key={v.name}
              className={[
                "flex items-center justify-between px-6 py-4 rounded-2xl shadow",
                v.highlight
                  ? "bg-[#FFF7C7] shadow-md"
                  : "bg-[#FFF7C7]  ",
                "hover:scale-[1.02] border-black transition cursor-pointer",
              ].join(" ")}
            >
               {/* Vehicle image */}
                             <img
                               src={v.image}
                               alt={v.name}
                               className="w-20 h-16 object-contain ml-2 mr-3"
                               style={{ marginBottom: v.name === "Auto" ? "6px" : 0 }}
                             />
                             {/* Vehicle details */}
                             <div className="flex-1 flex flex-col ml-1">
                               <span className="text-2xl font-bold text-black flex items-center gap-2">
                                 {v.name}
                                 <UserIcon className="w-5 h-5" />
                                 <span className="text-lg font-bold text-black">{v.seats}</span>
                               </span>
                               <span className="text-base text-black font-normal leading-tight mt-1">
                                 {v.description}
                               </span>
                             </div>


              {/* Price */}
              <div className="flex flex-col items-end text-black">
                <span className="text-2xl font-extrabold">₹{v.price}</span>
                <span className="text-md text-gray-400 font-semibold line-through mt-2">
                  ₹{v.oldPrice}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Map Section */}
      <div className="relative flex-1 flex justify-center items-start mt-8 md:mt-0 z-10">
        <div
          className="rounded-3xl overflow-hidden shadow-lg bg-gray-100 ml-0 md:ml-10"
          style={{ width: 520, height: 520 }}
        >
          <img
            src="your-map-image-or-component.png"
            alt="Map"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  </>
);

export default ChooseVehicle;
