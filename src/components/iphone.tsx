import type { Variants } from "framer-motion";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, PanInfo, PointerEventOptions } from "framer-motion";
import Image from "next/image";

interface PhoneSliderProps {
  images?: string[];
  videos?: string[];
  slideSpeed?: number;
  enableAutoSlide?: boolean; // New prop to control auto-sliding
}

const PhoneSlider = ({
  images = [],
  videos = [],
  slideSpeed = 3000,
  enableAutoSlide = true, // Auto-slide enabled by default
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Function to go to next slide
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % finalContent.length;
      setDirection(1);
      return newIndex;
    });
  }, [finalContent.length]);

  // Function to go to previous slide
  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const newIndex =
        prevIndex === 0 ? finalContent.length - 1 : prevIndex - 1;
      setDirection(-1);
      return newIndex;
    });
  }, [finalContent.length]);

  // Auto-slide effect
  useEffect(() => {
    if (!enableAutoSlide || isDragging) return;

    const interval = setInterval(() => {
      nextSlide();
    }, slideSpeed);

    return () => clearInterval(interval);
  }, [finalContent.length, slideSpeed, enableAutoSlide, isDragging, nextSlide]);

  // Handle drag end
  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEventOptions,
    info: PanInfo
  ) => {
    setIsDragging(false);

    const threshold = 50; // Minimum distance to trigger swipe
    const velocity = info.velocity.x;
    const offset = info.offset.x;

    // Determine swipe direction based on drag distance and velocity
    if (Math.abs(offset) > threshold || Math.abs(velocity) > 500) {
      if (offset > 0 || velocity > 0) {
        // Swiped right - go to previous slide
        prevSlide();
      } else {
        // Swiped left - go to next slide
        nextSlide();
      }
    }
  };

  // Handle drag start
  const handleDragStart = () => {
    setIsDragging(true);
  };

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
    <div className="flex items-center justify-center  p-8">
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
                    className="absolute inset-0 cursor-grab active:cursor-grabbing"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    whileDrag={{ scale: 0.95 }}
                  >
                    {finalContent[currentIndex].type === "image" ? (
                      <Image
                        src={finalContent[currentIndex].url}
                        alt={finalContent[currentIndex].alt}
                        fill={true}
                        sizes="280px"
                        className="object-cover pointer-events-none select-none"
                        draggable={false}
                      />
                    ) : (
                      <video
                        src={finalContent[currentIndex].url}
                        autoPlay
                        muted
                        loop
                        className="w-full h-full object-cover pointer-events-none select-none"
                        draggable={false}
                      />
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Overlay gradient for premium look */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none"></div>
              </div>

              {/* Progress Indicators */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10 pointer-events-none">
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
