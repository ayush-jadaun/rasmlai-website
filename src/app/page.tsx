'use client'
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';

const RasmlaiLanding = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax transforms
  const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "50%"]);
  const phoneY = useTransform(smoothProgress, [0, 0.5], ["0%", "-20%"]);
  const phoneRotate = useTransform(smoothProgress, [0, 0.3], [0, 15]);
  const blobY = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const waveY = useTransform(smoothProgress, [0, 1], ["0%", "30%"]);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-gradient-to-br from-red-50 to-pink-50 overflow-hidden">
      
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
        <svg className="absolute top-1/4 left-1/3 w-64 h-64 opacity-10" viewBox="0 0 200 200">
          <motion.path
            d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,89.9,-16.3,89.3,-0.5C88.6,15.3,84.8,30.6,76.8,43.2C68.8,55.8,56.6,65.7,42.4,72.8C28.2,79.9,12,84.2,-4.8,91.8C-21.6,99.4,-43.2,110.3,-59.4,107.2C-75.6,104.1,-86.4,87,-91.8,68.4C-97.2,49.8,-97.2,29.8,-94.4,11.2C-91.6,-7.4,-86,-24.6,-76.2,-38.8C-66.4,-53,-52.4,-64.2,-37.2,-70.8C-22,-77.4,-6.6,-79.4,7.2,-78.4C21,-77.4,42,-73.4,44.7,-76.4Z"
            fill="currentColor"
            className="text-red-300"
            animate={{
              d: [
                "M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,89.9,-16.3,89.3,-0.5C88.6,15.3,84.8,30.6,76.8,43.2C68.8,55.8,56.6,65.7,42.4,72.8C28.2,79.9,12,84.2,-4.8,91.8C-21.6,99.4,-43.2,110.3,-59.4,107.2C-75.6,104.1,-86.4,87,-91.8,68.4C-97.2,49.8,-97.2,29.8,-94.4,11.2C-91.6,-7.4,-86,-24.6,-76.2,-38.8C-66.4,-53,-52.4,-64.2,-37.2,-70.8C-22,-77.4,-6.6,-79.4,7.2,-78.4C21,-77.4,42,-73.4,44.7,-76.4Z",
                "M35.2,-62.8C45.4,-54.2,53.2,-43.4,58.8,-31.2C64.4,-19,67.8,-5.4,67.2,8.4C66.6,22.2,62,36.2,53.4,46.8C44.8,57.4,32.2,64.6,18.4,68.4C4.6,72.2,-10.4,72.6,-24.8,69.2C-39.2,65.8,-53,58.6,-62.4,47.8C-71.8,37,-76.8,22.6,-77.6,7.8C-78.4,-7,-75,-22.2,-67.2,-34.8C-59.4,-47.4,-47.2,-57.4,-33.6,-64.8C-20,-72.2,-5,-77,-1.4,-74.8C2.2,-72.6,17.6,-71.4,35.2,-62.8Z"
              ]
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 8,
              ease: "easeInOut"
            }}
          />
        </svg>
      </motion.div>

      {/* Hero Section */}
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
              A safe space where you can express anger, sadness, and every emotion in between. 
              Your AI companion is here to listen, understand, and help you process whatever you're feeling.
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
                  boxShadow: "0 20px 40px rgba(229, 62, 62, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(229, 62, 62, 0.3)",
                    "0 0 40px rgba(229, 62, 62, 0.5)",
                    "0 0 20px rgba(229, 62, 62, 0.3)"
                  ]
                }}
                transition={{
                  boxShadow: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
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
                z: -100
              }}
              animate={{ 
                y: 0, 
                opacity: 1, 
                scale: 1, 
                rotateX: 0,
                z: 0
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.5,
                duration: 1.2
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              {/* Phone Screen */}
              <div className="absolute inset-4 bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl overflow-hidden">
                <div className="p-6">
                  
                  {/* App Icon with Bounce Effect */}
                  <motion.div
                    className="flex items-center justify-center mb-6"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: 1.2
                    }}
                  >
                    <motion.div
                      className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center relative overflow-hidden"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(229, 62, 62, 0.3)",
                          "0 0 30px rgba(229, 62, 62, 0.5)",
                          "0 0 20px rgba(229, 62, 62, 0.3)"
                        ]
                      }}
                      transition={{
                        boxShadow: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                    >
                      <motion.span 
                        className="text-white text-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                      >
                        💬
                      </motion.span>
                      
                      {/* Ripple Effect */}
                      <motion.div
                        className="absolute inset-0 bg-white rounded-full opacity-20"
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.5, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeOut",
                          delay: 1.8
                        }}
                      />
                    </motion.div>
                  </motion.div>
                  
                  {/* Chat Messages with Staggered Animation */}
                  <div className="space-y-4">
                    <motion.div
                      className="bg-white p-3 rounded-xl shadow-sm relative overflow-hidden"
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        delay: 1.8
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{
                          duration: 1.5,
                          delay: 2.2,
                          ease: "easeInOut"
                        }}
                      />
                      <motion.p
                        className="text-sm text-gray-600 relative z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.0 }}
                      >
                        "I'm feeling overwhelmed today..."
                      </motion.p>
                    </motion.div>
                    
                    <motion.div
                      className="bg-red-100 p-3 rounded-xl ml-4 relative overflow-hidden"
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        delay: 2.4
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-red-200 to-transparent opacity-50"
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{
                          duration: 1.5,
                          delay: 2.8,
                          ease: "easeInOut"
                        }}
                      />
                      <motion.p
                        className="text-sm text-red-800 relative z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.6 }}
                      >
                        "I hear you. Let's work through this together."
                      </motion.p>
                    </motion.div>
                    
                    <motion.div
                      className="bg-white p-3 rounded-xl shadow-sm relative overflow-hidden"
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                        delay: 3.0
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{
                          duration: 1.5,
                          delay: 3.4,
                          ease: "easeInOut"
                        }}
                      />
                      <motion.p
                        className="text-sm text-gray-600 relative z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3.2 }}
                      >
                        "Thank you for listening."
                      </motion.p>
                    </motion.div>
                  </div>
                  
                  {/* Typing Indicator */}
                  <motion.div
                    className="flex items-center mt-4 space-x-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.8 }}
                  >
                    <div className="bg-gray-200 p-3 rounded-xl">
                      <div className="flex space-x-1">
                        <motion.div
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: 0
                          }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: 0.2
                          }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: 0.4
                          }}
                        />
                      </div>
                    </div>
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
                  stiffness: 200
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
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Emotional Story Section */}
      <section className="py-20 px-4 relative">
        <motion.div
          style={{ y: waveY }}
          className="absolute inset-0 pointer-events-none"
        >
          <svg className="absolute top-0 left-0 w-full h-full opacity-5" viewBox="0 0 1200 600">
            <motion.path
              d="M0,100 C300,200 600,50 900,150 C1000,180 1100,120 1200,100 L1200,600 L0,600 Z"
              fill="currentColor"
              className="text-red-300"
              animate={{
                d: [
                  "M0,100 C300,200 600,50 900,150 C1000,180 1100,120 1200,100 L1200,600 L0,600 Z",
                  "M0,150 C300,100 600,180 900,80 C1000,60 1100,160 1200,140 L1200,600 L0,600 Z",
                  "M0,100 C300,200 600,50 900,150 C1000,180 1100,120 1200,100 L1200,600 L0,600 Z"
                ]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </svg>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
              Your Safe Haven
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Sometimes we need to let it all out. Rasmlai provides a judgment-free space where your emotions are valid, heard, and supported.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🔥", title: "Express Anger", desc: "Let out frustration safely without judgment", color: "from-red-500 to-red-600" },
              { icon: "💙", title: "Process Sadness", desc: "Work through grief and sadness with support", color: "from-blue-500 to-blue-600" },
              { icon: "🌱", title: "Find Growth", desc: "Transform emotions into personal strength", color: "from-green-500 to-green-600" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6 text-2xl`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-800">
              Simple. Safe. Supportive.
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three easy steps to emotional freedom
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Open the App", desc: "Launch Rasmlai whenever you need to express yourself" },
              { step: "02", title: "Start Talking", desc: "Share your feelings through voice or text - no judgment, just support" },
              { step: "03", title: "Feel Better", desc: "Experience relief and gain insights to move forward positively" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5
                }}
                className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-6xl font-black text-red-200 mb-4">{item.step}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emotional Colors Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-800">
              A Journey of Colors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each emotion has its place and purpose in your healing journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { color: "bg-red-500", emotion: "Express", desc: "Raw emotion" },
              { color: "bg-pink-500", emotion: "Connect", desc: "Find warmth" },
              { color: "bg-green-500", emotion: "Heal", desc: "Growth begins" },
              { color: "bg-purple-500", emotion: "Release", desc: "Let go peacefully" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, 0]
                }}
                className={`${item.color} rounded-3xl p-8 text-white text-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
              >
                <h3 className="text-2xl font-bold mb-2">{item.emotion}</h3>
                <p className="opacity-90">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-800">
              Voices of Healing
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from people who found their voice
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "Rasmlai gave me permission to feel angry without guilt. It changed everything.", name: "Sarah M." },
              { quote: "Finally, a space where I can be vulnerable without fear of judgment.", name: "Alex R." },
              { quote: "The AI understands me better than I understand myself sometimes.", name: "Maya K." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.1)"
                }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl text-purple-300 mb-4">"</div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">{item.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">{item.name[0]}</span>
                  </div>
                  <span className="font-semibold text-gray-800">{item.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 relative bg-gradient-to-r from-red-600 to-purple-600 text-white overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: "radial-gradient(circle, white 2px, transparent 2px)",
            backgroundSize: "50px 50px"
          }}
        />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-bold mb-6"
          >
            Your Emotions Matter
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-8 opacity-90 max-w-2xl mx-auto"
          >
            Don't carry the weight alone. Let Rasmlai be your companion in the journey towards emotional freedom.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="bg-white text-red-600 px-10 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255,255,255,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                y: [0, -5, 0]
              }}
              transition={{
                y: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              Download Rasmlai Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
            Rasmlai
          </div>
          <p className="text-gray-400 mb-6">
            Your safe space for emotional expression and healing
          </p>
          <div className="flex justify-center space-x-6 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RasmlaiLanding;