"use client"
import { motion } from 'framer-motion'
import React from 'react'
const MotionWrapper = ({children}) => {
  return (
     <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen"
          >
                        {children}
                        </motion.div>
                            
  )
}

export default MotionWrapper