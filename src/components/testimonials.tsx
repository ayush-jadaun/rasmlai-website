"use client"
import React from 'react'
import {motion} from 'framer-motion'
const Testimonials = () => {
  return (
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-800">
              Voices of Healing
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from people who found their voice
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Rasmlai gave me permission to feel angry without guilt. It changed everything.",
                name: "Sarah M.",
              },
              {
                quote:
                  "Finally, a space where I can be vulnerable without fear of judgment.",
                name: "Alex R.",
              },
              {
                quote:
                  "The AI understands me better than I understand myself sometimes.",
                name: "Maya K.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.1)",
                }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl text-purple-300 mb-4">&ldquo;</div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  {item.quote}
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">{item.name[0]}</span>
                  </div>
                  <span className="font-semibold text-gray-800">
                    {item.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
)
}

export default Testimonials