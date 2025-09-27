import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Focus } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

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
        className="absolute top-8 left-8 flex items-center text-gray-400 hover:text-white transition-colors duration-200"
      >
        <HiOutlineArrowLeft className="w-5 h-5 mr-2" />
        Back to Home
      </a>

      {/* Login Card with Framer Motion Animation */}
      <motion.div
        className="relative w-full max-w-md p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg text-center text-white  transition duration-300"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Top left decorative element */}
        <div
          className="absolute inset-0 rounded-xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
          }}
        ></div>

        <h2 className="relative text-3xl font-bold text-white mb-2">
          Welcome Back
        </h2>
        <p className="relative text-gray-400 mb-8">
          Enter your credentials to access your focus room
        </p>

        <form className="relative space-y-5">
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
              className="w-full px-4  py-2 bg-black bg-opacity-60 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500"
            />
          </div>

          {/* Enter Focus Room Button */}
          <motion.button
            onClick={handleEnterFocusRoom}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full flex gap-2 items-center justify-center px-4 py-3 font-bold text-white transition-transform bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            <Focus /> Enter Focus Room
          </motion.button>

          {/* Google Signup Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            className="w-full flex items-center justify-center gap-2 px-4 py-3 font-bold text-white bg-gray-700 bg-opacity-70 border border-gray-600 rounded-lg transition-transform hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            <FaGoogle className="w-5 h-5" />
            Sign up with Google
          </motion.button>
        </form>

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
      </motion.div>
    </div>
  );
};

export default Login;
