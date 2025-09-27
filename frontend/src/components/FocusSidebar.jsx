import React from "react";

function FocusSidebar({ sidebarOpen, setSelectedTool, selectedTool }) {
  const focusTools = [
    { name: "YouTube", active: true },
    { name: "Music", active: false },
    { name: "Notes", active: false },
    { name: "Pomodoro", active: false },
    { name: "Todo List", active: false },
    { name: "Playlists", active: false },
    { name: "Reminders", active: false },
  ];
  return (
    <div
      className={`${
        sidebarOpen ? "w-60" : "w-0"
      } transition-all duration-300 ease-in-out overflow-hidden mt-20 relative z-10`}
    >
      <div className="h-full bg-[#191919]  bg-opacity-40 backdrop-blur-xl border-r border-gray-800 border-opacity-50">
        <div className="p-3">
          <h2 className="text-sm font-medium text-gray-300 mb-4 tracking-wide">
            Focus Tools
          </h2>
          <div className="space-y-1">
            {focusTools.map((tool, index) => (
              <button
                key={tool.name}
                onClick={() => setSelectedTool(tool.name)}
                className={`w-full text-left text-sm px-6 py-2 rounded-xl transition-all duration-200 ${
                  tool.name === selectedTool
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/20 border border-blue-400 border-opacity-30"
                    : "text-gray-300 hover:bg-white hover:bg-opacity-5 hover:backdrop-blur-sm border border-transparent hover:border-gray-700"
                }`}
              >
                <span className="font-medium">{tool.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FocusSidebar;
