import React from 'react'
import { motion } from 'framer-motion'
function HowitWorks() {
  return (
     <section className="py-20 px-4 bg-gradient-to-r from-red-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-800">
              Simple. Safe. Supportive.
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three easy steps to emotional freedom
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Open the App",
                desc: "Launch Rasmlai whenever you need to express yourself",
              },
              {
                step: "02",
                title: "Start Talking",
                desc: "Share your feelings through voice or text - no judgment, just support",
              },
              {
                step: "03",
                title: "Feel Better",
                desc: "Experience relief and gain insights to move forward positively",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                }}
                className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-6xl font-black text-red-200 mb-4">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default HowitWorks