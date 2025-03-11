'use client';

import Image from "next/image";
import { motion } from "framer-motion"


export default function BullionSection() {

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
//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   }

  return (
    <section  id="bullion"className="h-screen snap-start bg-gray-100 flex flex-col justify-center relative">
      <motion.div
        className="container max-w-6xl mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        {/* Industry Name */}
        <motion.h2 className="text-2xl md:text-3xl font-semibold mb-3" variants={slideUp}>
        LOREM IPSUM
        </motion.h2>

        <div>
          {/* Brand Section */}
          <motion.div className="flex flex-col md:flex-row gap-8 items-center" variants={slideUp}>
            {/* Brand Logo */}
            <motion.div className="w-40 h-40 flex-shrink-0" whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}>
              <Image
                src="/leather.jpg"
                alt="Pan East Logo"
                width={128}
                height={128}
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* Brand Description */}
            <div className="flex-1">
              <p className="text-gray-700 text-lg">
              orem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </motion.div>

          {/* Product Images Grid */}
          {/* <motion.div className="grid grid-cols-3 gap-4 mt-4" variants={staggerContainer}>
            <motion.div
              className="bg-white rounded shadow overflow-hidden h-50 w-50"
              variants={slideUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Image src="/shoe.png" alt="Project 1" width={56} height={56} className="w-full h-full object-contain" />
            </motion.div>
            <motion.div
              className="bg-white rounded shadow overflow-hidden h-50 w-50"
              variants={slideUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Image src="/shoe2.png" alt="Project 2" width={56} height={56} className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              className="bg-white rounded shadow overflow-hidden h-50 w-50"
              variants={slideUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Image src="/shoe3.png" alt="Project 3" width={56} height={56} className="w-full h-full object-contain" />
            </motion.div>
          </motion.div> */}
        </div>
      </motion.div>
    </section>
  )
}
