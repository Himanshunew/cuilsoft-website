import React, { useState, useEffect, useRef } from "react";
import { SectionHeader } from "../../molecules/section-header";
import { tabs } from "../../../constants/button_tabs";
import { AiMl, HiTech } from "./technology";

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;
      const animationDuration = scrollHeight / 50; 
      container.style.setProperty('--scroll-height', `${scrollHeight}px`);
      container.style.setProperty('--animation-duration', `${animationDuration}s`);
    }
  }, []);

  const renderTabContent = () => {
    switch (activeTab) {
      case 1:
        return <HiTech />;
      case 2:
        return <AiMl />;
      case 3:
        return "Cloud/DevOps";
      case 4:
        return "Platforms/BI tools";
      case 5:
        return "Frameworks";
      case 6:
        return "Front-End";
      case 7:
        return "Back-End";
      case 8:
        return "Mobile";
      case 9:
        return "DataBase";
      case 10:
        return "CMS/Ecommerce";
      default:
        return null;
    }
  };

  return (
    <section className="py-[90px]">
      <div className="container">
        <SectionHeader
          subtitle="Our Technology"
          title="Enhance Software Development with a Comprehensive Technology Stack"
          des="As a leading software development company, we follow agile methods to ensure fast development and solutions that can grow with your needs. Our approach focuses on innovation, allowing us to create custom software that meets your specific requirements while adapting quickly to changes."
        />
        <div className="flex w-full gap-4">
          {/* Sidebar Navigation */}
          <div
            className="w-[280px] h-[600px] overflow-hidden relative shadow-lg rounded-xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="2000"
          >
            <div
              ref={containerRef}
              className={`flex flex-col gap-3 py-3 animate-marquee ${isHovered ? 'paused' : ''}`}
            >
              {[...tabs].map((tab, index) => (
                <button
                  key={`${tab.id}-${index}`}
                  className={`text-lg leading-8 md:leading-9 font-bold mb-2.5 rounded-xl ${
                    activeTab === tab.id
                      ? "border-b-4 border-secondary bg-gradient-to-t from-[#fffcf9] to-white text-black"
                      : "hover:text-secondary border-b-4 border-white"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          {/* Main Content */}
          <div
            className="w-full p-5 rounded-xl shadow-lg bg-gradient-to-t from-[#fffcf9] to-white"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="2000"
          >
            {renderTabContent()}
          </div>
        </div>
      </div>
    </section>
  );
};
