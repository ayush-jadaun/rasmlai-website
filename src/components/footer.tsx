
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
            <div className="text-4xl text-center font-bold bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Rasmlai
            </div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-sm">
              Your safe space for emotional expression and healing. We&apos;re
              here to support your mental wellness journey.
            </p>
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

