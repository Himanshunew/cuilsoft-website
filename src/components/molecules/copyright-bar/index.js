import React from "react";
import { FaGoogle, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { CustomText } from "../../atoms/custom-text";
import Link from "next/link";

export const CopyRightBar = () => {
  return (
    <div className="border-t border-[#3e3636] mt-8 md:mt-10 md:flex justify-between items-center pt-4 md:pt-7">
      <CustomText className="text-center text-Gray-50 pb-5 md:pb-0" size="base">
        Copyright © Cuilsoft 2025 All rights reserved.
      </CustomText>
      <div className="flex items-center justify-center gap-4 md:gap-4 text-white">
        <Link href="https://goo.gl/maps/m4HJqYtfVSKrh2eo7">
          <a target="_blank" className="rotateOnHover">
            <span className="bg-secondary rounded-[50px] p-3 duration-1000 ease-in-out hover:bg-white hover:text-secondary block">
              <FaGoogle className="dropShadow" />
            </span>
          </a>
        </Link>
        <Link href="https://www.instagram.com/cuilsoft/">
          <a target="_blank" className="rotateOnHover">
            <span className="bg-secondary rounded-[50px] p-3 duration-1000 ease-in-out hover:bg-white hover:text-secondary block">
              <FaInstagram className="dropShadow" />
            </span>
          </a>
        </Link>
        <Link href="https://www.linkedin.com/company/cuilsoft/">
          <a target="_blank" className="rotateOnHover">
            <span className="bg-secondary rounded-[50px] p-3 duration-1000 ease-in-out hover:bg-white hover:text-secondary block">
              <FaLinkedinIn className="dropShadow" />
            </span>
          </a>
        </Link>
      </div>
    </div>
  );
};
