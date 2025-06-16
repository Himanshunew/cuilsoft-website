import { useState, useEffect, useRef } from "react";
import { SectionHeader } from "../../molecules/section-header";
import { ServicesBox } from "../../molecules/services-box";
import { digitalServiceData } from "../../../constants/digitalServiceData";

export const CompanyServices = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionTop = sectionRef.current?.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (sectionTop < windowHeight / 1.5) {
        setAnimate(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="py-20 md:py-32 overflow-x-hidden relative"
      ref={sectionRef}
    >
      <div className="container">
        <div>
          <SectionHeader
            subtitle="Our services"
            title={"We Offer a Range of Digital Services"}
            des="Our purpose is to provide innovative IT and business solutions that exceed our customers’ expectations and provide the benefits they need. We don’t just help but we provide solutions that suit your need."
          />
          <div className="grid grid-cols-2 relative">
            <div
              className={`arrow-line-container ${
                animate ? "animate-slide-arrow" : ""
              }`}
            >
              <div className="line"></div>
              <div className="arrowhead"></div>
            </div>
            {digitalServiceData.map((item, idx) => (
              <ServicesBox
                key={idx}
                title={item.title}
                source={item.srcpath}
                des={item.des}
                idx={idx}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
