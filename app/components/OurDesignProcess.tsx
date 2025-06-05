// ─── file: /components/OurDesignProcess.tsx ─────────────────────────────────

"use client";

import React, { useRef } from "react";

// Import your chosen icons from lucide-react
import {
  Compass,      // for “Discovery”
  Target,       // for “Strategy”
  Layout,       // for “Design”
  Code,         // for “Development”
  Rocket,       // for “Launch”
  LifeBuoy,     // for “Support”
} from "lucide-react";

export default function OurDesignProcess() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Six steps, each now has an `icon` property (a React component)
  const steps = [
    {
      icon: <Compass className="h-10 w-10 text-primary mb-4" />,
      title: "Discovery",
      description:
        "Kickoff call to gather goals, branding, budget, and must-have features so we’re 100% aligned from day one.",
    },
    {
      icon: <Target className="h-10 w-10 text-primary mb-4" />,
      title: "Strategy",
      description:
        "Competitive audit, buyer-persona creation, sitemap + feature list—so every page and function is mapped to your KPIs.",
    },
    {
      icon: <Layout className="h-10 w-10 text-primary mb-4" />,
      title: "Design",
      description:
        "Low-fidelity wireframes → review → high-fidelity mockups (brand colors, fonts, imagery) for desktop + mobile.",
    },
    {
      icon: <Code className="h-10 w-10 text-primary mb-4" />,
      title: "Development",
      description:
        "Translate approved mockups into code (Webflow/Next.js). Weekly dev snapshots + cross-device QA ensure pixel-perfect builds.",
    },
    {
      icon: <Rocket className="h-10 w-10 text-primary mb-4" />,
      title: "Launch",
      description:
        "DNS/hosting switch, SSL + redirects, Analytics/Search Console setup, then a 30-minute CMS training session so you’re self-sufficient.",
    },
    {
      icon: <LifeBuoy className="h-10 w-10 text-primary mb-4" />,
      title: "Support",
      description:
        "30-day bug fix period, optional monthly check-ins for analytics review/A-B testing, and tiered maintenance packages if you need ongoing tweaks.",
    },
  ];

  // Scroll left by one container width
  const scrollLeft = () => {
    if (!containerRef.current) return;
    containerRef.current.scrollBy({
      left: -containerRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  // Scroll right by one container width
  const scrollRight = () => {
    if (!containerRef.current) return;
    containerRef.current.scrollBy({
      left: containerRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="process"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/20 to-background"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
          Our Design Process
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-12">
          Here’s exactly how we take you from idea to launch—step by step.
        </p>

        {/* Scrollable card container (hides native scrollbar) */}
        <div
          ref={containerRef}
          className="flex space-x-8 overflow-x-auto hide-scrollbar pb-4"
        >
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="min-w-[300px] h-[400px] p-8 m-4 bg-background 
                         rounded-3xl shadow-lg flex flex-col justify-between 
                         hover-lift transition-all duration-300 ease-in-out 
                         border-2 border-transparent hover:border-primary/10"
            >
              {/* Icon at the top */}
              <div className="flex justify-center">{step.icon}</div>

              {/* Number Circle below the icon */}
              <div
                className="w-10 h-10 mx-auto mb-4 bg-primary text-primary-foreground 
                           rounded-full flex items-center justify-center text-lg font-semibold"
              >
                {idx + 1}
              </div>

              {/* Step Title */}
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {step.title}
              </h3>

              {/* Step Description (wrapped inside the card) */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Left Arrow Button */}
        <button
          onClick={scrollLeft}
          aria-label="Scroll left"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 
                     items-center justify-center rounded-full bg-background/75 text-foreground 
                     shadow-md hover:bg-background/90
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={scrollRight}
          aria-label="Scroll right"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 
                     items-center justify-center rounded-full bg-background/75 text-foreground 
                     shadow-md hover:bg-background/90
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
