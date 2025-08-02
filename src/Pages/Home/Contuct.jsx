import React from 'react';
import { motion } from 'framer-motion';
import ContactOurTeam from './ContactOurTeam';
import Faq from './Faq';

// Animation variants
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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6
    }
  }
};

const Contact = () => {
    return (
        <div className='min-h-[calc(100vh-590px)] bg-red-200'>
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative py-32 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
            >
                <div className="absolute inset-0 overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        alt="Modern office workspace"
                        className="w-full h-full object-cover"
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-800/60" />
                </div>
                
                <div className="container mx-auto px-6 relative z-10">
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
                            Get In Touch
                        </motion.span>
                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
                        >
                            Contact <span className="text-red-400">TriAxis</span> Technology
                        </motion.h1>
                        <motion.p
                            variants={itemVariants}
                            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
                        >
                            Our team is ready to help you with innovative solutions tailored to your business needs.
                        </motion.p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Contact Form Section */}
          <ContactOurTeam />

            {/* FAQ Section */}
            <Faq />
        </div>
    );
};

export default Contact;