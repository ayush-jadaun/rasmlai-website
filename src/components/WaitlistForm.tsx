"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WaitlistFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistForm: React.FC<WaitlistFormProps> = ({ isOpen, onClose }) => {
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

  const handleSubmit = async (e: React.FormEvent) => {
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
        setTimeout(() => {
          onClose();
          setSubmitStatus("idle");
        }, 3000);
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

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
            duration: 0.3,
          }}
          className="bg-white/95 backdrop-blur-xl rounded-3xl p-0 w-full max-w-lg shadow-2xl border border-white/20 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Gradient Header */}
          <div className="bg-gradient-to-br from-red-500 via-pink-500 to-purple-600 p-8 text-white relative overflow-hidden">
            {/* Floating Background Elements */}
            <motion.div
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl"
            />
            <motion.div
              animate={{
                x: [0, -80, 0],
                y: [0, 60, 0],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
                delay: 5,
              }}
              className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-lg"
            />

            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
            >
              <span className="text-white text-xl font-light">×</span>
            </motion.button>

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  delay: 0.2,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
                className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/30"
              >
                <motion.span
                  className="text-white text-3xl"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  ✨
                </motion.span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl font-bold mb-3 text-center"
              >
                Join the Waitlist
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-white/90 text-center text-lg"
              >
                Be first to experience emotional freedom
              </motion.p>
            </div>
          </div>

          {/* Content Area */}
          <div className="p-8">
            {/* Success State */}
            <AnimatePresence mode="wait">
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -20 }}
                  className="text-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 0.2,
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                    className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 relative overflow-hidden"
                  >
                    <motion.div
                      animate={{ scale: [0, 1.5, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                      className="absolute inset-0 bg-green-400 rounded-2xl opacity-20"
                    />
                    <span className="text-green-600 text-3xl relative z-10">
                      ✓
                    </span>
                  </motion.div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    🎉 Welcome aboard!
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    You&apos;re now on the waitlist! We&apos;ll notify you the
                    moment Rasmlai is ready to help you on your emotional
                    journey.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Duplicate Email State */}
            <AnimatePresence mode="wait">
              {submitStatus === "duplicate" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -20 }}
                  className="text-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 0.2,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className="w-20 h-20 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  >
                    <span className="text-amber-600 text-3xl">👋</span>
                  </motion.div>
                  <h3 className="text-3xl font-bold text-amber-600 mb-4">
                    You&apos;re already in!
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    This email is already on our waitlist. We&apos;ll be in
                    touch soon with updates!
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form */}
            {(submitStatus === "idle" || submitStatus === "error") && (
              <motion.form
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Name Input */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="relative"
                >
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-3"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 bg-gray-50/80 border-2 border-gray-200/60 rounded-2xl focus:border-red-400 focus:bg-white focus:outline-none transition-all duration-300 text-gray-800 text-lg placeholder:text-gray-400"
                      placeholder="Enter your full name"
                    />
                    <motion.div
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: formData.name ? 1 : 0 }}
                    >
                      👤
                    </motion.div>
                  </div>
                </motion.div>

                {/* Email Input */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="relative"
                >
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-3"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 bg-gray-50/80 border-2 border-gray-200/60 rounded-2xl focus:border-red-400 focus:bg-white focus:outline-none transition-all duration-300 text-gray-800 text-lg placeholder:text-gray-400"
                      placeholder="Enter your email address"
                    />
                    <motion.div
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: formData.email ? 1 : 0 }}
                    >
                      📧
                    </motion.div>
                  </div>
                </motion.div>

                {/* Error Message */}
                <AnimatePresence>
                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      className="bg-red-50 border border-red-200 rounded-2xl p-4"
                    >
                      <div className="flex items-center">
                        <span className="text-red-500 text-xl mr-3">⚠️</span>
                        <p className="text-red-600 font-medium">
                          {errorMessage}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || !formData.name || !formData.email}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(239, 68, 68, 0.2)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="relative w-full bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 text-white py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden group"
                >
                  {/* Button Background Animation */}
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center justify-center relative z-10"
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-6 h-6 border-2 border-white border-t-transparent rounded-full mr-3"
                        />
                        <span>Joining waitlist...</span>
                      </motion.div>
                    ) : (
                      <motion.span
                        key="text"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="relative z-10 flex items-center justify-center"
                      >
                        <span className="mr-2">✨</span>
                        Join the Waitlist
                        <span className="ml-2">→</span>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>

                {/* Privacy Note */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="bg-gray-50 rounded-2xl p-4 border border-gray-100"
                >
                  <div className="flex items-start">
                    <span className="text-gray-400 mr-3 mt-0.5">🔒</span>
                    <div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        <span className="font-semibold text-gray-700">
                          Privacy guaranteed.
                        </span>{" "}
                        We&apos;ll only use your information to notify you about
                        Rasmlai&apos;s launch. No spam, no sharing with third
                        parties.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default WaitlistForm;
