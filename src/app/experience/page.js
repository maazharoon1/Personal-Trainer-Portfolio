import ExperienceSection from '@/components/ExperienceSection'
import Footer from '@/components/ui/Footer'
import Header from '@/components/ui/Header'
import React from 'react'

const page = () => {
  return (
  <> 
            <Header />
    <div className='w-full  min-h-screen '>
      <div className=' mx-auto mt-25'>
      <ExperienceSection/>
     <div className='pt-10' > <Footer/>
      </div>
      </div>
    </div>
    </>
 
  )
}

export default page