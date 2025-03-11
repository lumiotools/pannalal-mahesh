"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function RealEstateSection() {
  // Simple fade-in animation for the entire section
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  // Simple slide-up animation for text elements
  const slideUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // Simple staggered animation for grid items
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="real-estate"
      className="min-h-screen snap-start px-4 sm:px-10 py-16 bg-gray-100 flex flex-col justify-center relative"
    >
      <motion.div
        className="container mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="flex flex-col md:flex-row items-start gap-10 max-w-6xl mx-auto">
          {/* Left Column */}
          <motion.div
            className="flex flex-col gap-6 flex-1 md:border-r md:pr-10 border-gray-300"
            variants={slideUp}
          >
            <motion.h3
              className="text-2xl md:text-3xl font-semibold mb-2"
              variants={slideUp}
            >
              SUKHDHAM INFRASTRUCTURES LLP
            </motion.h3>
            <motion.div
              className="flex flex-col sm:flex-row gap-6 items-start"
              variants={slideUp}
            >
              <motion.div
                className="w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0 bg-white p-3 rounded-lg shadow-sm"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <Image
                  src="/real1.png"
                  alt="Sukhdham Logo"
                  width={160}
                  height={160}
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <div className="flex-1 mt-2">
                <p className="text-gray-700 text-base sm:text-lg">
                  This company is engaged in real estate development with
                  townships already established in Kanpur and Lucknow.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4"
              variants={staggerContainer}
            >
              {["/con1.png", "/con2.png", "/cn3.png"].map((src, index) => (
                <motion.div
                  key={index}
                  className="aspect-video bg-white rounded-lg shadow-md overflow-hidden"
                  variants={slideUp}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={src || "/placeholder.svg"}
                      alt={`Project ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="flex flex-col gap-6 flex-1 md:pl-10"
            variants={slideUp}
          >
            <motion.h3
              className="text-2xl md:text-3xl font-semibold mb-2"
              variants={slideUp}
            >
              PALOMA REALTY LLP
            </motion.h3>
            <motion.div
              className="flex flex-col sm:flex-row gap-6 items-start"
              variants={slideUp}
            >
              <motion.div
                className="w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0 bg-white p-3 rounded-lg shadow-sm"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <Image
                  src="/paloma.png"
                  alt="Paloma Logo"
                  width={160}
                  height={160}
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <div className="flex-1 mt-2">
                <p className="text-gray-700 text-base sm:text-lg">
                  After having been in real estate for over a decade, in 2021,
                  we ventured into creating a luxurious residential project in
                  Tilak Nagar, Kanpur. This is an upcoming project which is
                  expected to be ready by 2029.
                </p>
              </div>
              <motion.div
                className="grid grid-cols-3 gap-4 mt-6"
                variants={staggerContainer}
              >
                <motion.div
                  className="aspect-video bg-white rounded-lg shadow-md overflow-hidden"
                  variants={slideUp}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src="/real1.png"
                      alt="Project 1"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                </motion.div>
                <motion.div
                  className="aspect-video bg-white rounded-lg shadow-md overflow-hidden"
                  variants={slideUp}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src="/real1.png"
                      alt="Project 2"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                </motion.div>
                <motion.div
                  className="aspect-video bg-white rounded-lg shadow-md overflow-hidden"
                  variants={slideUp}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src="/real1.png"
                      alt="Project 3"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4"
              variants={staggerContainer}
            >
              {["/real1.png", "/real1.png", "/real1.png"].map((src, index) => (
                <motion.div
                  key={index}
                  className="aspect-video bg-white rounded-lg shadow-md overflow-hidden"
                  variants={slideUp}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={src || "/placeholder.svg"}
                      alt={`Project ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div> */}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
