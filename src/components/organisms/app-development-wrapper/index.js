import React from "react";
import { AppData, WebData } from "../../../constants/serviceCardData";
import { ServiceCard } from "../../molecules/services-card";

export const AppDevelopmentWrapper = () => {
  return (
    <section className="py-20 md:py-24 bg-[#f5f5f5]">
      <div className="container">
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {AppData.map((item, i) => (
            <ServiceCard
              key={i}
              title={item.title}
              description={item.description}
              linkto={`app-development/${item.linkto}`}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
