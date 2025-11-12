import React from "react";
import { motion } from "framer-motion";
import { Code, Cloud, Brain, Palette } from "lucide-react";

const ServicePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">
      
      {/* SECTION 1: SERVICE OVERVIEW */}
      <section className="py-24 text-center px-6 md:px-16">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-6"
        >
          Our <span className="text-yellow-300">Services</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto text-lg text-gray-100 leading-relaxed"
        >
          We specialize in building intelligent, scalable, and visually stunning solutions
          that empower businesses to grow faster. From full-stack development to AI-driven
          automation, we bring your ideas to life with precision and creativity.
        </motion.p>
      </section>

      {/* SECTION 2: SERVICE DETAILS */}
      <section className="bg-white text-gray-800 py-20 px-6 md:px-16 rounded-t-[3rem] shadow-inner">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          What We Offer
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          
          {/* CARD 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-purple-50 to-pink-100 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
          >
            <Brain className="text-purple-600 w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-purple-700">AI & Automation</h3>
            <p className="text-gray-600">
              Integrate intelligent automation and machine learning tools to simplify complex business workflows.
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-indigo-50 to-purple-100 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
          >
            <Code className="text-indigo-600 w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-indigo-700">Web Development</h3>
            <p className="text-gray-600">
              Build fast, secure, and scalable web applications with modern technologies like React, Django, and Node.js.
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-pink-50 to-yellow-100 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
          >
            <Cloud className="text-pink-600 w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-pink-700">Cloud & DevOps</h3>
            <p className="text-gray-600">
              Manage deployments, CI/CD pipelines, and server infrastructure with advanced cloud solutions.
            </p>
          </motion.div>

          {/* CARD 4 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-purple-50 to-blue-100 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
          >
            <Palette className="text-blue-600 w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-blue-700">UI/UX Design</h3>
            <p className="text-gray-600">
              Craft intuitive and visually appealing interfaces using Figma and modern design systems.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
