import React from "react";

const HomeRegistration = () => {
  return (
    <div className="flex items-center justify-center min-h-[300px] sm:min-h-[400px] bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg my-20 mx-4 sm:mx-10 p-8 sm:p-12 relative overflow-hidden">
      {/* Gray Transparent Overlay */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-sm"></div>

      {/* Content Section */}
      <div className="text-center text-white max-w-3xl relative z-10">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-poppins animate-fade-in">
          Unleash Your Inner Champion!
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg sm:text-xl font-merriweather opacity-90 animate-slide-in-top">
          At <span className="font-bold">TRIUNFADOR SPORTS FEST</span>, we believe in the power of sports to transform lives. Whether you're a seasoned athlete or just starting your fitness journey, our platform is designed to inspire, motivate, and empower you to achieve greatness.
        </p>

        {/* Key Highlights */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {/* Highlight 1 */}
          <div className="p-6 bg-gray-800 bg-opacity-60 rounded-lg backdrop-blur-sm hover:bg-opacity-80 transition-all duration-300 border border-gray-700">
            <h2 className="text-2xl font-bold text-yellow-400">🏆 Competitions</h2>
            <p className="mt-2 text-sm sm:text-base text-white opacity-90">
              Participate in thrilling sports competitions and showcase your skills on the grand stage.
            </p>
          </div>

          {/* Highlight 2 */}
          <div className="p-6 bg-gray-800 bg-opacity-60 rounded-lg backdrop-blur-sm hover:bg-opacity-80 transition-all duration-300 border border-gray-700">
            <h2 className="text-2xl font-bold text-green-400">💪 Fitness Programs</h2>
            <p className="mt-2 text-sm sm:text-base text-white opacity-90">
              Join our expert-led fitness programs to build strength, endurance, and confidence.
            </p>
          </div>

          {/* Highlight 3 */}
          <div className="p-6 bg-gray-800 bg-opacity-60 rounded-lg backdrop-blur-sm hover:bg-opacity-80 transition-all duration-300 border border-gray-700">
            <h2 className="text-2xl font-bold text-pink-400">🌟 Community</h2>
            <p className="mt-2 text-sm sm:text-base text-white opacity-90">
              Be part of a vibrant community of sports enthusiasts and fitness lovers.
            </p>
          </div>
        </div>

        {/* Inspirational Quote */}
        <div className="mt-10 text-xl sm:text-2xl font-poppins italic animate-text-gradient">
          <p className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
            "Sports do not build character. They reveal it." – Heywood Broun
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeRegistration;
 
