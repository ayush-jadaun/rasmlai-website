"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1 space-y-6">
            <div className="text-4xl font-bold bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Rasmlai
            </div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-sm">
              Your safe space for emotional expression and healing. We're here
              to support your mental wellness journey.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-3">
              <Link
                href="/support"
                className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group"
              >
                <span className="w-1 h-1 bg-purple-400 rounded-full mr-3 group-hover:w-2 transition-all"></span>
                Get Support
              </Link>
              <Link
                href="/privacy"
                className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group"
              >
                <span className="w-1 h-1 bg-purple-400 rounded-full mr-3 group-hover:w-2 transition-all"></span>
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group"
              >
                <span className="w-1 h-1 bg-purple-400 rounded-full mr-3 group-hover:w-2 transition-all"></span>
                Terms of Service
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              Connect With Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="text-gray-300">support@rasmlai.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <span className="text-gray-300">24/7 Crisis Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Rasmlai. All rights reserved. Made with ❤️ for mental
              wellness.
            </div>
            <div className="flex space-x-6 text-sm">
              <span className="text-gray-500">Confidential</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-500">Secure</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
