import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegistration = () => {
    const { name, email, password, confirmPassword } = formData;

    // Validation
    if (!name || !email || !password || !confirmPassword) {
      setError(alert("Please fill in all fields."));
      return;
    }

    if (password !== confirmPassword) {
      setError(alert("Passwords do not match."));
      return;
    }

    // If validation passes, navigate to the registration page
    setError(""); // Clear errors
    navigate("/signup/registration");
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-lightblue-200 to-blue-400 px-6 py-8 mx-auto">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <a
          href="/"
          className="flex justify-center items-center mb-6 text-2xl font-semibold text-blue-600"
        >
          <span className="font-bold text-3xl">E-Shaurya</span>
        </a>
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
          Create Your Account
        </h1>

        <div className="space-y-6">
          {error && (
            <div className="text-red-500 text-sm font-medium text-center">
              {error}
            </div>
          )}

          {/* Full Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition duration-300"
              placeholder="Enter your full name"
              required
            />
          </div>

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
              value={formData.email}
              onChange={handleInputChange}
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
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition duration-300"
              placeholder="••••••••"
              required
            />
          </div>

          {/* Confirm Password Input */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition duration-300"
              placeholder="••••••••"
              required
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="button"
            onClick={handleRegistration}
            className="w-full p-3 bg-blue-600 text-white font-semibold rounded-lg transition duration-300 ease-in-out transform hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Create Account
          </button>

          {/* Login Redirect */}
          <p className="text-sm text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <span
              onClick={handleLoginRedirect}
              className="text-blue-600 font-semibold cursor-pointer hover:underline"
            >
              Login here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
