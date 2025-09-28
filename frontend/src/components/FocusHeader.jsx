import React from "react";
import {
  ArrowLeft,
  PanelLeftClose,
  PanelRightClose,
  Menu,
  Play,
  RotateCcw,
  Copy,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function FocusHeader({ sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/focus-room");
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-20 bg-[#191919] bg-opacity-80 backdrop-blur-md border-b border-gray-800">
      <div className="flex items-center justify-between px-3 py-2 sm:px-6 sm:py-4">
        <div className="flex items-center space-x-2 sm:space-x-8">
          <button
            onClick={handleNavigate}
            className="p-1 hover:bg-white hover:bg-opacity-10 rounded transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <span className="text-white font-medium text-sm sm:text-base">
            Dashboard
          </span>
          <div className="flex items-center space-x-2 bg-white bg-opacity-5 cursor-pointer px-2 py-1 sm:px-3 sm:py-1 rounded">
            {sidebarOpen ? (
              <PanelLeftClose
                onClick={() => setSidebarOpen(false)}
                size={16}
                className="text-gray-300"
              />
            ) : (
              <PanelRightClose
                onClick={() => setSidebarOpen(true)}
                size={16}
                className="text-gray-300"
              />
            )}
          </div>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <div className="flex items-center space-x-1 sm:space-x-2 bg-blue-500 bg-opacity-20 backdrop-blur-sm border border-blue-400 border-opacity-30 px-2 py-1 sm:px-3 sm:py-2 rounded-full">
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 text-blue-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <span className="font-mono text-blue-100 text-xs sm:text-sm">
              0:15
            </span>
          </div>
          <button className="p-1.5 sm:p-2 hover:bg-white hover:bg-opacity-10 rounded transition-colors">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293L12 11m3-3h3v3m0-3l-6 6-4-4-7 7"
              />
            </svg>
          </button>
          <button className="p-1.5 sm:p-2 hover:bg-white hover:bg-opacity-10 rounded transition-colors">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
export default FocusHeader;
