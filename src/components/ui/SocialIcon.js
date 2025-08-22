import React from 'react'

import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialIcon = () => {
  return (
    <>
            <div className="bg-accent/10 flex items-center py-3 rounded-full px-1 gap-3 flex-col "> 
        
                   <Link href={"https://www.instagram.com/coach.ham_za18"} target="blank">
                   <Instagram className="w-6 h-6"/>
                   </Link>
                   <Link href={"https://www.facebook.com/hamza.haroon.7927"} target="blank">
            <Facebook className="w-7 h-7"/>
            </Link>
            <Link href={"https://wa.me/923342473211"}>
              <FontAwesomeIcon icon={faWhatsapp} style={{width:"22px", height:"22px"}}/>
              </Link>
              </div>
        </>
  )
}

export default SocialIcon