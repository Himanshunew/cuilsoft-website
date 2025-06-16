import Image from "next/image";
import React from "react";
import { AnchorButton } from "../../atoms/buttons/anchor-button";
export const ServiceCard = ({ linkto, title, description, image }) => {
  return (
    <div className="gap-6 items-center shadow-lg mb-6 md:mb-0 bg-white">
      <div className="w-full relative">
        <Image src={image} alt="alt-text" width={286} height={160} layout="responsive" />
      </div>
      <div className="w-full p-4 card-content-wrapper">
        <h3 className="text-black font-semibold text-xl mb-2">{title}</h3>
        <p className="mb-4">{description}</p>
        <AnchorButton title="View More" linkTo={`/our-work/${linkto}`} />
      </div>
    </div>
  );
};
