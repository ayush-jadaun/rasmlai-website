"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WaitlistPage: React.FC = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-orange-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Join Rasmlai
          </h1>
          <p className="text-xl text-gray-600 max-w-md mx-auto">
            Be the first to experience something extraordinary. Get notified when we launch.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <AnimatePresence mode="wait">
              {/* Success State */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-green-600 text-3xl">✓</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    You&apos;re on the list!
                  </h3>
                  <p className="text-lg text-gray-600 mb-8">
                    We&apos;ll notify you as soon as Rasmlai is ready. Get ready for something amazing!
                  </p>
                  <button
                    onClick={resetForm}
                    className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg font-semibold hover:from-red-600 hover:to-pink-600 transition-all"
                  >
                    Add Another Email
                  </button>
                </motion.div>
              )}

              {/* Duplicate State */}
              {submitStatus === "duplicate" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-amber-600 text-3xl">👋</span>
                  </div>
                  <h3 className="text-3xl font-bold text-amber-600 mb-4">
                    You&lsquo;re already in!
                  </h3>
                  <p className="text-lg text-gray-600 mb-8">
                    This email is already on our waitlist. We&#39;ll be in touch soon!
                  </p>
                  <button
                    onClick={resetForm}
                    className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg font-semibold hover:from-red-600 hover:to-pink-600 transition-all"
                  >
                    Try Different Email
                  </button>
                </motion.div>
              )}

              {/* Form */}
              {(submitStatus === "idle" || submitStatus === "error") && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-3">
                      Get Early Access
                    </h2>
                    <p className="text-gray-600">
                      Join thousands of others waiting for the launch
                    </p>
                  </div>

                  <div className="space-y-6">
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
                        className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all text-lg"
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
                        className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all text-lg"
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

                    <button
                      type="submit"
                      disabled={isSubmitting || !formData.name || !formData.email}
                      onClick={handleSubmit}
                      className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-4 rounded-xl font-semibold hover:from-red-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-lg"
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
                          Joining Waitlist...
                        </span>
                      ) : (
                        "Join the Waitlist"
                      )}
                    </button>

                    <p className="text-sm text-gray-500 text-center mt-6">
                      We&apos;ll only use your email to notify you about Rasmlai&lsquo;s launch.
                      No spam, ever.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WaitlistPage;