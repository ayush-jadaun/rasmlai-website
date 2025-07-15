"use client"
import React, { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const HeroSection = () => {
      const containerRef = useRef(null);
      const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

     const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
    const phoneY = useTransform(smoothProgress, [0, 0.5], ["0%", "-20%"]);
    const phoneRotate = useTransform(smoothProgress, [0, 0.3], [0, 15]);
  return (
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
            </motion.div>
          </motion.div>

          {/* Floating Phone Mockup with Dynamic Entry */}
          <motion.div
            style={{ y: phoneY, rotateY: phoneRotate }}
            className="relative flex justify-center"
          >
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

  )
}

export default HeroSection