import React from "react";
import { FaEnvelopeOpen, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import { CustomText } from "../../atoms/custom-text";
import Link from "next/link";

const ContactUsInfo = () => {
  return (
    <div className="md:w-2/5">
      <CustomText className="mb-10 mt-0" size="xl">
        You can connect with us when need help!
      </CustomText>
      <div className="flex gap-8 items-center mb-8">
        <div className="p-5 rounded-lg bg-[#ffa54529]">
          <FaMapMarkedAlt color="#fba42a" size={25} />
        </div>
        <div>
          <CustomText size={"sm"} className="text-black capitalize mb-2">
            Office Location
          </CustomText>
          <CustomText className="font-normal text-body mb-0 normal-case">
            D-234(C&P), 4th Floor, phase-8B, Sector-74, Sahibzada Ajit Singh
            Nagar, Punjab 140308
          </CustomText>
        </div>
      </div>
      <div className="flex gap-8 items-center mb-8">
        <div className="p-5 rounded-lg bg-[#ffa54529]">
          <FaPhoneAlt color="#fba42a" size={25} />
        </div>
        <div>
          <CustomText size={"sm"} className="text-black capitalize mb-2">
            Phone
          </CustomText>
          <CustomText className="font-normal text-body mb-0 normal-case">
            <h4 className="cursor-pointer">
              <Link href="tel:+918901001970">+91-890-100-1970</Link>
            </h4>
            <h4>
              <Link href="tel:+919478435545">+91-947-843-5545</Link>
            </h4>

          </CustomText>
        </div>
      </div>
      <div className="flex gap-8 items-center mb-8">
        <div className="p-5 rounded-lg bg-[#ffa54529]">
          <FaEnvelopeOpen color="#fba42a" size={25} />
        </div>
        <div>
          <CustomText size={"sm"} className="text-black capitalize mb-2">
            Email
          </CustomText>
          <CustomText className="font-normal text-body mb-0 normal-case">
            <Link href="mailto:contact@cuilsoft.com">contact@cuilsoft.com</Link>

          </CustomText>
        </div>
      </div>
    </div>
  );
};

export default ContactUsInfo;
