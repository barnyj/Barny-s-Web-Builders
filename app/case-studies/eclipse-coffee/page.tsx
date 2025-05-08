"use client"
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function EclipseCoffeeCaseStudy() {
  return (
    <>
      <Head>
        <title>Eclipse Coffee Co. — Minimalist Brand Identity</title>
      </Head>

      <main className="bg-background text-foreground">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">

          {/* Hero with Logo */}
          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mx-auto w-32 h-32 rounded-full overflow-hidden">
              <Image
                src="/eclipse-coffee-logo.png"
                alt="Eclipse Coffee Co. Logo"
                width={128}
                height={128}
                className= "object-cover"
                
              />
            </div>
            <h1 className="text-5xl font-extrabold">Eclipse Coffee Co.</h1>
            <p className="text-xl text-muted-foreground">Minimalist Brand Identity</p>
          </motion.div>

          {/* Gallery Section */}
          <section>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2 } }
              }}
            >
              {['/eclipse-coffee-mockup1.png', '/eclipse-coffee-mockup2.png', '/eclipse-coffee-mockup3.png'].map((src, idx) => (
                <motion.div
                  key={idx}
                  className="overflow-hidden rounded-xl"
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src={src}
                    alt={`Mockup ${idx + 1}`}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Content Sections */}
          <section className="space-y-16">
            {/* Background & Challenge */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-semibold mb-4">Background</h2>
                <p className="text-base leading-relaxed">
                  Eclipse Coffee Co. is a specialty roaster launching its first direct-to-consumer line. They wanted an identity that felt premium yet approachable, with enough flexibility to work across packaging, merch, and digital.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl font-semibold mb-4">Challenge</h2>
                <p className="text-base leading-relaxed">
                  Their existing logo was overly complex, didn’t scale well on small labels, and clashed with minimalist competitors. Eclipse needed a mark that carried their artisanal story without visual noise.
                </p>
              </motion.div>
            </div>

            {/* Process Steps */}
            <div className="space-y-12">
              {[
                { title: 'Discovery Workshop', items: [
                    'Interviewed founders to understand brand values: “precision, ritual, community.”',
                    'Audited 15 competitor identities to find whitespace in the market.'
                  ]
                },
                { title: 'Concept Exploration', items: [
                    'Sketched 20 logotype and monogram ideas.',
                    'Reduced to 3 finalists—two wordmarks, one monogram “☾”/“E” hybrid.'
                  ]
                },
                { title: 'Refinement', items: [
                    'Digitally rendered the “E” monogram with a single 1‑px stroke.',
                    'Paired it with Helvetica Neue Light for supporting type.'
                  ]
                },
                { title: 'Style Guide & Mockups', items: [
                    'Defined usage rules, clear space, and color (Black/White + Seasonal Accent).',
                    'Applied mark to bag mockups, rubber-stamped loyalty cards, and tote bags.'
                  ]
                }
              ].map((section, i) => (
                <motion.div
                  key={i}
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                >
                  <h3 className="text-xl font-medium">{section.title}</h3>
                  <ul className="list-disc list-inside text-base leading-relaxed space-y-1">
                    {section.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Outcome */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Outcome</h2>
              <ul className="list-disc list-inside text-base leading-relaxed space-y-2">
                <li>The new logo reduced file setup time by 30% (one single SVG, no extra layers).</li>
                <li>Packaging prototypes tested in-market scored 4.7/5 for “clarity of origin.”</li>
                <li>Brand guidelines handed off to printer, digital, and merch vendors in a single PDF.</li>
              </ul>
            </motion.div>

          </section>

        </div>
      </main>
    </>
  );
}
