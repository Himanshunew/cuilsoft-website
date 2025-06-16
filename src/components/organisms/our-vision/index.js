import React from "react";
import { RoundedImage } from "../../atoms/rounded-image";
import { AboutText } from "../../molecules/about-content";

export const OurVision = () => {
  return (
    <section className="about_main py-16 md:py-28">
      <div className="container">
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center overflow-x-hidden">
          <div
            data-aos="zoom-in-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <RoundedImage source={"/images/vision.jpg"} />
          </div>
          <div
            data-aos="zoom-in-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <AboutText
              subheading="Our Vision"
              heading="Providing Accessible Technologies"
              des={
                <>
                  As a team of website and app developers, our most important
                  vision is to provide accessible technologies to whoever needs
                  them and hence in forming a bond that lasts for many years to
                  come and continuously provides the most complex and
                  sophisticated technologies in their simplest form.
                  <br />
                  <br />
                  Cuilsoft believes in supporting its clients by providing
                  quality products that give the best ROI and hence building a
                  long-term relationship. We are here to make the process of
                  developing websites or apps for any business the easiest and
                  happiest thing to do and be the most valued company in the
                  market.
                </>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};
