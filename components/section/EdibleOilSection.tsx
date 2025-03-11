"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function EdibleOilSection() {
  // Simple animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  const slideUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

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
      id="edible-oil"
      className="min-h-screen py-12 sm:py-16 md:py-20 snap-start bg-[#E1CFA6] flex flex-col justify-center relative overflow-hidden"
    >
      {/* Background pattern - simplified */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "url('/placeholder.svg?height=200&width=200')",
          backgroundSize: "clamp(40px, 5vw, 60px)",
          backgroundRepeat: "repeat",
        }}
      />

      <motion.div
        className="container max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px", amount: 0.2 }}
        variants={fadeIn}
      >
        {/* Industry Name */}
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-left"
          variants={slideUp}
        >
          VAIBHAV EDIBLES PRIVATE LIMITED
        </motion.h2>

        <div className="space-y-6 sm:space-y-8">
          {/* Brand Section */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
            {/* Brand Logo */}
            <motion.div
              className="w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0 mx-auto md:mx-0"
              variants={slideUp}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <Image
                src="/edible.png"
                alt="Vaibhav Edibles Logo"
                width={160}
                height={160}
                className="w-full h-full object-contain"
                sizes="(max-width: 640px) 128px, 160px"
              />
            </motion.div>

            {/* Brand Description */}
            <motion.div className="flex-1" variants={slideUp}>
              <p className="text-gray-700 text-base sm:text-lg text-center md:text-left">
                In the year 2004, we set up an edible oil refinery which produced 30 tons of oil per day. Today it
                produces more than 500 tons of oil per day including Rice Bran Oil, Soya Bean Oil and other edible oils.
                It is sold under the brand name of Jiolite in Uttar Pradesh, Bihar, West Bengal and Madhya Pradesh.
              </p>
            </motion.div>
          </div>

          {/* Product Images Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8"
            variants={staggerContainer}
          >
            {[
              { src: "/kadwa.png", alt: "Kadwa Oil" },
              { src: "/soyabeanoil.png", alt: "Soyabean Oil" },
              { src: "/refinded.png", alt: "Refined Oil" },
            ].map((image, index) => (
              <motion.div
                key={index}
                className="shadow overflow-hidden aspect-square"
                variants={slideUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={image.src || "/placeholder.svg?height=400&width=400"}
                    alt={image.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

