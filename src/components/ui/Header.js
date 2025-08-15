"use client"
import { roboto } from '@/lib/font'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { ModeToggle } from './ThemeToggle'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from './button'
import { Menu, X } from 'lucide-react'
import Top from './Top'

const HeaderLink = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'AiCoach', label: 'AiCoach', href: '/aicoach' },
    {    id: 'about' ,label : 'About', href: '/about' },
    {    id: 'experience' ,label : 'Experience', href: '/experience' },
    {    id: 'contact' ,label : 'Contact', href: '/contact' }

]
const Header = () => {
 const pathname = usePathname()
const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false)
 
  const toggleMobileMunu = () => {  
    setisMobileMenuOpen(!isMobileMenuOpen)
  }
    
  return (
   <>
   <div className={`flex justify-between fixed top-0 md:pt-4 md:pb-2 items-center py-2 z-50 bg-background md:px-10 w-screen  ${roboto.variable}`}>
    <Top/>
    
   <div className='text-2xl font-normal ml-5 md:ml-0 lg:text-4xl lg:font-semibold from-0% to-75% bg-gradient-to-r to-black dark:to-white bg-clip-text text-transparent'>
  Ham_za  
   </div>
    <div className='gap-[10px] lg:gap-5 hidden md:flex '>

        {HeaderLink.map((item) => {
            
            const isActive = pathname === item.href
            return (
            <Link  key={item.id} href ={item.href}>      
                <motion.div
               className={`px-[9px] md:px-4 py-2 rounded-lg transition-all relative`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                 <motion.div
                 layout
          className="absolute inset-0 bg-gradient-to-r dark:from-[#3b3838] dark:to-[#000000] from-[#fff] to-[#c2c2c2] rounded-lg"
          animate={{
            opacity: isActive ? 1 : 0,
            scale: isActive ? 1 : 0.8,
          }}
          transition={{ type: 'spring', bounce: 0.4, duration: 0.6 }}
        />
                      
        <span
          className={`relative z-10 ${
            isActive
              ? 'text-foreground'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {item.label}
        </span>
      </motion.div>

          </Link>

)
}) 
}
    </div>

              <div className="flex items-center space-x-2 ">

        <ModeToggle/>

         <Button
              variant="ghost"
              size="icon"
              onClick={() => toggleMobileMunu()}
              className="md:hidden rounded-full hover:bg-accent/50"
            >
              <motion.div
                initial={false}
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </motion.div>
            </Button>
    </div>

    <AnimatePresence>
    {isMobileMenuOpen &&
            <motion.div
     className=' fixed top-[46px]  text-accent-foreground w-screen z-50 backdrop-blur-2xl shadow-lg rounded-md p-4 md:hidden'
                   initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: .3 }}
            //   className="md:hidden border-t border-border/20 "

     >
     {HeaderLink.map((item) => {
            
            const isActive = pathname === item.href
            return (
            <Link  key={item.id} href ={item.href}
            onClick={() => setisMobileMenuOpen(false)}
            >      
                <motion.div
               className={`px-[9px] lg:px-4 py-2 text-sm rounded-lg transition-all  hover:bg-accent/50 relative`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                 <motion.div
          className="absolute inset-0 bg-gradient-to-r dark:from-[#3b3838] dark:to-[#000000] from-[#fff] to-[#c2c2c2] rounded-lg"
          animate={{
            opacity: isActive ? 1 : 0,
            scale: isActive ? 1 : 0.8,
          }}
          transition={{ type: 'spring', bounce: 0.4, duration: 0.6 }}
        />
                      
        <span
          className={`relative z-10 ${
            isActive
              ? 'text-foreground'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {item.label}
        </span>
      </motion.div>

          </Link>

)
}) 
}
    </motion.div>
}
    </AnimatePresence>
    </div>
  </>
  )
}

export default Header
