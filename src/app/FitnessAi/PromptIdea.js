import React from 'react'

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const PromptIdea = () => {

  return (
        <Card className='  prose prose-sm sm:prose lg:prose-lg xl:prose-xl 2xl:prose-2xl max-w-full dark:prose-invert bg-accent-foreground/10 py-2 pb-6 mt-3 rounded-2xl  '>
            <CardHeader>
            <CardTitle className='text-lg'>Prompt Ideas</CardTitle>
            <CardDescription className='text-sm '>Try out these prompt ideas to get started</CardDescription>
            </CardHeader>
            <CardContent>

            <ul className='list-disc list-inside space-y-2 text-[14px] md:text-[16px] '>
                <li>Suggest a weekly workout plan for a 30-year
                    </li>
                <li>What are some effective exercises for building core strength?   
                    </li>
                <li>How can I improve my flexibility and mobility?
                    </li>
                <li>What are the best post-workout recovery techniques?
                    </li>
                <li>Recommend a balanced diet for muscle gain.
                    </li>
            </ul>
            </CardContent>
                </Card>
  )
}

export default PromptIdea