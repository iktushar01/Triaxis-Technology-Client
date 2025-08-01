import React from "react";
import { motion } from "framer-motion";

const Extra = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Building the <span className="text-red-600">Future</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team combines cutting-edge technology with industry knowledge
              to deliver solutions that drive real business results.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500 hover:shadow-md transition-all"
                whileHover={{ y: -5 }}
              >
                <h3 className="font-bold mb-2 text-gray-800">
                  Innovative Approach
                </h3>
                <p className="text-gray-600 text-sm">
                  We stay ahead of technology trends to deliver future-proof
                  solutions.
                </p>
              </motion.div>
              <motion.div
                className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500 hover:shadow-md transition-all"
                whileHover={{ y: -5 }}
              >
                <h3 className="font-bold mb-2 text-gray-800">Security First</h3>
                <p className="text-gray-600 text-sm">
                  All our solutions are built with security as a foundational
                  element.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              {/* Decorative background elements */}
              <div className="absolute -inset-2 bg-red-500 rounded-xl opacity-20 rotate-1"></div>
              <div className="absolute -inset-2 bg-red-500 rounded-xl opacity-20 -rotate-1"></div>

              {/* Main image container */}
              <motion.div
                className="relative bg-gray-100 rounded-xl overflow-hidden shadow-xl border-4 border-white"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="Team working on technology solutions"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Extra;
