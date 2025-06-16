import React from "react";
import { ButtonGroup } from "../btn-group";

export const SlidingBox = ({ heading, des }) => {
  return (
    <div>
      <h1 className="text-2xl md:text-[50px] leading-8 w-5/6 md:w-full md:leading-[60px] font-bold mb-5 md:mb-10 mt-5 ">
        {heading}
      </h1>
      <p className="font-medium text-[#6C6C6C] text-lg md:text-xl leading-8 md:leading-9 mb-5 md:mb-12">
        {des}
      </p>
      <ButtonGroup />
    </div>
  );
};
