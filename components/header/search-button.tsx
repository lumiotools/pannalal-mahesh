"use client"

import { Search } from "lucide-react"
// import { Button } from "../ui/button"

interface SearchButtonProps {
  isHome: boolean
}

export default function SearchButton({ isHome }: SearchButtonProps) {
  return (
    <div className="p-2">
      <button
        // title="Search"
        // size={'icon'}
        className={`p-2 rounded-md transition-all duration-300 ${
          isHome ? " hover:bg-white/10 bg-white" : "bg-white shadow hover:bg-gray-50"
        }`}
      >
        <Search className={`h-6 w-6 ${isHome ? "text-gray-500 " : "text-gray-500"}`} />
      </button>
    </div>
  )
}

