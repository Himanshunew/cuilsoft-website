import React from "react";
import { RoundedImage } from "../../atoms/rounded-image";
import { AboutText } from "../../molecules/about-content";

export const OurMission = () => {
  return (
    <section className="about_main py-16 md:py-28 bg-[#f5f5f5]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center overflow-x-hidden">
          <div
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <AboutText
              subheading="Our Mission"
              heading="Let’s Reach Every Corner of The World"
              des={
                <>
                  Having an online digital presence is a must for any business
                  to grow and thrive in the 21st century, especially after the
                  covid pandemic. It not only helps businesses in terms of
                  growth and acquiring new customers but also in generating
                  revenue and ultimately profits.
                  <br /> <br />
                  We at Cuilsoft, continuously strive to give our expertise to
                  all our clients in connecting their potential virtual
                  customers efficiently and effectively by not just making a
                  website or an app but also by becoming a part of them. Our
                  passion for technologies goes beyond just business to
                  business. It&apos;s our aim and mission that Cuilsoft reaches
                  every corner of the world and helps people access technologies
                  to make their life better.
                </>
              }
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <RoundedImage source={"/images/mission.jpg"} />
          </div>
        </div>
      </div>
    </section>
  );
};
