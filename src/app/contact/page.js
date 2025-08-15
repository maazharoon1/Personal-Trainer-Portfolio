import ContactSection from '@/components/ContactSection'
import Footer from '@/components/ui/Footer'
import Header from '@/components/ui/Header'
import React from 'react'

const page = () => {
  return (
    <>
            <Header/>
    
    <div className='pt-14'> 

      <ContactSection IsPage={true}/>
      <Footer/>
    </div>
    </>
   
  )
}

export default page