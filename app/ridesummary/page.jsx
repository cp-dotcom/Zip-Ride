import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
// Replace with your real icon if needed

const RideSummary = () => (
  <div className="min-h-screen bg-white flex flex-col relative">
    {/* Background circles */}
    <div className="absolute -left-24 -top-16 w-[520px] h-[320px] bg-yellow-100 rounded-full blur-3xl opacity-40 pointer-events-none"></div>
    <div className="absolute right-0 top-8 w-[320px] h-[320px] bg-yellow-100 rounded-full blur-3xl opacity-40 pointer-events-none"></div>

    {/* Back button */}
    <button className="mt-5 ml-4 w-9 h-9 flex items-center justify-center hover:bg-gray-100 rounded-full z-10">
      <ArrowLeftIcon className="w-7 h-7" />
    </button>

    {/* Header */}
    <div className="flex flex-col items-center mt-1 z-10">
      <h1 className="text-3xl font-bold mt-2">Ride summary</h1>
      <p className="mt-1 text-gray-500 text-sm">Please confirm your ride details below</p>
    </div>

    {/* Card */}
    <div className="mx-auto mt-5 flex flex-col items-center z-10">
      <div className="relative px-8 py-8 pt-5 bg-[#FAF8E4] rounded-3xl shadow-[8px_8px_0_0_rgba(0,0,0,0.17)] w-[340px]">
        {/* Vehicle Summary */}
        <div className="flex items-center mb-5">
          <div className="bg-yellow-200 rounded-full p-4 flex items-center justify-center mr-3">
          </div>
          <div>
            <div className="font-bold text-lg flex items-center">
              Auto
              <span className="text-xs ml-1 text-gray-500 cursor-pointer">Change</span>
            </div>
            <div className="text-sm text-gray-700">Auto rickshaw at your doorstep</div>
          </div>
        </div>
        {/* Fare Breakdown */}
        <div>
          <div className="font-bold text-base mb-2">Fare Breakdown</div>
          <div className="flex justify-between text-black font-semibold text-sm mb-1">
            <span>Base Fare</span><span>₹ 50.00</span>
          </div>
          <div className="flex justify-between text-black font-semibold text-sm mb-1">
            <span>Distance(5.2KM)</span><span>₹ 62.40</span>
          </div>
          <div className="flex justify-between text-black font-semibold text-sm mb-3">
            <span>Taxes & Fees†</span><span>₹ 15.60</span>
          </div>
          <div className="border-b my-2"></div>
          <div className="flex justify-between text-black font-bold text-lg mb-2">
            <span>Total</span><span>₹ 128.00</span>
          </div>
          <div className="font-bold text-base mb-2">Payment</div>
          {/* Payment Method Button */}
          <div className="flex justify-between items-center">
            <button className="bg-yellow-100 flex items-center px-5 py-3 rounded-xl text-lg font-semibold shadow cursor-default">
              ₹ UPI
            </button>
            <button className="text-gray-300 font-bold ml-2 cursor-not-allowed">Change</button>
          </div>
        </div>
      </div>
      {/* Confirm Button */}
      <button className="mt-8 bg-[#F6E7B4] hover:bg-[#e3d69f] text-gray-900 rounded-full px-12 py-3 font-semibold shadow-[4px_4px_0_0_rgba(0,0,0,0.14)]">
        Confirm & Book Ride
      </button>
    </div>
  </div>
);

export default RideSummary;
