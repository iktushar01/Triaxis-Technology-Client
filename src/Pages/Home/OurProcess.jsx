import React from "react";
import {
  FiSearch,
  FiClipboard,
  FiLayers,
  FiCode,
  FiCheckCircle,
  FiSend,
} from "react-icons/fi";
import { motion } from "framer-motion";

const OurProcess = () => {
  const steps = [
    {
      icon: <FiSearch className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Discovery & Consultation",
      description:
        "We start by understanding your goals, challenges, and vision through in-depth discussions.",
      color: "bg-gradient-to-b from-blue-50 to-blue-100",
      textColor: "text-blue-800",
      image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <FiClipboard className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Research & Planning",
      description:
        "Our experts analyze your needs and craft a clear strategy to align technology with your business objectives.",
      color: "bg-gradient-to-b from-purple-50 to-purple-100",
      textColor: "text-purple-800",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <FiLayers className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Design & Prototyping",
      description:
        "We create intuitive designs, mockups, and prototypes to bring your ideas to life.",
      color: "bg-gradient-to-b from-pink-50 to-pink-100",
      textColor: "text-pink-800",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <FiCode className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Development & Implementation",
      description:
        "Our skilled team builds secure, scalable solutions using cutting-edge technologies.",
      color: "bg-gradient-to-b from-green-50 to-green-100",
      textColor: "text-green-800",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <FiCheckCircle className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Testing & Quality Assurance",
      description:
        "Every solution is thoroughly tested for performance, security, and reliability before launch.",
      color: "bg-gradient-to-b from-yellow-50 to-yellow-100",
      textColor: "text-yellow-800",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <FiSend className="w-5 h-5 md:w-6 md:h-6" />,
      title: "Launch & Ongoing Support",
      description:
        "We deploy your solution and provide continuous support, updates, and improvements.",
      color: "bg-gradient-to-b from-red-50 to-red-100",
      textColor: "text-red-800",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs sm:text-sm font-semibold text-red-600 bg-red-100 rounded-full mb-3 sm:mb-4">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Our <span className="text-red-600">Proven Methodology</span>
          </h2>
          <p className="mt-3 sm:mt-4 max-w-3xl mx-auto text-base sm:text-lg text-gray-600 leading-relaxed">
            A streamlined 6-phase approach that delivers exceptional results through
            collaboration, innovation, and precision execution.
          </p>
        </motion.div>

        {/* Desktop - Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="hidden md:block"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
              >
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
                  <div className="absolute top-3 left-3 flex items-center justify-center w-10 h-10 rounded-full bg-white text-blue-600 shadow-md">
                    {step.icon}
                  </div>
                  <span className="absolute top-3 right-3 text-xs font-semibold text-white bg-blue-600/90 px-2 py-1 rounded-full">
                    Step {index + 1}
                  </span>
                </div>
                <div className={`p-5 ${step.color} flex-grow`}>
                  <h3 className={`text-lg sm:text-xl font-bold ${step.textColor} mb-2 sm:mb-3`}>
                    {step.title}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mobile - Vertical Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:hidden"
        >
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-4 sm:left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-blue-600" />

            <div className="space-y-6 pl-8 sm:pl-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative group"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-7 sm:-left-8 top-0 w-6 h-6 rounded-full bg-blue-600 border-4 border-white flex items-center justify-center z-10">
                    <span className="text-xs font-bold text-white">
                      {index + 1}
                    </span>
                  </div>

                  <div className="rounded-lg overflow-hidden shadow-md h-full">
                    <div className="relative h-32 sm:h-36">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
                      <div className="absolute top-2 left-2 flex items-center justify-center w-8 h-8 rounded-full bg-white text-blue-600 shadow-sm">
                        {step.icon}
                      </div>
                    </div>
                    <div className={`p-4 ${step.color}`}>
                      <h3 className={`text-base font-bold ${step.textColor} mb-1`}>
                        {step.title}
                      </h3>
                      <p className="text-gray-700 text-sm">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurProcess;