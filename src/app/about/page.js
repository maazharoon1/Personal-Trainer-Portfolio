import AboutPage from "@/components/FitnessJourney";
import AchivementSection from "@/components/AchivementSection";
import TestimonialSection from "@/components/Testmonials";
import Footer from "@/components/ui/Footer";
import { Separator } from "@/components/ui/separator";
import HeroSection from "@/components/ui/HeroSection";
import Header from "@/components/ui/Header";

import SocialIcon from "@/components/ui/SocialIcon";

export default function About() {
  return (
    <div className="overflow-x-hidden ">
            <Header />

      <div className=" min-h-[99vh] w-[99.6vw] ">

        <div
          className='flex min-h-[99vh] sm:min-h-none sm:pt-20 pb-12 w-full items-end md:items-center bg-center md:bg-none bg-[url(/HeroSectionImage.png)]  bg-no-repeat ' >
          <HeroSection/>
        </div>
    <div className="h-2 bg-accent dark:bg-accent-foreground/20 -mb-4 ">
      <Separator />
    </div>
    <div>
        <AboutPage />
        </div>
      </div>
       <div className="h-2 bg-accent dark:bg-accent-foreground/20  ">
      <Separator />
    </div>
   <div className="mt-2 w-[99vw]">
        <AchivementSection />
        </div>
       <div className="h-2 bg-accent dark:bg-accent-foreground/20  ">
      <Separator />
    </div>
       <>
       <TestimonialSection/>
       </>
       <div >
        <Footer />
        </div>
        {/* social links */}
         <div className="fixed z-50 bottom-[40%] right-[3%]  ">
        
              <SocialIcon/>
        
               </div>
    </div>

  );
}
