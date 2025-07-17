import React, { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

function HowitWorks() {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"])

  const steps = [
    {
      step: "01",
      title: "Open the App",
      subtitle: "Access Your Safe Space",
      description: "Launch Rasmlai whenever you need to express yourself. Our intuitive interface welcomes you into a judgment-free environment designed for emotional healing.",
      details: "Available 24/7 on all devices, Rasmlai is always there when you need support. No appointments, no waiting - just immediate access to your personal emotional sanctuary.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      step: "02",
      title: "Start Talking",
      subtitle: "Express Your Truth",
      description: "Share your feelings through voice in our completely private space. No judgment, just support - express yourself exactly as you are in this moment.",
      details: "Our advanced AI listens with empathy and understanding, providing a safe container for all your emotions. Whether you're angry, sad, confused, or overwhelmed - you're heard.",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      step: "03",
      title: "Feel Better",
      subtitle: "Experience Relief & Growth",
      description: "Experience immediate relief as you release pent-up emotions and gain valuable insights to help you move forward with clarity and renewed strength.",
      details: "Our supportive responses help you process your feelings while providing gentle guidance and practical tools for emotional wellness and personal growth.",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    }
  ]

  return (
    <section ref={containerRef} className="py-12 sm:py-16 md:py-20 px-2 sm:px-4 md:px-6 lg:px-8 bg-gradient-to-br from-red-50 via-pink-50 to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-24 sm:w-40 h-24 sm:h-40 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-r from-red-400 to-pink-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r py-3 sm:py-4 md:py-5 from-red-600 to-pink-600 bg-clip-text text-transparent leading-tight"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            style={{ fontFamily: "'Poppins', sans-serif" }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Simple. Safe. Supportive.
          </motion.h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4 sm:px-2">
            Three simple steps to emotional freedom. Our streamlined process gets you the support you need, when you need it most.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Animated Timeline Line - Desktop Only */}
          <div className="absolute left-1/2 top-0 w-1 h-full bg-gray-200 transform -translate-x-1/2 hidden lg:block">
            <motion.div
              className="w-full bg-gradient-to-b from-purple-500 via-red-500 to-green-500 origin-top"
              style={{ height: lineHeight }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Mobile Timeline Line */}
          <div className="absolute left-6 top-0 w-0.5 h-full bg-gray-200 lg:hidden">
            <motion.div
              className="w-full bg-gradient-to-b from-purple-500 via-red-500 to-green-500 origin-top"
              style={{ height: lineHeight }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`relative flex flex-col lg:flex-row items-start lg:items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-4 sm:gap-6 md:gap-8 lg:gap-16`}
              >
                {/* Desktop Timeline Node */}
                <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-xl border-4 border-white`}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </motion.div>
                </div>

                {/* Mobile Timeline Node */}
                <div className="lg:hidden absolute left-6 top-8 transform -translate-x-1/2 z-10">
                  <motion.div
                    className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-lg border-2 border-white`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-white font-bold text-xs sm:text-sm">{step.step}</span>
                  </motion.div>
                </div>

                {/* Content Card */}
                <motion.div
                  className={`flex-1 w-full max-w-none mx-auto pl-12 pr-2 sm:pl-16 sm:pr-4 md:max-w-xl lg:max-w-lg lg:ml-0 lg:pl-0 lg:pr-0 ${
                    index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
                  }`}
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: index % 2 === 0 ? 2 : -2,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-500 ${step.borderColor} border border-opacity-30 ${step.bgColor} relative overflow-hidden`}>
                    {/* Large step number for mobile */}
                    <div className="lg:hidden text-3xl sm:text-4xl md:text-5xl font-black text-gray-200 mb-2 sm:mb-4 absolute top-2 right-3 sm:top-4 sm:right-4">
                      {step.step}
                    </div>

                    {/* Gradient overlay */}
                    <div className={`absolute top-0 right-0 w-20 sm:w-28 md:w-32 h-20 sm:h-28 md:h-32 bg-gradient-to-bl ${step.color} opacity-5 rounded-full blur-2xl`}></div>

                    {/* Content */}
                    <div className="relative z-10">
                      <motion.div
                        className="mb-4 sm:mb-6"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 text-gray-800 pr-8 sm:pr-12 lg:pr-0">
                          {step.title}
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg font-medium text-gray-600 mb-3 sm:mb-4">
                          {step.subtitle}
                        </p>
                      </motion.div>

                      <motion.p
                        className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base md:text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        {step.description}
                      </motion.p>

                      <motion.div
                        className="bg-gray-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 border-l-4 border-gray-300"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                      >
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                          {step.details}
                        </p>
                      </motion.div>

                      {/* Progress indicator */}
                      <div className="mt-4 sm:mt-6 flex items-center justify-between">
                        <div className="flex space-x-1 sm:space-x-2">
                          {steps.map((_, i) => (
                            <div
                              key={i}
                              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                                i <= index ? `bg-gradient-to-r ${step.color}` : 'bg-gray-200'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs sm:text-sm text-gray-500">
                          Step {index + 1} of {steps.length}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Spacer for desktop */}
                <div className="hidden lg:block flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>   
      </div>
    </section>
  )
}

export default HowitWorks