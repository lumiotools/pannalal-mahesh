"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function LeatherChemicalsSection() {
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
      id="leather-chemicals"
      className="min-h-screen py-12 sm:py-16 md:py-20 snap-start bg-[#E1CFA6] flex flex-col justify-center relative"
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
          PAN EAST EXIM PRIVATE LIMITED
        </motion.h2>

        <div className="space-y-6 sm:space-y-8">
          {/* Brand Section */}
          <motion.div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center" variants={slideUp}>
            {/* Brand Logo */}
            <motion.div
              className="w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0 mx-auto md:mx-0"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <Image
                src="/leather.jpg"
                alt="Pan East Logo"
                width={160}
                height={160}
                className="w-full h-full object-contain"
                sizes="(max-width: 640px) 128px, 160px"
              />
            </motion.div>

            {/* Brand Description */}
            <div className="flex-1">
              <p className="text-gray-700 text-base sm:text-lg text-center md:text-left">
                The year 2003 saw the import of footwear accessories. Pan East is an agent for Piel Color, Spain and
                Fenice, Italy for their leather processing chemicals which are then sold to leather tanneries in India.
              </p>
            </div>
          </motion.div>

          {/* Product Images Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8"
            variants={staggerContainer}
          >
            {[
              { src: "/shoe.png", alt: "Project 1", objectFit: "contain" },
              { src: "/shoe2.png", alt: "Project 2", objectFit: "cover" },
              { src: "/shoe3.png", alt: "Project 3", objectFit: "contain" },
            ].map((image, index) => (
              <motion.div
                key={index}
                className="bg-white  shadow overflow-hidden aspect-square"
                variants={slideUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={400}
                  height={400}
                  className={`w-full h-full object-${image.objectFit}`}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

