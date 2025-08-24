"use client"
import AiSidebar from '@/components/ui/AiSidebar'
import FormComponent from '@/components/ui/FormComponent'
import Header from '@/components/ui/Header'
import TypeWriterUi from '@/components/ui/Typewriter'
import React, { useEffect, useRef, useState } from 'react'
import PromptIdea from './PromptIdea'
import Link from 'next/link'



const Page = () => {
  const [chat, setChat] = useState([]);
  const convoEnd = useRef(null)

  useEffect(() => {
  convoEnd.current?.scrollIntoView({ behavior: "smooth" });
}, [chat]);

return (
    <div>
      <Header />
   <div className='flex sm:flex-col  items-center overflow-hidden h-screen bg-accent '>
        <div className='backdrop-blur-3xl rounded-lg shadow-lg w-[99%]  sm:mt-20 sm:pt-0 flex flex-col sm:flex-row mt-10 h-screen'>

          {/* leftBar */}
          <div className=' border-r min-h-[80vh] sm:h-[70vh] lg:h-[80vh] xl:h-[90vh]  overflow-scroll hidden sm:flex flex-1  border-gray-700 dark:border-gray-400  sm:w-[36%] md:w-[34%] lg:w-[30%] '>
          <AiSidebar/>
        </div>

        {/* Right Bar */}
        <div className='w-full mx-auto sm:w-[76%] overflow-y-scroll scroll-smooth sm:max-h-[69.4vh] max-h-[75vh]'>
             <div className="flex mb-40 sm:mb-0 flex-1 w-[90%] mx-auto sm:flex-col items-center justify-center ">
                {/* Heading */}
                <div className="mt-15 sm:mt-6 md:mt-10 sm:px-2 block w-11/12 mx-auto">
                  <div >
               <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl leading-tight">
  PeakForm 
  <span className="ml-2 font-mono text-green-600 text-base">
    Beta
    <small className="ml-1 text-sm  font-normal">
      (Report bugs  
      <Link 
        href="https://maazportfolio-2025.vercel.app/contact" 
        className="underline hover:text-green-700 transition-colors"
        aria-label="Report bugs on Maaz Portfolio site"
      >
        {" "} here
      </Link>)
    </small>
  </span>
</h1>

                  <p className="text-muted-foreground mt-2 mb-6 sm:mb-0 text-sm sm:text-base">
                   Enter your details, such as 
                   <span className='font-semibold '> Weight</span>, 
                   <span className='font-semibold '> Age</span>,
                   <span className='font-semibold '> Gender</span>,
                    and 
                    <span className='font-semibold '> Height </span>
                     to receive better recommendations.
                  </p>
                  </div>
                  <div className="w-full sm:pt-3">
{chat.length < 1 ? (
 <>
      <PromptIdea>
</PromptIdea> 
</> )
:
     ( <div className='flex flex-col items-end mt-4 ' >
        {chat.map((message, index) => {
const last = index === chat.length - 1;
return (
          <div key={index} className={`flex ${message.role === "User" ? "justify-end md:w-5/6 w-11/12 " : "justify-start w-full"} mb-2`}>
             {message.role === "User" ? 
             <div className='bg-accent-foreground/10 px-4 py-2 mt-3 rounded-2xl'>
             <p className='text-lg font-medium '>{message.content}</p>
             </div>
             : <div className={`${last && "relative " }`} >
      <TypeWriterUi speed={25} >
        {message.content}
        </TypeWriterUi>
        {last && ( 
          <div ref={convoEnd} className="text-sm flex w-full text-muted-foreground mt-2 sm:min-h-[60px] -mb-10 sm:mb-0 ml-2 ">
        
           Conversation End
          </div>
        )}
</div>
      } 
          </div>
        )})}
      </div>
     )}

      {/* Input  */}
    </div>
                </div>
          
                {/* Markdown Response */}
               
          
        </div>

        {/* Response */}
          </div>

          <FormComponent  updateChat={setChat} allChat={chat}/>  

   </div>
   </div>
       </div>
  )
}

export default Page
