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
      icon: <FiSearch className="w-6 h-6" />,
      title: "Discovery & Consultation",
      description:
        "We start by understanding your goals, challenges, and vision through in-depth discussions.",
      color: "bg-blue-100",
    },
    {
      icon: <FiClipboard className="w-6 h-6" />,
      title: "Research & Planning",
      description:
        "Our experts analyze your needs and craft a clear strategy to align technology with your business objectives.",
      color: "bg-purple-100",
    },
    {
      icon: <FiLayers className="w-6 h-6" />,
      title: "Design & Prototyping",
      description:
        "We create intuitive designs, mockups, and prototypes to bring your ideas to life.",
      color: "bg-pink-100",
    },
    {
      icon: <FiCode className="w-6 h-6" />,
      title: "Development & Implementation",
      description:
        "Our skilled team builds secure, scalable solutions using cutting-edge technologies.",
      color: "bg-green-100",
    },
    {
      icon: <FiCheckCircle className="w-6 h-6" />,
      title: "Testing & Quality Assurance",
      description:
        "Every solution is thoroughly tested for performance, security, and reliability before launch.",
      color: "bg-yellow-100",
    },
    {
      icon: <FiSend className="w-6 h-6" />,
      title: "Launch & Ongoing Support",
      description:
        "We deploy your solution and provide continuous support, updates, and improvements.",
      color: "bg-red-100",
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
    <section className="bg-gradient-to-b from-white to-blue-200 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-[#E63946] bg-[#F8E8E9] rounded-full mb-4">
            Our Methodology
          </span>
          <h2 className="text-4xl font-extrabold text-black sm:text-5xl">
            How We <span className="text-red-600">Deliver Excellence</span>
          </h2>
          <p className="mt-5 max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
            Our proven 6-step process ensures we deliver innovative, secure, and
            effective technology solutions tailored to your unique needs.
          </p>
        </motion.div>

        {/* Desktop - Animated Cards Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="hidden md:block"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className={`rounded-xl p-8 ${step.color} shadow-lg hover:shadow-xl transition-all duration-300 border border-white border-opacity-30`}
              >
                <div className="flex items-center mb-5">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white text-[#E63946] shadow-md mr-5">
                    {step.icon}
                  </div>
                  <span className="text-sm font-semibold text-[#E63946] bg-white px-3 py-1 rounded-full">
                    Step {index + 1}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#1D3557] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mobile - Vertical Timeline with Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:hidden"
        >
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#E63946] to-[#1D3557]"></div>

            <div className="space-y-10 pl-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-12 top-0 w-6 h-6 rounded-full bg-[#E63946] border-4 border-white flex items-center justify-center">
                    <span className="text-xs font-bold text-white">
                      {index + 1}
                    </span>
                  </div>

                  <div
                    className={`p-6 rounded-lg ${step.color} shadow-md border border-white border-opacity-30`}
                  >
                    <div className="flex items-center mb-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-[#E63946] shadow-sm mr-3">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold text-[#1D3557]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-700">{step.description}</p>
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
