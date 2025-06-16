import React from "react";

export const AboutText = ({ subheading, heading, des }) => {
  return (
    <div>
      <h5 className="text-lg leading-5 text-secondary uppercase font-bold mb-4">
        {subheading}
      </h5>
      <h3 className="text-2xl md:text-30 leading-8 md:leading-10 font-bold mb-5 md:mb-30">
        {heading}
      </h3>
      <p className="text-[#6C6C6C]">{des}</p>
    </div>
  );
};
