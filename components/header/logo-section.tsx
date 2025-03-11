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
        className={`${isHome ? "bg-white" : "bg-white"} py-4 px-6 flex items-center justify-between rounded-br-2xl ${
          !isHome && "shadow-md"
        }`}
      >
        <div className="flex items-center">
          <Link href={"/"} className="flex items-center">
            <Image src="/logo.png" alt="Pannalal" width={160} height={80} className="h-9 w-auto" priority />
          </Link>
          <div className={`border-l h-8 mx-4 ${isHome ? "border-gray-400" : "border-gray-200"}`}></div>
        </div>

        <button
          onClick={toggleMenu}
          className={`flex items-start flex-col font-medium ${isHome ? "text-gray-800" : "text-blue-900"}`}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-7 w-7" color="black" /> : <Menu className="h-7 w-7" color="black" />}
          <span className="text-sm text-black ml-1">{isMenuOpen ? "CLOSE" : "MENU"}</span>
        </button>
      </div>

      <SlideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}

