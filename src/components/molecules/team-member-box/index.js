import Image from "next/image";
import { CustomText } from "../../atoms/custom-text";
import React from "react";

export const TeamMemberBox = ({ source, name, position }) => {
  return (
    <div className="relative team_wrapper">
      <Image
        src={source}
        alt="alt-text"
        width={410}
        height={410}
        className="rounded-[30px] block"
      />
      <div className="caption text-center py-8 px-3 absolute bottom-[9px] top-0 opacity-0 left-0 right-0 bg-[#926016] transition-[0.5s] bg-opacity-60 flex items-end justify-center rounded-[30px] content_wrapper">
        <div>
          <h3 className="text-[25px] leading-9 font-semibold text-white mb-1">
            {name}
          </h3>
          <span className="text-base font-semibold leading-5 uppercase text-white ">
            {position}
          </span>
        </div>
      </div>
    </div>
  );
};
