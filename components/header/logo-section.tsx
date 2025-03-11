"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import SlideMenu from "../slide-menu"

interface LogoSectionProps {
  isHome?: boolean
}

export default function LogoSection({ isHome = false }: LogoSectionProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <div
        className={`${
          isHome ? "bg-white" : "bg-white"
        } py-3 sm:py-4 md:py-5 px-4 sm:px-6 md:px-8 flex items-center justify-between rounded-br-2xl sm:rounded-br-3xl ${
          !isHome && "shadow-md sm:shadow-lg md:shadow-xl"
        }`}
      >
        <div className="flex items-center">
          <Link href={"/"} className="flex items-center">
            <Image
              src="/logo.png"
              alt="Pannalal"
              width={160}
              height={80}
              className="h-8 sm:h-9 md:h-10 w-auto"
              priority
              sizes="(max-width: 640px) 120px, (max-width: 768px) 140px, 160px"
            />
          </Link>
          <div
            className={`border-l h-6 sm:h-8 md:h-10 mx-3 sm:mx-4 ${isHome ? "border-gray-400" : "border-gray-200"}`}
          ></div>
        </div>

        <button
          onClick={toggleMenu}
          className={`flex items-center sm:items-start flex-row sm:flex-col font-medium ${
            isHome ? "text-gray-800" : "text-blue-900"
          }`}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" color="black" />
          ) : (
            <Menu className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" color="black" />
          )}
          <span className="text-xs sm:text-sm text-black ml-1 sm:ml-0">{isMenuOpen ? "CLOSE" : "MENU"}</span>
        </button>
      </div>

      <SlideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}

