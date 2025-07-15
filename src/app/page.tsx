"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Footer from "../components/footer";
import CalltoAction from "../components/call-to-action";
import Testimonials from "../components/testimonials";
import EmotionalColor from "../components/emotional-color";
import HowitWorks from "../components/how-it-works";
import Emotional from "../components/emotional";
import WaitlistForm from "@/components/WaitlistForm";
import Magnet from "@/components/ui/magneticButton";

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

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-br from-red-50 to-pink-50 overflow-hidden"
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

      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-5xl lg:text-7xl font-black mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                Let Your Emotions
              </span>
              <br />
              <span className="text-red-500">Flow Freely</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-700 mb-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              A safe space where you can express anger, sadness, and every
              emotion in between. Your AI companion is here to listen,
              understand, and help you process whatever you&apos;re feeling.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {/* Fixed: Wrap the button with Magnet component */}
              <Magnet
                onClick={() => setIsWaitlistOpen(true)}
                padding={120}
                magnetStrength={3}
                wrapperClassName="inline-block"
              >
                <motion.button
                  className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
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
                  <span className="relative z-10">Start Your Journey</span>
                </motion.button>
              </Magnet>
            </motion.div>
          </motion.div>

          {/* Floating Phone Mockup with Dynamic Entry */}
          <motion.div className="relative flex justify-center">
            <motion.div
              className="relative w-80 h-96 bg-white rounded-3xl shadow-2xl overflow-hidden"
              initial={{
                y: 200,
                opacity: 0,
                scale: 0.8,
                rotateX: 45,
                z: -100,
              }}
              animate={{
                y: 0,
                opacity: 1,
                scale: 1,
                rotateX: 0,
                z: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.5,
                duration: 1.2,
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              {/* Phone Screen - Call Interface */}
              <div className="absolute inset-4 bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl overflow-hidden">
                <div className="p-6 flex flex-col justify-between h-full">
                  {/* Call Status */}
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                  >
                    <motion.p
                      className="text-gray-600 text-sm mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 }}
                    >
                      Connected
                    </motion.p>
                    <motion.div
                      className="flex items-center justify-center mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.8 }}
                    >
                      <motion.div
                        className="w-2 h-2 bg-green-500 rounded-full mr-2"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <span className="text-sm text-gray-700">03:42</span>
                    </motion.div>
                  </motion.div>

                  {/* AI Avatar with Call Animation */}
                  <motion.div
                    className="flex items-center justify-center mb-8"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: 1.2,
                    }}
                  >
                    <motion.div
                      className="w-24 h-24 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center relative overflow-hidden"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(229, 62, 62, 0.3)",
                          "0 0 40px rgba(229, 62, 62, 0.6)",
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
                        className="text-white text-3xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                      >
                        🤖
                      </motion.span>

                      {/* Audio Waves Animation */}
                      <motion.div
                        className="absolute inset-0 border-2 border-white rounded-full opacity-30"
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.3, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeOut",
                          delay: 1.8,
                        }}
                      />
                      <motion.div
                        className="absolute inset-0 border-2 border-white rounded-full opacity-20"
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.6, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeOut",
                          delay: 2.2,
                        }}
                      />
                    </motion.div>
                  </motion.div>

                  {/* AI Name and Status */}
                  <motion.div
                    className="text-center mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.0 }}
                  >
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      Rasmlai AI
                    </h3>
                    <motion.p
                      className="text-sm text-gray-600"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      Listening...
                    </motion.p>
                  </motion.div>

                  {/* Audio Visualization */}
                  <motion.div
                    className="flex items-center justify-center space-x-1 mb-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.4 }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1 bg-red-400 rounded-full"
                        animate={{
                          height: [8, 24, 8],
                          opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: i * 0.1,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </motion.div>

                  {/* Call Controls */}
                  <motion.div
                    className="flex items-center justify-center space-x-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.8 }}
                  >
                    {/* Mute Button */}
                    <motion.button
                      className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-gray-700 text-lg">🔇</span>
                    </motion.button>

                    {/* End Call Button */}
                    <motion.button
                      className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1, backgroundColor: "#DC2626" }}
                      whileTap={{ scale: 0.95 }}
                      animate={{
                        boxShadow: [
                          "0 0 0 0 rgba(239, 68, 68, 0.4)",
                          "0 0 0 10px rgba(239, 68, 68, 0)",
                        ],
                      }}
                      transition={{
                        boxShadow: {
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeOut",
                        },
                      }}
                    >
                      <span className="text-white text-xl">📞</span>
                    </motion.button>

                    {/* Speaker Button */}
                    <motion.button
                      className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-gray-700 text-lg">🔊</span>
                    </motion.button>
                  </motion.div>
                </div>
              </div>

              {/* Phone Notch */}
              <motion.div
                className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-full"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.8,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200,
                }}
              />

              {/* Phone Buttons */}
              <motion.div
                className="absolute right-0 top-20 w-1 h-8 bg-gray-300 rounded-l-full"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 }}
              />
              <motion.div
                className="absolute right-0 top-32 w-1 h-12 bg-gray-300 rounded-l-full"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 }}
              />

              {/* Floating Phone Animation */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Emotional Story Section */}
      <Emotional />

      {/* How It Works Section */}
      <HowitWorks />

      {/* Emotional Colors Section */}
      <EmotionalColor />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Final CTA Section */}
      <CalltoAction openWaitlist={() => setIsWaitlistOpen(true)} />

      {/* Footer */}
      <Footer />

      {/* WaitlistForm component */}
      <WaitlistForm
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </div>
  );
};

export default RasmlaiLanding;
