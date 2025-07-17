"use client";
import React from "react";
import { motion } from "framer-motion";
import Magnet from "@/components/ui/magneticButton";
import { useRouter } from "next/navigation";

interface CalltoActionProps {
  openWaitlist: () => void;
}

const CalltoAction: React.FC<CalltoActionProps> = () => {
  const router = useRouter();
  return (
    <section className="py-20 px-4 relative bg-gradient-to-r from-red-600 to-purple-600 text-white overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage:
            "radial-gradient(circle, white 2px, transparent 2px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-6xl font-bold mb-6"
        >
          Your Emotions Matter
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl mb-8 opacity-90 max-w-2xl mx-auto"
        >
          Don&apos;t carry the weight alone. Let Rasmlai be your companion in
          the journey towards emotional freedom.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Add Magnet component wrapping the button */}
          <Magnet
            onClick={()=>{
              router.push('/waitlist');
            }}
            padding={150}
            magnetStrength={2.5}
            wrapperClassName="inline-block"
            activeTransition="transform 0.2s ease-out"
            inactiveTransition="transform 0.4s ease-in-out"
          >
            <motion.button
              className="bg-white text-red-600 px-10 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255,255,255,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                y: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-red-50 to-pink-50 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Join Waitlist Now</span>
            </motion.button>
          </Magnet>
        </motion.div>
      </div>
    </section>
  );
};

export default CalltoAction;

