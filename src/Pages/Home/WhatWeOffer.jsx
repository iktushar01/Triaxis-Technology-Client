import React from 'react';
import { FaLaptopCode, FaShieldAlt, FaTools, FaChalkboardTeacher } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const WhatWeOffer = () => {
  const offerings = [
    {
      icon: <FaLaptopCode className="w-8 h-8" />,
      title: "Software Solutions",
      description: "Custom-built software and applications designed to streamline operations, enhance productivity, and meet your unique business needs.",
      link: "/software-solutions",
      color: "bg-blue-50",
      hoverColor: "hover:bg-blue-100",
      textColor: "text-blue-600"
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Security Services",
      description: "Comprehensive cybersecurity strategies to protect your digital assets, secure your networks, and safeguard sensitive data.",
      link: "/security-services",
      color: "bg-purple-50",
      hoverColor: "hover:bg-purple-100",
      textColor: "text-purple-600"
    },
    {
      icon: <FaTools className="w-8 h-8" />,
      title: "Product Solutions",
      description: "A wide range of trusted software tools, security products, and IT solutions tailored for businesses of all sizes.",
      link: "/product-solutions",
      color: "bg-green-50",
      hoverColor: "hover:bg-green-100",
      textColor: "text-green-600"
    },
    {
      icon: <FaChalkboardTeacher className="w-8 h-8" />,
      title: "Training & Workshops",
      description: "Hands-on training programs and workshops to equip individuals and teams with the latest skills in software and cybersecurity.",
      link: "/training",
      color: "bg-orange-50",
      hoverColor: "hover:bg-orange-100",
      textColor: "text-orange-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 text-sm font-semibold text-red-600 bg-red-50 rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Comprehensive <span className="text-red-600">Technology Solutions</span>
          </h2>
          <p className="mt-5 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We deliver innovative, secure, and tailored solutions to help your business thrive in the digital landscape.
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
              whileHover="hover"
              className={`group relative overflow-hidden ${offering.color} rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100`}
            >
              {/* Background pattern */}
              <div className={`absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300 ${offering.textColor}`}>
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <pattern id={`pattern-${index}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="20" r="2" fill="currentColor" />
                  </pattern>
                  <rect x="0" y="0" width="100%" height="100%" fill={`url(#pattern-${index})`} />
                </svg>
              </div>

              <div className="relative z-10">
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-xl ${offering.textColor} bg-white shadow-sm flex items-center justify-center mb-6 group-hover:shadow-md transition-shadow duration-300`}>
                  <div className={`${offering.textColor}`}>
                    {offering.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{offering.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{offering.description}</p>
                
                <a
                  href={offering.link}
                  className={`inline-flex items-center ${offering.textColor} font-medium group-hover:underline transition-colors duration-200`}
                >
                  Explore service
                  <FiArrowRight className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeOffer;