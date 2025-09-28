import React, { useState } from "react";
import { Search, Video } from "lucide-react";

function Youtube() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(false);

  // Sample video data
  const videos = [
    {
      id: 1,
      title: "Building a React App from Scratch - Complete Tutorial",
      channel: "Code Academy",
      views: "2.3M",
      time: "3 months ago",
      duration: "45:32",
      thumbnail: "bg-gradient-to-br from-blue-500 to-purple-600",
    },
    {
      id: 2,
      title: "Amazing Wildlife Documentary - Lions in the Savanna",
      channel: "Nature World",
      views: "1.8M",
      time: "1 week ago",
      duration: "28:15",
      thumbnail: "bg-gradient-to-br from-green-500 to-yellow-500",
    },
    {
      id: 3,
      title: "Top 10 JavaScript Tips Every Developer Should Know",
      channel: "Dev Tips",
      views: "945K",
      time: "2 days ago",
      duration: "12:45",
      thumbnail: "bg-gradient-to-br from-red-500 to-pink-500",
    },
    {
      id: 4,
      title: "Cooking the Perfect Pasta - Italian Chef Secrets",
      channel: "Foodie Channel",
      views: "3.2M",
      time: "5 days ago",
      duration: "18:30",
      thumbnail: "bg-gradient-to-br from-orange-500 to-red-500",
    },
    {
      id: 5,
      title: "Space Exploration: Journey to Mars",
      channel: "Science Today",
      views: "5.1M",
      time: "2 weeks ago",
      duration: "52:18",
      thumbnail: "bg-gradient-to-br from-indigo-500 to-blue-500",
    },
    {
      id: 6,
      title: "Learn Guitar in 30 Days - Beginner Course",
      channel: "Music Lessons",
      views: "1.2M",
      time: "1 month ago",
      duration: "35:20",
      thumbnail: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
    {
      id: 7,
      title: "Morning Yoga Routine for Beginners",
      channel: "Wellness Studio",
      views: "892K",
      time: "4 days ago",
      duration: "22:10",
      thumbnail: "bg-gradient-to-br from-teal-500 to-green-500",
    },
    {
      id: 8,
      title: "History of Ancient Civilizations",
      channel: "History Hub",
      views: "2.7M",
      time: "1 week ago",
      duration: "1:15:45",
      thumbnail: "bg-gradient-to-br from-amber-500 to-orange-500",
    },
  ];

  return (
    <div className="bg-[#0F0F0F] w-full min-h-screen text-white">
      {/* Header */}
      <header
        className="px-4 py-2 w-full flex flex-col items-center sticky top-0 z-10 
                   bg-black/30 backdrop-blur-md "
      >
        <div className="flex-1 w-full max-w-2xl">
          <div className="flex">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#121212]/50 border border-gray-700 rounded-l-full py-2 px-4
                     focus:outline-none focus:border-gray-500 text-white placeholder-gray-400"
              />
            </div>
            <button
              className="bg-[#303030]/50 border border-gray-700 border-l-0 rounded-r-full px-6 py-2
                         hover:bg-gray-600/70 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Video Grid */}
      {!selectedVideo && (
        <main className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {videos.map((video) => (
              <div
                key={video.id}
                onClick={() => setSelectedVideo(true)}
                className="cursor-pointer group"
              >
                {/* Thumbnail */}
                <div className="relative mb-3">
                  <div
                    className={`${video.thumbnail} w-full h-48 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-200`}
                  >
                    <div className="bg-black bg-opacity-40 p-3 rounded-full">
                      <Video className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
                    {video.duration}
                  </div>
                </div>

                {/* Video Info */}
                <div className="flex space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-9 h-9 bg-gradient-to-br from-gray-500 to-gray-700 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-white">
                        {video.channel.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-white text-sm line-clamp-2 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      {video.channel}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {video.views} views • {video.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      )}
    </div>
  );
}

export default Youtube;
