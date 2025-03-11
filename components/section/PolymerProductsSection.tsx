"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function PolymerProductsSection() {
  // Simple fade-in animation for the entire section
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  // Simple slide-up animation for text elements
  const slideUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  // Simple staggered animation for grid items
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section
      id="polymer-products"
      className="min-h-screen py-12 sm:py-16 md:py-20 snap-start bg-gray-100 flex flex-col justify-center relative"
    >
      <motion.div
        className="container max-w-6xl mx-auto px-4 sm:px-6 md:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeIn}
      >
        {/* Industry Name */}
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-center md:text-left"
          variants={slideUp}
        >
          GANPATI AGENCIES PRIVATE LIMITED
        </motion.h2>

        <div className="space-y-6 sm:space-y-8">
          {/* Brand Section */}
          <motion.div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center" variants={slideUp}>
            {/* Brand Logo */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0 mx-auto md:mx-0">
              <Image
                src="/leather.jpg"
                alt="Jiolite Logo"
                width={160}
                height={160}
                className="w-full h-full object-contain rounded"
                sizes="(max-width: 640px) 128px, 160px"
              />
            </div>

            {/* Brand Description */}
            <div className="flex-1">
              <p className="text-gray-700 text-base sm:text-lg text-center md:text-left">
                In the year 2001, Ganpati Agencies was established through which we became consignment stockists of Gas
                Authority of India Limited (GAIL), the largest natural gas refining and handling business in India, and
                Brahmaputra Cracker & Polymer Limited (BCPL). We sell their polymer products to manufacturers and
                Traders in Uttar Pradesh.
              </p>
            </div>
          </motion.div>

          {/* Product Images Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8"
            variants={staggerContainer}
          >
            <motion.div
              className="bg-white rounded shadow overflow-hidden aspect-square"
              variants={slideUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Image
                src="/gan1.jpg"
                alt="Project 1"
                width={400}
                height={400}
                className="w-full h-full object-contain"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </motion.div>
            <motion.div
              className="bg-white rounded shadow overflow-hidden aspect-square"
              variants={slideUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Image
                src="/gan2.jpg"
                alt="Project 2"
                width={400}
                height={400}
                className="w-full h-full object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </motion.div>
            <motion.div
              className="bg-white rounded shadow overflow-hidden aspect-square sm:col-span-2 lg:col-span-1"
              variants={slideUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Image
                src="/gan3.png"
                alt="Project 3"
                width={400}
                height={400}
                className="w-full h-full object-contain"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 33vw"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

