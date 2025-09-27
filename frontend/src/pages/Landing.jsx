import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center p-4">
      {/* AI-Powered Focus Experience Badge */}
      <div className="flex items-center gap-2 px-4 py-2 mb-5 text-sm font-medium bg-white bg-opacity-10 rounded-full">
        <span>✨</span> AI-Powered Focus Experience
      </div>

      {/* Heading - Updated Gradient */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Enter Deep Focus
      </h1>

      {/* Description */}
      <p className="max-w-md text-base sm:text-lg md:text-xl text-gray-300 mb-10">
        Transform your productivity with an immersive workspace designed for{" "}
        <strong className="font-bold">deep work</strong> and{" "}
        <strong className="font-bold">focused learning.</strong>
      </p>

      {/* Button */}
      <button
        onClick={() => {
          navigate("/login");
        }}
        className="flex items-center gap-2 px-6 py-3 font-bold text-white transition-all duration-300 transform bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:scale-105"
      >
        Start Focusing <ArrowRight size={16} />
      </button>
    </div>
  );
};

export default Landing;
