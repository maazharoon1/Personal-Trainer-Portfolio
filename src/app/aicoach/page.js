"use client"
import Header from '@/components/ui/Header'
import TypeWriterUi from '@/components/ui/Typewriter'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header />
      <div className="w-[99vw] h-[99vh] flex flex-col items-center justify-center text-center gap-4 px-4">
        
        {/* Typewriter Main Text */}
        <TypeWriterUi text={"🤖 Personalized AI Fitness Recommendations — Coming Soon!"} />

        {/* Subline */}
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-xl">
          Get ready for tailored workout plans, nutrition tips, and progress tracking —
          all powered by advanced AI to help you reach your goals faster.
        </p>
      </div>
    </div>
  )
}

export default page
