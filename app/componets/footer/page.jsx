"use client";
import { Instagram, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-yellow-100  text-black mt-12 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo / Company Name */}
        <div>
          <h2 className="text-3xl font-extrabold mb-4 tracking-tight">ZipRide</h2>
          <p className="text-sm mb-6">
            Your trusted ride-sharing companion for quick, safe, and affordable trips.
          </p>

          {/* Social Icons */}
          <div className="flex items-center space-x-4 mt-2 ">
            <a href="#" aria-label="Instagram">
              <Instagram className="w-5 h-5 hover:scale-110 transition-transform" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 hover:scale-110 transition-transform" />
            </a>
            <a href="#" aria-label="Facebook">
              <Facebook className="w-5 h-5 hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-xl font-bold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Newsroom</a></li>
            <li><a href="#" className="hover:underline">Investors</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-bold mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Book a Ride</a></li>
            <li><a href="#" className="hover:underline">Drive with ZipRide</a></li>
            <li><a href="#" className="hover:underline">Business Rides</a></li>
            <li><a href="#" className="hover:underline">ZipPass Membership</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-xl font-bold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Safety Guidelines</a></li>
            <li><a href="#" className="hover:underline">Report an Issue</a></li>
            <li><a href="#" className="hover:underline">Contact Support</a></li>
          </ul>
        </div>
      </div>

      {/* Travel / Features */}
      <div className="max-w-7xl mx-auto px-6 pb-10 grid grid-cols-1 md:grid-cols-4">
        <div></div>
        <div></div>
        <div></div>
        <div>
          <h3 className="text-xl font-bold mb-3">Travel / Features</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Ride Tracker</a></li>
            <li><a href="#" className="hover:underline">Multiple Vehicle Types</a></li>
            <li><a href="#" className="hover:underline">Rewards & Offers</a></li>
            <li><a href="#" className="hover:underline">Real-time GPS</a></li>
          </ul>
        </div>
      </div>

      {/* App Badges */}
      <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:space-x-6 justify-left pb-8">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
          alt="Google Play"
          className="h-12 cursor-pointer"
        />
        <img
          src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
          alt="App Store"
          className="h-12 cursor-pointer"
        />
      </div>

      {/* Copyright */}
      <div className="text-center border-t border-gray-300 py-4 text-sm text-black">
        © {new Date().getFullYear()} ZipRide. All rights reserved.
      </div>
    </footer>
  );
}
