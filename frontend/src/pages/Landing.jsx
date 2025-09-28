import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center px-4 py-8 sm:px-6 lg:px-8">
      {/* AI-Powered Focus Experience Badge */}
      <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 mb-5 text-xs sm:text-sm font-medium bg-white bg-opacity-10 rounded-full">
        <span>✨</span> AI-Powered Focus Experience
      </div>

      {/* Heading - Updated Gradient */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
        Enter Deep Focus
      </h1>

      {/* Description */}
      <p className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-10 leading-relaxed">
        Transform your productivity with an immersive workspace designed for{" "}
        <strong className="font-bold">deep work</strong> and{" "}
        <strong className="font-bold">focused learning.</strong>
      </p>

      {/* Button */}
      <button
        onClick={() => {
          navigate("/login");
        }}
        className="flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-lg font-bold text-white transition-all duration-300 transform bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
      >
        Start Focusing <ArrowRight size={16} className="sm:w-5 sm:h-5" />
      </button>
    </div>
  );
};

export default Landing;
