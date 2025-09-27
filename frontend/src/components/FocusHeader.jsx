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
  return (
    <div className="fixed  top-0 left-0 right-0 z-20 bg-[#191919] bg-opacity-80 backdrop-blur-md border-b border-gray-800">
      <div className="flex   items-center justify-between px-6 py-4">
        <div className="flex   items-center space-x-8">
          <button
            onClick={() => navigate("/focus-room")}
            className="p-1 hover:bg-white hover:bg-opacity-10 rounded transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <span className="text-white font-medium">Dashboard</span>
          <div className="flex items-center space-x-2 bg-white bg-opacity-5 cursor-pointer  px-3 py-1 rounded">
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

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-blue-500 bg-opacity-20 backdrop-blur-sm border border-blue-400 border-opacity-30 px-3 py-2 rounded-full">
            <RotateCcw size={16} className="text-blue-300" />
            <span className="font-mono text-blue-100">0:15</span>
          </div>
          <button className="p-2 hover:bg-white hover:bg-opacity-10 rounded transition-colors">
            <Play size={18} className="text-gray-300" />
          </button>
          <button className="p-2 hover:bg-white hover:bg-opacity-10 rounded transition-colors">
            <RotateCcw size={18} className="text-gray-300" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FocusHeader;
