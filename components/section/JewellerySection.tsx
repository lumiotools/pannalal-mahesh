"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function JewellerySection() {
  // Simple fade-in animation
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="jewellery"
      className="min-h-screen py-12 sm:py-16 md:py-20 snap-start bg-gray-100 flex flex-col justify-center relative"
    >
      <motion.div
        className="container max-w-6xl mx-auto px-4 sm:px-6 md:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
      >
        {/* Industry Name */}
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-center md:text-left"
          {...fadeIn}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          P B SOCIETY JEWELLERS
        </motion.h2>

        <div className="space-y-6 sm:space-y-8">
          {/* Brand Section */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
            {/* Brand Logo */}
            <motion.div
              className="w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0 mx-auto md:mx-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Image
                src="/jewellery.png"
                alt="PB Society Jewellers Logo"
                width={160}
                height={160}
                className="w-full h-full object-contain rounded"
                sizes="(max-width: 640px) 128px, 160px"
              />
            </motion.div>

            {/* Brand Description */}
            <motion.div className="flex-1" {...fadeIn} transition={{ duration: 0.5, delay: 0.4 }}>
              <p className="text-gray-700 text-base sm:text-lg text-center md:text-left">
                Having entered into the Jewellery trade in the year 1910 with Pannalal Mahesh Chandra Jewellers, today
                we are one of the oldest Jewellery houses in India. However, in the year 1988, to not only expand but to
                also cement our legacy in the Jewellery trade, PB Society Jewellers, came into existence. Named after
                our forefather Pannalal Banarsidasji, this retail outlet was established in Birhana Road, the prime
                jewellery market of Kanpur city. With over 100 years of experience and our past three generations in
                this line, PB Society Jewellers strives for quality – quality in our products and quality in our
                customer relationships.
              </p>
            </motion.div>
          </div>

          {/* Product Images Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {[
              { src: "/je1.jpg", alt: "Jewellery 1", objectFit: "contain" },
              { src: "/je2.jpg", alt: "Jewellery 2", objectFit: "cover" },
              { src: "/je3.jpg", alt: "Jewellery 3", objectFit: "contain" },
            ].map((image, index) => (
              <motion.div
                key={index}
                className="bg-white rounded shadow overflow-hidden aspect-square"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
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

