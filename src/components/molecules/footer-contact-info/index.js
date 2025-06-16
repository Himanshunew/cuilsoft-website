import Image from "next/image";
import React from "react";

export const FooterContactInfo = () => {
  return (
    <div className="md:w-[28%]">
      <div className="flex items-start text-Gray-50 mb-7 gap-5">
        <div className="w-[15%]">
          <Image
            src="/images/svg/address.svg"
            alt="alt-text"
            width={50}
            height={50}
          />
        </div>
        <div className="w-[85%]">
          <h6 className="uppercase text-sm text-Gray-50 font-bold leading-4 mb-2.5">
            Address
          </h6>
          <span>
            D-234(C&P), 4th Floor, phase-8B, Sector-74, Sahibzada Ajit Singh
            Nagar, Punjab 140308
          </span>
        </div>
      </div>
      <div className="flex items-start text-Gray-50 mb-7 gap-5">
        <div className="w-[15%]">
          <Image
            src="/images/svg/phone.svg"
            alt="alt-text"
            width={50}
            height={50}
          />
        </div>
        <div className="w-[85%]">
          <h6 className="uppercase text-sm font-bold text-Gray-50 leading-4 mb-2.5">
            Call Us
          </h6>
          <div className="text-Gray-50">
            <a href="tel:+91-890-100-1970">+91-890-100-1970</a>
            <br />
            <a href="tel:+91-947-843-5545">+91-947-843-5545</a>
          </div>
        </div>
      </div>
      <div className="flex items-start text-Gray-50 gap-5">
        <div className="w-[15%]">
          <Image
            src="/images/svg/email.svg"
            alt="alt-text"
            width={50}
            height={50}
          />
        </div>
        <div className="w-[85%]">
          <h6 className="uppercase text-sm font-bold leading-4 text-Gray-50 mb-2.5">
            Email Address
          </h6>
          <a href="mailto:contact@cuilsoft.com">contact@cuilsoft.com</a>
        </div>
      </div>
    </div>
  );
};
