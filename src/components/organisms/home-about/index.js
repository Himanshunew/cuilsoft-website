/* eslint-disable @next/next/no-img-element */
import React from "react";
import { AboutText } from "../../molecules/about-content";

export const HomeAbout = () => {
  return (
    <section className="about_main md:pt-28 md:pb-36 py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-12 items-center overflow-x-hidden">
          <div
            className="md:w-[54%]"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <img src="/images/about-img.png" alt="about" />
          </div>
          <div
            className="md:w-[46%]"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <AboutText
              subheading="Discover Our Company"
              heading="The Limitless Possibilities of Our Product and Services"
              des="We are dedicated to making each customer experience an unforgettable one. So, we are here to help you figure out your next step today. As a group of passionate and dedicated web designers and developers who love to build innovative websites and apps for start-ups as well as established businesses in the market, we leave no stone unturned to absolutely give our best. View our portfolio, and testimonials to learn more about our products and discover other ways you can be involved with us. Our focus is to create high-quality, creative digital experiences that help our clients win more business, improve their bottom line and build brand loyalty. Read our blog and learn more about us. Stay up-to-date on the latest industry news, press releases, and announcements."
            />
          </div>
        </div>
      </div>
    </section>
  );
};
