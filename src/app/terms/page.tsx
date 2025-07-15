"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TermsOfService() {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: [
        "By accessing or using Rasmlai, you agree to be bound by these Terms of Service",
        "If you disagree with any part of these terms, you may not access the service",
        "We reserve the right to update these terms at any time with notice to users",
        "Continued use of the service constitutes acceptance of updated terms",
      ],
    },
    {
      title: "Description of Service",
      content: [
        "Rasmlai is an AI-powered emotional support platform designed to provide a safe space for emotional expression",
        "The service is intended for personal use and emotional wellness support",
        "Our AI provides supportive responses but is not a substitute for professional mental health care",
        "We do not provide medical advice, diagnosis, or treatment",
      ],
    },
    {
      title: "User Responsibilities",
      content: [
        "You must be at least 13 years old to use this service",
        "You are responsible for maintaining the confidentiality of your account",
        "You agree to use the service only for lawful purposes",
        "You will not attempt to harm, disrupt, or interfere with the service",
        "You will not share harmful, abusive, or illegal content",
      ],
    },
    {
      title: "Privacy & Data",
      content: [
        "Your privacy is important to us - please review our Privacy Policy",
        "Conversations are processed in real-time and not permanently stored",
        "We use encryption to protect your data during transmission",
        "You retain ownership of any content you share with our service",
      ],
    },
    {
      title: "Service Availability",
      content: [
        "We strive to maintain high availability but cannot guarantee uninterrupted service",
        "Maintenance, updates, or technical issues may temporarily affect service access",
        "We are not liable for any inconvenience caused by service interruptions",
        "Critical safety features are designed with redundancy and backup systems",
      ],
    },
    {
      title: "Intellectual Property",
      content: [
        "Rasmlai and its original content, features, and functionality are owned by our company",
        "Our trademarks, logos, and brand elements may not be used without permission",
        "You may not copy, modify, or distribute our proprietary technology",
        "User-generated content remains owned by the user but grants us license to process it",
      ],
    },
    {
      title: "Limitation of Liability",
      content: [
        "Rasmlai is provided &apos;as is&apos; without warranties of any kind",
        "We are not liable for any indirect, incidental, or consequential damages",
        "Our total liability is limited to the amount you paid for the service",
        "Some jurisdictions do not allow liability limitations, so these may not apply to you",
      ],
    },
    {
      title: "Termination",
      content: [
        "You may terminate your account at any time by contacting us",
        "We may terminate or suspend access for violations of these terms",
        "Upon termination, your right to use the service ceases immediately",
        "Provisions regarding liability, indemnity, and intellectual property survive termination",
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
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            These terms govern your use of Rasmlai. Please read them carefully
            before using our service.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: July 15, 2025
          </p>
        </motion.div>

        {/* Terms Sections */}
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

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-yellow-100 to-orange-100 border border-yellow-300 rounded-3xl p-8 mt-16"
        >
          <div className="flex items-start">
            <span className="text-3xl mr-4">⚠️</span>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Important Notice
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Rasmlai is designed to support emotional wellness but is not a
                substitute for professional mental health care. If you&apos;re
                experiencing thoughts of self-harm or suicide, please contact
                emergency services or a mental health professional immediately.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-gradient-to-r from-red-600 to-purple-600 rounded-3xl p-8 text-white text-center mt-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            Questions About These Terms?
          </h2>
          <p className="text-xl opacity-90 mb-6">
            We&apos;re here to clarify any questions you might have about our
            terms of service.
          </p>
          <motion.a
            href="mailto:legal@rasmlai.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300"
          >
            Contact Legal Team
          </motion.a>
        </motion.div>
      </main>
    </div>
  );
}
