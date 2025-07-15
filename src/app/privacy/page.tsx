"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "When you join our waitlist, we collect your name and email address to notify you when Rasmlai becomes available.",
        "We may collect usage data and analytics to improve our service and user experience.",
        "Any emotional data shared during app usage is processed securely and never stored permanently unless you explicitly consent.",
      ],
    },
    {
      title: "How We Use Your Information",
      content: [
        "To notify you about Rasmlai's availability and updates",
        "To provide and improve our emotional support services",
        "To ensure the safety and security of our platform",
        "To comply with legal obligations and protect user rights",
      ],
    },
    {
      title: "Data Protection & Security",
      content: [
        "We use industry-standard encryption to protect your personal information",
        "Your emotional conversations are processed in real-time and not permanently stored",
        "We implement strict access controls and regular security audits",
        "We never sell or share your personal information with third parties for marketing purposes",
      ],
    },
    {
      title: "Your Rights",
      content: [
        "You have the right to access, update, or delete your personal information",
        "You can unsubscribe from our communications at any time",
        "You can request a copy of all data we have about you",
        "You can object to certain types of data processing",
      ],
    },
    {
      title: "Cookies & Tracking",
      content: [
        "We use essential cookies to ensure proper website functionality",
        "Analytics cookies help us understand how users interact with our service",
        "You can control cookie preferences through your browser settings",
        "We do not use tracking cookies for advertising purposes",
      ],
    },
    {
      title: "Contact Us",
      content: [
        "If you have any questions about this Privacy Policy, please contact us at privacy@rasmlai.com",
        "For data protection inquiries, reach out to our Data Protection Officer",
        "We will respond to all privacy-related inquiries within 30 days",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow-lg"
      >
        <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent cursor-pointer"
            >
              Rasmlai
            </motion.div>
          </Link>
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition-colors"
            >
              Back to Home
            </motion.button>
          </Link>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your privacy is fundamental to us. Here's how we protect and respect
            your personal information.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: July 15, 2025
          </p>
        </motion.div>

        {/* Privacy Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-100 pb-3">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.content.map((item, itemIndex) => (
                  <motion.p
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + itemIndex * 0.05 }}
                    className="text-gray-600 leading-relaxed flex items-start"
                  >
                    <span className="text-red-500 mr-3 mt-2 flex-shrink-0">
                      •
                    </span>
                    {item}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-red-600 to-purple-600 rounded-3xl p-8 text-white text-center mt-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            Questions About Your Privacy?
          </h2>
          <p className="text-xl opacity-90 mb-6">
            We're here to help you understand how we protect your information.
          </p>
          <motion.a
            href="mailto:privacy@rasmlai.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300"
          >
            Contact Privacy Team
          </motion.a>
        </motion.div>
      </main>
    </div>
  );
}
