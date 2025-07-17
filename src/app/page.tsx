"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

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
  // "/images/homescreen.png",
  "/images/call.png",
];

const RasmlaiLanding = () => {
  const containerRef = useRef(null);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        // Remove the ease property entirely to use default easing
      },
    },
  };


  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-br from-red-50 to-pink-50 overflow-hidden"
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
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-200 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-pink-200 rounded-full opacity-15 blur-2xl"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-purple-200 rounded-full opacity-25 blur-lg"></div>
      </motion.div>

      {/* Floating Organic Shapes */}
      <motion.div
        style={{ y: blobY }}
        className="absolute inset-0 pointer-events-none"
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
      <section className="relative md:min-h-screen flex px-4">
        <div className="max-w-7xl mx-auto flex mt-20 md:items-center md:justify-center gap-x-50">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
      
            <motion.div
              variants={titleVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                className="text-5xl lg:text-7xl font-black mb-6 leading-tight"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 900,
                }}
              >
                <motion.span
                  className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent inline-block"
                  variants={letterVariants}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    backgroundPosition: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                >
                  Let Your Emotions
                </motion.span>
                <br />
                <motion.span
                  className="text-red-500 inline-block"
                  variants={letterVariants}
                  whileHover={{
                    scale: 1.05,
                    textShadow: "0 0 20px rgba(239, 68, 68, 0.5)",
                  }}
                >
                  Flow Freely
                </motion.span>
              </motion.h1>
            </motion.div>

            <motion.p
              className="text-xl text-gray-700 mb-8 max-w-2xl leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.span
                className="inline-block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                A safe space where you can express anger, sadness, and every
                emotion in between. Your AI companion is here to listen,
                understand, and help you process whatever you&apos;re feeling.
              </motion.span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex justify-center md:justify-start"
            >
              <Magnet
                onClick={() => setIsWaitlistOpen(true)}
                padding={120}
                magnetStrength={3}
                wrapperClassName="inline-block"
              >
                <motion.button
                  className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(229, 62, 62, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(229, 62, 62, 0.3)",
                      "0 0 40px rgba(229, 62, 62, 0.5)",
                      "0 0 20px rgba(229, 62, 62, 0.3)",
                    ],
                  }}
                  transition={{
                    boxShadow: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="relative z-10"
                    animate={{
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    Start Your Journey
                  </motion.span>
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
              <motion.span
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Your emotions matter. Your voice matters.
              </motion.span>
            </motion.p>
          </motion.div>

          <motion.div
            className="hidden md:block"  
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <PhoneSlider images={imageUrls} slideSpeed={4000} />
          </motion.div>
        </div>
      </section>
      <RasmlaiShowcase />

      {/* How It Works Section */}
      <HowitWorks />

      {/* Final CTA Section */}
      <CalltoAction openWaitlist={() => setIsWaitlistOpen(true)} />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RasmlaiLanding;
