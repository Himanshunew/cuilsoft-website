import { useState, useEffect } from "react";
import { industries } from "../../../constants/industrialData";
import { IndustryCircle } from "../../organisms/industry-circle";
import { IndustryContent } from "../../organisms/industry-content";
import { SectionHeader } from "../../molecules/section-header";

export const IndustriesTemplate = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  useEffect(() => {
    if (!isAutoRotating) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % industries.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoRotating]);

  return (
    <div className=" bg-gradient-to-b from-[#fffcf9] to-white py-20">
      <div className="container">
        <SectionHeader
          subtitle="INDUSTRIES WE SERVE"
          title={"We Offer a Range of Industrial serve"}
          des="Our purpose is to provide innovative IT and business solutions that exceed our customers’ expectations and provide the benefits they need. We don’t just help but we provide solutions that suit your need."
        />
        <div className="relative flex justify-center items-center">
          <IndustryCircle
            industries={industries}
            activeIndex={activeIndex}
            onSelect={(index) => {
              setActiveIndex(index);
              setIsAutoRotating(false);
            }}
          />

          <div className="absolute top-[45%] left-0 right-0 flex items-center justify-center pointer-events-none">
            <IndustryContent
              industry={industries[activeIndex]}
              onMouseEnter={() => setIsAutoRotating(false)}
              onMouseLeave={() => setIsAutoRotating(true)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
