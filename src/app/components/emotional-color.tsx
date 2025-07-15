"use client"
import React from 'react'
import {motion} from 'framer-motion'

function EmotionalColor() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-800">
              A Journey of Colors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each emotion has its place and purpose in your healing journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { color: "bg-red-500", emotion: "Express", desc: "Raw emotion" },
              { color: "bg-pink-500", emotion: "Connect", desc: "Find warmth" },
              { color: "bg-green-500", emotion: "Heal", desc: "Growth begins" },
              {
                color: "bg-purple-500",
                emotion: "Release",
                desc: "Let go peacefully",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                }}
                className={`${item.color} rounded-3xl p-8 text-white text-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
              >
                <h3 className="text-2xl font-bold mb-2">{item.emotion}</h3>
                <p className="opacity-90">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default EmotionalColor