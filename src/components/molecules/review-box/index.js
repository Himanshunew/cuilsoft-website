import Image from "next/image";
import React from "react";

export const ReviewBox = ({ source, name, position, des, rating }) => {
  return (
    <div className=" bg-white shadow-lg min-h-[305px] max-h-[305px] rounded-2xl rounded-bl-[60px] p-10 border border-[#EEECEA]">
      <div>
        <div className="flex items-start gap-6 mb-7">
          <Image
            src={source}
            alt="alt-text"
            width="80px"
            height="80px"
            className="rounded-full"
          />
          <div className="mt-2">
            <h5 className="font-semibold leading-5">{name}</h5>
            <h6 className="text-sm pt-1 pb-2 ">{position}</h6>
            <Image
            src={rating}
            alt="alt-text"
            width="98px"
            height="18px"
            className="rounded-full"
          />
          </div>
        </div>
        <p className="font-medium leading-[26px]">{des}</p>
      </div>
    </div>
  );
};
