import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaServer,
  FaNetworkWired,
  FaUserLock,
  FaCode,
  FaCloudUploadAlt,
  FaShieldVirus
} from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const DemoProductTwo = () => {
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

  const productCategories = [
    {
      name: "Infrastructure Solutions",
      icon: <FaServer className="text-red-500 text-3xl" />,
      products: [
        {
          name: "CloudMatrix Platform",
          description: "Enterprise-grade cloud management with built-in security",
          badge: "Most Popular"
        },
        {
          name: "NetSecure Gateways",
          description: "Next-gen firewall and network protection systems"
        }
      ]
    },
    {
      name: "Security Products",
      icon: <FaUserLock className="text-red-500 text-3xl" />,
      products: [
        {
          name: "AuthShield Pro",
          description: "Multi-factor authentication with biometric options",
          badge: "New Release"
        },
        {
          name: "EncryptVault",
          description: "End-to-end encryption for sensitive data storage"
        }
      ]
    },
    {
      name: "Developer Tools",
      icon: <FaCode className="text-red-500 text-3xl" />,
      products: [
        {
          name: "CodeSecure IDE",
          description: "Development environment with built-in security scanning"
        },
        {
          name: "APIShield Manager",
          description: "Protect and monitor your API ecosystem"
        }
      ]
    }
  ];

  const featuredProduct = {
    name: "TriAxis Security Suite",
    tagline: "Complete protection for the modern enterprise",
    description: "Our flagship product combines endpoint protection, network security, and threat intelligence in one comprehensive platform.",
    features: [
      "Real-time threat detection and response",
      "Unified security management console",
      "Automated compliance reporting",
      "AI-powered anomaly detection"
    ],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-32 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
      >
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Security technology"
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
              Enterprise Products
            </motion.span>
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              TriAxis <span className="text-red-400">Security Products</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Comprehensive security solutions designed to protect your digital assets at every layer.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Product */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl h-96 w-full">
                <img
                  src={featuredProduct.image}
                  alt={featuredProduct.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
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
                Flagship Product
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                {featuredProduct.name}
              </h2>
              <p className="text-xl text-gray-600 mb-6">{featuredProduct.tagline}</p>
              <p className="text-gray-600 mb-8">{featuredProduct.description}</p>
              
              <h3 className="font-bold text-gray-800 mb-3">Key Features:</h3>
              <ul className="space-y-3 mb-8">
                {featuredProduct.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-red-500 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors shadow-md">
                  Request Enterprise Demo
                </button>
                <button className="px-6 py-3 bg-white text-red-600 rounded-lg font-medium hover:bg-gray-50 transition-colors border border-gray-200 shadow-sm">
                  Download Datasheet
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 text-sm font-semibold text-red-600 bg-red-100 rounded-full mb-4">
              Product Portfolio
            </span>
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
              Explore Our <span className="text-red-600">Security Solutions</span>
            </h2>
            <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
              Comprehensive products designed to address every aspect of enterprise security.
            </p>
          </motion.div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {productCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                whileHover={{ y: -5 }}
              >
                <div className="p-6 border-b border-gray-100 flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{category.name}</h3>
                </div>
                <div className="divide-y divide-gray-100">
                  {category.products.map((product, pIndex) => (
                    <div key={pIndex} className="p-6">
                      {product.badge && (
                        <span className="inline-block px-2 py-1 text-xs font-semibold text-red-600 bg-red-50 rounded-full mb-2">
                          {product.badge}
                        </span>
                      )}
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h4>
                      <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                      <button className="text-sm text-red-600 font-medium hover:text-red-800 transition-colors">
                        Learn more →
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Secure Your Enterprise?</h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
              Our security experts can help you select and implement the right products for your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-white text-red-700 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg">
                Contact Sales
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-colors">
                View All Products
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DemoProductTwo;