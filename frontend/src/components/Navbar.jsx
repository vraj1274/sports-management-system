import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import profile_pic from "../assets/profile_pic.png";
import dropdown_icon from "../assets/dropdown_icon.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(true);

  return (
    <div className="bg-gradient-to-r inset-0 w-screen from-blue-900 to-blue-900 animate-gradient-x flex items-center justify-between text-sm p-5 h-20">
      {/* Logo */}
      <p
        onClick={() => navigate("/")}
        className="mx-4 w-44 font-bold text-white text-3xl cursor-pointer"
      >
        E-Shaurya{" "}
      </p>

      {/* Navigation Links */}
      <ul className="hidden sm:flex items-start gap-5 font-family-poppins font-medium mr-10">
        <Link to="/">
          <li className="py-1 text-white hover:text-blue-400 transition-all duration-500 hover:scale-110">
            HOME
          </li>
        </Link>
        <Link to="/activities">
          <li className="py-1 text-white hover:text-blue-400 transition-all duration-500 hover:scale-110">
            ACTIVITIES
          </li>
        </Link>
        <Link to="/about">
          <li className="py-1 text-white hover:text-blue-400 transition-all duration-500 hover:scale-110">
            ABOUT US
          </li>
        </Link>
        <Link to="/contact-us">
          <li className="py-1 text-white hover:text-blue-400 transition-all duration-500 hover:scale-110">
            CONTACT US
          </li>
        </Link>
      </ul>

      {/* Placeholder for additional elements (e.g., buttons) */}
      <div className="flex justify-center mx-4 gap-4 w-20">
        {token ? (
          <div className="flex items-center cursor-pointer group relative mr-10">

            {/* Profile Icon and Dropdown */}
            <div className="flex items-center cursor-pointer group relative">
              <img
                className="rounded-full w-8 h-8"
                src={profile_pic}
                alt="Profile"
              />
              <img src={dropdown_icon} alt="Dropdown" />
              <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                  <p
                    onClick={() => navigate("/my-profile")}
                    className="hover:text-black cursor-pointer"
                  >
                    My Profile
                  </p>
                  <p
                    onClick={() => navigate("/my-certificates")}
                    className="hover:text-black cursor-pointer"
                  >
                    My Certificates
                  </p>
                  <p
                    onClick={() => setToken(false)}
                    className="hover:text-black cursor-pointer"
                  >
                    Logout
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-secondary mr-10 text-black text-base font-semibold px-8 py-3 rounded-full hidden md:block"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
