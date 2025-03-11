"use client"

import type { ReactNode } from "react"

interface CategoryItemProps {
  icon: ReactNode
  label: string
  bgColor: string
  isActive: boolean
  isHome: boolean
  onClick: () => void
}

export default function CategoryItem({ icon, label, bgColor, isActive, isHome, onClick }: CategoryItemProps) {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center gap-2 cursor-pointer transition-all duration-300 ${
        isActive ? "scale-110" : "opacity-90"
      }`}
    >
      <div
        className={`${bgColor} p-2 rounded-md w-10 h-10 mt-4 flex items-center justify-center transition-transform hover:scale-105`}
      >
        {icon}
      </div>
      <span className={`text-xs whitespace-nowrap transition-colors ${isHome ? `text-gray-800` : "text-gray-800"} ${isActive ? "font-bold" : "font-regular"
      } ${
          isActive ? "font-bold underline decoration-2 underline-offset-4" : "font-regular"
        }`}>
        {label}
      </span>
    </div>
  )
}

