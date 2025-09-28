import React, { useState } from "react";
import FocusSidebar from "../components/FocusSidebar";
import FocusHeader from "../components/FocusHeader";
import Youtube from "../components/Youtube";
import Music from "../components/Music";
import AIAssistant from "../components/AIAssistant";
import TodoCalendarApp from "../components/TodoCalendarApp";
import Playlist from "../components/Playlist";
import Notes from "../components/Notes";

const FocusMode = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedTool, setSelectedTool] = useState("YouTube");

  return (
    <div className="flex h-screen  w-screen bg-black text-white overflow-auto scrollbar-hide">
      {/* Header */}
      <FocusHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex pt-10 sm:pt-14 md:pt-[4.4rem] h-full">
        {/* Sidebar */}
        <FocusSidebar
          sidebarOpen={sidebarOpen}
          setSelectedTool={setSelectedTool}
          selectedTool={selectedTool}
        />

        {/* Main content */}
        <div className="flex-1 pr-3 overflow-auto scrollbar-hide">
          {selectedTool === "YouTube" && <Youtube />}
          {selectedTool === "Music" && <Music />}
          {selectedTool === "Playlists" && <Playlist />}
          {selectedTool === "Notes" && <Notes />}
          {selectedTool === "Pomodoro" && <div className="p-4">Pomodoro</div>}
          {selectedTool === "Todo List" && <TodoCalendarApp />}
        </div>
      </div>

      {/* Floating AI Assistant Button */}
      <AIAssistant />
    </div>
  );
};

export default FocusMode;
