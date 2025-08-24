import ExperienceSection from '@/components/ExperienceSection'
import Footer from '@/components/ui/Footer'
import Header from '@/components/ui/Header'
import SocialIcon from '@/components/ui/SocialIcon'
import React from 'react'

const Page = () => {
  return (
  <> 
            <Header />
    <div className='max-w-[98vw] overflow-x-hidden  min-h-screen '>
      <div className=' mx-auto mt-25'>
      <ExperienceSection/>
     <div className='pt-10' > <Footer/>
      </div>
      </div>
        <div className="fixed z-50 bottom-[40%] right-[3%]  ">
      <SocialIcon/>
               </div>
    </div>
    </>
 
  )
}

export default Page