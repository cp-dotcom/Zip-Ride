"use client"
import React, { useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ChatUI = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { sender: "You", text: input, left: false }]);
      setInput("");
    }
  };

  return (
    <div className="min-h-screen bg-white relative flex flex-col">
      {/* Soft background circles */}
      <div className="absolute -left-32 -top-36 w-[550px] h-[330px] bg-yellow-100 rounded-full blur-3xl opacity-40 z-0"/>
      <div className="absolute right-0 top-12 w-[380px] h-[180px] bg-yellow-100 rounded-full blur-3xl opacity-40 z-0"/>
 <Link
        href="/"
        className="absolute top-6 left-6 z-10 p-2 bg-white rounded-full hover:bg-gray-100 shadow text-black"
      >
        <ArrowLeftIcon className="w-6 h-6" />
      </Link>

      {/* Back button */}
      <button className="absolute top-6 left-6 z-10 p-2 bg-white rounded-full hover:bg-gray-100 shadow">
        <ArrowLeftIcon className="w-6 h-6"/>
      </button>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col justify-end pb-36">
        {/* Messages */}
        <div className="flex flex-col gap-10">
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-[200px] text-gray-400 text-lg">
              No messages yet
            </div>
          )}
          {messages.map((msg, idx) =>
            msg.left ? (
              <div key={idx} className="flex items-center mt-10 ml-16">
                <UserCircleIcon className="w-12 h-12 text-gray-700" />
                <div>
                  <div className="ml-3 mb-1 text-sm text-gray-600">{msg.sender}</div>
                  <div className="ml-3">
                    <div className="bg-[#FFF7C7] rounded-xl py-3 px-6 text-black shadow-[4px_4px_0_0_rgba(0,0,0,0.11)] text-base font-medium w-fit">
                      {msg.text}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div key={idx} className="flex items-center justify-end mr-24">
                <div className="flex flex-col items-end">
                  <div className="mr-3 mb-1 text-sm text-gray-600">{msg.sender}</div>
                  <div className="mr-3">
                    <div className="bg-[#FFE98A] rounded-xl py-3 px-6 text-black shadow-[4px_4px_0_0_rgba(0,0,0,0.10)] text-base font-medium w-fit">
                      {msg.text}
                    </div>
                  </div>
                </div>
                <UserCircleIcon className="w-12 h-12 text-gray-700 ml-3" />
              </div>
            )
          )}
        </div>
      </div>

      {/* Message input bar */}
      <form
        className="absolute bottom-10 left-0 w-full flex justify-center z-20"
        onSubmit={handleSend}
      >
        <div className="flex items-center w-[560px] bg-[#FFFBE2] rounded-xl px-6 py-4 shadow">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 bg-transparent outline-none text-gray-600 text-base"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="ml-4 bg-[#FFE98A] rounded-full w-9 h-9 flex items-center justify-center text-yellow-800 shadow font-bold"
          >
            <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatUI;
