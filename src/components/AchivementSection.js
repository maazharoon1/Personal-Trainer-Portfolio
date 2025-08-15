"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

/**
 * AchievementSection
 * - Hover a row (desktop) to see the image preview on the right.
 * - Tap a row (mobile) to toggle its preview beneath the item.
 * - Keyboard accessible (focus shows preview).
 *
 * Usage:
 * <AchievementSection />
 *
 * You can also pass your own array:
 * <AchievementSection items={myArray} />
 */


const defaultItems = [
  {
    title: "Open Karachi Building",
    image: "/HeroSectionImage.png",
    year: "2019",
    description: "Secured 2nd place in the prestigious Open Karachi Bodybuilding Championship, competing against top athletes from across the city and showcasing exceptional conditioning and strength."
  },
  {
    title: "All Over Pakistan Bronze Medal",
    image: "/HeroSectionImage.png",
    year: "2020",
    description: "Achieved 3rd position at the national bodybuilding event, representing Karachi on a big stage and earning recognition for balanced physique, dedication, and discipline."
  },
  {
    title: "Mr. Jr Sindh",
    image: "/HeroSectionImage.png",
    year: "2022",
    description: "Crowned Mr. Junior Sindh after months of intense training and strict nutrition, demonstrating peak performance, symmetry, and unmatched determination."
  },
  {
    title: "Mr. Jr Karachi",
    image: "/HeroSectionImage.png",
    year: "2022",
    description: "Won the Mr. Junior Karachi title by outperforming the best young talents in the city, highlighting strength, stage presence, and flawless posing."
  },
  {
    title: "Mr. Jr Pakistan",
    image: "/HeroSectionImage.png",
    year: "2024",
    description: "Earned the prestigious Mr. Junior Pakistan title, competing at the highest level and standing out for exceptional muscle definition, confidence, and overall performance."
  },
];


export default function AchievementSection({ items = defaultItems }) {
  const [hovered, setHovered] = useState(0); // default show first on load
  const [openIndex, setOpenIndex] = useState(null); // for mobile toggle

  // helper to decide if item is active (hover on desktop OR toggled open on mobile)
  const isActive = (index) =>
    typeof window !== "undefined" && window.innerWidth >= 768
      ? hovered === index
      : openIndex === index;

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h3 className="text-3xl font-semibold mb-15 text-center ">Achievements</h3>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left: list */}
        <div className="md:w-1/2 space-y-3">
          {items.map((item, idx) => {
            const active = isActive(idx);
            return (
              <div
                key={idx}
                // make accessible as a button-like item
                role="button"
                tabIndex={0}
                aria-expanded={active}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(idx)}
                onBlur={() => {
                  // if focus leaves and not clicking, clear hover
                  setHovered(null);
                }}
                onClick={() =>
                  setOpenIndex((prev) => (prev === idx ? null : idx))
                }
                className={`group relative w-full rounded-lg border px-4 py-4 cursor-pointer transition-shadow focus:outline-none focus:ring-2 focus:ring-primary/40 ${
                  active
                    ? "bg-gradient-to-r from-primary/5 to-transparent border-primary/30 shadow-lg"
                    : "bg-white/5 border-border"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.year}
                    </p>
                  </div>

                  <div className="flex items-center">
                    <svg
                      className={`w-5 h-5 transform transition-transform ${
                        active ? "rotate-90" : "rotate-0"
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.23 4.21a.75.75 0 011.06 0L13.5 10.4a.75.75 0 01-1.06 1.06L6.23 5.27a.75.75 0 010-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                {/* Mobile toggle content (visible when openIndex matches) */}
          
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                      className="mt-3 md:hidden overflow-hidden"
                    >
                      <p className="text-sm text-muted-foreground mb-3">
                        {item.description}
                      </p>
                      <div className="w-full rounded-md overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={800}
                          height={450}
                          style={{ width: "100%", height: "auto", objectFit:"cover"  }}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Right: preview (desktop only) */}
      <div className="md:w-1/2 hidden md:flex items-center justify-center">
  <div className="w-full h-[320px] md:h-[420px] relative rounded-xl border overflow-hidden shadow-lg bg-background">
    <AnimatePresence mode="wait">
      {hovered !== null ? (
        <motion.div
          key={hovered}
          initial={{ opacity: 0, x: 20, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -20, scale: 0.98 }}
          transition={{ duration: 0.35 }}
          className="absolute inset-0 flex items-center bg-background justify-center"
        >
          <Image
            src={items[hovered]?.image || items[0].image}
            alt={items[hovered]?.title || "achievement"}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{
              objectFit: "contain",       // <-- show full image
              objectPosition: "center",
              background: "rgba(0,0,0,0.6)" // optional: nice backdrop
            }}
          />
          {/* overlay text still fine */}
          <div className="absolute left-4 bottom-4 ">
            <h4 className="font-semibold text-lg">{items[hovered]?.title}</h4>
           <p className="text-sm text-muted-foreground mb-2">{items[hovered]?.description}</p>
            <p className="text-sm opacity-90">{items[hovered]?.year}</p>
          </div>
        </motion.div>
      ) : (
                       <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex items-center justify-center bg-accent  text-muted-foreground"
                >
                  <div className="text-center px-6">
                    <p className="text-sm">Hover an item to preview</p>
                  </div>
                </motion.div>      )}
    </AnimatePresence>
  </div>
</div>
      </div>
    </section>
  );
}

