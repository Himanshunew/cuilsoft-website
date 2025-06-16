import React from "react";
import { CustomText } from "../../atoms/custom-text";

export const BranchAddressBox = ({
  country,
  address,
  linkto,
  phone,
  telto,
}) => {
  return (
    <div className="addressWrap text-white">
      <div className="wrap">
        <div className="locationImg"></div>
        <div className="loactionTxt">
          <div className=" absolute w-full bottom-4 left-0 p-3 text-center">
            <CustomText
              className="contryName text-light uppercase mt-0 mb-0"
              size="sm"
            >
              {country}
            </CustomText>
          </div>
          <div className="address">
            <CustomText
              className=" text-light font-bold text-center uppercase mt-0 mb-0"
              size="base"
            >
              {country}
            </CustomText>
            <CustomText
              className="text-light font-normal normal-case my-3"
              size="xs"
            >
              <a href={linkto} className="address">
                {address}
              </a>
            </CustomText>
            <a className="text-secondary" href={telto}>
              {phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
