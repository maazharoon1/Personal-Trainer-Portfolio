"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dumbbell } from "lucide-react";

const quotes = [
  "No Pain, No Gain 💪",
  "Push Yourself, Because No One Else Will 🏋️",
  "The Body Achieves What the Mind Believes 🧠",
  "Don’t Limit Your Challenges. Challenge Your Limits 🔥",
  "One More Rep. Always One More. 🏆",
];

export default function Loader() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 3000); // har 3 second me change
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background text-foreground">
      {/* Spinner */}
      <motion.div
        className="mb-6"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
      >
        <Dumbbell size={50} className="text-primary" />
      </motion.div>

      {/* Quotes */}
      <AnimatePresence mode="wait">
        <motion.p
          key={quoteIndex} // important for AnimatePresence
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-lg md:text-xl font-semibold text-center px-4 max-w-2xl"
        >
          {quotes[quoteIndex]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
