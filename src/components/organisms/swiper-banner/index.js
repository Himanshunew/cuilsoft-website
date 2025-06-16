/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { SlidingBox } from "../../molecules/banner-content";

export const SwiperBanner = () => {
  return (
    <Swiper
      cssMode={true}
      loop={true}
      pagination={{
        clickable: true,
      }}
      className="mySwiper bg-[url('/images/banner-bg.png')] bg-no-repeat bg-cover bg-bottom"
      modules={[Pagination]}
    >
      <SwiperSlide className="myslide">
        <div className="md:container mx-auto">
          <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-20 px-4 pt-12 md:pt-0 md:px-0 overflow-x-hidden">
            <div
              className="md:w-1/2"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="2000"
            >
              <div className="bg-secondary w-28 h-1 rounded" />
              <SlidingBox
                heading={
                  <>
                    We Are All About Creativity &{" "}
                    <span className="text-secondary">Innovation</span>
                  </>
                }
                des="We as a team help in converting your ideas and thoughts into a living reality. The best thing about us is our cost-effective & user-friendly approach to building an app or website to ride the bandwagon of the ever-growing digital arena and hence create more and new opportunities for our clients."
              />
            </div>
            <div
              className="md:w-1/2"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="2000"
            >
              <img src="/images/banner_1.png" alt="alt-text" />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="myslide">
        <div className="md:container mx-auto">
          <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-20 px-4 pt-12 md:pt-0 md:px-0">
            <div className="md:w-1/2">
              <div className="bg-secondary w-28 h-1 rounded" />
              <SlidingBox
                heading={
                  <>
                    It’s All About{" "}
                    <span className="text-secondary">Experience</span>
                  </>
                }
                des="Cuilsoft is a full-fledged web, mobile design & development enterprise. As a professional agency, we provide solutions that help in establishing your ideas or businesses globally in every corner of the world. Our committed & passionate team of developers has the experience and expertise in working with clients all over the world, like Germany, France, the USA, and Australia to name a few, and includes various industries like Real Estate, Hospitality, E-Commerce, Education, etc."
              />
            </div>
            <div className="md:w-1/2">
              <img src="/images/banner_1.png" alt="alt-text" />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="myslide">
        <div className="md:container mx-auto">
          <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-20 px-4 pt-12 md:pt-0 md:px-0">
            <div className="md:w-1/2">
              <div className="bg-secondary w-28 h-1 rounded" />
              <SlidingBox
                heading={
                  <>
                    Building A Website – First Step to{" "}
                    <span className="text-secondary">Success</span>
                  </>
                }
                des="As in the case with most success stories, we started from ground zero and eventually built a company with a vision to provide world-class websites and apps to our hundreds of satisfied clientele lists. We take immense pride in our vision to bring affordable technology to every citizen of the world and help improve their life and business with all our integrity."
              />
            </div>
            <div className="md:w-1/2">
              <img src="/images/banner_1.png" alt="alt-text" />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
