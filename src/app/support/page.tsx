"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Support() {
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Rasmlai and how does it work?",
      answer:
        "Rasmlai is an AI-powered emotional support platform that provides a safe space for you to express your feelings. Our AI companion listens to your emotions and offers supportive responses to help you process what you're feeling.",
    },
    {
      question: "Is my emotional data secure and private?",
      answer:
        "Absolutely. Your conversations are processed in real-time and are not permanently stored. We use end-to-end encryption to protect your data, and we never share your personal information with third parties.",
    },
    {
      question: "Can Rasmlai replace therapy or professional help?",
      answer:
        "No, Rasmlai is designed to complement, not replace, professional mental health care. While our AI provides emotional support, we strongly encourage seeking professional help for serious mental health concerns.",
    },
    {
      question: "How do I join the waitlist?",
      answer:
        "Simply click the 'Join Waitlist' button on our homepage and provide your name and email address. We'll notify you as soon as Rasmlai becomes available.",
    },
    {
      question: "Will there be a cost to use Rasmlai?",
      answer:
        "We're still finalizing our pricing model. Our goal is to make emotional support accessible to everyone. Waitlist members will be the first to know about pricing and may receive special early-access offers.",
    },
    {
      question: "What if I'm having thoughts of self-harm?",
      answer:
        "If you're experiencing thoughts of self-harm or suicide, please reach out to emergency services or a crisis helpline immediately. Rasmlai is not equipped to handle crisis situations, and professional help is essential.",
    },
    {
      question: "How does the AI understand emotions?",
      answer:
        "Our AI is trained on emotional patterns and responses to provide empathetic support. While it can recognize emotional cues and provide helpful responses, it's important to remember that it's a tool, not a human therapist.",
    },
    {
      question: "Can I use Rasmlai on mobile devices?",
      answer:
        "Yes! Rasmlai will be available as both a web application and mobile app for iOS and Android devices, ensuring you can access support whenever you need it.",
    },
  ];

  const supportOptions = [
    {
      icon: "📧",
      title: "Email Support",
      description: "Get help via email",
      contact: "support@rasmlai.com",
      response: "Within 24 hours",
    },
    {
      icon: "💬",
      title: "General Inquiries",
      description: "Questions about Rasmlai",
      contact: "hello@rasmlai.com",
      response: "Within 48 hours",
    },
    {
      icon: "🔒",
      title: "Privacy Concerns",
      description: "Data protection questions",
      contact: "privacy@rasmlai.com",
      response: "Within 24 hours",
    },
    {
      icon: "⚖️",
      title: "Legal Matters",
      description: "Terms and legal questions",
      contact: "legal@rasmlai.com",
      response: "Within 48 hours",
    },
  ];

  const emergencyResources = [
    {
      name: "National Suicide Prevention Lifeline",
      number: "988",
      description: "24/7 crisis support",
      country: "USA",
    },
    {
      name: "Crisis Text Line",
      number: "Text HOME to 741741",
      description: "24/7 text-based crisis support",
      country: "USA",
    },
    {
      name: "International Association for Suicide Prevention",
      number: "Visit iasp.info/resources",
      description: "Global crisis resources",
      country: "International",
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
      <main className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
            Support Center
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're here to help you on your emotional wellness journey. Find
            answers to common questions or reach out directly.
          </p>
        </motion.div>

        {/* Emergency Resources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="bg-red-100 border border-red-300 rounded-3xl p-8 mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-red-800 mb-4">
              🚨 Crisis Resources
            </h2>
            <p className="text-red-700 text-lg">
              If you're in crisis or having thoughts of self-harm, please reach
              out for immediate help:
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {emergencyResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <h3 className="font-bold text-gray-800 mb-2">
                  {resource.name}
                </h3>
                <p className="text-red-600 font-semibold text-lg mb-2">
                  {resource.number}
                </p>
                <p className="text-gray-600 text-sm mb-1">
                  {resource.description}
                </p>
                <p className="text-gray-500 text-xs">{resource.country}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Get in Touch
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{option.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {option.title}
                </h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <a
                  href={`mailto:${option.contact}`}
                  className="text-red-600 font-semibold hover:underline block mb-2"
                >
                  {option.contact}
                </a>
                <p className="text-sm text-gray-500">
                  Response: {option.response}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <motion.button
                  onClick={() =>
                    setSelectedFaq(selectedFaq === index ? null : index)
                  }
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  whileHover={{ backgroundColor: "#f9fafb" }}
                >
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </h3>
                  <motion.span
                    animate={{ rotate: selectedFaq === index ? 180 : 0 }}
                    className="text-2xl text-red-500 flex-shrink-0"
                  >
                    ↓
                  </motion.span>
                </motion.button>
                <motion.div
                  initial={false}
                  animate={{
                    height: selectedFaq === index ? "auto" : 0,
                    opacity: selectedFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-red-600 to-purple-600 rounded-3xl p-8 text-white text-center mt-16"
        >
          <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-xl opacity-90 mb-6">
            Can't find what you're looking for? Our support team is here to
            help.
          </p>
          <motion.a
            href="mailto:support@rasmlai.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300"
          >
            Contact Support Team
          </motion.a>
        </motion.div>
      </main>
    </div>
  );
}
