
    "use client";
import { Swiper } from "swiper/react";
import { Autoplay, FreeMode, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

export default function SwipperWrapper({ children, className }) {
  return (
    <Swiper
      className={className}
      modules={[Autoplay, FreeMode, Mousewheel]}
      loop
      speed={2100}
      autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true   }}
      freeMode
      // freeModeMomentum={false}
      mousewheel={{ forceToAxis: true, sensitivity: 0.5, releaseOnEdges: true }}
      grabCursor
      spaceBetween={16}
      slidesPerView={1}
      breakpoints={{
        640:  { slidesPerView: 2, spaceBetween: 16 },
        768:  { slidesPerView: 3, spaceBetween: 18 },
        1024: { slidesPerView: 4, spaceBetween: 20 },
      }}
    >
      {children}
    </Swiper>
  );
}
