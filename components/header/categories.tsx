'use client';

import { Section } from "@/types";
import CategoryItem from "./category-item";

interface CategoriesProps {
  activeSection: string;
  setActiveSection: (id: string) => void;
  isHome: boolean;
  sections: Section[];
}

export default function Categories({ activeSection, setActiveSection, sections, isHome }: CategoriesProps) {
  // Function to scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
  };

  return (
    <div className="flex-1 flex justify-center">
      <div className="grid grid-cols-7 gap-4 md:gap-4 w-full max-w-5xl">
        {sections.map((section) => (
          <CategoryItem 
            key={section.id}
            icon={section.icon}
            label={section.label}
            bgColor={section.bgColor}
            isActive={activeSection === section.id}
            onClick={() => scrollToSection(section.id)}
            isHome={isHome}
          />
        ))}
      </div>
    </div>
  );
}