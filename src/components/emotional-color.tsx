"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
    <div className="relative w-full">
      <div className="flex overflow-hidden">
        <motion.div
          className="flex gap-6 min-w-fit"
          animate={{
            x: [from, to],
          }}
          transition={{
            duration: duration,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* First set of emotions */}
          {emotions.map((item, index) => (
            <motion.div
              key={index}
              className={`relative min-w-[350px] h-[280px] rounded-2xl bg-gradient-to-br ${item.gradient} p-6 shadow-xl ${item.glowColor} border border-red-200/20 overflow-hidden`}
              whileHover={{
                scale: 1.03,
                y: -8,
                zIndex: 30,
                transition: { duration: 0.3 },
              }}
              style={{ zIndex: 10 }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>

              {/* Decorative Elements */}
              <div
                className={`absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-r ${item.accentColor} rounded-full opacity-25 blur-xl`}
              ></div>
              <div
                className={`absolute -bottom-3 -left-3 w-12 h-12 bg-gradient-to-r ${item.accentColor} rounded-full opacity-20 blur-lg`}
              ></div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3
                    className={`text-2xl font-bold mb-4 bg-gradient-to-r ${item.textGradient} bg-clip-text text-transparent leading-tight`}
                  >
                    {item.title}
                  </h3>
                </div>

                <p className="text-red-100 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>

              {/* Subtle Animation Lines */}
              <motion.div
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-300/40 to-transparent"
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

          {/* Second set for seamless loop */}
          {emotions.map((item, index) => (
            <motion.div
              key={`duplicate-${index}`}
              className={`relative min-w-[350px] h-[280px] rounded-2xl bg-gradient-to-br ${item.gradient} p-6 shadow-xl ${item.glowColor} border border-red-200/20 overflow-hidden`}
              whileHover={{
                scale: 1.03,
                y: -8,
                zIndex: 30,
                transition: { duration: 0.3 },
              }}
              style={{ zIndex: 10 }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>

              {/* Decorative Elements */}
              <div
                className={`absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-r ${item.accentColor} rounded-full opacity-25 blur-xl`}
              ></div>
              <div
                className={`absolute -bottom-3 -left-3 w-12 h-12 bg-gradient-to-r ${item.accentColor} rounded-full opacity-20 blur-lg`}
              ></div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3
                    className={`text-2xl font-bold mb-4 bg-gradient-to-r ${item.textGradient} bg-clip-text text-transparent leading-tight`}
                  >
                    {item.title}
                  </h3>
                </div>

                <p className="text-red-100 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>

              {/* Subtle Animation Lines */}
              <motion.div
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-300/40 to-transparent"
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

          {/* Third set for extra smooth loop */}
          {emotions.map((item, index) => (
            <motion.div
              key={`triple-${index}`}
              className={`relative min-w-[350px] h-[280px] rounded-2xl bg-gradient-to-br ${item.gradient} p-6 shadow-xl ${item.glowColor} border border-red-200/20 overflow-hidden`}
              whileHover={{
                scale: 1.03,
                y: -8,
                zIndex: 30,
                transition: { duration: 0.3 },
              }}
              style={{ zIndex: 10 }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>

              {/* Decorative Elements */}
              <div
                className={`absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-r ${item.accentColor} rounded-full opacity-25 blur-xl`}
              ></div>
              <div
                className={`absolute -bottom-3 -left-3 w-12 h-12 bg-gradient-to-r ${item.accentColor} rounded-full opacity-20 blur-lg`}
              ></div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3
                    className={`text-2xl font-bold mb-4 bg-gradient-to-r ${item.textGradient} bg-clip-text text-transparent leading-tight`}
                  >
                    {item.title}
                  </h3>
                </div>

                <p className="text-red-100 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>

              {/* Subtle Animation Lines */}
              <motion.div
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-300/40 to-transparent"
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

      {/* Fade overlays for smooth edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-red-50 via-red-50/80 to-transparent pointer-events-none z-20"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-red-50 via-red-50/80 to-transparent pointer-events-none z-20"></div>
    </div>
  );
};

function EmotionalColor() {
  const containerRef = useRef(null);
  const [speed, setSpeed] = useState(35);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const emotions = [
    {
      emotion: "Vulnerability",
      title: "Embrace Your Truth",
      desc: "In vulnerability lies the birthplace of innovation, creativity, and authentic connection. Your courage to be seen creates the foundation for genuine healing.",
      gradient: "from-red-600 via-red-500 to-pink-500",
      textGradient: "from-red-100 to-white",
      accentColor: "from-red-400 to-pink-400",
      glowColor: "shadow-red-500/25",
    },
    {
      emotion: "Resilience",
      title: "Discover Your Strength",
      desc: "Resilience isn't about being unbreakable; it's about learning to bend without breaking. Every challenge you face becomes a testament to your inner power.",
      gradient: "from-pink-600 via-pink-500 to-red-500",
      textGradient: "from-pink-100 to-white",
      accentColor: "from-pink-400 to-red-400",
      glowColor: "shadow-pink-500/25",
    },
    {
      emotion: "Transformation",
      title: "Embrace Your Evolution",
      desc: "True transformation happens in the quiet moments of self-reflection. Each step forward, no matter how small, is a victory worth celebrating.",
      gradient: "from-red-500 via-pink-500 to-red-600",
      textGradient: "from-red-100 to-white",
      accentColor: "from-red-400 to-pink-400",
      glowColor: "shadow-red-500/25",
    },
    {
      emotion: "Acceptance",
      title: "Find Your Peace",
      desc: "Acceptance is not passive resignation; it's an active choice to stop fighting reality and start working with it. Peace begins where resistance ends.",
      gradient: "from-pink-500 via-red-500 to-pink-600",
      textGradient: "from-pink-100 to-white",
      accentColor: "from-pink-400 to-red-400",
      glowColor: "shadow-pink-500/25",
    },
    {
      emotion: "Compassion",
      title: "Extend Grace to Yourself",
      desc: "Self-compassion is the gentle art of treating yourself with the same kindness you'd offer a dear friend. Your healing journey deserves tenderness.",
      gradient: "from-red-600 via-pink-500 to-red-500",
      textGradient: "from-red-100 to-white",
      accentColor: "from-red-400 to-pink-400",
      glowColor: "shadow-red-500/25",
    },
    {
      emotion: "Renewal",
      title: "Embrace Fresh Beginnings",
      desc: "Every sunrise offers a chance to begin again. Renewal isn't about erasing your past; it's about writing a new chapter with wisdom from your journey.",
      gradient: "from-pink-600 via-red-500 to-pink-500",
      textGradient: "from-pink-100 to-white",
      accentColor: "from-pink-400 to-red-400",
      glowColor: "shadow-pink-500/25",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-br from-red-50 to-pink-50"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-red-300/20 to-pink-300/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-pink-300/20 to-red-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-red-200/15 to-pink-200/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
          style={{ y }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-red-600 via-pink-600 to-red-600 bg-clip-text text-transparent"
            style={{ fontFamily: "'Poppins', sans-serif" }}
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            A Journey of Depth
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-red-700 max-w-4xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Each emotion carries profound wisdom and purpose in your healing
            journey. Experience the transformative power of embracing your
            complete emotional spectrum.
          </motion.p>
        </motion.div>
      </div>

      {/* Infinite Marquee - Full Width */}
      <div className="relative mb-12 md:mb-16 w-full">
        <MarqueeItem
          emotions={emotions}
          from="0%"
          to="-33.333%"
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
          <p className="text-red-600 mt-4 text-lg md:text-xl italic">
            <motion.span
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Every emotion is a doorway to deeper understanding
            </motion.span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default EmotionalColor;
