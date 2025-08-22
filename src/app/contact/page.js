import ContactSection from '@/components/ContactSection'
import Footer from '@/components/ui/Footer'
import Header from '@/components/ui/Header'
import React from 'react'
import SocialIcon from '@/components/ui/SocialIcon';
const page = () => {
  const page = 'contact'
  return (
    <>
            <Header/>
    
    <div className='pt-14'> 

      <ContactSection Page={page}/>
        {/* social links */}
         <div className="fixed z-50 bottom-[40%] right-[3%]  ">
      <SocialIcon/>
               </div>
      <Footer/>
    </div>
    </>
   
  )
}

export default page