"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Home } from "lucide-react"

interface SlideMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function SlideMenu({ isOpen, onClose }: SlideMenuProps) {
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Close menu when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [onClose])

  const menuItems = [{ icon: <Home className="w-5 h-5" />, label: "About Us", href: "/about" }]

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Slide Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-full md:w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 h-full overflow-y-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-900">Menu</h2>
          </div>

          <nav className="space-y-6">
            <ul className="space-y-4">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md transition-colors"
                  >
                    <div className="w-8 h-8 flex items-center justify-center">{item.icon}</div>
                    <span className="text-gray-800 font-medium">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

