'use client';

import { Section } from "@/types";
import { Home, Droplet, DollarSign, Cpu, Gem, Briefcase, Package } from "lucide-react";

export const sections: Section[] = [
  {
    id: "real-estate",
    label: "Real Estate",
    bgColor: "bg-blue-700",
    title: "SUKHDHAM INFRASTRUCTURES LLP",
    image: "/real-estate.png",
    buttonText: "Explore Properties",
    icon: <Home className="w-5 h-5 text-white" />
  },
  {
    id: "edible-oil",
    label: "Edible Oil",
    bgColor: "bg-red-600",
    title: "VAIBHAV EDIBLES PRIVATE LIMITED",
    image: "/edible-oil.png",
    buttonText: "Discover Our Products",
    icon: <Droplet className="w-5 h-5 text-white" />
  },
  {
    id: "bullion",
    label: "Bullion",
    bgColor: "bg-amber-500",
    title: "Precious Metal Trading",
    image: "/bullion.png",
    buttonText: "Invest in Bullion",
    icon: <DollarSign className="w-5 h-5 text-white" />
  },
  {
    id: "technology",
    label: "Technology",
    bgColor: "bg-orange-500",
    title: "Advanced Technology Solutions",
    buttonText: "Explore Technology",
    icon: <Cpu className="w-5 h-5 text-white" />
  },
  {
    id: "jewellery",
    label: "Jewellery",
    bgColor: "bg-red-600",
    title: "P B SOCIETY JEWELLERS",
    description: "Having entered into the Jewellery trade in the year 1910 with Pannalal Mahesh Chandra Jewellers, today we are one of the oldest Jewellery houses in India. However, in the year 1988, to not only expand but to also cement our legacy in the Jewellery trade, PB Society Jewellers, came into existence. Named after our forefather Pannalal Banarsidasji, this retail outlet was established in Birhana Road, the prime jewellery market of Kanpur city. With over 100 years of experience and our past three generations in this line, PB Society Jewellers strives for quality – quality in our products and quality in our customer relationships.",
    icon: <Gem className="w-5 h-5 text-white" />
  },
  {
    id: "leather-chemicals",
    label: "Leather & Chemicals",
    bgColor: "bg-red-400",
    title: "Leather & Chemical Products",
    buttonText: "View Products",
    icon: <Briefcase className="w-5 h-5 text-white" />
  },
  {
    id: "polymer-products",
    label: "Polymer Products",
    bgColor: "bg-green-700",
    title: "Innovative Polymer Solutions",
    buttonText: "Learn More",
    icon: <Package className="w-5 h-5 text-white" />
  }
];