"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/80 to-transparent"></div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-pink-500/20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        
        {/* Brand Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent leading-tight">
              Rasmlai
            </h2>
          </div>
          
          <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
            <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-4 sm:px-0">
              Your safe space for emotional expression and healing. We&apos;re
              here to support your mental wellness journey.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 pt-6 sm:pt-8 lg:pt-10">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 gap-4">
            
            {/* Copyright */}
            <div className="text-gray-400 text-xs sm:text-sm md:text-base text-center sm:text-left order-2 sm:order-1">
              <span className="block sm:inline">© 2025 Rasmlai. All rights reserved.</span>
              <span className="block sm:inline sm:ml-2">Made with ❤️ for mental wellness.</span>
            </div>
            
            {/* Status badges */}
            <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6 text-xs sm:text-sm md:text-base order-1 sm:order-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-400 font-medium">Confidential</span>
              </div>
              
              <div className="w-px h-4 bg-gray-600"></div>
              
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-gray-400 font-medium">Secure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-600/50 to-transparent"></div>
    </footer>
  );
};

export default Footer;