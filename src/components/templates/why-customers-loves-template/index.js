import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { SectionHeader } from "../../molecules/section-header";
import GridLayout from "../flip-card";
import { testimonialImages } from "../../../constants/reviewBoxData";

export const WhyCustomersLovesTemplate = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const images =
      containerRef.current?.querySelectorAll(".floating-image") || [];
    images.forEach((image) => {
      const duration = 5 + Math.random() * 2;
      const delay = Math.random() * 2;
      image.animate(
        [
          { transform: "translateY(0px)" },
          { transform: "translateY(-30px)" },
          { transform: "translateY(0px)" },
        ],
        {
          duration: duration * 1000,
          delay: delay * 1000,
          iterations: Number.POSITIVE_INFINITY,
          easing: "ease-in-out",
        }
      );
    });
  }, []);
  
  return (
    <div className="pb-20">
      <div className="container text-black">
        <div>
          <SectionHeader
            subtitle="Why Customers Loves Us?"
            title={"Loved by Customers, Trusted by All"}
            des="Discover the reasons behind our customers' loyalty. From unparalleled quality and seamless user experiences to our unwavering commitment to their success, we prioritize their needs and deliver solutions that truly make a difference. Join a community that values trust, transparency, and excellence."
          />
          <div
            ref={containerRef}
            data-aos="fade-out"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="relative h-[280px] w-[600px] mx-auto flex gap-5  justify-center flex-wrap"
          >
            {testimonialImages.map((image,id) => (
              <div
                key={id}
                className={`floating-image ${
                  image.id % 2 === 0 ? "mt-5" : "mt-0"
                }`}
              >
                <div className="relative w-20 h-20 rounded-full overflow-hidden shadow-lg">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={1000}
                    height={1000}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
          <GridLayout />
        </div>
      </div>
    </div>
  );
};
