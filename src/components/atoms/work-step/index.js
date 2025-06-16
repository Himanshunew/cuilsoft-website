import React from "react";

export const WorkprocessStep = ({ id, title, des }) => {
  return (
    <div className="shadow-lg p-[50px] rounded border border-[#f7f7f7] block lg:flex gap-5 hover:shadow-xl rotateHover">
      <h2 className="text-[50px] font-semibold bg-white rounded-[50%] w-[80px] h-[80px] flex items-center justify-center mb-5 text-secondary min-w-[80px] shadow-xl">
        {id}
      </h2>
      <div>
        <h4 className="text-[22px] mb-2">{title}</h4>
        <p>{des}</p>
      </div>
    </div>
  );
};