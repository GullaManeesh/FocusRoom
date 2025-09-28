import React, { useState } from "react";
import { Sparkles, X, Send, Mic, Paperclip } from "lucide-react";

// AIAssistant Component
const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <>
      {/* Floating Button (Bottom Right) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 z-50 bg-gradient-to-br from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl shadow-purple-500/25 backdrop-blur-sm border border-purple-400 border-opacity-30 group"
        >
          <Sparkles
            size={20}
            className="sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform"
          />
        </button>
      )}

      {/* Chat Window (Bottom Right) */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-80 sm:w-96 h-96 sm:h-[500px] z-50 bg-black bg-opacity-80 backdrop-blur-xl border border-gray-700 border-opacity-50 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-700 border-opacity-50">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                <Sparkles size={12} className="sm:w-4 sm:h-4 text-white" />
              </div>
              <div>
                <h3 className="text-white font-medium text-sm sm:text-base">
                  AI Assistant
                </h3>
                <p className="text-gray-400 text-xs">Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors"
            >
              <X size={16} className="sm:w-5 sm:h-5 text-gray-400" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-3 sm:p-4 overflow-y-auto">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <div className="w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Sparkles size={10} className="sm:w-3 sm:h-3 text-white" />
                </div>
                <div className="bg-white bg-opacity-5 backdrop-blur-sm border border-gray-700 border-opacity-30 rounded-xl px-3 py-2 sm:px-4 sm:py-3 max-w-xs">
                  <p className="text-gray-200 text-xs sm:text-sm">
                    Hi! I'm your AI assistant. How can I help you today?
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-2 sm:space-x-3 justify-end">
                <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl px-3 py-2 sm:px-4 sm:py-3 max-w-xs">
                  <p className="text-white text-xs sm:text-sm">
                    Hello, can you help me with my tasks?
                  </p>
                </div>
                <div className="w-6 h-6 sm:w-7 sm:h-7 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs text-white font-medium">U</span>
                </div>
              </div>

              <div className="flex items-start space-x-2 sm:space-x-3">
                <div className="w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Sparkles size={10} className="sm:w-3 sm:h-3 text-white" />
                </div>
                <div className="bg-white bg-opacity-5 backdrop-blur-sm border border-gray-700 border-opacity-30 rounded-xl px-3 py-2 sm:px-4 sm:py-3 max-w-xs">
                  <p className="text-gray-200 text-xs sm:text-sm">
                    Of course! I can help you organize your tasks, set
                    reminders, or answer any questions you have. What would you
                    like to work on?
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-3 sm:p-4 border-t border-gray-700 border-opacity-50">
            <div className="flex items-center space-x-2">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-white bg-opacity-5 backdrop-blur-sm border border-gray-700 border-opacity-50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 focus:border-purple-400 focus:border-opacity-50 transition-all text-xs sm:text-sm"
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      setMessage("");
                    }
                  }}
                />
                <div className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
                  <button className="p-1 hover:bg-white hover:bg-opacity-10 rounded transition-colors">
                    <Paperclip
                      size={14}
                      className="sm:w-4 sm:h-4 text-gray-400"
                    />
                  </button>
                  <button className="p-1 hover:bg-white hover:bg-opacity-10 rounded transition-colors">
                    <Mic size={14} className="sm:w-4 sm:h-4 text-gray-400" />
                  </button>
                </div>
              </div>
              <button
                className="p-2 sm:p-3 bg-gradient-to-br from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 rounded-xl transition-all duration-200 shadow-lg"
                onClick={() => setMessage("")}
              >
                <Send size={14} className="sm:w-4 sm:h-4 text-white" />
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="px-3 pb-3 sm:px-4 sm:pb-4">
            <div className="flex flex-wrap gap-1 sm:gap-2">
              <button className="px-2 py-1 sm:px-3 sm:py-1.5 bg-white bg-opacity-5 backdrop-blur-sm border border-gray-700 border-opacity-30 rounded-full text-xs text-gray-300 hover:bg-opacity-10 transition-colors">
                Help with tasks
              </button>
              <button className="px-2 py-1 sm:px-3 sm:py-1.5 bg-white bg-opacity-5 backdrop-blur-sm border border-gray-700 border-opacity-30 rounded-full text-xs text-gray-300 hover:bg-opacity-10 transition-colors">
                Set reminder
              </button>
              <button className="px-2 py-1 sm:px-3 sm:py-1.5 bg-white bg-opacity-5 backdrop-blur-sm border border-gray-700 border-opacity-30 rounded-full text-xs text-gray-300 hover:bg-opacity-10 transition-colors">
                Ask question
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
