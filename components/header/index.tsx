"use client";

import { Section } from "@/types";
import Categories from "./categories";
import LogoSection from "./logo-section";
import SearchButton from "./search-button";
import { useEffect, useState } from "react";

interface HeaderProps {
  activeSection: string;
  setActiveSection: (id: string) => void;
  sections: Section[];
}

export default function Header({
  activeSection,
  setActiveSection,
  sections,
}: HeaderProps) {
  const isHome = activeSection === "home";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full duration-300 ${
        isHome && !scrolled ? "bg-transparent" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between h-20 w-full">
        <LogoSection isHome={isHome && !scrolled} />
        <div className="hidden md:block">
          <Categories
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            sections={sections}
            isHome={isHome && !scrolled}
          />
        </div>
        <SearchButton isHome={isHome && !scrolled} />
      </div>
    </nav>
  );
}
