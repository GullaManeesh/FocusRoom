import React, { useState } from "react";
import FocusSidebar from "../components/FocusSidebar";
import FocusHeader from "../components/FocusHeader";
import { Play } from "lucide-react";
import AIAssistant from "../components/AIAssistant";

const FocusMode = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedTool, setSelectedTool] = useState("YouTube");

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden">
      {/* Header */}
      <FocusHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Sidebar */}
      <FocusSidebar
        sidebarOpen={sidebarOpen}
        setSelectedTool={setSelectedTool}
        selectedTool={selectedTool}
      />

      {/* Main Content */}
      <div className="flex-1 p-2 mt-20 relative">
        <div className="h-full flex items-center justify-center p-8">
          {selectedTool === "YouTube" && (
            <div className="text-center max-w-lg">
              <div className="mb-8">
                <div className="w-32 h-32 mx-auto mb-6 bg-white bg-opacity-5 backdrop-blur-lg border border-gray-700 border-opacity-50 rounded-2xl flex items-center justify-center shadow-xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Play size={24} className="text-white ml-1" fill="white" />
                  </div>
                </div>
              </div>
              <h2 className="text-2xl font-semibold text-white mb-3">
                YouTube Player
              </h2>
              <p className="text-gray-400 mb-8 text-lg">
                Search for videos below
              </p>

              {/* Search Bar */}
              <div className="max-w-md mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search YouTube videos..."
                    className="w-full px-6 py-4 bg-white bg-opacity-5 backdrop-blur-lg border border-gray-700 border-opacity-50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:border-blue-400 focus:border-opacity-50 transition-all"
                  />
                </div>
              </div>
            </div>
          )}

          {selectedTool !== "YouTube" && (
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-white bg-opacity-5 backdrop-blur-lg border border-gray-700 border-opacity-50 rounded-2xl flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-600 rounded-lg"></div>
              </div>
              <h2 className="text-2xl font-semibold text-white mb-3">
                {selectedTool}
              </h2>
              <p className="text-gray-400">This tool will be available soon</p>
            </div>
          )}
        </div>
      </div>

      {/* Floating Action Button */}
      <AIAssistant />

      {/* Background gradient overlay */}
    </div>
  );
};

export default FocusMode;
