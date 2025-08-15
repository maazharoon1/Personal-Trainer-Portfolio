import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import React from 'react'
const Top = () => {
const pathname =usePathname()
    
return (
    <>
    <AnimatePresence>
    <motion.div
     className='fixed left-0 top-0 h-1 bg-gradient-to-r w-screen from-gray-300 via-gray-600 to-gray-900
     dark:from-gray-900 dark:to-gray-300'
     initial={{width : "0%"}}
     animate={{
        width:  pathname === '/about' ?"40%":
        pathname === '/testemonials' ?"60%":
        pathname === '/experience'? "80%":
        pathname === '/contact'? "100%":
        "20%"
     }}
     transition={{duration:0.8, ease:'easeIn'}}
     > </motion.div>
    </AnimatePresence>
     
     </>
  )
}

export default Top