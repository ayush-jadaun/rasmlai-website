"use client"

import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

type EmotionItem = {
  emotion: string;
  title: string;
  desc: string;
  gradient: string;
  textGradient: string;
  accentColor: string;
  glowColor: string;
};

type MarqueeItemProps = {
  emotions: EmotionItem[];
  from: string;
  to: string;
  duration: number;
};

const MarqueeItem = ({ emotions, from, to, duration }: MarqueeItemProps) => {
  return (
    <div className="relative w-full ">

      
      <div className="flex overflow-visible">
        <motion.div
          className="flex gap-8 min-w-fit"
          animate={{
            x: [from, to],
          }}
          transition={{
            duration: duration,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {emotions.map((item, index) => (
            <motion.div
              key={index}
              className={`relative min-w-[400px] h-[300px] rounded-3xl bg-gradient-to-br ${item.gradient} p-8 shadow-2xl ${item.glowColor} border border-rose-200/30 overflow-hidden`}
              whileHover={{
                scale: 1.05,
                y: -10,
                zIndex: 30,
                transition: { duration: 0.3 }
              }}
              style={{ zIndex: 10 }}
            >
              
              {/* Decorative Elements */}
              <div className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r ${item.accentColor} rounded-full opacity-30 blur-xl`}></div>
              <div className={`absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r ${item.accentColor} rounded-full opacity-20 blur-lg`}></div>
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className={`text-3xl font-bold mb-6 bg-gradient-to-r ${item.textGradient} bg-clip-text text-transparent leading-tight`}>
                    {item.title}
                  </h3>
                </div>
                
                <p className="text-rose-100 leading-relaxed text-base">
                  {item.desc}
                </p>
              </div>

              {/* Subtle Animation Lines */}
              <motion.div
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-300/40 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
              />
            </motion.div>
          ))}
          
          {/* Duplicate for seamless loop */}
          {emotions.map((item, index) => (
            <motion.div
              key={`duplicate-${index}`}
              className={`relative min-w-[400px] h-[300px] rounded-3xl bg-gradient-to-br ${item.gradient} p-8 shadow-2xl ${item.glowColor} border border-rose-200/30 overflow-hidden`}
              whileHover={{
                scale: 1.05,
                y: -10,
                zIndex: 30,
                transition: { duration: 0.3 }
              }}
              style={{ zIndex: 10 }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
              
              {/* Decorative Elements */}
              <div className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r ${item.accentColor} rounded-full opacity-30 blur-xl`}></div>
              <div className={`absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r ${item.accentColor} rounded-full opacity-20 blur-lg`}></div>
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className={`text-3xl font-bold mb-6 bg-gradient-to-r ${item.textGradient} bg-clip-text text-transparent leading-tight`}>
                    {item.title}
                  </h3>
                </div>
                
                <p className="text-rose-100 leading-relaxed text-base">
                  {item.desc}
                </p>
              </div>

              {/* Subtle Animation Lines */}
              <motion.div
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-300/40 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

function EmotionalColor() {
  const containerRef = useRef(null)
  const [speed, setSpeed] = useState(40)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  const emotions = [
    {
      emotion: "Vulnerability",
      title: "Embrace Your Truth",
      desc: "In vulnerability lies the birthplace of innovation, creativity, and authentic connection. Your courage to be seen creates the foundation for genuine healing.",
      gradient: "from-rose-900 via-pink-800 to-red-700",
      textGradient: "from-rose-200 to-white",
      accentColor: "from-rose-400 to-pink-500",
      glowColor: "shadow-rose-500/30"
    },
    {
      emotion: "Resilience",
      title: "Discover Your Strength",
      desc: "Resilience isn't about being unbreakable; it's about learning to bend without breaking. Every challenge you face becomes a testament to your inner power.",
      gradient: "from-pink-900 via-rose-800 to-red-700",
      textGradient: "from-pink-200 to-white",
      accentColor: "from-pink-400 to-rose-500",
      glowColor: "shadow-pink-500/30"
    },
    {
      emotion: "Transformation",
      title: "Embrace Your Evolution",
      desc: "True transformation happens in the quiet moments of self-reflection. Each step forward, no matter how small, is a victory worth celebrating.",
      gradient: "from-red-900 via-rose-800 to-pink-700",
      textGradient: "from-red-200 to-white",
      accentColor: "from-red-400 to-rose-500",
      glowColor: "shadow-red-500/30"
    },
    {
      emotion: "Acceptance",
      title: "Find Your Peace",
      desc: "Acceptance is not passive resignation; it's an active choice to stop fighting reality and start working with it. Peace begins where resistance ends.",
      gradient: "from-rose-900 via-red-800 to-pink-700",
      textGradient: "from-rose-200 to-white",
      accentColor: "from-rose-400 to-red-500",
      glowColor: "shadow-rose-500/30"
    },
    {
      emotion: "Compassion",
      title: "Extend Grace to Yourself",
      desc: "Self-compassion is the gentle art of treating yourself with the same kindness you'd offer a dear friend. Your healing journey deserves tenderness.",
      gradient: "from-pink-900 via-red-800 to-rose-700",
      textGradient: "from-pink-200 to-white",
      accentColor: "from-pink-400 to-red-500",
      glowColor: "shadow-pink-500/30"
    },
    {
      emotion: "Renewal",
      title: "Embrace Fresh Beginnings",
      desc: "Every sunrise offers a chance to begin again. Renewal isn't about erasing your past; it's about writing a new chapter with wisdom from your journey.",
      gradient: "from-red-900 via-pink-800 to-rose-700",
      textGradient: "from-red-200 to-white",
      accentColor: "from-red-400 to-pink-500",
      glowColor: "shadow-red-500/30"
    }
  ]

  const speedOptions = [
    { value: 60, label: "Slow" },
    { value: 40, label: "Medium" },
    { value: 20, label: "Fast" },
    { value: 10, label: "Very Fast" }
  ]

  return (
    <section ref={containerRef} className="py-20 relative overflow-hidden bg-gradient-to-br from-red-50 via-pink-50 to-purple-50 ">
      {/* Background Elements */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-rose-300/30 to-pink-300/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-pink-300/30 to-red-300/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-red-200/20 to-rose-200/20 rounded-full blur-3xl"></div>
      </div> */}

      <div className="max-w-7xl mx-auto relative z-10 px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
          style={{ y }}
        >
          <motion.h2 
            className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-rose-800 via-pink-700 to-red-900 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            A Journey of Depth
          </motion.h2>
          <motion.p 
            className="text-xl lg:text-2xl text-rose-700 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Each emotion carries profound wisdom and purpose in your healing journey. Experience the transformative power of embracing your complete emotional spectrum.
          </motion.p>
        </motion.div>
      </div>

      {/* Infinite Marquee - Full Width */}
      <div className="relative mb-16 w-full overflow-visible">
        <MarqueeItem 
          emotions={emotions} 
          from="0%" 
          to="-100%" 
          duration={speed}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-4">
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-rose-700 mt-4 text-lg">
            Every emotion is a doorway to deeper understanding
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default EmotionalColor