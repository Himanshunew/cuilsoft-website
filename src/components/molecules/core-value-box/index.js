import Image from "next/image";
import React from "react";
import { CustomText } from "../../atoms/custom-text";

export const ValueCard = ({ source, heading, des }) => {
  return (
    <div className="text-center">
      <Image src={source} alt="alt-text" width={64} height={64} />
      <CustomText className="mt-3 mb-3" size="sm">
        {heading}
      </CustomText>
      <CustomText className="leading-7" size="base">
        {des}
      </CustomText>
    </div>
  );
};
