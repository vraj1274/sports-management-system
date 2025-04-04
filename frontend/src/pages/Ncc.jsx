import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import NCC_1 from "../assets/NCC_1.jpg";
import NSS_2 from "../assets/NSS_2.jpg";
import NSS_3 from "../assets/NSS_3.jpg";

const Ncc = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const images = [
    { src: NCC_1, alt: "NSS Event 1" },
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
    navigate("/activities/ncc/ncc-registration");
  };

  // Function to toggle the registration form visibility
  const toggleRegistrationForm = () => {
    setIsRegistrationOpen(!isRegistrationOpen);
  };

  return (
    <div className="py-10 bg-secondary px-6">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
        <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">
          NCC at KSV LDPR ITR
        </h1>

        {/* Event Description */}
        <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center">
          The National Service Scheme (NSS) at KSV LDPR-ITR offers students the
          chance to engage in social service and contribute to the community
          through various outreach programs, awareness campaigns, and
          volunteering activities.
        </p>

        {/* Event Photos */}
        <div className="flex justify-center items-center h-auto w-full  ">
          <div className="relative w-96 max-w-lg h-72 flex justify-center items-center mb-5">
            <AnimatePresence mode="wait">
              <motion.img
                key={images[currentIndex].src}
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="w-full h-full rounded-lg shadow-lg justify-center items-center my-5"
                initial={{ opacity: 0, scale: 0.9, x: 100 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9, x: -100 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Registration Button */}
        <div className="text-center">
          <button
            onClick={handleRegistrationForm}
            className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-300"
          >
            {isRegistrationOpen
              ? "Close Registration Form"
              : "Register for Upcoming NCC Event"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ncc;
