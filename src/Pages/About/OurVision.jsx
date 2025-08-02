import React from "react";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaGlobe,
  FaShieldAlt,
  FaLightbulb,
  FaHandshake,
  FaMedal,
  FaUsers,
  FaChartLine,
  FaLock
} from "react-icons/fa";

const OurVision = () => {
  // Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "backOut",
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 text-sm font-semibold text-red-600 bg-red-100 rounded-full mb-4">
            Our Foundation
          </span>
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Our <span className="text-red-600">Vision & Values</span>
          </h2>
          <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            The principles that guide our work and the aspirations that drive us
            forward in serving our clients.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Mission Card */}
          <motion.div
            variants={cardVariants}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            whileHover={{ y: -10 }}
          >
            <div className="h-48 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Mission"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
            </div>
            <div className="p-6 relative">
              <div className="absolute -top-6 left-6 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg">
                <FaRocket className="text-xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4 mt-2 text-gray-800">
                Our Mission
              </h3>
              <div className="space-y-4">
                <motion.div className="flex items-start gap-3" whileHover={{ x: 5 }}>
                  <FaChartLine className="text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Growth</h4>
                    <p className="text-sm text-gray-600">Driving business expansion through technology</p>
                  </div>
                </motion.div>
                <motion.div className="flex items-start gap-3" whileHover={{ x: 5 }}>
                  <FaLock className="text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Security</h4>
                    <p className="text-sm text-gray-600">Protecting your digital assets</p>
                  </div>
                </motion.div>
                <motion.div className="flex items-start gap-3" whileHover={{ x: 5 }}>
                  <FaLightbulb className="text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Innovation</h4>
                    <p className="text-sm text-gray-600">Cutting-edge solutions for modern challenges</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            variants={cardVariants}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            whileHover={{ y: -10 }}
          >
            <div className="h-48 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Vision"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
            </div>
            <div className="p-6 relative">
              <div className="absolute -top-6 left-6 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg">
                <FaGlobe className="text-xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4 mt-2 text-gray-800">
                Our Vision
              </h3>
              <div className="space-y-4">
                <motion.div className="flex items-start gap-3" whileHover={{ x: 5 }}>
                  <FaGlobe className="text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Global Reach</h4>
                    <p className="text-sm text-gray-600">Setting worldwide standards for excellence</p>
                  </div>
                </motion.div>
                <motion.div className="flex items-start gap-3" whileHover={{ x: 5 }}>
                  <FaUsers className="text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Connection</h4>
                    <p className="text-sm text-gray-600">Building a digitally connected world</p>
                  </div>
                </motion.div>
                <motion.div className="flex items-start gap-3" whileHover={{ x: 5 }}>
                  <FaRocket className="text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Transformation</h4>
                    <p className="text-sm text-gray-600">Revolutionizing business strategies</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Values Card */}
          <motion.div
            variants={cardVariants}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            whileHover={{ y: -10 }}
          >
            <div className="h-48 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Values"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
            </div>
            <div className="p-6 relative">
              <div className="absolute -top-6 left-6 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg">
                <FaShieldAlt className="text-xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4 mt-2 text-gray-800">
                Our Core Values
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: <FaLightbulb className="text-red-500" />,
                    name: "Innovation",
                    desc: "Pushing boundaries with creative tech solutions",
                  },
                  {
                    icon: <FaShieldAlt className="text-red-500" />,
                    name: "Integrity",
                    desc: "Ethical practices in all we do",
                  },
                  {
                    icon: <FaHandshake className="text-red-500" />,
                    name: "Collaboration",
                    desc: "Strong partnerships drive success",
                  },
                  {
                    icon: <FaMedal className="text-red-500" />,
                    name: "Excellence",
                    desc: "Quality in every deliverable",
                  },
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex-shrink-0 mt-1">{value.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {value.name}
                      </h4>
                      <p className="text-sm text-gray-600">{value.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurVision;