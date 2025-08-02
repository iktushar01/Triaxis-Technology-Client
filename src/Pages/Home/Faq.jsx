import React, { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../../assets/faq.json";
import { motion, AnimatePresence } from "framer-motion";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What cybersecurity services do you offer?",
      answer:
        "We provide comprehensive security solutions including vulnerability assessments, penetration testing, incident response, and security awareness training.",
    },
    {
      question: "How quickly can you respond to a security incident?",
      answer:
        "Our emergency response team is available 24/7 and can typically begin addressing critical incidents within 1 hour of notification.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We have extensive experience across finance, healthcare, government, education, and technology sectors.",
    },
    {
      question: "Do you offer ongoing security monitoring?",
      answer:
        "Yes, we provide 24/7 security monitoring with our SOC-as-a-Service offering, with real-time threat detection and response.",
    },
    {
      question: "How do your pricing models work?",
      answer:
        "We offer flexible pricing including project-based, retainer, and subscription models tailored to your organization's needs.",
    },
    {
      question: "What certifications does your team hold?",
      answer:
        "Our team holds CISSP, CISM, CEH, OSCP, and other industry-leading certifications to ensure top-quality service.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-red-200 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.span
            className="inline-block px-4 py-2 text-sm font-semibold text-red-600 bg-red-50 rounded-full mb-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Frequently Asked Questions
          </motion.span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Got Questions?{" "}
            <span className="text-red-600 bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
              We've Got Answers
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 leading-relaxed">
            Here are some common questions about our software, security, and
            training services. If you don't find what you're looking for, feel
            free to contact our team.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          {/* Lottie Animation - Left Side */}
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Player
              autoplay
              loop
              src={animationData}
              style={{ height: "100%", width: "100%" }}
              className="max-w-md"
            />
          </motion.div>

          {/* FAQ Accordion - Right Side */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ y: -2 }}
                >
                  <button
                    className="w-full px-5 py-4 sm:px-6 sm:py-5 text-left flex justify-between items-center transition-colors"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={activeIndex === index}
                    aria-controls={`faq-${index}`}
                  >
                    <span className="font-medium text-gray-900 text-base sm:text-lg">
                      {faq.question}
                    </span>
                    <motion.span 
                      className="text-red-500 text-xl font-medium"
                      animate={{ rotate: activeIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        id={`faq-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: "auto", 
                          opacity: 1,
                          transition: {
                            height: { duration: 0.3 },
                            opacity: { duration: 0.2, delay: 0.1 }
                          }
                        }}
                        exit={{ 
                          height: 0, 
                          opacity: 0,
                          transition: {
                            height: { duration: 0.2 },
                            opacity: { duration: 0.1 }
                          }
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Faq;