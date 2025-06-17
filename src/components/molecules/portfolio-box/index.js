import Image from "next/image";
import { useState } from "react";
import { Globe, Smartphone, Palette, Code } from "lucide-react";
import { PortfolioCard } from "../portfolio-card";

export const PortfolioBox = () => {
  const [activeTab, setActiveTab] = useState("web");

  const tabs = [
    { id: "web", label: "Web Development", icon: Globe },
    { id: "mobile", label: "Mobile Apps", icon: Smartphone },
    { id: "design", label: "UI/UX Design", icon: Palette },
    { id: "other", label: "Other Projects", icon: Code },
  ];

  return (

      <div className=" mx-auto">
        <div className="bg-white rounded-lg shadow-lg mb-8 overflow-hidden">
          <div className="flex border-b border-gray-200">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center text-primary leading-6 font-semibold justify-center gap-2 px-4 py-4 text-sm  transition-all duration-300 relative ${activeTab === tab.id
                    ? "text-secondary bg-blue-50 border-b-2 border-secondary"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                    }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 border-secondary" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <PortfolioCard activeTab={activeTab} tabs={tabs} />
      </div>
 
  );
};


export const HomePortfolioBox = ({ source, title, subtitle, linkto }) => {
  return (
    <div className="bg-[#fffcf9] rounded-[36px]">
      <div>
        <Image
          src={source}
          alt="alt-text"
          width={400}
          height={400}
          layout='responsive'
          className="rounded-[36px] object-cover"
        />
      </div>
      <div className="text-center my-3">
        <span
          className="text-black leading-4 block mb-2 font-medium"
          size={"lg"}
        >
          {subtitle}
        </span>
        <h4 className="text-black text-2xl font-semibold" size="base">
          {title}
        </h4>
      </div>
    </div>
  );
};
