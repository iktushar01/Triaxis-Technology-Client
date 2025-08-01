import React from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBuilding,
  FaCopyright,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-12 pb-6 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Offices Section - 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Corporate Office */}
          <div className="mb-6">
            <h3 className="text-red-700 font-semibold text-lg mb-4 flex items-center">
              <FaBuilding className="mr-2" />
              Corporate Office
            </h3>
            <p className="font-semibold">TriAxis Technology</p>
            <p className="flex items-center">
              <FaMapMarkerAlt className="mr-2 flex-shrink-0" />
              <span>
                55 Shah Mokhdum Avenue
                <br />
                Shonim Tower (5th floor), Sector: 12
                <br />
                Uttara, Dhaka-1230, Bangladesh
              </span>
            </p>
            <div className="mt-3 space-y-2">
              <p className="flex items-center">
                <FaPhone className="mr-2" />
                Tel: +880 9611-233455, +880-1896060789
              </p>
              <p className="flex items-center">
                <FaEnvelope className="mr-2" />
                Email: info@triaxistech.com
              </p>
            </div>
          </div>

          {/* Development Office */}
          <div className="mb-6">
            <h3 className="text-red-700 font-semibold text-lg mb-4 flex items-center">
              <FaBuilding className="mr-2" />
              Development Office
            </h3>
            <p className="flex items-center">
              <FaMapMarkerAlt className="mr-2 flex-shrink-0" />
              <span>
                House 33, Road 15, Sector: 12
                <br />
                Uttara, Dhaka-1230, Bangladesh
              </span>
            </p>
            <p className="mt-3 flex items-center">
              <FaPhone className="mr-2" />
              Tel: +880-1896060789
            </p>
          </div>

          {/* Singapore Office */}
          <div className="mb-6">
            <h3 className="text-red-700 font-semibold text-lg mb-4 flex items-center">
              <FaBuilding className="mr-2" />
              Singapore Office
            </h3>
            <p className="font-semibold">TriAxis Technology PTE. LTD</p>
            <p className="flex items-center">
              <FaMapMarkerAlt className="mr-2 flex-shrink-0" />
              <span>
                30 Roberts Lane
                <br />
                Singapore 218309
              </span>
            </p>
          </div>

          {/* Japan Office */}
          <div className="mb-6">
            <h3 className="text-red-700 font-semibold text-lg mb-4 flex items-center">
              <FaBuilding className="mr-2" />
              Japan Office
            </h3>
            <p className="font-semibold">TriAxis Technology Inc.</p>
            <p className="flex items-center">
              <FaMapMarkerAlt className="mr-2 flex-shrink-0" />
              <span>
                3-9-1 Shibaura, Minato-ku
                <br />
                Shibaura Rensite Tower 2F
                <br />
                Tokyo 108-0023
              </span>
            </p>
          </div>
        </div>

        {/* Social Media and Copyright Section */}
        <div className="border-t border-gray-300 pt-6">
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="#"
              className="text-gray-600 hover:text-blue-700 text-2xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-700 text-2xl"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-700 text-2xl"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-700 text-2xl"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-700 text-2xl"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm">
            <div className="flex items-center justify-center">
              <FaCopyright className="mr-1" />
              <span>2025 TriAxis Technology. All Rights Reserved.</span>
            </div>
            <div className="mt-1 text-xs text-gray-500">
              Powered by TriAxis Technology Web Team.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
