"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "../ui/card"

export default function TechnologySection() {
  const awards = [
    {
      name: "Forbes 30 Under 30",
      logo: "/images/logos/Forbes logo.png",
      className: "py-2",
    },
    {
      name: "CES Innovation Award",
      logo: "/images/logos/CSE logo.png",
    },
    {
      name: "Business Standard",
      logo: "/images/logos/business-standard.png",
    },
    {
      name: "Deccan Herald",
      logo: "/images/logos/Deccan Herald.png",
      className: "invert py-1",
    },
    {
      name: "Housing Wire",
      logo: "/images/logos/housing wire.svg",
    },
    {
      name: "New Atlas",
      logo: "/images/logos/new atlas.svg",
      className: "max-h-10 max-w-20 object-cover w-full h-[32px] pt-1",
    },
    {
      name: "Wowtale",
      logo: "/images/logos/wowtale.png",
      className: "",
    },
    {
      name: "Yahoo",
      logo: "/images/logos/yahoo.png",
    },
  ]

  const scrollCompanies = [...awards, ...awards]

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
    <section
      id="technology"
      className="min-h-screen py-12 sm:py-16 md:py-20 snap-start bg-[#E1CFA6] flex flex-col justify-center relative"
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-left"
            // variants={slideUp}
          >
            LUMIO PARTNERS PVT LTD
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-7">
            <motion.div className="flex-shrink-0" variants={imageVariants} whileHover="hover">
              <Image
                src="/favicon-light.png"
                width={150}
                height={150}
                alt="Lumio Partners Logo"
                className="w-24 h-24 md:w-32 md:h-32 lg:w-[150px] lg:h-[150px]"
              />
            </motion.div>
            <motion.p
              className="text-base md:text-lg text-gray-700 leading-relaxed mt-4 md:mt-0"
              variants={itemVariants}
            >
              At Lumio AI, we design cutting-edge, customized Enterprise AI solutions to optimize sales, manufacturing,
              and operational workflows for SMBs. Our expertise spans AI agents, business copilots, AI-powered document
              search, multi-modal AI systems, multi-agent frameworks, and tailored AI solutions to meet the unique needs
              of our customers. Lumio makes AI accessible, practical, and built for growth—delivering high-quality,
              high-impact solutions with competitive turnaround times and measurable ROI.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        >
          <Card className="bg-background">
            <CardContent className="p-0 sm:p-0 overflow-hidden relative">
              <div className="rounded-xl absolute top-0 left-0 w-full h-full z-[1] overflow-hidden flex justify-between">
                <div className="w-16 sm:w-24 md:w-32 h-full bg-gradient-to-r from-white to-transparent" />
                <div className="w-16 sm:w-24 md:w-32 h-full bg-gradient-to-l from-white to-transparent" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-center relative z-10">Recognition & Awards</h3>
              <div className="w-full relative z-10">
                <div
                  className="flex w-max animate-scroll"
                  style={{
                    animationDuration: "30s",
                    animationTimingFunction: "linear",
                    animationIterationCount: "infinite",
                  }}
                >
                  {scrollCompanies.map((awards, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 flex justify-center items-center px-4 sm:px-6 md:px-8"
                      id={`a5w3y4_${index}`}
                    >
                      <img
                        src={awards.logo || "/placeholder.svg"}
                        alt={awards.name}
                        className={cn(
                          "h-8 sm:h-10 md:h-12 max-w-[80px] sm:max-w-[100px] md:max-w-[120px] object-contain",
                          awards.className,
                        )}
                        id={`bbjzhn_${index}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <style jsx global>{`
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  .animate-scroll {
    animation: scroll 30s linear infinite;
  }
  @media (max-width: 640px) {
    .animate-scroll {
      animation-duration: 20s;
    }
  }
  @media (max-width: 768px) {
    .animate-scroll {
      animation-duration: 25s;
    }
  }
`}</style>
    </section>
  )
}

