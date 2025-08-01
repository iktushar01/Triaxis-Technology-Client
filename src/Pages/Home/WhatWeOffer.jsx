import React from 'react';
import { FaLaptopCode, FaShieldAlt, FaTools, FaChalkboardTeacher } from 'react-icons/fa';
import { motion } from 'framer-motion';

const WhatWeOffer = () => {
  const offerings = [
    {
      icon: <FaLaptopCode className="w-8 h-8" />,
      title: "Software Solutions",
      description: "Custom-built software and applications designed to streamline operations, enhance productivity, and meet your unique business needs.",
      link: "/software-solutions"
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Security Services",
      description: "Comprehensive cybersecurity strategies to protect your digital assets, secure your networks, and safeguard sensitive data.",
      link: "/security-services"
    },
    {
      icon: <FaTools className="w-8 h-8" />,
      title: "Product Solutions",
      description: "A wide range of trusted software tools, security products, and IT solutions tailored for businesses of all sizes.",
      link: "/product-solutions"
    },
    {
      icon: <FaChalkboardTeacher className="w-8 h-8" />,
      title: "Training & Workshops",
      description: "Hands-on training programs and workshops to equip individuals and teams with the latest skills in software and cybersecurity.",
      link: "/training"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-red-600 sm:text-4xl">What We Offer</h2>
          <p className="mt-4 text-xl text-gray-900 max-w-3xl mx-auto">
            At TriAxis Technology, we provide innovative solutions and expert services to help businesses stay secure, efficient, and future-ready.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {offerings.map((offering, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="text-red-600 mb-4">
                {offering.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{offering.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{offering.description}</p>
              <a
                href={offering.link}
                className="mt-auto text-red-600 hover:text-red-800 font-medium inline-flex items-center transition-colors duration-200"
              >
                Learn more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeOffer;