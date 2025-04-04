import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";


import NSS_1 from '../assets/NSS_1.jpg'
import NSS_2 from '../assets/NSS_2.jpg'
import NSS_3 from "../assets/NSS_3.jpg";

const Nss = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const images = [
    { src: NSS_1, alt: "NSS Event 1" },
    { src: NSS_2, alt: "NSS Event 2" },
    { src: NSS_3, alt: "NSS Event 3" },
  ];
const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const navigate = useNavigate();
  const handleRegistrationForm = () => {
    navigate("/activities/nss/nss-registration");
  };
  const handleOtherEvents = () => {
    navigate("/activities/nss/nss-events");
  };

  // Function to toggle the registration form visibility
  const toggleRegistrationForm = () => {
    setIsRegistrationOpen(!isRegistrationOpen);
  };

  return (
    <div className="py-10 bg-secondary px-6">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
        <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">
          NSS at KSV LDPR ITR
        </h1>

        {/* Event Description */}
        <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center">
          The National Service Scheme (NSS) at KSV LDPR-ITR offers students the
          chance to engage in social service and contribute to the community
          through various outreach programs, awareness campaigns, and
          volunteering activities.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center h-auto w-full gap-2  ">
          {/* Event Photos */}
          <div className="flex justify-center items-center w-full px-4">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 flex justify-center items-center mb-5">
              <AnimatePresence mode="wait">
                <motion.img
                  key={images[currentIndex].src}
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  className="w-full h-full rounded-lg shadow-lg object-cover"
                  initial={{ opacity: 0, scale: 0.9, x: 100 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9, x: -100 }}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Registration Button */}
          <div className="text-center w-full sm:w-1/2 flex flex-col gap-4 sm:gap-6 justify-center mx-4">
            <button
              onClick={handleRegistrationForm}
              className="w-full sm:w-auto bg-blue-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-300"
            >
              Register for NSS Participation
            </button>
            <button
              onClick={handleOtherEvents}
              className="w-full sm:w-auto bg-blue-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-300"
            >
              Register for Upcoming NSS Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nss;
