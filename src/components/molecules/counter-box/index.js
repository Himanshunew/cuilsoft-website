import Image from "next/image";
import React from "react";
import CountUp from "react-countup";

export const CounterBox = ({ srcPath, title, subtitle, endvalue }) => {
  return (
    <div className="bg-white px-8 py-30 rounded-[26px] shadow-lg">
      <Image src={srcPath} alt="alt-text" width={82} height={82} />
      <h4 size="sm" className="text-primary mt-6 text-lg mb-1.5">
        {title}
      </h4>
      <div className="flex items-center gap-1">
        <CountUp className="text-5xl font-bold text-dark" end={endvalue} />
        <h3 className="text-40 text-dark font-semibold">{subtitle}</h3>
      </div>
    </div>
  );
};
