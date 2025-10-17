// "use client";

// import React from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// // Dummy data for illustration
// const rides = [
//   {
//     id: 1,
//     date: "Tuesday, October 26, 2024 at 3:00 PM",
//     to: "456 Oak Avenue, Somecity",
//     from: "123 Main Street, Anytown",
//     status: "Confirmed",
//   },
//   {
//     id: 2,
//     date: "Wednesday, October 27, 2024 at 9:00 AM",
//     to: "101 Maple Avenue, Othercity",
//     from: "789 Pine Street, Yourtown",
//     status: "Confirmed",
//   },
//   {
//     id: 3,
//     date: "Friday, November 5, 2024 at 6:30 PM",
//     to: "Airport Terminal B",
//     from: "2468 Birch Street, Megatown",
//     status: "OnTheWay",
//   },
// ];

// function getStatusStyle(status) {
//   switch (status) {
//     case "Confirmed":
//       return "bg-yellow-200 text-green-700 font-medium px-3 py-1 rounded-xl";
//     case "OnTheWay":
//       return "bg-yellow-100 text-yellow-700 font-medium px-3 py-1 rounded-xl";
//     default:
//       return "bg-gray-200 text-black";
//   }
// }

// export default function ScheduledRides() {
//   const router = useRouter();

//   const handleCancel = () => {
//     router.push("/cancelride");
//   };

//   return (
//     <section className="min-h-screen bg-yellow-50 px-4 py-16">
//       <div className="max-w-3xl mx-auto">
//         <h1 className="text-3xl md:text-4xl font-extrabold text-black mb-8">
//           Scheduled Rides
//         </h1>

//         <div className="mb-8">
//           <div className="flex items-center gap-2 border-b border-yellow-200 pb-4 mb-6">
//             <svg width="18" height="18" fill="none" stroke="#d4af37" strokeWidth="2" viewBox="0 0 20 20">
//               <circle cx="9" cy="9" r="7"></circle>
//               <path d="M17 17L13.5 13.5"></path>
//             </svg>
//             <input
//               className="bg-white text-black border-0 rounded-md py-1.5 px-2 w-full focus:ring-2 focus:ring-yellow-300 outline-none"
//               placeholder="Search by destination or date"
//             />
//           </div>

//           <ul className="space-y-4">
//             {rides.map((ride) => (
//               <li
//                 key={ride.id}
//                 className="flex flex-col md:flex-row md:items-center justify-between bg-yellow-100/40 rounded-xl p-5 shadow transition"
//               >
//                 <div className="flex items-start gap-3 w-full">
//                   <svg width="24" height="24" fill="none" stroke="#d4af37" strokeWidth="2" viewBox="0 0 24 24">
//                     <rect x="2" y="7" width="20" height="10" rx="2"/>
//                     <circle cx="7" cy="17" r="2"/>
//                     <circle cx="17" cy="17" r="2"/>
//                   </svg>
//                   <div>
//                     <p className="font-semibold text-base text-black mb-1">{ride.date}</p>
//                     <p className="text-sm text-gray-700">To: {ride.to}</p>
//                     <p className="text-sm text-gray-500">From: {ride.from}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-4 mt-4 md:mt-0">
//                   <button className="text-red-500 font-semibold hover:underline transition" onClick={handleCancel}>
//                     Cancel
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";
import React, { useState } from "react";
import CancelRideModal from "../components/cancel";

const rides = [
  {
    id: 1,
    date: "Tuesday, October 26, 2024 at 3:00 PM",
    to: "456 Oak Avenue, Somecity",
    from: "123 Main Street, Anytown",
    status: "Confirmed",
  },
  {
    id: 2,
    date: "Wednesday, October 27, 2024 at 9:00 AM",
    to: "101 Maple Avenue, Othercity",
    from: "789 Pine Street, Yourtown",
    status: "Confirmed",
  },
  {
    id: 3,
    date: "Friday, November 5, 2024 at 6:30 PM",
    to: "Airport Terminal B",
    from: "2468 Birch Street, Megatown",
    status: "OnTheWay",
  },
];

export default function ScheduledRides() {
  const [showModal, setShowModal] = useState(false);
  const [selectedRide, setSelectedRide] = useState(null);
  const [cancelReason, setCancelReason] = useState("");

  const handleCancel = (ride) => {
    setSelectedRide(ride);
    setShowModal(true);
    setCancelReason(""); // clear previous reason selection
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedRide(null);
    setCancelReason("");
  };

  const handleConfirmCancel = () => {
    setShowModal(false);
    alert(`Ride canceled: ${selectedRide?.id}, Reason: ${cancelReason}`);
    // Here you can add API call logic if needed
  };

  return (
    <section className="min-h-screen bg-yellow-50 px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-black mb-8">
          Scheduled Rides
        </h1>
        <ul className="space-y-4">
          {rides.map((ride) => (
            <li
              key={ride.id}
              className="flex flex-col md:flex-row md:items-center justify-between bg-yellow-100/40 rounded-xl p-5 shadow transition"
            >
              <div className="flex items-start gap-3 w-full">
                <div>
                  <p className="font-semibold text-base text-black mb-1">{ride.date}</p>
                  <p className="text-sm text-gray-700">To: {ride.to}</p>
                  <p className="text-sm text-gray-500">From: {ride.from}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-4 md:mt-0">
                <button
                  className="text-red-500 font-semibold hover:underline transition"
                  onClick={() => handleCancel(ride)}
                >
                  Cancel
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <CancelRideModal
        isOpen={showModal}
        onClose={handleModalClose}
        onConfirm={handleConfirmCancel}
        reason={cancelReason}
        setReason={setCancelReason}
      />
    </section>
  );
}
