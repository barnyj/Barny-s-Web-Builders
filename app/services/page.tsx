"use client"
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { PenTool, Code, Search, Activity, Cloud, Settings } from 'lucide-react'

const services = [
  {
    title: 'Custom Website Design',
    description: 'Crafting bespoke websites with modern aesthetics and intuitive UX to showcase your brand uniquely.',
    icon: PenTool,
  },
  {
    title: 'Responsive Web Development',
    description: 'Mobile-first, responsive builds that perform flawlessly on every device with clean, scalable code.',
    icon: Code,
  },
  {
    title: 'SEO & Analytics',
    description: 'Boost your visibility with SEO best practices and track growth via integrated analytics dashboards.',
    icon: Search,
  },
  {
    title: 'AI-Powered Automation',
    description: 'Implement AI workflows for email outreach, follow-ups, and lead management, saving you time.',
    icon: Activity,
  },
  {
    title: 'Booking & Scheduling',
    description: 'Seamless calendar integrations and custom booking systems to streamline appointments.',
    icon: Cloud,
  },
  {
    title: 'Branding & Graphic Design',
    description: 'Unified visual identities, from logos to digital assets, that resonate with your audience.',
    icon: Settings,
  },
]

export default function ServicesPage() {
  return (
    <section
      id="services"
      className="relative py-20 bg-gradient-to-r from-[#7fe5f0] to-[#3b7a80] overflow-hidden"
    >
      {/* Decorative Blob */}
      <svg
        className="absolute top-0 left-1/2 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/3 opacity-20"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(300,300)">
          <path
            d="M120,-160C160,-120,180,-60,190,0C180,60,160,120,120,160C60,180,0,190,-60,180C-120,160,-180,120,-160,60C-140,0,-60,-60,-40,-120C-20,-180,60,-200,120,-160Z"
            fill="#ffffff"
          />
        </g>
      </svg>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-5xl font-extrabold text-white text-center mb-16">
          Our Services
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                className="bg-white bg-opacity-90 backdrop-blur-lg rounded-2xl p-8 shadow-lg flex flex-col h-full"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="w-12 h-12 flex items-center justify-center mb-4 rounded-full bg-[#58a3aa] text-white">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  {s.title}
                </h3>
                <p className="text-base text-[#3b7a80] flex-grow">
                  {s.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="#contact"
            className="inline-block bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-[#3b7a80] transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  )
}