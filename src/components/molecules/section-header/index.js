import React from "react";

export const SectionHeader = ({ subtitle, title, des, className }) => {
  return (
    <div className={` text-center w-full md:w-3/5 mx-auto mb-12 ${className}`}>
      <h5 className="text-lg leading-5 text-secondary uppercase font-bold mb-4">
        {subtitle}
      </h5>
      <h3 className="text-2xl md:text-30 leading-8 md:leading-9 font-bold mb-2.5">{title}</h3>
      <p className="text-primary leading-6 font-medium">{des}</p>
    </div>
  );
};
