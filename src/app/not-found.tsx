"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 flex items-center justify-center px-4 overflow-hidden relative">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-200 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-pink-200 rounded-full opacity-15 blur-2xl"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-purple-200 rounded-full opacity-25 blur-lg"></div>
      </motion.div>

      {/* Floating Organic Shapes */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <svg
          className="absolute top-1/4 left-1/3 w-64 h-64 opacity-10"
          viewBox="0 0 200 200"
        >
          <motion.path
            d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,89.9,-16.3,89.3,-0.5C88.6,15.3,84.8,30.6,76.8,43.2C68.8,55.8,56.6,65.7,42.4,72.8C28.2,79.9,12,84.2,-4.8,91.8C-21.6,99.4,-43.2,110.3,-59.4,107.2C-75.6,104.1,-86.4,87,-91.8,68.4C-97.2,49.8,-97.2,29.8,-94.4,11.2C-91.6,-7.4,-86,-24.6,-76.2,-38.8C-66.4,-53,-52.4,-64.2,-37.2,-70.8C-22,-77.4,-6.6,-79.4,7.2,-78.4C21,-77.4,42,-73.4,44.7,-76.4Z"
            fill="currentColor"
            className="text-red-300"
            animate={{
              d: [
                "M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,89.9,-16.3,89.3,-0.5C88.6,15.3,84.8,30.6,76.8,43.2C68.8,55.8,56.6,65.7,42.4,72.8C28.2,79.9,12,84.2,-4.8,91.8C-21.6,99.4,-43.2,110.3,-59.4,107.2C-75.6,104.1,-86.4,87,-91.8,68.4C-97.2,49.8,-97.2,29.8,-94.4,11.2C-91.6,-7.4,-86,-24.6,-76.2,-38.8C-66.4,-53,-52.4,-64.2,-37.2,-70.8C-22,-77.4,-6.6,-79.4,7.2,-78.4C21,-77.4,42,-73.4,44.7,-76.4Z",
                "M35.2,-62.8C45.4,-54.2,53.2,-43.4,58.8,-31.2C64.4,-19,67.8,-5.4,67.2,8.4C66.6,22.2,62,36.2,53.4,46.8C44.8,57.4,32.2,64.6,18.4,68.4C4.6,72.2,-10.4,72.6,-24.8,69.2C-39.2,65.8,-53,58.6,-62.4,47.8C-71.8,37,-76.8,22.6,-77.6,7.8C-78.4,-7,-75,-22.2,-67.2,-34.8C-59.4,-47.4,-47.2,-57.4,-33.6,-64.8C-20,-72.2,-5,-77,-1.4,-74.8C2.2,-72.6,17.6,-71.4,35.2,-62.8Z",
              ],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 8,
              ease: "easeInOut",
            }}
          />
        </svg>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* 404 Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 1.2,
          }}
          className="mb-8"
        >
          <motion.h1
            className="text-8xl lg:text-9xl font-black mb-4 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent"
            animate={{
              textShadow: [
                "0 0 20px rgba(229, 62, 62, 0.3)",
                "0 0 40px rgba(229, 62, 62, 0.5)",
                "0 0 20px rgba(229, 62, 62, 0.3)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            404
          </motion.h1>
        </motion.div>

        {/* Floating Emoji */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-6xl lg:text-8xl mb-6 inline-block"
          >
            😔
          </motion.div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
            Oops! Page Not Found
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            It seems like this page got lost in the emotional journey.
            Let&apos;s get you back to a safe space.
          </p>
        </motion.div>

        {/* Suggestions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mb-12"
        >
          <p className="text-lg text-gray-500 mb-8">
            Here are some things you can try:
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              {
                icon: "🏠",
                title: "Go Home",
                desc: "Return to our main page",
                action: "home",
              },
              {
                icon: "🤝",
                title: "Get Support",
                desc: "Visit our help center",
                action: "support",
              },
              {
                icon: "📝",
                title: "Join Waitlist",
                desc: "Be first to try Rasmlai",
                action: "waitlist",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.2 }}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                }}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(229, 62, 62, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Take Me Home</span>
            </motion.button>
          </Link>

          <Link href="/support">
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "#f3f4f6",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-red-600 border-2 border-red-600 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Help
            </motion.button>
          </Link>
        </motion.div>

        {/* Fun Error Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="mt-12"
        >
          <motion.p
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-sm text-gray-400 italic"
          >
            &ldquo;Even our AI companion couldn&apos;t find this page... and
            that&apos;s saying something! 🤖&rdquo;
          </motion.p>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 left-10 hidden lg:block"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-12 h-12 bg-red-200 rounded-full opacity-30 blur-sm"></div>
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 right-10 hidden lg:block"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <div className="w-8 h-8 bg-pink-200 rounded-full opacity-40 blur-sm"></div>
        </motion.div>

        <motion.div
          className="absolute top-2/3 left-1/4 hidden lg:block"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <div className="w-6 h-6 bg-purple-200 rounded-full blur-sm"></div>
        </motion.div>
      </div>

      {/* Brand Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-xl font-bold bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent cursor-pointer"
          >
            Rasmlai
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
}
