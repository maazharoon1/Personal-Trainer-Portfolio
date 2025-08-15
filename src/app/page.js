import HeroSection from "@/components/HeroSection";
import TestimonialSection from "@/components/Testmonials";
import Footer from "@/components/ui/Footer";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/ui/Header";
import HomeAboutSection from "@/components/HAboutSection";
import ContactSection from "@/components/ContactSection";
export default function Home() {
  
  return (
    <>
   
     <div className="overflow-hidden max-w-[98vw]">
         
          <Header />

      <div className="mt-10 w-[99vw] h-screen ">

          <HeroSection />
    <div className="h-2 bg-accent dark:bg-accent-foreground/20 -mb-4 ">
      <Separator />
    </div>
      </div>
    <div >
        <HomeAboutSection />
        </div>
       <div className="h-2 bg-accent dark:bg-accent-foreground/20  ">
      <Separator />
    </div>
    <div className="min-w-[80vw] max-w-[96vw] mx-auto">
        <ContactSection IsPage={false}/>
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
    </div>
     
</>
  );
}
