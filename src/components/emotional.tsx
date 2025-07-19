import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Heart, MessageCircle, Volume2 } from "lucide-react";
import Image from "next/image";
import PhoneSlider from "./iphone";

const RasmlaiShowcase = ({ slideSpeed = 4000 }) => {
  const images = [
    "/images/onboarding1.png",
    "/images/onboarding2.png",
    "/images/onboarding3.png",
    "/images/login.png",
    "/images/homescreen.png",
    "/images/call.png",
  ];
  const features = [
    {
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Voice Calls with AI",
      description:
        "Express yourself through natural voice conversations with our empathetic AI companion",
    },
    {
      icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Emotional Support",
      description:
        "Share your anger, sadness, joy - every emotion is valid and welcomed here",
    },
    {
      icon: <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Safe Space",
      description:
        "A judgment-free zone where you can be completely authentic and vulnerable",
    },
    {
      icon: <Volume2 className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Active Listening",
      description:
        "Your AI companion truly listens, understands, and responds with genuine care",
    },
  ];

  return (
    // MODIFIED: Reduced top padding by changing `py` to `pb` to decrease space from the previous section.
    <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-red-50 to-pink-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-red-200 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute top-20 sm:top-40 right-10 sm:right-20 w-32 h-32 sm:w-48 sm:h-48 bg-pink-200 rounded-full opacity-15 blur-2xl"></div>
        <div className="absolute bottom-20 sm:bottom-40 left-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-purple-200 rounded-full opacity-25 blur-lg"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Phone Component - Top on mobile, Left on desktop */}
          <motion.div
            className="flex justify-center lg:justify-start items-center order-1 lg:order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="lg:sticky lg:top-8">
              <PhoneSlider images={images} slideSpeed={slideSpeed} />
            </div>
          </motion.div>

          {/* Content - Bottom on mobile, Right on desktop */}
          <motion.div
            className="space-y-6 order-2 lg:order-2 flex flex-col justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Header */}
            <div className="space-y-3 sm:space-y-4 text-center lg:text-left">
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 leading-tight"
                style={{ fontFamily: "'Poppins', sans-serif" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                  Your Voice Matters
                </span>
              </motion.h2>

              <motion.p
                className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                style={{ fontFamily: "'Inter', sans-serif" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Rasmlai is your AI companion for emotional wellness. Call
                anytime to express your feelings, process difficult emotions,
                and find support when you need it most.
              </motion.p>
            </div>

            {/* Features Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 pt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(239, 68, 68, 0.1)",
                  }}
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg sm:rounded-xl flex items-center justify-center text-white">
                      {feature.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className="text-gray-600 text-sm leading-relaxed"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RasmlaiShowcase;
