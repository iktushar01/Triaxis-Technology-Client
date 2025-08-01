import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaGlobeAmericas,
  FaUser,
  FaBuilding,
  FaIndustry,
  FaComment,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { motion } from "framer-motion";

const ContactOurTeam = () => {
  // Contact information data
  const contactInfo = [
    {
      icon: <FaEnvelope size={24} className="text-red-400" />,
      title: "Email",
      description: "Send an email, we're always ready to assist.",
      value: "info@redimecybersecurity.com",
      href: "mailto:info@redimecybersecurity.com",
    },
    {
      icon: <FaPhone size={24} className="text-red-400" />,
      title: "Phone",
      description: "Call us now, expert help is a dial away.",
      value: "+1 (33) 306-2466",
      href: "tel:+1333062466",
    },
    {
      icon: <FaGlobeAmericas size={24} className="text-red-400" />,
      title: "Global",
      description: "Based in Detroit, ready to assist you globally.",
      value: "Global reach, with a local touch",
    },
  ];

  // Form field configuration
  const formFields = [
    {
      id: "firstName",
      label: "First name*",
      type: "text",
      placeholder: "Enter your first name",
      icon: <FaUser size={18} />,
      required: true,
      colSpan: "col-span-1",
    },
    {
      id: "lastName",
      label: "Last name*",
      type: "text",
      placeholder: "Enter your last name",
      icon: <FaUser size={18} />,
      required: true,
      colSpan: "col-span-1",
    },
    {
      id: "email",
      label: "Business Email*",
      type: "email",
      placeholder: "Enter your business email",
      icon: <FaEnvelope size={18} />,
      required: true,
      colSpan: "col-span-2",
    },
    {
      id: "company",
      label: "Company Name*",
      type: "text",
      placeholder: "Enter your company name",
      icon: <FaBuilding size={18} />,
      required: true,
      colSpan: "col-span-2",
    },
    {
      id: "industry",
      label: "What industry are you in?",
      type: "select",
      placeholder: "Select one...",
      icon: <FaIndustry size={18} />,
      options: [
        { value: "", label: "Select one..." },
        { value: "finance", label: "Finance" },
        { value: "healthcare", label: "Healthcare" },
        { value: "technology", label: "Technology" },
        { value: "education", label: "Education" },
        { value: "government", label: "Government" },
      ],
      colSpan: "col-span-2",
    },
    {
      id: "message",
      label: "How can we help?",
      type: "textarea",
      placeholder: "Type your message...",
      icon: <FaComment size={18} />,
      colSpan: "col-span-2",
    },
  ];

  return (
    <div className="bg-blue-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 text-sm font-semibold text-[#E63946] bg-[#F8E8E9] rounded-full mb-4">
            Contact Us
          </span>
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            Get in <span className="text-red-400">Touch</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-blue-100 leading-relaxed">
            Have questions or ready to start your project? Reach out to our team
            today.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information Section */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 p-4 bg-blue-800 rounded-lg"
              >
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-blue-100 mb-1">{item.description}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-blue-300 font-medium hover:text-blue-200 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-blue-300">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-xl"
          >
            <form className="space-y-4">
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
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        {field.icon}
                      </div>
                      {field.type === "select" ? (
                        <select
                          id={field.id}
                          className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
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
                          className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                      ) : (
                        <input
                          type={field.type}
                          id={field.id}
                          placeholder={field.placeholder}
                          className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required={field.required}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                <FiSend className="mr-2" size={18} />
                Submit Now
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactOurTeam;
