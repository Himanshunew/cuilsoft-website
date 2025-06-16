import { useRouter } from "next/router";
import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { MdPhone } from "react-icons/md";
import { ContactInfo } from "../../atoms/contact-info";
import { TrainingBUtton } from "../../atoms/industrial-training";

export const TopHeader = () => {
  const router = useRouter();
  return (
    <div className="bg-zinc-900 hidden lg:block">
      <div className="container">
        <div className="flex justify-between items-center text-[#c5c5c5] py-4">
          <TrainingBUtton />
          <div className="flex items-center justify-between xl:w-1/2 gap-3 xl:gap-0">
            <p>Have any question?</p>
            <ContactInfo
              icon={<MdPhone color="#fba42b" size={25} />}
              linkto="tel:+91-890-100-1970"
              title="+91-890-100-1970"
            />
            <ContactInfo
              icon={<FaEnvelope color="#fba42b" size={25} />}
              title="contact@cuilsoft.com"
              linkto="mailto:contact@cuilsoft.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
