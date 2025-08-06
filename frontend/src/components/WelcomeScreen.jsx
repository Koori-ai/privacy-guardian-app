import React from "react";
import { useNavigate } from "react-router-dom";

export default function WelcomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 p-6 flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center text-center text-white">
        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-8">
          <div className="w-12 h-12 bg-white rounded-full"></div>
        </div>
        <h1 className="text-3xl font-bold mb-4">Privacy Guardian</h1>
        <p className="text-lg mb-8">Your digital privacy, protected</p>
        <button 
          onClick={() => navigate("/login")}
          className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
