import React, { useRef } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  FaProjectDiagram,
  FaUserShield,
  FaChalkboardTeacher,
  FaGlobeAmericas,
} from "react-icons/fa";

const AchievementSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const achievements = [
    {
      icon: <FaProjectDiagram className="text-red-600 text-2xl" />,
      count: 50,
      suffix: "+",
      label: "Projects Delivered",
      description: "Successful implementations across industries",
    },
    {
      icon: <FaUserShield className="text-red-600 text-2xl" />,
      count: 30,
      suffix: "+",
      label: "Businesses Secured",
      description: "Protected from cyber threats",
    },
    {
      icon: <FaChalkboardTeacher className="text-red-600 text-2xl" />,
      count: 500,
      suffix: "+",
      label: "Professionals Trained",
      description: "Upskilled in latest technologies",
    },
    {
      icon: <FaGlobeAmericas className="text-red-600 text-2xl" />,
      count: 5,
      suffix: "+",
      label: "Countries Served",
      description: "Global technology solutions provider",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-red-200 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 text-sm font-semibold text-red-600 bg-red-100 rounded-full mb-4">
            Our Impact
          </span>
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            By The <span className="text-red-600">Numbers</span>
          </h2>
          <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            Quantifying our success through measurable achievements and client
            impact.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Achievements Cards - Left Side */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  ref={ref}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      {achievement.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-1">
                        {inView ? (
                          <CountUp
                            end={achievement.count}
                            duration={2.5}
                            suffix={achievement.suffix}
                          />
                        ) : (
                          "0"
                        )}
                      </h3>
                      <p className="text-lg font-medium text-gray-800">
                        {achievement.label}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image - Right Side */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Team celebrating success"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-xl font-bold">
                  Real Impact, Measurable Results
                </h3>
                <p className="text-sm opacity-90">
                  Our achievements tell the story of our commitment to
                  excellence
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AchievementSection;
