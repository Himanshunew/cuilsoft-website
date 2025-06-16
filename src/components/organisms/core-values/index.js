import React from "react";
import { ValueCardData } from "../../../constants/valueCardData";
import { ValueCard } from "../../molecules/core-value-box";
import { SectionHeader } from "../../molecules/section-header";

export const CoreValues = () => {
  return (
    <section className="coreval_main pb-0 md:pb-16">
      <div className="container">
        <div>
          <SectionHeader
            subtitle="CORE VALUES"
            title="Things Which Make Us Unique"
            des="Our core values are our guiding lights which help us in making decisions that align with what we value the most in our organization."
          />
          <div className="grid md:grid-cols-4 gap-7">
            {ValueCardData.map((item, idx) => (
              <ValueCard
                key={idx}
                source={item.source}
                heading={item.heading}
                des={item.des}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
