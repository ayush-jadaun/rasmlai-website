"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Phone, MessageCircle, Volume2 } from 'lucide-react';

interface LoadingPageProps {
  onLoadingComplete?: () => void;
}

const LoadingPage: React.FC<LoadingPageProps> = ({ onLoadingComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  // Loading phases with different messages
  const loadingPhases = [
    { text: "Connecting to your AI companion...", icon: <Phone className="w-6 h-6" /> },
    { text: "Warming up emotional intelligence...", icon: <Heart className="w-6 h-6" /> },
    { text: "Preparing your safe space...", icon: <MessageCircle className="w-6 h-6" /> },
    { text: "Almost ready to listen...", icon: <Volume2 className="w-6 h-6" /> },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          setIsComplete(true);
          setTimeout(() => onLoadingComplete?.(), 1000);
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  useEffect(() => {
    const phaseInterval = setInterval(() => {
      setCurrentPhase((prev) => (prev + 1) % loadingPhases.length);
    }, 3000); // Slower phase changes

    return () => clearInterval(phaseInterval);
  }, [loadingPhases.length]);

  // Gentle pulsing heart animation
  const PulsingHeart = () => (
    <motion.div
      className="relative"
      animate={{
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <motion.div
        className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
        animate={{
          boxShadow: [
            "0 0 20px rgba(239, 68, 68, 0.2)",
            "0 0 30px rgba(239, 68, 68, 0.4)",
            "0 0 20px rgba(239, 68, 68, 0.2)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-white fill-white" />
      </motion.div>
      
      {/* Subtle ripple effect */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-red-400/30"
        animate={{
          scale: [1, 1.3],
          opacity: [0.3, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
    </motion.div>
  );

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-red-50 via-pink-50 to-purple-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          
          
          {/* Subtle background decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-32 h-32 bg-red-200 rounded-full opacity-10 blur-xl"></div>
            <div className="absolute top-40 right-20 w-48 h-48 bg-pink-200 rounded-full opacity-8 blur-2xl"></div>
            <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-purple-200 rounded-full opacity-12 blur-lg"></div>
            <div className="absolute bottom-20 right-10 w-36 h-36 bg-red-300 rounded-full opacity-6 blur-2xl"></div>
          </div>

          {/* Main loading content */}
          <div className="relative z-10 flex flex-col items-center space-y-8 px-4 text-center">
            
            {/* Logo/Brand section */}
            <motion.div
              className="flex flex-col items-center space-y-4"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <PulsingHeart />
              
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900"
                style={{ fontFamily: "'Poppins', sans-serif" }}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              >
                <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                  Rasmlai
                </span>
              </motion.h1>
              
              <motion.p
                className="text-lg sm:text-xl text-gray-600 max-w-md"
                style={{ fontFamily: "'Inter', sans-serif" }}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              >
                Your AI companion for emotional wellness
              </motion.p>
            </motion.div>

            {/* Loading progress */}
            <motion.div
              className="w-80 sm:w-96 space-y-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            >
              {/* Progress bar */}
              <div className="relative">
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-red-500 to-pink-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${loadingProgress}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>
                
                {/* Progress percentage */}
                <motion.div
                  className="absolute -top-8 right-0 text-sm font-medium text-gray-600"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  {loadingProgress}%
                </motion.div>
              </div>

              {/* Current phase indicator */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPhase}
                  className="flex items-center justify-center space-x-3 text-gray-700"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <motion.div
                    className="p-2 bg-white/60 backdrop-blur-sm rounded-lg shadow-md"
                    animate={{
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {loadingPhases[currentPhase].icon}
                  </motion.div>
                  
                  <div className="flex items-center space-x-2">
                    <span
                      className="text-base sm:text-lg font-medium"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {loadingPhases[currentPhase].text}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Bottom decorative elements */}
            <motion.div
              className="flex space-x-6 opacity-30"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 0.3 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            >
              {[Phone, Heart, MessageCircle, Volume2].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="w-8 h-8 text-gray-400"
                  animate={{
                    y: [0, -5, 0],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: "easeInOut",
                  }}
                >
                  <Icon className="w-full h-full" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingPage;