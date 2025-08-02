import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaUser,
  FaBuilding,
  FaIndustry,
  FaComment,
  FaCopy,
  FaCheck,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { motion } from "framer-motion";

const ContactOurTeam = () => {
  const [copiedItem, setCopiedItem] = useState(null);

  const handleCopy = (text, itemName) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(itemName);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  // Contact information data
  const contactInfo = [
    {
      icon: <FaEnvelope className="text-red-500 text-xl" />,
      title: "Email Us",
      description: "We'll respond within 24 hours",
      value: "info@triaxistechnology.com",
      href: "mailto:info@triaxistechnology.com",
      copyText: "info@triaxistechnology.com",
      itemName: "email",
    },
    {
      icon: <FaPhone className="text-red-500 text-xl" />,
      title: "Call Us",
      description: "Mon-Fri, 9am-5pm EST",
      value: "+1 (33) 306-2466",
      href: "tel:+1333062466",
      copyText: "+1333062466",
      itemName: "phone",
    },
    {
      icon: <FaMapMarkerAlt className="text-red-500 text-xl" />,
      title: "Visit Us",
      description: "Based in Detroit, serving globally",
      value: "123 Cyber Street, Detroit, MI",
      href: "https://maps.google.com",
      copyText: "123 Cyber Street, Detroit, MI",
      itemName: "address",
    },
  ];

  // Form field configuration
  const formFields = [
    {
      id: "firstName",
      label: "First name*",
      type: "text",
      placeholder: "Enter your first name",
      icon: <FaUser size={16} className="text-gray-400" />,
      required: true,
      colSpan: "md:col-span-1 col-span-2",
    },
    {
      id: "lastName",
      label: "Last name*",
      type: "text",
      placeholder: "Enter your last name",
      icon: <FaUser size={16} className="text-gray-400" />,
      required: true,
      colSpan: "md:col-span-1 col-span-2",
    },
    {
      id: "email",
      label: "Business Email*",
      type: "email",
      placeholder: "Enter your business email",
      icon: <FaEnvelope size={16} className="text-gray-400" />,
      required: true,
      colSpan: "col-span-2",
    },
    {
      id: "company",
      label: "Company Name*",
      type: "text",
      placeholder: "Enter your company name",
      icon: <FaBuilding size={16} className="text-gray-400" />,
      required: true,
      colSpan: "col-span-2",
    },
    {
      id: "industry",
      label: "What industry are you in?",
      type: "select",
      placeholder: "Select one...",
      icon: <FaIndustry size={16} className="text-gray-400" />,
      options: [
        { value: "", label: "Select one..." },
        { value: "finance", label: "Finance" },
        { value: "healthcare", label: "Healthcare" },
        { value: "technology", label: "Technology" },
        { value: "education", label: "Education" },
        { value: "government", label: "Government" },
        { value: "manufacturing", label: "Manufacturing" },
        { value: "retail", label: "Retail" },
        { value: "other", label: "Other" },
      ],
      colSpan: "col-span-2",
    },
    {
      id: "message",
      label: "How can we help?",
      type: "textarea",
      placeholder: "Type your message...",
      icon: <FaComment size={16} className="text-gray-400" />,
      colSpan: "col-span-2",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-red-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-2 text-sm font-semibold text-red-600 bg-red-100 rounded-full mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Contact Our Team
          </motion.span>
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Let's Build Something <span className="text-red-600">Together</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Have a project in mind or need cybersecurity solutions? Our team is
            ready to help you navigate the digital landscape.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information - Modern Card Design */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-50 rounded-lg">{item.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-2">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-red-600 font-medium hover:text-red-800 transition-colors text-sm sm:text-base"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-red-600 text-sm sm:text-base">
                          {item.value}
                        </p>
                      )}
                      <button
                        onClick={() => handleCopy(item.copyText, item.itemName)}
                        className="ml-2 p-2 text-gray-400 hover:text-red-600 transition-colors"
                        aria-label={`Copy ${item.title}`}
                      >
                        {copiedItem === item.itemName ? (
                          <FaCheck className="text-green-500" />
                        ) : (
                          <FaCopy />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Team Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-red-600 p-6 rounded-xl text-white"
            >
              <h3 className="text-lg font-semibold mb-2">Our Availability</h3>
              <p className="text-red-100 mb-3">
                We're available 24/7 for emergency cybersecurity incidents.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  <span className="text-sm">Mon-Fri: 9am - 6pm EST</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                  <span className="text-sm">
                    Sat-Sun: Emergency support only
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form - Modern Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {formFields.map((field) => (
                  <div key={field.id} className={`relative ${field.colSpan}`}>
                    <label
                      htmlFor={field.id}
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      {field.label}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 pt-1 flex items-baseline top-2 pointer-events-none">
                        {field.icon}
                      </div>
                      {field.type === "select" ? (
                        <select
                          id={field.id}
                          className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent appearance-none bg-white text-gray-700"
                          required={field.required}
                        >
                          {field.options.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      ) : field.type === "textarea" ? (
                        <textarea
                          id={field.id}
                          rows={4}
                          placeholder={field.placeholder}
                          className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-700"
                          required={field.required}
                        ></textarea>
                      ) : (
                        <input
                          type={field.type}
                          id={field.id}
                          placeholder={field.placeholder}
                          className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-700"
                          required={field.required}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center">
                <input
                  id="privacy-policy"
                  name="privacy-policy"
                  type="checkbox"
                  className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  required
                />
                <label
                  htmlFor="privacy-policy"
                  className="ml-2 block text-sm text-gray-600"
                >
                  I agree to the{" "}
                  <a href="#" className="text-red-600 hover:text-red-800">
                    privacy policy
                  </a>
                </label>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-medium rounded-lg hover:from-red-700 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all shadow-md"
              >
                <FiSend className="mr-2" size={18} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactOurTeam;
