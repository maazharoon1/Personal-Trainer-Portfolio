"use client"
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "./button"
import { motion } from "framer-motion"
import { useState ,useEffect} from "react"
export function ModeToggle() {
  
const isDarkMode = useTheme().resolvedTheme === "dark"
  const { theme,setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const toggle = () =>{
    setTheme(theme === "dark" ? "light" : "dark")
  }
  useEffect(() => {
  setMounted(true);
  }, [])
  
    if (!mounted) {
    return null;
  }

  return (
    <>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => toggle()}
              className={`rounded-full  hover:bg-accent/50 ` }
            >
              <motion.div
                initial={false}
                animate={{ rotate: isDarkMode ? 0 : 180 }}
                transition={{ duration: 0.3 }}
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5 " />
                )}
              </motion.div>
            </Button>

            {/* Mobile Menu Button */}
          
          </>
  )
}