/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { CustomText } from "../../atoms/custom-text";

export const PortfolioBox = ({ source, title, color, bgColor }) => {
  return (
    <div className="project-item cursor-pointer">
      <div className="project-img">
        <Image
          src={source}
          alt="alt-text"
          width={400}
          height={280}
          className="object-cover"
        />
      </div>
      <div className={`${bgColor} project-content`}>
        <CustomText className={`${color}  mb-0`} size={"lg"}>
          {title}
        </CustomText>
      </div>
    </div>
  );
};

export const HomePortfolioBox = ({ source, title, subtitle, linkto }) => {
  return (
      <div className="bg-[#fffcf9] rounded-[36px]">
        <div>
          <Image
            src={source}
            alt="alt-text"
            width={400}
            height={400}
            layout='responsive'
            className="rounded-[36px] object-cover"
          />
        </div>
        <div className="text-center my-3">
          <span
            className="text-black leading-4 block mb-2 font-medium"
            size={"lg"}
          >
            {subtitle}
          </span>
          <h4 className="text-black text-2xl font-semibold" size="base">
            {title}
          </h4>
        </div>
      </div>
  );
};
