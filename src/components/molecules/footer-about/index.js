import Link from "next/link";
import React from "react";
import { MdDoubleArrow } from "react-icons/md";
import { CustomText } from "../../atoms/custom-text";
import { SiteLogo } from "../../atoms/site-logo";
import { AnchorButton } from "../../atoms/buttons/anchor-button";

export const FooterAbout = () => {
  return (
    <div className="md:w-[30%]">
      <SiteLogo srcpath="/images/logo_white.png" width={200} height={36} />
      <CustomText
        className="text-[#f2f2f2] leading-6 mt-8 mb-6 pr-4"
        size="base"
      >
        Cuilsoft is a full-fledged web, mobile design & development enterprise
        established in 2022 based out in India. As a professional agency, we
        provide solutions that help in establishing your ideas or businesses
        globally to literally every corner of the world.
      </CustomText>
      <div>
        {/* <Link href="/who-we-are">
          <a className="text-secondary flex items-center text-lg border-b-2 border-secondary w-fit">
            Read More
            <MdDoubleArrow className="mt-1" color="#fba42b" />
          </a>
        </Link> */}
        <AnchorButton
          title="Read More"
          linkTo="/who-we-are"
          className="px-0 hover:px-4"
        />
      </div>
    </div>
  );
};
