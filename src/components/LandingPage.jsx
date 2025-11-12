import React from "react";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">
      
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center flex-grow text-center px-6 py-24">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-6"
        >
          Empower Your Ideas with <span className="text-yellow-300">AI Innovation</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg md:text-xl max-w-2xl mb-8 text-gray-100"
        >
          Build stunning digital experiences faster with our intelligent tools designed for creators, startups, and innovators.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-purple-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Get Started
        </motion.button>
      </section>

      {/* PRICING SECTION */}
      <section className="bg-white text-gray-800 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          Choose Your Plan
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-6">
          {/* Standard Plan */}
          <div className="bg-gray-100 rounded-2xl shadow-lg p-8 w-80 hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-4 text-purple-600">Standard</h3>
            <p className="text-gray-600 mb-6">Perfect for individuals and small teams.</p>
            <p className="text-5xl font-extrabold mb-6">$9<span className="text-lg">/mo</span></p>
            <ul className="mb-8 text-gray-700 space-y-2">
              <li>✔️ Basic AI Tools</li>
              <li>✔️ 10 Projects</li>
              <li>✔️ Email Support</li>
            </ul>
            <button className="w-full py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold">
              Get Standard
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-gradient-to-br from-purple-600 to-pink-500 text-white rounded-2xl shadow-2xl p-8 w-96 scale-110 relative">
            <span className="absolute -top-4 right-6 bg-yellow-400 text-purple-800 font-bold px-3 py-1 rounded-full text-sm shadow">
              Most Popular
            </span>
            <h3 className="text-3xl font-bold mb-4">Premium</h3>
            <p className="text-gray-100 mb-6">Best for growing businesses and agencies.</p>
            <p className="text-5xl font-extrabold mb-6">$29<span className="text-lg">/mo</span></p>
            <ul className="mb-8 space-y-2">
              <li>⚡ Unlimited AI Tools</li>
              <li>⚡ Unlimited Projects</li>
              <li>⚡ 24/7 Priority Support</li>
            </ul>
            <button className="w-full py-3 rounded-full bg-white text-purple-700 font-semibold">
              Get Premium
            </button>
          </div>
        </div>
      </section>

     

    </div>
  );
};

export default LandingPage;
