"use client";

import SwipperWrapper from "@/lib/SwipperWrapper";
import { motion } from "framer-motion";
import { SwiperSlide } from "swiper/react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import { Star } from "lucide-react";
import { Separator } from "./ui/separator";
export default function TestimonialSection() {
  const testimonials = [
    {
      name: "John Doe",
      role: "Client",
      rating:5,
      feedback:
        "Hamza helped me completely transform my fitness. His personalized approach and constant motivation kept me going!",
    },
    {
      name: "Sarah Khan",
      role: "Athlete",
      rating:4,
      feedback:
        "The training programs are on point. My strength and stamina improved drastically within months.",
    },
    {
      name: "Mike Lee",
      role: "Bodybuilder",
      rating:3,
      feedback:
        "Hamza’s attention to detail in both workouts and nutrition is unmatched. Highly recommended!",
    },   
    {
      name: "Sarah Khan",
      role: "Athlete",
      rating:2,
      feedback:
        "The training programs are on point. My strength and stamina improved drastically within months.",
    },
    {
      name: "Sarah Khan",
      role: "Athlete",
      rating:1,
      feedback:
        "The training programs are on point. My strength and stamina improved drastically within months.",
    },
    {
      name: "Mike Lee",
      role: "Bodybuilder",
      rating:5,
      feedback:
        "Hamza’s attention to detail in both workouts and nutrition is unmatched. Highly recommended!",
    },   
    {
      name: "Sarah Khan",
      role: "Athlete",
      rating:5,
      feedback:
        "The training programs are on point. My strength and stamina improved drastically within months.",
    },
    {
      name: "Sarah Khan",
      role: "Athlete",
      rating:5,
      feedback:
        "The training programs are on point. My strength and stamina improved drastically within months.",
    },
    {
      name: "Mike Lee",
      role: "Bodybuilder",
      rating:5,
      feedback:
        "Hamza’s attention to detail in both workouts and nutrition is unmatched. Highly recommended!",
    },   
    {
      name: "Sarah Khan",
      role: "Athlete",
      rating:5,
      feedback:
        "The training programs are on point. My strength and stamina improved drastically within months.",
    },
    {
      name: "Sarah Khan",
      role: "Athlete",
      rating:5,
      feedback:
        "The training programs are on point. My strength and stamina improved drastically within months.",
    },
    {
      name: "Mike Lee",
      role: "Bodybuilder",
      rating:5,
      feedback:
        "Hamza’s attention to detail in both workouts and nutrition is unmatched. Highly recommended!",
    },   
    {
      name: "Sarah Khan",
      role: "Athlete",
      rating:5,
      feedback:
        "The training programs are on point. My strength and stamina improved drastically within months.",
    },
  
  ];

  return (
    <section className="py-16  px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-16">Testmonials</h2>

        {/* Cards */}
            <SwipperWrapper >
        <div className="grid grid-cols-1 md:grid-cols-4 " >
          {
          
          testimonials.map((t, i) => (
         <SwiperSlide key={i} virtualIndex={i}>
                <Card className="cursor-grab md:max-h-[47vh]  flex flex-col px-2  rounded-lg shadow-lg ">
  <CardHeader>
    <div  className="flex flex-col items-center gap-4 " >
    <Image src="/favicon.png"   alt="Me Gym Trainer"
  width={42}
  height={42}
  className="rounded-full"
  ></Image>
     <div className="flex flex-col gap-2 items-center" >
    <CardTitle className="font-semibold text-xl">{t.name}</CardTitle>
    <div className="flex">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          className={`h-[13px] w-[13px] outline-none border-none ${
                            starIndex < t.rating
                              && "fill-accent-foreground "
                          }`}
                        />
                      ))}
                    </div>
                    </div>
                    <Separator className="bg-gray-"/>
  </div>
   <Separator className="bg-accent-foreground -mt-2"/>
  </CardHeader>
  <CardContent>
  <p className="text-md font-medium -mt-3">{t.
    feedback}</p>

  </CardContent>

</Card>
            </SwiperSlide>
          ))}
        </div>
          </SwipperWrapper>
        {/* Pagination Dots */}
       
      </div>
    </section>
  );
}
