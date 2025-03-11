"use client"

import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-screen snap-start flex flex-col justify-center items-center overflow-hidden"
      style={{
        background: `
          linear-gradient(
            135deg,
            #d4b978 0%,
            #e6d5a5 25%,
            #d4b978 50%,
            #e6d5a5 75%,
            #d4b978 100%
          )
        `,
      }}
    >
      {/* Diagonal light effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              45deg,
              transparent 0%,
              rgba(255, 255, 255, 0.1) 45%,
              rgba(255, 255, 255, 0.2) 50%,
              rgba(255, 255, 255, 0.1) 55%,
              transparent 100%
            )
          `,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      <div className="relative container mx-auto px-4 flex flex-col items-center">
        <motion.h1
          className="text-5xl font-serif text-center text-gray-900 mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Pannalal Mahesh Chandra
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl font-bold text-center text-gray-800 tracking-[0.2em]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          TRANSFORMING VISION INTO REALITY
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        style={{ x: "-50%" }}
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="h-8 w-8 text-gray-700" />
        </motion.div>
      </motion.div>
    </section>
  )
}

