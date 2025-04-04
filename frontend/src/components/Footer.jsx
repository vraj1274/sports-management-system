import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <h2 className="text-4xl font-extrabold text-blue-300">
              E-Shaurya
            </h2>
            <p className="text-gray-200 text-lg leading-relaxed">
              LDRP-ITR is a premier engineering institute dedicated to academic
              excellence, research, and innovation, empowering students with
              skills for global challenges.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-300">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Games", path: "/sports" },
                { name: "About us", path: "/about" },
                { name: "Contact Us", path: "/contact-us" },
              ].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavigation(link.path)}
                    className="text-gray-200 hover:text-blue-400 transition duration-300 text-lg"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-300">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:bhavik_ce@ldrp.ac.in"
                  className="text-gray-200 hover:text-blue-400 transition duration-300 text-lg"
                >
                  sports_admin@ldrp.ac.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 flex justify-center space-x-6">
          {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedin].map(
            (Icon, index) => (
              <a
                key={index}
                href="#"
                className="text-white hover:text-blue-400 transition duration-300 text-3xl hover:scale-110"
              >
                <Icon />
              </a>
            )
          )}
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t pt-6 text-center">
          <p className="text-white text-lg font-light">
            © 2025 E-Shaurya. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
