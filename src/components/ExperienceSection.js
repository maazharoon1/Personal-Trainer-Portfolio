"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Circle } from "lucide-react";

const ExperienceData = [
  {
    Gym: "PULSE FITNESS",
    role: "PERSONAL TRAINER",
    experience: "2 Years",
    desc: `Designed personalized workout plans, guided clients on proper form, and provided nutrition tips. Helped multiple members achieve noticeable strength and fitness improvements.`,
    image: `/HeroSectionImage.png`,
  },
  {
    Gym: "EDGE PHYSIC",
    role: "PERSONAL TRAINER",
    experience: "1 Year",
    desc: `Focused on strength training, functional fitness, and injury prevention. Led one-on-one and group sessions to create a motivating training environment.`,
    image: `/HeroSectionImage.png`,
  },
  {
    Gym: "OPTIMUM FITNESS",
    role: "PERSONAL TRAINER",
    experience: "2 Years",
    desc: `Specialized in body transformation and endurance programs. Monitored progress closely and adapted workouts for maximum results.`,
    image: `/HeroSectionImage.png`,
  },
  {
    Gym: "EMERGYM",
    role: "PERSONAL TRAINER",
    experience: "1 Year",
    desc: `Trained clients in functional workouts and HIIT. Emphasized correct form, recovery, and balanced nutrition for sustainable progress.`,
    image: `/HeroSectionImage.png`,
  },
];

export default function ExperienceSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="flex flex-col items-center gap-10 px-4 sm:px-8 lg:px-16">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-gray-900 via-gray-500 to-gray-300 bg-clip-text text-transparent mb-10">
        Experience
      </h2>

      {/* Timeline container */}
      <div className="relative w-full lg:w-3/4">
        {/* Timeline line */}
        <div className="absolute left-1/2 top-0 h-full w-[3px] bg-gray-700 -translate-x-1/2" />

        {/* Timeline items */}
        <div className="flex flex-col gap-16">
          {ExperienceData.map((data, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`flex flex-col sm:flex-row items-center gap-6 ${
                  isLeft ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Image on hover */}
                <div className="hidden sm:block w-1/3">
                 {/* Image container - fixed size */}
<div className="hidden sm:flex w-[250px] h-[250px] md:w-[300px] md:h-[300px] items-center justify-center">
{/* Image container with fixed size */}

<div className="hidden sm:flex  w-[250px] h-[250px] md:w-[300px] md:h-[300px] items-center justify-center relative">
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: hovered === index ? 1 : 0 }}
    transition={{ duration: 0.4 }}
    className="absolute w-full h-full pointer-events-none"
  >
    <Image
      src={data.image}
      alt={data.Gym}
      fill
      className="rounded-lg object-contain shadow-lg"
    />
  </motion.div>
</div>

</div>

                </div>

                {/* Timeline point */}
                <div className="relative">
                  <Circle className="w-6 h-6 text-gray-700 fill-gray-700 z-10" />
                </div>

                {/* Card */}
            
                <div
                  className="sm:w-2/3 z-10 "
                 onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <Card className="shadow-lg hover:shadow-xl dark:shadow-gray-900 transition-shadow">
                    <CardHeader>
                      <CardTitle>
                        <div className="flex justify-between items-center">
                          <h3 className="text-lg font-semibold">
                            {data.Gym}
                          </h3>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {data.experience}
                          </span>
                        </div>
                        <div>
                          <h6 className="text-sm text-gray-600 dark:text-gray-400">
                            {data.role}
                          </h6>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg">{data.desc}</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
