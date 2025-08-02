import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaChalkboardTeacher,
  FaLaptopCode,
  FaShieldAlt,
  FaUsers,
  FaCertificate,
  FaRegCalendarAlt
} from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const DemoTrainingOne = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const trainingPrograms = [
    {
      icon: <FaLaptopCode className="text-red-500 text-3xl" />,
      title: "Developer Certification",
      duration: "8 Weeks",
      level: "Intermediate",
      description: "Comprehensive coding training with hands-on projects",
      features: ["Daily coding exercises", "Real-world projects", "Mentor support"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <FaShieldAlt className="text-red-500 text-3xl" />,
      title: "Security Bootcamp",
      duration: "6 Weeks",
      level: "Advanced",
      description: "Intensive cybersecurity training with penetration testing",
      features: ["CTF challenges", "Vulnerability assessment", "Red team exercises"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <FaUsers className="text-red-500 text-3xl" />,
      title: "Team Training",
      duration: "Custom",
      level: "All Levels",
      description: "Customized programs for corporate teams",
      features: ["Tailored curriculum", "Onsite/virtual options", "Team projects"],
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const upcomingSessions = [
    {
      date: "15 Jan 2024",
      title: "Cloud Security Fundamentals",
      instructor: "Dr. Sarah Chen",
      format: "Virtual"
    },
    {
      date: "22 Jan 2024",
      title: "Python for Data Science",
      instructor: "Mark Johnson",
      format: "Onsite"
    },
    {
      date: "5 Feb 2024",
      title: "DevSecOps Workshop",
      instructor: "Alex Rodriguez",
      format: "Hybrid"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-32 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
      >
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Training session"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-800/60" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span
              variants={itemVariants}
              className="inline-block px-4 py-2 text-sm font-semibold text-red-400 bg-red-900/30 rounded-full mb-6 border border-red-400/20"
            >
              Learning & Development
            </motion.span>
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              TriAxis <span className="text-red-400">Technology Training</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Build in-demand skills with our expert-led training programs and certifications.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Training Programs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 text-sm font-semibold text-red-600 bg-red-100 rounded-full mb-4">
              Our Programs
            </span>
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
              Professional <span className="text-red-600">Training Courses</span>
            </h2>
            <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
              Hands-on, practical training designed to build real-world skills.
            </p>
          </motion.div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                whileHover={{ y: -10 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
                  <div className="absolute top-4 left-4 w-14 h-14 bg-white rounded-lg flex items-center justify-center shadow-md">
                    {program.icon}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-800">{program.title}</h3>
                    <span className="px-2 py-1 text-xs font-semibold bg-red-100 text-red-800 rounded">
                      {program.level}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <FaRegCalendarAlt className="mr-1" />
                    <span>{program.duration}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  
                  <h4 className="font-semibold text-gray-800 mb-2">Program Includes:</h4>
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 text-red-500 mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                      Enroll Now
                    </button>
                    <button className="flex-1 px-4 py-2 bg-white text-red-600 rounded-md hover:bg-gray-50 transition-colors border border-gray-200">
                      Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Upcoming Sessions */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Upcoming <span className="text-red-600">Training Sessions</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Browse our schedule of upcoming open enrollment courses.
            </p>
          </motion.div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="grid grid-cols-12 bg-gray-100 p-4 border-b border-gray-200">
              <div className="col-span-3 font-semibold text-gray-700">Date</div>
              <div className="col-span-5 font-semibold text-gray-700">Course Title</div>
              <div className="col-span-2 font-semibold text-gray-700">Instructor</div>
              <div className="col-span-2 font-semibold text-gray-700">Format</div>
            </div>
            {upcomingSessions.map((session, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grid grid-cols-12 p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <div className="col-span-3 text-gray-800 font-medium">{session.date}</div>
                <div className="col-span-5">
                  <h3 className="font-medium text-gray-800">{session.title}</h3>
                </div>
                <div className="col-span-2 text-gray-600">{session.instructor}</div>
                <div className="col-span-2">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    session.format === 'Virtual' ? 'bg-blue-100 text-blue-800' :
                    session.format === 'Onsite' ? 'bg-green-100 text-green-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {session.format}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="px-6 py-3 bg-white text-red-600 rounded-lg font-medium hover:bg-gray-50 transition-colors border border-gray-200 shadow-sm">
              View Full Training Calendar
            </button>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-xl overflow-hidden shadow-xl h-96 w-full">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Certificate presentation"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block px-3 py-1 text-sm font-semibold text-red-600 bg-red-100 rounded-full mb-4">
                Certifications
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Industry-Recognized <span className="text-red-600">Certifications</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Validate your skills with our accredited certification programs that are recognized by employers worldwide.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <FaCertificate className="text-red-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Digital badges for verified credentials</span>
                </li>
                <li className="flex items-start">
                  <FaCertificate className="text-red-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Performance-based assessments</span>
                </li>
                <li className="flex items-start">
                  <FaCertificate className="text-red-500 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Continuing education credits</span>
                </li>
              </ul>
              
              <button className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors shadow-md">
                Explore Certifications
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-700 to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Need Custom Training Solutions?</h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
              We can develop tailored training programs for your organization's specific needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-white text-red-700 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg">
                Request Corporate Training
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-colors">
                Download Training Catalog
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DemoTrainingOne;