import React, { useState } from "react";
import { Focus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Login = () => {
  const [state, setState] = useState("login");
  const navigate = useNavigate();

  const handleEnterFocusRoom = (e) => {
    e.preventDefault();
    toast("Entering your Focus Room...", {
      duration: 1500,
    });
    setTimeout(() => {
      navigate("/focus-room");
    }, 1500);
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      {/* Back to Home link */}
      <a
        href="#"
        className="absolute top-4 sm:top-8 left-4 sm:left-8 flex items-center text-gray-400 hover:text-white transition-colors duration-200"
      >
        <svg
          className="w-5 h-5 mr-2"
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
        Back to Home
      </a>

      {/* Login Card with Framer Motion Animation */}
      <div className="relative w-full max-w-sm sm:max-w-md p-6 sm:p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg text-center text-white transition duration-300">
        {/* Top left decorative element */}
        <div
          className="absolute inset-0 rounded-xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
          }}
        ></div>

        <h2 className="relative text-2xl sm:text-3xl font-bold text-white mb-2">
          Welcome Back
        </h2>
        <p className="relative text-gray-400 mb-6 sm:mb-8">
          Enter your credentials to access your focus room
        </p>

        <div className="relative space-y-4 sm:space-y-5">
          {/* Username Field */}
          {state === "signup" && (
            <div>
              <label
                htmlFor="username"
                className="block text-left text-gray-300 text-sm font-medium mb-1"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                className="w-full px-4 py-3 bg-gray-900 bg-opacity-60 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500"
              />
            </div>
          )}

          {/* Email Address Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-left text-white text-sm font-medium mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-black bg-opacity-60 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500"
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-left text-white text-sm font-medium mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 bg-black bg-opacity-60 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500"
            />
          </div>

          {/* Enter Focus Room Button */}
          <button
            onClick={handleEnterFocusRoom}
            type="submit"
            className="w-full flex gap-2 items-center justify-center px-4 py-3 font-bold text-white transition-transform bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 hover:scale-105 active:scale-95"
          >
            <Focus /> Enter Focus Room
          </button>

          {/* Google Signup Button */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 px-4 py-3 font-bold text-white bg-gray-700 bg-opacity-70 border border-gray-600 rounded-lg transition-transform hover:bg-gray-600 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Sign up with Google
          </button>
        </div>

        {/* Don't have an account? Sign Up */}
        {state === "login" ? (
          <p className="relative text-gray-400 text-sm mt-8">
            Don't have an account?{" "}
            <a
              onClick={() => setState("signup")}
              className="cursor-pointer text-blue-400 hover:underline"
            >
              Sign Up
            </a>
          </p>
        ) : (
          <p className="relative text-gray-400 text-sm mt-8">
            already have an account?{" "}
            <a
              onClick={() => setState("login")}
              className="cursor-pointer text-blue-400 hover:underline"
            >
              Login
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
