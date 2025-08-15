"use client";
import { easeIn, easeOut, motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
      className="rounded-4xl px-4 lg:px-0 mx-auto max-w-11/12 xl:w-[70%] mt-48 sm:mt-72 md:mt-10 
                 backdrop-blur-3xl dark:bg-transparent bg-white overflow-hidden flex justify-around items-center
                 md:bg-gradient-to-l md:dark:from-gray-300/20 dark:to-100% to-70% md:dark:to-black md:to-white md:from-gray-900/20"
    >
      {/* Image Section */}
      <motion.div
      initial={{opacity:0 }}
      whileInView={{opacity:1}}
      transition={{duration :0.2 , ease : easeOut}}
      className="hidden md:block lg:min-w-[30%] md:min-w-[37.5%] ">
        <Image
          src="/HeroSectionImage.png"
          alt="Hamza Haroon Gym Trainer"
          width={300}
          height={300}
          className="rounded-lg object-cover"
        />
      </motion.div>

      {/* Text Section */}

      <motion.div
      initial={{opacity:0 ,  }}
      whileInView={{opacity:0.9 }}
      transition={{duration :2 }}
      className="md:max-w-[80%] lg:max-w-[70%]">
        <div className="flex flex-col gap-5 md:gap-10 sm:gap-7 mx-2 px-2 py-10 text-gray-700 dark:text-gray-300">
          <h1 className="sm:text-2xl md:text-3xl lg:text-[40px] text-xl font-semibold text-foreground">
           About Me
          </h1>

          {/* Large Screen Description */}
          <p className="lg:text-xl md:text-lg hidden md:block">
            I’m Hamza Haroon, a certified personal trainer with over 6 years of experience helping clients transform their bodies and lifestyles. My expertise includes strength training, bodybuilding, HIIT workouts, and tailored fitness programs designed for all fitness levels.
            <br />
            <br />
            Over the years, I’ve trained in top fitness centers like Optimum Fitness, Pulse Fitness, and Edge Physic, earning multiple titles including Mr. Jr Sindh and Mr. Jr Karachi. My mission is simple — to guide, inspire, and push you beyond your limits.
          </p>

          {/* Mobile Description */}
          <p className="lg:text-xl sm:text-[14px] md:text-lg md:hidden">
            Certified personal trainer and fitness enthusiast with years of experience in strength training, bodybuilding, and custom workout programs. I’m here to guide, motivate, and help you achieve the body and lifestyle you deserve.
          </p>

          {/* CTA */}
          <p className="gap-1 text-sm md:text-[14px] lg:text-lg flex flex-col md:flex-row md:items-center md:gap-[10px]">
            Your transformation starts today.
            <Link href="/contact">
              <motion.button
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.07 }}
                transition={{ duration: 0.23, ease: easeIn }}
                className={cn("bg-transparent hover:bg-transparent font-medium cursor-pointer p-0 m-0")}
              >
                Start Training
              </motion.button>
            </Link>
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
