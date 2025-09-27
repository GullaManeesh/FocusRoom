import React, { useState } from "react";
import { Sparkles, X, Send, Mic, Paperclip } from "lucide-react";

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <>
      {/* Floating Button (Bottom Right) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 z-50 bg-gradient-to-br from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl shadow-purple-500/25 backdrop-blur-sm border border-purple-400 border-opacity-30 group"
        >
          <Sparkles
            size={24}
            className="text-white group-hover:scale-110 transition-transform"
          />
        </button>
      )}

      {/* Chat Window (Bottom Right) */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] z-50 bg-black bg-opacity-80 backdrop-blur-xl border border-gray-700 border-opacity-50 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700 border-opacity-50">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                <Sparkles size={16} className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-medium">AI Assistant</h3>
                <p className="text-gray-400 text-xs">Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors"
            >
              <X size={18} className="text-gray-400" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-7 h-7 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Sparkles size={12} className="text-white" />
                </div>
                <div className="bg-white bg-opacity-5 backdrop-blur-sm border border-gray-700 border-opacity-30 rounded-xl px-4 py-3 max-w-xs">
                  <p className="text-gray-200 text-sm">
                    Hi! I'm your AI assistant. How can I help you today?
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 justify-end">
                <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl px-4 py-3 max-w-xs">
                  <p className="text-white text-sm">
                    Hello, can you help me with my tasks?
                  </p>
                </div>
                <div className="w-7 h-7 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xs text-white font-medium">U</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-7 h-7 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Sparkles size={12} className="text-white" />
                </div>
                <div className="bg-white bg-opacity-5 backdrop-blur-sm border border-gray-700 border-opacity-30 rounded-xl px-4 py-3 max-w-xs">
                  <p className="text-gray-200 text-sm">
                    Of course! I can help you organize your tasks, set
                    reminders, or answer any questions you have. What would you
                    like to work on?
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-700 border-opacity-50">
            <div className="flex items-center space-x-2">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full px-4 py-3 bg-white bg-opacity-5 backdrop-blur-sm border border-gray-700 border-opacity-50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 focus:border-purple-400 focus:border-opacity-50 transition-all text-sm"
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      setMessage("");
                    }
                  }}
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
                  <button className="p-1 hover:bg-white hover:bg-opacity-10 rounded transition-colors">
                    <Paperclip size={16} className="text-gray-400" />
                  </button>
                  <button className="p-1 hover:bg-white hover:bg-opacity-10 rounded transition-colors">
                    <Mic size={16} className="text-gray-400" />
                  </button>
                </div>
              </div>
              <button
                className="p-3 bg-gradient-to-br from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 rounded-xl transition-all duration-200 shadow-lg"
                onClick={() => setMessage("")}
              >
                <Send size={16} className="text-white" />
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="px-4 pb-4">
            <div className="flex flex-wrap gap-2">
              <button className="px-3 py-1.5 bg-white bg-opacity-5 backdrop-blur-sm border border-gray-700 border-opacity-30 rounded-full text-xs text-gray-300 hover:bg-opacity-10 transition-colors">
                Help with tasks
              </button>
              <button className="px-3 py-1.5 bg-white bg-opacity-5 backdrop-blur-sm border border-gray-700 border-opacity-30 rounded-full text-xs text-gray-300 hover:bg-opacity-10 transition-colors">
                Set reminder
              </button>
              <button className="px-3 py-1.5 bg-white bg-opacity-5 backdrop-blur-sm border border-gray-700 border-opacity-30 rounded-full text-xs text-gray-300 hover:bg-opacity-10 transition-colors">
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
