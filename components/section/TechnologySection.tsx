"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function TechnologySection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <section id="technology" className="h-screen snap-start bg-gray-100 flex flex-col justify-center relative">
      <motion.div
        className="container max-w-6xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 className="text-2xl md:text-3xl font-semibold mb-3" variants={itemVariants}>
          Lumio Partners Pvt Ltd
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-7">
          <motion.div className="flex-shrink-0" variants={imageVariants} whileHover="hover">
            <Image src="/favicon-light.png" width={150} height={150} alt="Lumio Partners Logo" className="rounded-md" />
          </motion.div>
          <motion.p className="text-base md:text-lg text-gray-700 leading-relaxed" variants={itemVariants}>
            At Lumio AI, we design cutting-edge, customized Enterprise AI solutions to optimize sales, manufacturing,
            and operational workflows for SMBs. Our expertise spans AI agents, business copilots, AI-powered document
            search, multi-modal AI systems, multi-agent frameworks, and tailored AI solutions to meet the unique needs
            of our customers. Lumio makes AI accessible, practical, and built for growth—delivering high-quality,
            high-impact solutions with competitive turnaround times and measurable ROI.
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}

