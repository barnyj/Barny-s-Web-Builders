"use client"

import { motion } from "framer-motion"

export default function WearYourStory() {
  return (
    <section id= "about" className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">We Design Your Story</h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            A great site does more than look good—it tells your tale. We fuse sleek, modern design with smart automations so your online presence captures who you are, why you do what you do, and how you make a difference.
          </p>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
