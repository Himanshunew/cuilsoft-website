import React from "react";
import { CounterBox } from "../../molecules/counter-box";
import { CounterData } from "../../../constants/counterData";

export const Counter = () => {
  return (
    <section className="py-20 md:py-105 bg-[url('/images/cards-bg.png')] overflow-x-hidden">
      <div className="container">
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-6"
          data-aos="zoom-out"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          {CounterData.map((item, i) => (
            <CounterBox
              key={i}
              srcPath={item.srcPath}
              title={item.title}
              subtitle={item.subtitle}
              endvalue={item.endvalue}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
