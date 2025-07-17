"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const WaitlistForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error" | "duplicate"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent | React.MouseEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "" });
      } else {
        if (data.error === "Email already exists") {
          setSubmitStatus("duplicate");
        } else {
          setSubmitStatus("error");
          setErrorMessage(data.error || "Something went wrong");
        }
      }
    } catch {
      setSubmitStatus("error");
      setErrorMessage("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitStatus("idle");
    setFormData({ name: "", email: "" });
    setErrorMessage("");
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-orange-50 relative flex flex-col"
      style={{
        fontFamily: "'Inter', 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
      }}
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-200 rounded-full opacity-10 blur-xl"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-pink-200 rounded-full opacity-10 blur-2xl"></div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col">
        {/* Header Section - Top Center */}
        <div className="text-center pt-8 pb-4">
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 leading-tight"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 900,
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent block">
              Your Mental Wellness Journey
            </span> 
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join thousands who are prioritizing their mental health. 
            Be the first to experience our mindfulness and emotional wellness platform.
          </motion.p>
        </div>

        {/* Form and Image Section - Aligned */}
        <div className="flex-1 flex items-center justify-center px-4 pb-8">
          <div className="w-full max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-40 items-center">
              {/* Left Side - Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col justify-center"
              >
                {/* Form Card */}
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl lg:rounded-3xl shadow-xl overflow-hidden border border-white/20 max-w-lg mx-auto lg:mx-0">
                  <div className="p-6 lg:p-8">
                    <AnimatePresence mode="wait">
                      {/* Success State */}
                      {submitStatus === "success" && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="text-center py-8"
                        >
                          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="text-green-600 text-3xl">✓</span>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Welcome to Your Journey!
                          </h3>
                          <p className="text-gray-600 mb-6">
                            You&apos;re now on our waitlist. We&apos;ll notify you when we launch with exclusive early access.
                          </p>
                          <motion.button
                            onClick={resetForm}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full font-semibold hover:from-red-600 hover:to-pink-600 transition-all shadow-lg"
                          >
                            Add Another Email
                          </motion.button>
                        </motion.div>
                      )}

                      {/* Duplicate State */}
                      {submitStatus === "duplicate" && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="text-center py-8"
                        >
                          <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="text-amber-600 text-3xl">👋</span>
                          </div>
                          <h3 className="text-2xl font-bold text-amber-600 mb-4">
                            You&apos;re Already In!
                          </h3>
                          <p className="text-gray-600 mb-6">
                            This email is already on our waitlist. We&apos;ll be in touch soon with updates!
                          </p>
                          <motion.button
                            onClick={resetForm}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full font-semibold hover:from-red-600 hover:to-pink-600 transition-all shadow-lg"
                          >
                            Try Different Email
                          </motion.button>
                        </motion.div>
                      )}

                      {/* Form */}
                      {(submitStatus === "idle" || submitStatus === "error") && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <div className="text-center lg:text-left mb-6 lg:mb-8">
                            <h2 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-2 lg:mb-3">
                              Get Early Access
                            </h2>
                            <p className="text-gray-600 text-sm lg:text-base">
                              Join our community of mindful individuals
                            </p>
                          </div>

                          <div className="space-y-4 lg:space-y-6">
                            <div>
                              <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 mb-2"
                              >
                                Full Name
                              </label>
                              <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 lg:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all text-base lg:text-lg bg-white/50 backdrop-blur-sm"
                                placeholder="Enter your full name"
                              />
                            </div>

                            <div>
                              <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-2"
                              >
                                Email Address
                              </label>
                              <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 lg:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all text-base lg:text-lg bg-white/50 backdrop-blur-sm"
                                placeholder="Enter your email address"
                              />
                            </div>

                            {/* Error Message */}
                            {submitStatus === "error" && (
                              <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-red-50 border border-red-200 rounded-xl p-4"
                              >
                                <p className="text-red-600 text-sm">{errorMessage}</p>
                              </motion.div>
                            )}

                            <motion.button
                              type="submit"
                              disabled={isSubmitting || !formData.name || !formData.email}
                              onClick={handleSubmit}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-3 lg:py-4 rounded-xl font-semibold hover:from-red-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-base lg:text-lg shadow-lg"
                            >
                              {isSubmitting ? (
                                <span className="flex items-center justify-center">
                                  <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{
                                      duration: 1,
                                      repeat: Infinity,
                                      ease: "linear",
                                    }}
                                    className="w-6 h-6 border-2 border-white border-t-transparent rounded-full mr-3"
                                  />
                                  Joining Your Journey...
                                </span>
                              ) : (
                                "Begin Your Wellness Journey"
                              )}
                            </motion.button>

                            <p className="text-xs lg:text-sm text-gray-500 text-center mt-4 lg:mt-6">
                              We respect your privacy. No spam, ever. Just meaningful updates about your mental wellness journey.
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Mental Health Illustration */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex items-center justify-center"
              >
                <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
                  <div className="relative px-4 sm:px-0">
                    <div className="w-full aspect-square max-w-[320px] sm:max-w-[400px] lg:max-w-[480px] mx-auto">
                      <Image
                        width={1000}
                        height={1000}
                        src="/images/waitlist2.png"
                        alt="Mental Health Wellness"
                        className="w-full h-full object-contain"
                        style={{
                          filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.1))"
                        }}
                      />
                    </div>
                    
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-red-400/15 to-pink-400/15 rounded-full blur-3xl -z-10 transform scale-110"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitlistForm;