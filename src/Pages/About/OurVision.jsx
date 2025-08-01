import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaGlobe, FaShieldAlt, FaLightbulb, FaHandshake, FaMedal } from 'react-icons/fa';

// Motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "backOut"
    }
  }
};

const OurVision = () => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-12"
                >
                    {/* Mission Card */}
                    <motion.div
                        variants={cardVariants}
                        className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group"
                        whileHover={{ y: -15 }}
                    >
                        <div className="h-48 overflow-hidden">
                            <img 
                                src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" 
                                alt="Mission" 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-8 relative">
                            <div className="absolute -top-8 left-8 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg">
                                <FaRocket className="text-2xl" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 mt-4 text-gray-800">
                                Our Mission
                            </h3>
                            <p className="text-gray-600">
                                To empower businesses through cutting-edge technology solutions that drive growth, enhance security, and foster innovation in an ever-evolving digital landscape.
                            </p>
                        </div>
                    </motion.div>

                    {/* Vision Card */}
                    <motion.div
                        variants={cardVariants}
                        className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group"
                        whileHover={{ y: -15 }}
                    >
                        <div className="h-48 overflow-hidden">
                            <img 
                                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" 
                                alt="Vision" 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-8 relative">
                            <div className="absolute -top-8 left-8 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg">
                                <FaGlobe className="text-2xl" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 mt-4 text-gray-800">
                                Our Vision
                            </h3>
                            <p className="text-gray-600">
                                To be the global benchmark for technology excellence, creating a connected world where businesses thrive through our innovative solutions and transformative digital strategies.
                            </p>
                        </div>
                    </motion.div>

                    {/* Values Card */}
                    <motion.div
                        variants={cardVariants}
                        className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group"
                        whileHover={{ y: -15 }}
                    >
                        <div className="h-48 overflow-hidden">
                            <img 
                                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" 
                                alt="Values" 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-8 relative">
                            <div className="absolute -top-8 left-8 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg">
                                <FaShieldAlt className="text-2xl" />
                            </div>
                            <h3 className="text-2xl font-bold mb-6 mt-4 text-gray-800">
                                Our Core Values
                            </h3>
                            <div className="space-y-4">
                                {[
                                    { icon: <FaLightbulb className="text-red-500" />, name: "Innovation", desc: "Pushing boundaries with creative tech solutions" },
                                    { icon: <FaShieldAlt className="text-red-500" />, name: "Integrity", desc: "Ethical practices in all we do" },
                                    { icon: <FaHandshake className="text-red-500" />, name: "Collaboration", desc: "Strong partnerships drive success" },
                                    { icon: <FaMedal className="text-red-500" />, name: "Excellence", desc: "Quality in every deliverable" }
                                ].map((value, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-start space-x-4"
                                        whileHover={{ x: 5 }}
                                    >
                                        <div className="flex-shrink-0 mt-1">
                                            {value.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800">{value.name}</h4>
                                            <p className="text-sm text-gray-600">{value.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default OurVision;