"use client"

import { Search } from "lucide-react"
import { Button } from "../ui/button"

interface SearchButtonProps {
  isHome: boolean
}

export default function SearchButton({ isHome }: SearchButtonProps) {
  return (
    <div className="p-2">
      <Button
        // title="Search"
        size={'icon'}
        className={`p-2 rounded-md transition-all duration-300 ${
          isHome ? "bg-transparent hover:bg-white/10" : "bg-white shadow hover:bg-gray-50"
        }`}
      >
        <Search className={`h-5 w-5 ${isHome ? "text-gray-100" : "text-gray-500"}`} />
      </Button>
    </div>
  )
}

