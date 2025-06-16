import React from "react";
import { SectionHeader } from "../../molecules/section-header";
import { TestimonialCarousel } from "../testimonial-carousel";

export const ClientTestimonial = () => {
  return (
    <section className="testimonial_main pt-20 pb-20 md:pb-36   bg-[url('/images/gradient.png')] bg-no-repeat bg-bottom bg-cover">
      <div
        className="container"
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <div className="px-5">
          <SectionHeader
            subtitle="Testimonials"
            title="What Our Clients say about us"
            des="You will never second guess again when it comes to working with us after going through the below testimonials"
          />
        </div>
        <TestimonialCarousel />
      </div>
    </section>
  );
};
