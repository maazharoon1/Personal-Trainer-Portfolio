"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HomeAboutSection = () => {
  return (
    <section className="w-full  py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full min-h-[400px] h-full rounded-xl overflow-hidden shadow-lg"
        >
          <Image
            src="/trainer.jpeg" // isko tum apni image ka path laga do e.g. /aboutImage.jpeg
            alt="Trainer"
            fill
            className="object-cover "
          />
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="backdrop-blur-md  p-5  h-full   rounded-xl shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="font-medium lg:text-lg md:text-[14px] mb-6">
          From a passionate beginner in the gym to standing on stage as Mr. Jr Pakistan 2024, my journey has been built on discipline, dedication, and a deep love for fitness.
Over the years, I’ve trained countless clients, helping them gain strength, confidence, and a healthier lifestyle through science-backed training methods and personalized programs.
</p> <p className="font-medium lg:text-lg md:text-[14px] mb-6 hidden sm:block">
For me, fitness isn’t just about lifting weights — it’s about transforming your mindset, building resilience, and unlocking the best version of yourself. Whether you’re stepping into the gym for the first time or chasing a championship title, I’m here to guide you every step of the way.
          </p>

          <Link href="/about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:to-purple-600 text-white font-semibold rounded-lg shadow-md"
            >
              Learn More
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default HomeAboutSection;
