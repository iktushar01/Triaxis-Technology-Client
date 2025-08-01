import React, { useRef } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { 
  FaProjectDiagram, 
  FaUserShield, 
  FaChalkboardTeacher, 
  FaGlobeAmericas 
} from "react-icons/fa";

const AchievementSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const achievements = [
    { 
      icon: <FaProjectDiagram className="text-white text-3xl" />, 
      count: 50, 
      suffix: "+", 
      label: "Projects Delivered",
      description: "Successful implementations across industries"
    },
    { 
      icon: <FaUserShield className="text-white text-3xl" />, 
      count: 30, 
      suffix: "+", 
      label: "Businesses Secured",
      description: "Protected from cyber threats"
    },
    { 
      icon: <FaChalkboardTeacher className="text-white text-3xl" />, 
      count: 500, 
      suffix: "+", 
      label: "Professionals Trained",
      description: "Upskilled in latest technologies"
    },
    { 
      icon: <FaGlobeAmericas className="text-white text-3xl" />, 
      count: 5, 
      suffix: "+", 
      label: "Countries Served",
      description: "Global technology solutions provider"
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-red-700 to-red-900 text-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-red-400 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-red-500 rounded-full filter blur-3xl opacity-20 animate-pulse-slower"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-red-200">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-red-300 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="w-20 h-20 bg-red-500/40 rounded-full flex items-center justify-center mx-auto mb-6 transform transition-all duration-500 hover:scale-110">
                {achievement.icon}
              </div>
              <h3 className="text-4xl sm:text-5xl font-bold mb-2 text-red-200">
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
              <p className="text-lg text-red-100 font-medium mb-2">{achievement.label}</p>
              <p className="text-sm text-red-100/80">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animate-pulse-slower {
          animation: pulse-slower 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AchievementSection;