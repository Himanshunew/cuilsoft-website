import React from "react";

export const IndustryContent = ({ industry, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="3000"
      className="w-64 text-center"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className=" bg-opacity-90 p-6 ">
        <div className="text-4xl mb-4">{industry.icon}</div>
        <h3 className="text-xl font-bold text-blue-900 mb-2">
          {industry.title}
        </h3>
        <p className="text-gray-600">{industry.content}</p>
      </div>
    </div>
  );
};
