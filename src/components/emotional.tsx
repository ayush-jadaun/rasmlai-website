"use client"
import React, { useRef } from 'react'
import {motion, useScroll, useSpring, useTransform} from 'framer-motion'

function Emotional() {
  // Create a local ref for this component's scroll tracking
  const localRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: localRef,
    offset: ["start end", "end start"],
  });
  
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  
  const waveY = useTransform(smoothProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={localRef} className="py-20 px-4 relative">
      <motion.div
        style={{ y: waveY }}
        className="absolute inset-0 pointer-events-none"
      >
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-5"
          viewBox="0 0 1200 600"
        >
          <motion.path
            d="M0,100 C300,200 600,50 900,150 C1000,180 1100,120 1200,100 L1200,600 L0,600 Z"
            fill="currentColor"
            className="text-red-300"
            animate={{
              d: [
                "M0,100 C300,200 600,50 900,150 C1000,180 1100,120 1200,100 L1200,600 L0,600 Z",
                "M0,150 C300,100 600,180 900,80 C1000,60 1100,160 1200,140 L1200,600 L0,600 Z",
                "M0,100 C300,200 600,50 900,150 C1000,180 1100,120 1200,100 L1200,600 L0,600 Z",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
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
            Sometimes we need to let it all out. Rasmlai provides a
            judgment-free space where your emotions are valid, heard, and
            supported.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "🔥",
              title: "Express Anger",
              desc: "Let out frustration safely without judgment",
              color: "from-red-500 to-red-600",
            },
            {
              icon: "💙",
              title: "Process Sadness",
              desc: "Work through grief and sadness with support",
              color: "from-blue-500 to-blue-600",
            },
            {
              icon: "🌱",
              title: "Find Growth",
              desc: "Transform emotions into personal strength",
              color: "from-green-500 to-green-600",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6 text-2xl`}
              >
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Emotional