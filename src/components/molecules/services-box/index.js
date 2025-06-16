import Image from "next/image";
import React from "react";

export const ServicesBox = ({ title, des, source, className, idx }) => {
  return (
    <div
      data-aos={idx % 2 === 0 ? "zoom-in-down" : "zoom-in-down"}
      data-aos-duration="1200"
      className={` bg-white pb-10 max-w-[472px] mx-auto ${className}`}
    >
      <Image src={source} alt="alt-text" width={102} height={102} />
      <div>
        <h4 className="text-xl font-bold leading-6 py-4">{title}</h4>
        <p className="text-[#797671] text-md leading-6 font-medium">{des}</p>
        <div className="text-end mt-3">
          <p className="text-secondary text-md leading-6 font-semibold cursor-pointer">
            Read More
          </p>
        </div>
      </div>
    </div>
  );
};
