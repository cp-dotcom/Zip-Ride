"use client";
import {
  ArrowLeft,
  LogOut,
  Edit2,
  Home,
  Briefcase,
  MapPin,
  CreditCard,
  Smartphone,
  Wallet,
  Banknote,
  ChevronRight,
  Star,
  X,
  Camera
} from "lucide-react";
import { useState } from "react";
import Navbar from "../componets/Navbar";

const favorites = [
  { label: "Home", address: "123, MG Road", icon: Home },
  { label: "Work", address: "456, Brigade Road", icon: Briefcase },
  { label: "Other", address: "789, Residency Road", icon: MapPin },
];

const payments = [
  { type: "Card", detail: "Visa••••1234", icon: CreditCard },
  { type: "UPI", detail: "9876543210@paywise", icon: Smartphone },
  { type: "Wallet", detail: "Balance: ₹600", icon: Wallet },
  { type: "Cash", detail: "Pay on delivery", icon: Banknote },
];

export default function AccountPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState({
    name: "ZipGo User",
    phone: "+911235434576",
    email: "abc@gmail.com",
    image: null, // stores uploaded image
  });

  const [formData, setFormData] = useState(user);
  const [preview, setPreview] = useState(user.image);

  // handle text field updates
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // handle profile image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
      setFormData((prev) => ({ ...prev, image: imageUrl }));
    }
  };

  const handleSave = () => {
    setUser(formData);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-50">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-yellow-50 shadow-md">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <h1 className="text-2xl font-bold text-gray-900">Account</h1>
        </div>

        {/* Profile Card */}
        <div className="bg-yellow-100 rounded-2xl p-6 mb-8 shadow-lg">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="h-20 w-20 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden">
                {user.image ? (
                  <img
                    src={user.image}
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <svg
                    className="w-10 h-10 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5a8.25 8.25 0 1115 0v.75A2.25 2.25 0 0117.25 22.5h-10.5A2.25 2.25 0 014.5 20.25v-.75z"
                    />
                  </svg>
                )}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl font-bold text-black">
                    {user.name}
                  </span>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="p-1.5 bg-yellow-500/20 hover:bg-yellow-600/30 rounded-full transition-colors"
                  >
                    <Edit2 className="h-4 w-4 text-black" />
                  </button>
                </div>
                <div className="text-black/55 font-medium">{user.phone}</div>
                <div className="flex items-center gap-1 mt-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-yellow-400 font-semibold">4.8</span>
                  <span className="text-yellow-400/80 text-sm ml-1">Rating</span>
                </div>
              </div>
            </div>

            {/* Right side buttons */}
            <div className="flex flex-col gap-3 sm:items-end">
              <button className="flex items-center gap-2 bg-white text-yellow-500 px-5 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all">
                <span>Past Rides</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button className="flex items-center gap-2 bg-white text-yellow-500 px-5 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all">
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Favorites */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Favorite Places</h2>
              <button className="p-2 bg-yellow-100 hover:bg-yellow-200 rounded-lg transition-colors">
                <span className="text-yellow-600 font-bold text-lg">+</span>
              </button>
            </div>
            <div className="space-y-3">
              {favorites.map((fav) => {
                const Icon = fav.icon;
                return (
                  <div
                    key={fav.label}
                    className="group flex items-center gap-4 p-4 bg-gray-50 hover:bg-yellow-50 rounded-xl transition-all cursor-pointer border border-transparent hover:border-yellow-200"
                  >
                    <div className="h-12 w-12 bg-yellow-100 group-hover:bg-yellow-200 rounded-xl flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 mb-0.5">
                        {fav.label}
                      </div>
                      <div className="text-sm text-gray-500">{fav.address}</div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-yellow-600 transition-colors" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Payment Methods</h2>
              <button className="p-2 bg-yellow-100 hover:bg-yellow-200 rounded-lg transition-colors">
                <span className="text-yellow-600 font-bold text-lg">+</span>
              </button>
            </div>
            <div className="space-y-3">
              {payments.map((pay) => {
                const Icon = pay.icon;
                return (
                  <div
                    key={pay.type}
                    className="group flex items-center gap-4 p-4 bg-gray-50 hover:bg-yellow-50 rounded-xl transition-all cursor-pointer border border-transparent hover:border-yellow-200"
                  >
                    <div className="h-12 w-12 bg-yellow-100 group-hover:bg-yellow-200 rounded-xl flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 mb-0.5">
                        {pay.type}
                      </div>
                      <div className="text-sm text-gray-500">{pay.detail}</div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-yellow-600 transition-colors" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Modal for Edit Profile */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-[#fffbea] rounded-3xl p-8 w-96 shadow-2xl relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200"
            >
              <X className="h-5 w-5 text-gray-600" />
            </button>

            {/* Profile Image Upload Section */}
            <div className="flex flex-col items-center mb-6 relative">
              <div className="relative h-24 w-24">
                <div className="h-24 w-24 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                  {preview ? (
                    <img
                      src={preview}
                      alt="Preview"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <svg
                      className="w-10 h-10 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5a8.25 8.25 0 1115 0v.75A2.25 2.25 0 0117.25 22.5h-10.5A2.25 2.25 0 014.5 20.25v-.75z"
                      />
                    </svg>
                  )}
                </div>

                {/* camera icon */}
                <label
                  htmlFor="profile-image"
                  className="absolute bottom-0 right-0 bg-yellow-400 p-2 rounded-full cursor-pointer hover:bg-yellow-500 transition"
                >
                  <Camera className="h-4 w-4 text-white" />
                </label>
                <input
                  type="file"
                  id="profile-image"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </div>

              <span className="font-bold text-xl mt-3">{user.name}</span>
              <span className="text-gray-600 text-sm">{user.phone}</span>
            </div>

            {/* Input fields */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-yellow-400 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-yellow-400 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-yellow-400 outline-none"
                />
              </div>
            </div>

            <button
              onClick={handleSave}
              className="mt-6 w-full bg-yellow-400 text-black font-semibold py-2 rounded-lg hover:bg-yellow-500 transition"
            >
              Change
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
