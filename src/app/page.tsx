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
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
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
      {/* Compact Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-50/90 to-pink-50/90 backdrop-blur-md border-b border-red-100/30">
        <div className="px-4 py-3 sm:px-6 lg:px-8">
          <motion.h1
            className="text-lg sm:text-xl lg:text-2xl font-bold text-red-600"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            RASMLAI
          </motion.h1>
        </div>
      </header>

      {/* Main Hero Section */}
      <main className="relative z-10 pt-25 sm:pt-24 lg:pt-28">
        {/* Hero Content */}
        <div className="px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
              {/* Text Content Column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center lg:text-left space-y-6 sm:space-y-8"
              >
                <motion.div
                  variants={titleVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-3 sm:space-y-4"
                >
                  <motion.h1
                    className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight"
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
                    className="text-lg sm:text-xl lg:text-2xl font-semibold text-red-500"
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
                  className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  A safe space to express every emotion. Your AI companion
                  listens, understands, and helps you process your feelings.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex justify-center lg:justify-start pt-2"
                >
                  <Magnet
                    onClick={() => router.push("/waitlist")}
                    padding={60}
                    magnetStrength={1.5}
                    wrapperClassName="inline-block"
                  >
                    <motion.button
                      className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 sm:px-10 sm:py-5 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 10px 25px rgba(220, 38, 38, 0.4)",
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-pink-600 to-red-600 opacity-0"
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                      <span className="relative z-10 flex items-center gap-2">
                        Start Your Journey
                        <motion.span
                          initial={{ x: 0 }}
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.2 }}
                        >
                          →
                        </motion.span>
                      </span>
                    </motion.button>
                  </Magnet>
                </motion.div>

                {/* Minimal tagline */}
                <motion.div
                  className="text-center lg:text-left pt-4"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <p className="text-sm sm:text-base text-gray-400 italic">
                    Your emotions matter, Your Voice matters with Rasmlai
                  </p>
                </motion.div>
              </motion.div>

              {/* Phone Slider Column */}
              <motion.div
                className="flex justify-center items-center"
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="hidden md:flex transform scale-75 sm:scale-90 lg:scale-100">
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
