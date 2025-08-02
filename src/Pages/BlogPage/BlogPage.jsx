import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const BlogPage = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-red-800 via-red-600 to-red-500 flex flex-col items-center justify-center text-center px-4">
      
      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="space-y-6"
      >
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-wide">
          Blog Coming Soon
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-red-100">
          Stay tuned! Something exciting is on the way.
        </p>

        
      </motion.div>

      {/* Social icons */}
      <div className="flex gap-6 mt-10 text-white text-2xl">
        <a href="#" className="hover:text-red-200 transition">
          <FaFacebook />
        </a>
        <a href="#" className="hover:text-red-200 transition">
          <FaInstagram />
        </a>
        <a href="#" className="hover:text-red-200 transition">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default BlogPage;
