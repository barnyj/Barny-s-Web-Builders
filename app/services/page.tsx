"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code, Palette, Globe, ShoppingBag, BarChart, Smartphone, X } from "lucide-react"

// Define the service type
type Service = {
  id: number
  title: string
  summary: string
  detail: string
  icon: React.ReactNode
  color: string
}

// Services data
const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    summary: "Custom websites built with modern technologies",
    detail:
      "Our web development service delivers cutting-edge websites that combine stunning design with powerful functionality. We leverage the latest technologies like Next.js, React, and TypeScript to create fast, responsive, and SEO-friendly websites that drive results. Our development process focuses on performance optimization, accessibility, and scalable architecture to ensure your website can grow with your business. We implement best practices for code quality and maintainability, making future updates seamless. Each project includes thorough testing across devices and browsers to guarantee a flawless user experience that converts visitors into customers.",
    icon: <Code size={24} />,
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: 2,
    title: "UI/UX Design",
    summary: "Intuitive interfaces with beautiful aesthetics",
    detail:
      "Our UI/UX design service transforms complex user journeys into intuitive, engaging experiences. We begin with comprehensive user research and persona development to understand your audience's needs and behaviors. Our design process combines strategic thinking with creative execution, resulting in interfaces that are both beautiful and functional. We create detailed wireframes, interactive prototypes, and design systems that ensure consistency across your digital products. Our approach prioritizes accessibility and usability while maintaining visual appeal, helping you build products that users love to interact with and that drive measurable business outcomes.",
    icon: <Palette size={24} />,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Digital Marketing",
    summary: "Strategies to grow your online presence",
    detail:
      "Our digital marketing service provides comprehensive strategies to increase your brand visibility and drive qualified traffic to your website. We develop customized marketing plans that combine SEO, content marketing, social media, and paid advertising to reach your target audience effectively. Our data-driven approach allows us to continuously optimize campaigns for maximum ROI, focusing on metrics that matter to your business. We conduct thorough market research and competitor analysis to identify opportunities and position your brand for success. Regular reporting and analytics give you clear insights into performance, ensuring transparency and allowing for strategic adjustments as your business evolves.",
    icon: <Globe size={24} />,
    color: "from-green-500 to-emerald-400",
  },
  {
    id: 4,
    title: "E-commerce Solutions",
    summary: "Online stores with seamless checkout experiences",
    detail:
      "Our e-commerce solutions transform your products into compelling online shopping experiences that drive sales and customer loyalty. We build custom online stores with intuitive product browsing, secure payment processing, and streamlined checkout flows that minimize abandonment. Our implementations include inventory management, order tracking, and customer account features that make managing your store effortless. We optimize for mobile shopping and implement conversion-focused design patterns that guide customers from discovery to purchase. Additionally, we integrate analytics and marketing tools that help you understand customer behavior and grow your e-commerce business through data-informed decisions.",
    icon: <ShoppingBag size={24} />,
    color: "from-amber-500 to-orange-400",
  },
  {
    id: 5,
    title: "Analytics & Reporting",
    summary: "Data-driven insights to inform decisions",
    detail:
      "Our analytics and reporting service transforms raw data into actionable business intelligence that drives strategic decision-making. We implement comprehensive tracking solutions that capture meaningful user interactions across your digital properties. Our custom dashboards visualize key performance indicators in real-time, allowing you to monitor business health at a glance. We go beyond surface-level metrics to provide deep insights into user behavior, conversion patterns, and revenue attribution. Our analysis includes trend identification, anomaly detection, and predictive modeling to help you anticipate market changes. Regular reporting includes strategic recommendations based on data findings, ensuring you can take immediate action to improve performance.",
    icon: <BarChart size={24} />,
    color: "from-red-500 to-rose-400",
  },
  {
    id: 6,
    title: "Mobile App Development",
    summary: "Native and cross-platform mobile applications",
    detail:
      "Our mobile app development service creates powerful, user-friendly applications that extend your digital presence to iOS and Android devices. We specialize in both native and cross-platform development, recommending the best approach based on your specific requirements and budget. Our development process emphasizes performance optimization, offline functionality, and intuitive navigation patterns that feel natural on mobile devices. We implement secure authentication, data synchronization, and push notifications to keep users engaged. Each app undergoes rigorous testing across devices and operating system versions to ensure reliability. Post-launch, we provide ongoing support and updates to maintain compatibility with new OS releases and evolving user expectations.",
    icon: <Smartphone size={24} />,
    color: "from-indigo-500 to-violet-400",
  },
]

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  // Close expanded card when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (selectedService && gridRef.current && !gridRef.current.contains(e.target as Node)) {
        setSelectedService(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [selectedService])

  return (
    <div className="min-h-screen w-full py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions to help your business thrive in the online world
          </p>
        </motion.div>

        <div ref={gridRef} className="relative">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                isSelected={selectedService?.id === service.id}
                isAnySelected={selectedService !== null}
                onClick={() => setSelectedService(selectedService?.id === service.id ? null : service)}
                onClose={() => setSelectedService(null)}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

type ServiceCardProps = {
  service: Service
  isSelected: boolean
  isAnySelected: boolean
  onClick: () => void
  onClose: () => void
  index: number
}

function ServiceCard({ service, isSelected, isAnySelected, onClick, onClose, index }: ServiceCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: isAnySelected && !isSelected ? 0.3 : 1,
        y: 0,
        scale: isSelected ? 1 : 1,
        transition: {
          duration: 0.5,
          opacity: { duration: 0.3 },
        },
      }}
      transition={{
        layout: { type: "spring", damping: 25, stiffness: 200 },
        duration: 0.5,
        delay: !isAnySelected ? index * 0.1 : 0,
        ease: [0.25, 0.1, 0.25, 1.0], // Custom easing curve
      }}
      whileHover={{ scale: isSelected ? 1 : 1.05, transition: { duration: 0.2 } }}
      onClick={!isSelected ? onClick : undefined}
      className={`relative bg-white/10 backdrop-blur-lg rounded-xl p-6 overflow-hidden group ${
        isSelected ? "md:col-span-2 lg:col-span-3 cursor-default" : "cursor-pointer"
      }`}
    >
      {isSelected && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onClose()
          }}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
        >
          <X size={20} className="text-white" />
          <span className="sr-only">Close</span>
        </button>
      )}

      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

      <div className={`inline-flex items-center justify-center p-3 rounded-lg bg-gradient-to-br ${service.color} mb-4`}>
        {service.icon}
      </div>

      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
      <p className="text-gray-300">{service.summary}</p>

      {!isSelected && (
        <div className="mt-4 text-sm font-medium text-white/70 flex items-center">
          <span>Learn more</span>
          <motion.div className="ml-2" initial={{ x: 0 }} whileHover={{ x: 5 }}>
            →
          </motion.div>
        </div>
      )}

      <AnimatePresence>
        {isSelected && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 pt-6 border-t border-white/20"
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed">{service.detail}</p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8"
            >
              <button
                className={`px-6 py-2 rounded-lg bg-gradient-to-r ${service.color} text-white font-medium hover:opacity-90 transition-opacity`}
              >
                Get Started
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
