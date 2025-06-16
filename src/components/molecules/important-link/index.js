import React from "react";
import { FooterServices } from "../../../constants/footerServicesData";
import { CustomText } from "../../atoms/custom-text";
import FooterService from "../footer-services";
import { FooterResources } from "../../../constants/footer_resources";

export const FooterImportantLink = () => {
  return (
    <div className="md:w-3/5">
      <CustomText className="uppercase font-bold text-light " size="base">
    Resources
      </CustomText>
      <div className="bg-secondary  h-[2px] w-10 mb-5 mt-3"></div>
      {FooterResources.map((item, idx) => (
        <FooterService
          key={idx}
          linkto={item.linkto}
          title={item.title}
          icon={item.icon}
        />
      ))}
    </div>
  );
};
