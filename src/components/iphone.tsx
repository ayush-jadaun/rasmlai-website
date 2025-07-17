import type { Variants } from "framer-motion";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface PhoneSliderProps {
  images?: string[];
  videos?: string[];
  slideSpeed?: number;
}

const PhoneSlider = ({
  images = [],
  videos = [],
  slideSpeed = 3000, // Speed Configuration: Change this value to adjust slide speed (in milliseconds)
}: PhoneSliderProps) => {
  // Combine images and videos into a single media array
  const mediaContent = [
    ...images.map((img) => ({
      type: "image",
      url: img,
      alt: "Image content",
    })),
    ...videos.map((vid) => ({
      type: "video",
      url: vid,
      alt: "Video content",
    })),
  ];

  // Default content if no media provided
  const defaultContent = [
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=800&fit=crop",
      alt: "Mountain landscape",
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=800&fit=crop",
      alt: "Nature scene",
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=800&fit=crop",
      alt: "Forest path",
    },
  ];

  const finalContent = mediaContent.length > 0 ? mediaContent : defaultContent;

  // Speed Configuration: Change this value to adjust slide speed (in milliseconds)
  const SLIDE_SPEED = slideSpeed;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % finalContent.length;
        setDirection(1); // Set direction when auto-sliding
        return newIndex;
      });
    }, SLIDE_SPEED);

    return () => clearInterval(interval);
  }, [finalContent.length, SLIDE_SPEED]);

  // Animation variants for smooth transitions
  const slideVariants: Variants = {
    enter: (custom: number) => ({
      x: custom > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (custom: number) => ({
      zIndex: 0,
      x: custom < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      <motion.div
        className="relative"
        animate={{
          y: [0, -15, 0],
          x: [0, 8, 0, -8, 0],
          rotateY: [0, 5, 0, -5, 0],
          rotateX: [0, 2, 0, -2, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
        }}
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        {/* iPhone Frame */}
        <motion.div
          className="relative w-[280px] h-[570px] bg-black rounded-[60px] p-2 shadow-2xl"
          animate={{
            boxShadow: [
              "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              "0 35px 60px -12px rgba(0, 0, 0, 0.35)",
              "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Phone Border */}
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-[50px] p-1">
            {/* Screen Container */}
            <div className="relative w-full h-full bg-black rounded-[45px] overflow-hidden">
              {/* Dynamic Island */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-20">
                <div className="w-32 h-7 bg-black rounded-full shadow-lg flex items-center justify-center">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Content Slider */}
              <div className="relative w-full h-full overflow-hidden">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.6 },
                      scale: { duration: 0.4 },
                    }}
                    className="absolute inset-0"
                  >
                    {finalContent[currentIndex].type === "image" ? (
                      <Image
                        src={finalContent[currentIndex].url}
                        alt={finalContent[currentIndex].alt}
                        fill={true}
                        className="object-cover"
                      />
                    ) : (
                      <video
                        src={finalContent[currentIndex].url}
                        autoPlay
                        muted
                        loop
                        className="w-full h-full object-cover"
                      />
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Overlay gradient for premium look */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none"></div>
              </div>

              {/* Progress Indicators */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {finalContent.map((_, index) => (
                  <motion.div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-white" : "bg-white/40"
                    }`}
                    animate={{
                      scale: index === currentIndex ? 1.2 : 1,
                      opacity: index === currentIndex ? 1 : 0.6,
                    }}
                    transition={{ duration: 0.2 }}
                  />
                ))}
              </div>

              {/* Side Buttons */}
              <div className="absolute -left-1 top-20 w-1 h-8 bg-gray-700 rounded-l-sm"></div>
              <div className="absolute -left-1 top-32 w-1 h-12 bg-gray-700 rounded-l-sm"></div>
              <div className="absolute -left-1 top-48 w-1 h-12 bg-gray-700 rounded-l-sm"></div>
              <div className="absolute -right-1 top-28 w-1 h-16 bg-gray-700 rounded-r-sm"></div>
            </div>
          </div>
        </motion.div>

        {/* Floating Shadow */}
        <motion.div
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-black/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Reflection Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-[60px] pointer-events-none"
          animate={{
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
};

export default PhoneSlider;
