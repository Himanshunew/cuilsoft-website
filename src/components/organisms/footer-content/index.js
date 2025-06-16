import React from "react";
import { FooterAbout } from "../../molecules/footer-about";
import { FooterContactInfo } from "../../molecules/footer-contact-info";
import { FooterServiceList } from "../../molecules/footer-service-list";
import { SiteMap } from "../../molecules/site-map";
import { FooterImportantLink } from "../../molecules/important-link";

export const FooterContent = () => {
  return (
    <div className="grid grid-cols-1 md:flex lg:flex gap-16 text-[#c5c5c5]">
      <FooterAbout />
      <FooterContactInfo />
      <div className="md:flex md:w-[42%]">
        <SiteMap />
        <FooterServiceList />
        <FooterImportantLink />
      </div>
    </div>
  );
};
