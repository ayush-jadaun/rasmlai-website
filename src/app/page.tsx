"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRouter } from "next/navigation";

import Footer from "../components/footer";
import CalltoAction from "../components/call-to-action";
import HowitWorks from "../components/how-it-works";
import Magnet from "@/components/ui/magneticButton";
import PhoneSlider from "@/components/iphone";
import RasmlaiShowcase from "@/components/emotional";

const imageUrls = [
  "/images/onboarding1.png",
  "/images/onboarding2.png",
  "/images/onboarding3.png",
  "/images/login.png",
  "/images/homescreen.png",
  "/images/call.png",
];

const RasmlaiLanding = () => {
  const containerRef = useRef(null);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const router = useRouter();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Parallax transforms
  const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "50%"]);
  const blobY = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  // Text animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-br from-red-50 to-pink-50 overflow-x-hidden"
      style={{
        fontFamily:
          "'Inter', 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
      }}
    >
      {/* Animated Background Elements */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 left-5 sm:left-10 w-20 sm:w-32 h-20 sm:h-32 bg-red-200 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute top-32 sm:top-40 right-10 sm:right-20 w-32 sm:w-48 h-32 sm:h-48 bg-pink-200 rounded-full opacity-15 blur-2xl"></div>
        <div className="absolute bottom-20 sm:bottom-40 left-1/4 w-16 sm:w-24 h-16 sm:h-24 bg-purple-200 rounded-full opacity-25 blur-lg"></div>
      </motion.div>

      {/* Floating Organic Shapes */}
      <motion.div
        style={{ y: blobY }}
        className="absolute inset-0 pointer-events-none hidden sm:block"
      >
        <svg
          className="absolute top-1/4 left-1/3 w-48 sm:w-64 h-48 sm:h-64 opacity-10"
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

      {/* Main Hero Section */}
      <main className="relative z-10 flex flex-col min-h-screen">
        {/* Header - Now part of the main layout flow */}
        <header className="px-4 pt-4 sm:px-6 sm:pt-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-red-600">
            RASMLAI
          </h1>
        </header>

        {/* Hero Content - Centered */}
        <div className="flex-grow flex items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full py-4 sm:py-16">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Text Content Column */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center lg:text-left space-y-5 sm:space-y-6"
              >
                <motion.div
                  variants={titleVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-3"
                >
                  <motion.h1
                    className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 900,
                    }}
                    variants={letterVariants}
                  >
                    <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                      Let Your Emotions Flow Freely
                    </span>
                  </motion.h1>

                  <motion.h2
                    className="text-xl sm:text-2xl font-bold text-red-500"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 600,
                    }}
                    variants={letterVariants}
                  >
                    Self Reflection Is The Key
                  </motion.h2>
                </motion.div>

                <motion.p
                  className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  A safe space to express every emotion. Your AI companion
                  listens, understands, and helps you process your feelings.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex justify-center lg:justify-start pt-2"
                >
                  <Magnet
                    onClick={() => router.push("/waitlist")}
                    padding={80}
                    magnetStrength={2}
                    wrapperClassName="inline-block"
                  >
                    <motion.button
                      className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 15px 30px rgba(229, 62, 62, 0.3)",
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-0"
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="relative z-10">Start Your Journey</span>
                    </motion.button>
                  </Magnet>
                </motion.div>

            {/* Animated subtitle */}
            <motion.p
              className="text-sm text-gray-500 mt-4 italic"
              style={{ fontFamily: "'Inter', sans-serif" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >

              <motion.p
                className=""
              >
                Your emotions matter,Your Voice matters with <br />
                <p className="font-bold text-6xl mt-5 text-red-400">
                  RASMLAI
                </p>
              </motion.p>

              
            </motion.p>
          </motion.div>

              {/* Phone Slider Column - Now visible on mobile */}
              <motion.div
                className="flex justify-center mt-8 lg:mt-0"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="transform scale-90 sm:scale-100">
                  <PhoneSlider images={imageUrls} slideSpeed={4000} />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <RasmlaiShowcase />
      <HowitWorks />
      <CalltoAction openWaitlist={() => setIsWaitlistOpen(true)} />
      <Footer />
    </div>
  );
};

export default RasmlaiLanding;
