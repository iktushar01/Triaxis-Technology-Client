import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaRobot,
  FaBrain,
//   FaChartNetwork,
  FaDatabase,
  FaCloud,
  FaShieldAlt
} from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const DemoProductThree = () => {
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

  const aiProducts = [
    {
      icon: <FaRobot className="text-red-500 text-4xl" />,
      name: "AutoML Pro",
      category: "AI Platform",
      description: "No-code machine learning platform for business analysts",
      highlights: [
        "Drag-and-drop model builder",
        "Automated feature engineering",
        "Explainable AI dashboards"
      ],
      pricing: "Subscription-based",
      image: "https://images.unsplash.com/photo-1677442135136-760c813cd9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      badge: "Best Seller"
    },
    {
      icon: <FaBrain className="text-red-500 text-4xl" />,
      name: "DeepInsight",
      category: "Computer Vision",
      description: "Advanced image and video analysis toolkit",
      highlights: [
        "Real-time object detection",
        "Custom model training",
        "Edge deployment ready"
      ],
      pricing: "Per-processor license",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      badge: "New Release"
    },
    {
      icon: <FaBrain className="text-red-500 text-4xl" />,
      name: "PredictX",
      category: "Forecasting Engine",
      description: "Time-series prediction for business metrics",
      highlights: [
        "Multi-horizon forecasting",
        "Anomaly detection",
        "Automated retraining"
      ],
      pricing: "Usage-based",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const aiModules = [
    {
      icon: <FaDatabase className="text-red-500 text-2xl" />,
      name: "Data Prep Studio",
      description: "Automated data cleaning and feature engineering"
    },
    {
      icon: <FaCloud className="text-red-500 text-2xl" />,
      name: "Model Deployment Hub",
      description: "One-click deployment to cloud or edge"
    },
    {
      icon: <FaShieldAlt className="text-red-500 text-2xl" />,
      name: "AI Security Toolkit",
      description: "Adversarial attack prevention and model hardening"
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
            src="https://images.unsplash.com/photo-1677442136015-0e5f6ea8f86f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="AI technology background"
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
              AI Product Suite
            </motion.span>
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              TriAxis <span className="text-red-400">AI Solutions</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Cutting-edge artificial intelligence products that transform data into actionable insights.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* AI Products Section */}
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
              Core Products
            </span>
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
              Enterprise <span className="text-red-600">AI Platforms</span>
            </h2>
            <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
              Powerful yet accessible AI solutions designed for business impact.
            </p>
          </motion.div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {aiProducts.map((product, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                whileHover={{ y: -10 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
                  {product.badge && (
                    <span className="absolute top-4 right-4 px-3 py-1 text-xs font-bold text-white bg-red-600 rounded-full">
                      {product.badge}
                    </span>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-sm text-red-300">{product.category}</span>
                    <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.highlights.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 text-red-500 mr-2 mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center border-t border-gray-100 pt-4">
                    <span className="text-sm font-medium text-gray-500">{product.pricing}</span>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 text-sm bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                        Demo
                      </button>
                      <button className="px-4 py-2 text-sm bg-white text-red-600 rounded-md hover:bg-gray-50 transition-colors border border-gray-200">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI Modules Section */}
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
              Complementary <span className="text-red-600">AI Modules</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Enhance your AI capabilities with these specialized add-ons.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aiModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                    {module.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 mb-1">{module.name}</h3>
                    <p className="text-gray-600 text-sm">{module.description}</p>
                    <button className="mt-3 text-sm text-red-600 font-medium hover:text-red-800 transition-colors">
                      Learn more →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-700 to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Need Custom AI Solutions?</h2>
              <p className="text-xl text-red-100 mb-6">
                Our AI specialists can tailor solutions to your specific business requirements.
              </p>
              <button className="px-8 py-3 bg-white text-red-700 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg">
                Contact AI Solutions Team
              </button>
            </motion.div>
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
                <h3 className="text-xl font-bold mb-3">AI Resource Center</h3>
                <p className="text-red-100 mb-4">
                  Access whitepapers, case studies, and technical documentation.
                </p>
                <button className="px-6 py-2 bg-white/20 hover:bg-white/30 border border-white/30 rounded-lg font-medium transition-colors">
                  Explore Resources
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DemoProductThree;