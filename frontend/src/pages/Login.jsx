import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSignupRedirect = () => {
    navigate("/signup");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-lightblue-100 to-blue-500 px-6 py-8 mx-auto">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <a
          href="/"
          className="flex justify-center items-center mb-6 text-2xl font-semibold text-blue-600"
        >
          <span className="font-serif">E-Shaurya</span>
        </a>
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
          Login to Your Account
        </h1>

        <div className="space-y-6">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition duration-300"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Your Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition duration-300"
              placeholder="••••••••"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white font-semibold rounded-lg transition duration-300 ease-in-out transform hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Login
          </button>

          {/* Signup Redirect */}
          <p className="text-sm text-center text-gray-600 mt-4">
            Don't have an account?{" "}
            <a
              onClick={handleSignupRedirect}
              className="text-blue-600 font-semibold cursor-pointer hover:underline"
            >
              Create one here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
