import React from "react";
import { motion } from "framer-motion";
import { 
  FaLightbulb, 
  FaShieldAlt, 
  FaUsers, 
  FaChartLine 
} from "react-icons/fa";

const Extra = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Centered Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 text-sm font-semibold text-red-600 bg-red-100 rounded-full mb-4">
            Our Approach
          </span>
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Building <span className="text-red-600">Tomorrow's Solutions</span> Today
          </h2>
          <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            We combine cutting-edge technology with deep industry expertise to deliver transformative solutions.
          </p>
        </motion.div>

        {/* Content Row - Image Left / Text Right */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 order-1 lg:order-1"
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Team collaborating on technology solutions"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
            </div>
          </motion.div>

          {/* Content - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 order-2 lg:order-2"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <FaLightbulb className="text-red-600 text-xl" />,
                  title: "Innovation Engine",
                  description: "Our R&D team continuously explores emerging technologies to future-proof your solutions."
                },
                {
                  icon: <FaShieldAlt className="text-red-600 text-xl" />,
                  title: "Security First",
                  description: "Built-in security protocols from initial design through deployment."
                },
                {
                  icon: <FaUsers className="text-red-600 text-xl" />,
                  title: "Client-Centric",
                  description: "Solutions tailored to your unique business needs and challenges."
                },
                {
                  icon: <FaChartLine className="text-red-600 text-xl" />,
                  title: "Results Driven",
                  description: "Clear metrics and KPIs to demonstrate ROI and business impact."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Extra;