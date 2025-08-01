import React, { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "../../assets/faq.json";
import { motion } from "framer-motion";


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
    <div className="py-16 bg-gradient-to-b from-white to-blue-200 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
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
    Frequently Asked Questions
  </motion.span>

  <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
    Got Questions? <span className="text-red-600">We’ve Got Answers</span>
  </h2>

  <p className="max-w-2xl mx-auto text-lg text-gray-600">
    Here are some common questions about our software, security, and training
    services. If you don’t find what you’re looking for, feel free to contact
    our team.
  </p>
</motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Lottie Animation - Left Side */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Player
              autoplay
              loop
              src={animationData}
              style={{ height: "400px", width: "100%" }}
              className="max-w-md"
            ></Player>
          </div>

          {/* FAQ Accordion - Right Side */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={activeIndex === index}
                    aria-controls={`faq-${index}`}
                  >
                    <span className="font-medium text-gray-900 text-lg">
                      {faq.question}
                    </span>
                    <span className="text-indigo-600 text-xl">
                      {activeIndex === index ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    id={`faq-${index}`}
                    className={`px-6 overflow-hidden transition-all duration-300 ${
                      activeIndex === index ? "max-h-96 pb-4" : "max-h-0"
                    }`}
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
