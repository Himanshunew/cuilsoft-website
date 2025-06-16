import React, { useEffect, useState } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReviewBoxData } from "../../../constants/reviewBoxData";
import { ReviewBox } from "../../molecules/review-box";

export const TestimonialCarousel = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <div className="md:mt-0 mt-20">
      <Swiper
        slidesPerView={isMobile ? 1 : 3}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        on
        modules={[Autoplay]}
        className="mytestimonial"
      >
        {ReviewBoxData.map((item, i) => (
          <SwiperSlide key={i}>
            <ReviewBox
              source={item.source}
              name={item.name}
              position={item.position}
              rating={item.rating}
              des={item.des}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
