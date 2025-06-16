import React from "react";
import { RoundedImage } from "../../atoms/rounded-image";
import { AboutText } from "../../molecules/about-content";

export const OurAchievements = () => {
  return (
    <section className="about_main py-16 md:py-28 bg-[#f5f5f5]">
      <div className="container">
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center overflow-x-hidden">
          <div
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <AboutText
              subheading="Our Achievement"
              heading="We Help IT Companies Scale Engineering Capacity"
              des={
                <>
                  At Cuilsoft, our way of doing business is a part of what makes
                  us successful. We are a committed group based in a highly
                  specialized area. We enable ourselves to enhance the economic
                  position of our clients through the efficient use of both
                  their valuable time and asset. Our business is built on strong
                  fundamentals, supported by unrivalled expertise from product
                  development to its final delivery.
                  <br />
                  <br />
                  We create, develop and design whatever and whenever is best
                  for our clients’ needs. Our products and services make a
                  difference in people’s lives. We are proud of our ongoing
                  commitment to quality and service, achieving global
                  recognition for our customer experience.
                </>
              }
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <RoundedImage source={"/images/achive.jpg"} />
          </div>
        </div>
      </div>
    </section>
  );
};
