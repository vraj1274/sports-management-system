import React from "react";
import { useNavigate } from "react-router-dom";

const BannerPage = () => {
  const navigate = useNavigate();

  const handleBannerClick = () => {
    // Redirect to the live score page
      window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/live-score");
  };

  return (
    <div className=" w-full  flex flex-col items-center justify-center p-4  mt-10">
      <div className="w-full  justify-center items-center  bg-gradient-to-r from-blue-800 to-blue-700 rounded-lg shadow-2xl p-8 text-white text-center relative overflow-hidden transform hover:scale-105 transition-transform duration-300">
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 animate-pulse "></div>

        {/* Banner Content */}
        <div className="relative z-10 ">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Live Score Updates
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Click here to check real-time scores!
          </p>
          <button
            className="bg-white text-blue-800 px-6 py-2 rounded-full font-semibold hover:bg-blue-100 transition-colors duration-300 cursor-pointer"
            onClick={handleBannerClick}
            to="/live-score"
          >
            View Live Scores
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerPage;
