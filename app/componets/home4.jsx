"use client";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Anjali R.",
    rating: 5,
    text: "ZipRide makes my daily commute super easy! The drivers are friendly and always on time.",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Rohit M.",
    rating: 4,
    text: "Smooth rides, clean vehicles, and great pricing. Totally worth it!",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Sneha K.",
    rating: 5,
    text: "Love the app experience! Booking a ride has never been this simple.",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
  {
    name: "Vikram D.",
    rating: 4,
    text: "Very professional drivers and seamless payments. Highly recommended!",
    avatar: "https://i.pravatar.cc/100?img=4",
  },
  {
    name: "Divya S.",
    rating: 5,
    text: "Comfortable, quick, and reliable — ZipRide is my go-to travel partner!",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
];

// Predefined overlap positions that match the image visually:
const cardLayouts = [
  { left: "14%", top: "0px", z: 2 },
  { left: "27%", top: "50px", z: 3 },
  { left: "39%", top: "100px", z: 5 }, // Center card (frontmost)
  { left: "51%", top: "50px", z: 3 },
  { left: "64%", top: "0px", z: 2 },
];


export default function Testimonials() {
  return (
    <section className="bg-yellow-50 py-16 px-4 relative overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-black font-sans">
          What Our Riders Say
        </h2>
        <p className="text-gray-700 mt-2 text-sm font-sans">
          Real stories from riders who love their ZipRide experience
        </p>
      </div>

      {/* Card Stack */}
      <div className="relative max-w-[1100px] mx-auto h-[260px]">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="absolute w-72 bg-yellow-100 rounded-2xl shadow-lg p-5 flex flex-col"
            style={{
              left: cardLayouts[i].left,
              top: cardLayouts[i].top,
              zIndex: cardLayouts[i].z,
              boxShadow: "0 4px 14px 2px rgba(0,0,0,0.11)",
            }}
          >
            {/* Avatar & Info */}
            <div className="flex items-center mb-3">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-yellow-300 shadow-sm"
              />
              <div className="ml-3">
                <h3 className="font-bold text-black text-sm">{t.name}</h3>
                <div className="flex text-yellow-500">
                  {Array.from({ length: t.rating }).map((_, i2) => (
                    <Star key={i2} size={14} fill="currentColor" />
                  ))}
                  {t.rating < 5 &&
                    Array.from({ length: 5 - t.rating }).map((_, i2) => (
                      <Star key={i2 + t.rating} size={14} />
                    ))}
                </div>
              </div>
            </div>
            {/* Review */}
            <p className="text-sm text-gray-800 font-sans leading-snug">{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
