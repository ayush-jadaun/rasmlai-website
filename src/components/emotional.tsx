import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Heart, MessageCircle, Volume2 } from "lucide-react";
import Image from "next/image";
import PhoneSlider from "./iphone";

// const PhoneSlider = ({ images = [], slideSpeed = 3000 }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//

//   const finalContent =
//     images.length > 0
//       ? images.map((img) => ({
//           type: "image",
//           url: img,
//           alt: "App screen",
//         }))
//       : defaultContent;

//   React.useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % finalContent.length);
//     }, slideSpeed);
//     return () => clearInterval(interval);
//   }, [finalContent.length, slideSpeed]);

//   return (
//     <div className="flex items-center justify-center">
//       <motion.div
//         className="relative"
//         animate={{
//           y: [0, -10, 0],
//           x: [0, 6, 0, -6, 0],
//           rotateY: [0, 3, 0, -3, 0],
//           rotateX: [0, 1, 0, -1, 0],
//         }}
//         transition={{
//           duration: 6,
//           repeat: Infinity,
//           ease: "easeInOut",
//           times: [0, 0.2, 0.5, 0.8, 1],
//         }}
//         style={{
//           transformStyle: "preserve-3d",
//           perspective: "1000px",
//         }}
//       >
//         <motion.div
//           className="relative w-[200px] h-[400px] sm:w-[240px] sm:h-[480px] lg:w-[280px] lg:h-[570px] bg-black rounded-[40px] sm:rounded-[50px] lg:rounded-[60px] p-1.5 sm:p-2 shadow-2xl"
//           animate={{
//             boxShadow: [
//               "0 20px 40px -12px rgba(0, 0, 0, 0.25)",
//               "0 30px 50px -12px rgba(0, 0, 0, 0.35)",
//               "0 20px 40px -12px rgba(0, 0, 0, 0.25)",
//             ],
//           }}
//           transition={{
//             duration: 4,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         >
//           <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-[32px] sm:rounded-[40px] lg:rounded-[50px] p-1">
//             <div className="relative w-full h-full bg-black rounded-[28px] sm:rounded-[36px] lg:rounded-[45px] overflow-hidden">
//               {/* Dynamic Island */}
//               <div className="absolute top-1.5 sm:top-2 left-1/2 transform -translate-x-1/2 z-20">
//                 <div className="w-20 h-4 sm:w-24 sm:h-5 lg:w-32 lg:h-7 bg-black rounded-full shadow-lg flex items-center justify-center">
//                   <div className="flex items-center space-x-1 sm:space-x-2">
//                     <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 bg-red-500 rounded-full animate-pulse"></div>
//                   </div>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="relative w-full h-full">
//                 <motion.div
//                   key={currentIndex}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.8 }}
//                   transition={{ duration: 0.5 }}
//                   className="absolute inset-0"
//                 >
//                   <Image
//                     width={280}
//                     height={570}
//                     src={finalContent[currentIndex].url}
//                     alt={finalContent[currentIndex].alt}
//                     className="w-full h-full object-cover"
//                   />
//                 </motion.div>
//               </div>

//               {/* Progress Indicators */}
//               <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-2 z-10">
//                 {finalContent.map((_, index) => (
//                   <motion.div
//                     key={index}
//                     className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
//                       index === currentIndex ? "bg-white" : "bg-white/40"
//                     }`}
//                     animate={{
//                       scale: index === currentIndex ? 1.2 : 1,
//                       opacity: index === currentIndex ? 1 : 0.6,
//                     }}
//                     transition={{ duration: 0.2 }}
//                   />
//                 ))}
//               </div>

//               {/* Side Buttons - Scaled for mobile */}
//               <div className="absolute -left-0.5 top-12 sm:top-16 lg:top-20 w-0.5 sm:w-1 h-5 sm:h-6 lg:h-8 bg-gray-700 rounded-l-sm"></div>
//               <div className="absolute -left-0.5 top-20 sm:top-24 lg:top-32 w-0.5 sm:w-1 h-8 sm:h-10 lg:h-12 bg-gray-700 rounded-l-sm"></div>
//               <div className="absolute -left-0.5 top-32 sm:top-36 lg:top-48 w-0.5 sm:w-1 h-8 sm:h-10 lg:h-12 bg-gray-700 rounded-l-sm"></div>
//               <div className="absolute -right-0.5 top-18 sm:top-20 lg:top-28 w-0.5 sm:w-1 h-10 sm:h-12 lg:h-16 bg-gray-700 rounded-r-sm"></div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Floating Shadow */}
//         <motion.div
//           className="absolute -bottom-4 sm:-bottom-6 lg:-bottom-8 left-1/2 transform -translate-x-1/2 w-20 h-4 sm:w-24 sm:h-6 lg:w-32 lg:h-8 bg-black/20 rounded-full blur-xl"
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.3, 0.5, 0.3],
//           }}
//           transition={{
//             duration: 6,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />

//         {/* Reflection Effect */}
//         <motion.div
//           className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-[40px] sm:rounded-[50px] lg:rounded-[60px] pointer-events-none"
//           animate={{
//             opacity: [0.1, 0.2, 0.1],
//           }}
//           transition={{
//             duration: 5,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//       </motion.div>
//     </div>
//   );
// };

const RasmlaiShowcase = ( {slideSpeed = 4000} ) => {
  const images = [
    "/images/onboarding1.png",
    "/images/onboarding2.png",
    "/images/onboarding3.png",
    "/images/login.png",
    "/images/homescreen.png",
    "/images/call.png",
  ];
  const features = [
    {
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Voice Calls with AI",
      description:
        "Express yourself through natural voice conversations with our empathetic AI companion",
    },
    {
      icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Emotional Support",
      description:
        "Share your anger, sadness, joy - every emotion is valid and welcomed here",
    },
    {
      icon: <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Safe Space",
      description:
        "A judgment-free zone where you can be completely authentic and vulnerable",
    },
    {
      icon: <Volume2 className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Active Listening",
      description:
        "Your AI companion truly listens, understands, and responds with genuine care",
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-red-50 to-pink-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-red-200 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute top-20 sm:top-40 right-10 sm:right-20 w-32 h-32 sm:w-48 sm:h-48 bg-pink-200 rounded-full opacity-15 blur-2xl"></div>
        <div className="absolute bottom-20 sm:bottom-40 left-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-purple-200 rounded-full opacity-25 blur-lg"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 sm:gap-12 lg:gap-6 ">
          {/* Phone Component - Top on mobile, Left on desktop */}
          <motion.div
            className="flex justify-center items-start -mt-15 md:justify-start order-1 lg:order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <PhoneSlider images={images} slideSpeed={slideSpeed} />
          </motion.div>

          {/* Content - Bottom on mobile, Right on desktop */}
          <motion.div
            className="space-y-6 order-2 lg:order-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Header */}
            <div className="space-y-3 sm:space-y-4 text-center lg:text-left">
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight"
                style={{ fontFamily: "'Poppins', sans-serif" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                  Your Voice Matters
                </span>
              </motion.h2>

              <motion.p
                className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                style={{ fontFamily: "'Inter', sans-serif" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Rasmlai is your AI companion for emotional wellness. Call
                anytime to express your feelings, process difficult emotions,
                and find support when you need it most.
              </motion.p>
            </div>

            {/* Features Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(239, 68, 68, 0.1)",
                  }}
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg sm:rounded-xl flex items-center justify-center text-white">
                      {feature.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className="text-gray-600 text-sm leading-relaxed"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RasmlaiShowcase;
