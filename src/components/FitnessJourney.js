"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "./ui/separator";
import Image from "next/image";
const Skills = [
            {
              title: "Strength Training",
              desc: "Helping clients build muscle, improve endurance, and increase overall strength with science-backed methods.",
            },
            {
              title: "Bodybuilding Coaching",
              desc: "Guidance on muscle growth, fat loss, and competition prep with personalized programs.",
            },
            {
              title: "Nutrition Guidance",
              desc: "Custom diet plans that complement training and support sustainable lifestyle changes.",
            },
          ]
export default function AboutPage() {
  return (
    <section className="px-6 py-16 max-w-5xl md:max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          My Fitness Journey
        </h2>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-10">
          I started my fitness journey over a decade ago, driven by a passion to
          improve not only my body but also my mindset and lifestyle. Over the
          years, I have honed my expertise in{" "}
          <strong>strength training</strong>, <strong>bodybuilding</strong>, and
          <strong> customized workout plans</strong> tailored to each individual’s needs.
        </p>

        {/* Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 md:gap-20">
          {Skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
            
              <Card className="p-5 h-full " >
  <CardHeader> 
    
     <div  className="flex flex-col items-center gap-4 " >
    <Image src="/favicon.png"   alt="Me Gym Trainer"
  width={42}
  height={42}
  className="rounded-full"
  />
     <div className="flex flex-col gap-2 items-center" >
    <CardTitle className="font-semibold text-xl">{skill.title}</CardTitle>
 
                    </div>
  </div>
  </CardHeader>
  <Separator className="bg-accent-foreground -mt-4 -mb-2"/>
  <CardContent>
    <p >{skill.desc}</p>
  </CardContent>
</Card> 
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="md:mt-18 mt-12 text-center">
          <a
            href="/contact"
            className="px-6 py-3 text-lg  font-medium text-white bg-white/10 rounded-lg hover:bg-white/15 transition"
          >
            Let’s Work Together
          </a>
        </div>
      </motion.div>
    </section>
  );
}
