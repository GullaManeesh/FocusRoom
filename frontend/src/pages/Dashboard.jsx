import { useState } from "react";
import {
  Clock,
  Zap,
  CheckCircle,
  TrendingUp,
  Target,
  LogOut,
} from "lucide-react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [showFocusPrompt, setShowFocusPrompt] = useState(false);
  const navigate = useNavigate();

  const weeklyData = [6.5, 4.2, 8.1, 3.8, 6.0, 2.1, 7.3];
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const maxWeeklyHours = Math.max(...weeklyData);

  const generateHeatmapData = () => {
    const data = [];
    const today = new Date();
    for (let i = 364; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const intensity = Math.floor(Math.random() * 5);
      data.push({
        date: date.toISOString().split("T")[0],
        intensity,
        contributions: Math.floor(Math.random() * 8),
      });
    }
    return data;
  };
  const heatmapData = generateHeatmapData();

  const handleEnterFocusMode = () => {
    setShowFocusPrompt(false);
    toast("Entering your Focus Room...", {
      duration: 1500,
    });
    setTimeout(() => {
      navigate("/focus-mode");
    }, 1500);
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-10 bg-black text-white relative overflow-hidden">
      {/* Background dots */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fill-rule=evenodd%3E%3Cg fill=%239C92AC fill-opacity=0.1%3E%3Ccircle cx=30 cy=30 r=2/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      <div className="relative z-10 p-4 sm:p-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 sm:mb-8 space-y-4 md:space-y-0">
          <div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
              Welcome back,{" "}
              <span className="text-blue-400">gullamanish2045</span>
            </h1>
            <p className="text-gray-300 text-sm sm:text-base">
              Ready to dive into your focus zone?
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => setShowFocusPrompt(true)}
              className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2 text-sm sm:text-base"
            >
              <Target className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
              <span>Enter Focus Mode</span>
            </button>
            <button className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2 text-sm sm:text-base">
              <LogOut className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
          {[
            {
              title: "Total Hours",
              icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />,
              value: "127",
              unit: "hrs",
              color: "text-white",
            },
            {
              title: "Current Streak",
              icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />,
              value: "12",
              unit: "days",
              color: "text-purple-400",
            },
            {
              title: "Sessions Completed",
              icon: (
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
              ),
              value: "89",
              color: "text-green-400",
            },
            {
              title: "Daily Average",
              icon: (
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
              ),
              value: "4.2",
              unit: "hrs",
              color: "text-yellow-400",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-6 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                {card.title && (
                  <h3 className="text-gray-300 text-xs sm:text-sm">
                    {card.title}
                  </h3>
                )}
                {card.icon}
              </div>
              <div className={`text-xl sm:text-3xl font-bold ${card.color}`}>
                {card.value}
              </div>
              {card.unit && (
                <div className="text-gray-400 text-xs sm:text-sm">
                  {card.unit}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Weekly Chart & Streak */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* Weekly Focus Hours Chart */}
          <div className="lg:col-span-2 bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl border border-white/20 p-4 sm:p-6 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
              Weekly Focus Hours
            </h3>
            <div className="flex items-end space-x-2 sm:space-x-3 h-32 sm:h-64">
              {weeklyData.map((hours, i) => (
                <div key={i} className="flex-1 flex flex-col items-center">
                  <div
                    className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg mb-2 hover:from-blue-500 hover:to-blue-300 transition-all duration-300"
                    style={{
                      height: `${(hours / maxWeeklyHours) * 100}%`,
                      minHeight: "20px",
                    }}
                  ></div>
                  <div className="text-xs text-gray-400">{weekDays[i]}</div>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-4 text-xs text-gray-400">
              <span>0</span>
              <span>3</span>
              <span>6</span>
              <span>9</span>
              <span>12</span>
            </div>
          </div>

          {/* Focus Streak */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl border border-white/20 p-4 sm:p-6 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-500 rounded-full"></div>
              <h3 className="text-lg sm:text-xl font-semibold">Focus Streak</h3>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-6xl font-bold text-purple-400 mb-2">
                12
              </div>
              <div className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
                consecutive days
              </div>
              <div className="flex justify-center space-x-1 sm:space-x-2 mb-4 sm:mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-500 rounded-full"
                  ></div>
                ))}
              </div>
              <div className="text-xs sm:text-sm text-gray-300">
                Keep it up! You're on fire 🔥
              </div>
            </div>
          </div>
        </div>

        {/* Heatmap */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl border border-white/20 p-4 sm:p-6 hover:bg-white/20 transition-all duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 space-y-2 sm:space-y-0">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Focus Activity Heatmap
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Your focus patterns over the last 365 days
              </p>
            </div>
          </div>
          <div className="grid grid-cols-24 sm:grid-cols-12 gap-1 overflow-x-auto">
            {heatmapData.map((day, i) => (
              <div
                key={i}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-sm transition-all duration-200 hover:scale-110 ${
                  day.intensity === 0
                    ? "bg-gray-700"
                    : day.intensity === 1
                    ? "bg-blue-900"
                    : day.intensity === 2
                    ? "bg-blue-700"
                    : day.intensity === 3
                    ? "bg-blue-500"
                    : "bg-blue-400"
                }`}
                title={`${day.date}: ${day.contributions} contributions`}
              ></div>
            ))}
          </div>
        </div>

        {/* Focus Prompt Modal */}
        {showFocusPrompt && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl border border-white/20 p-6 sm:p-8 max-w-sm sm:max-w-md w-full">
              <h3 className="text-xl sm:text-2xl font-semibold text-center mb-4 sm:mb-6">
                Ready to start your next focus session?
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <button
                  onClick={handleEnterFocusMode}
                  className="w-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <Target className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                  <span>Enter Focus Mode</span>
                </button>
                <button
                  onClick={() => setShowFocusPrompt(false)}
                  className="w-full bg-white/10 hover:bg-white/20 px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 border border-white/20 text-sm sm:text-base"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
