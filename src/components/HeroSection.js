"use client";

import { cn } from "@/lib/utils";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { easeIn, motion } from "framer-motion";
import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import React from "react";


const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
      className="w-full h-screen bg-fixed flex items-center px-5 sm:px-10"
      style={{
        backgroundImage: "url('/heroImageC.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "right top",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Glassmorphism container */}
      <div className="xl:backdrop-blur-xs sm:bottom-[10%] sm:left-[10%] lg:relative lg:top-0 lg:bottom-0 absolute left-0 bottom-0  bg-black/40 rounded-xl p-6 sm:p-8 max-w-2xl text-white flex flex-col gap-5">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
          Transform Your Body, <br className="hidden sm:block" /> Transform Your Life
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
          I’m Hamza — a certified personal trainer passionate about helping people unlock
          their peak strength and fitness. With years of expertise in{" "}
          <span className="font-semibold text-white">strength training</span>,{" "}
          <span className="font-semibold text-white">bodybuilding</span>, and{" "}
          <span className="font-semibold text-white">custom workout programs</span>, I guide you
          through every rep, every set, every challenge — until you become the
          strongest version of yourself.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
          <p className="text-sm sm:text-base text-gray-300">
            Your transformation starts today.
          </p>
          <Link href="/contact">
            <motion.button
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.07 }}
              transition={{ duration: 0.23, ease: easeIn }}
              className={cn(
                "px-6 py-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
              )}
            >
              Start Training
            </motion.button>
          </Link>
        </div>
      </div>
      <div className="fixed z-50 bottom-[40%] right-[1%]  ">

        <div className="bg-accent/10 flex items-center py-3 rounded-full px-1 gap-3 flex-col "> 

           <Link href={"https://www.instagram.com/coach.ham_za18"} target="blank">
           <Instagram className="w-6 h-6"/>
           </Link>
           <Link href={"https://www.facebook.com/hamza.haroon.7927"} target="blank">
    <Facebook className="w-7 h-7"/>
    </Link>
    <Link href={"https://wa.me/923342473211"}>
      <FontAwesomeIcon icon={faWhatsapp} style={{width:"22px", height:"22px"}}/>
      </Link>
      </div>

       </div>
    </motion.div>
  );
};

export default HeroSection;
