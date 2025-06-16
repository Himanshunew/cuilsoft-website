import React from "react";
import Image from "next/image";
import { HitechData, aiMlData } from "../../../constants/technologyData";

export const HiTech = () => {
  return (
    <div className="grid grid-cols-4 gap-8">
      {HitechData.map((item, id) => (
        <div
          key={id}
          className="flex flex-col border  rounded-xl justify-center text-center p-5 items-center w-full gap-3 bg-white"
        >
          <Image
            src={item.src}
            alt="logo"
            width={100}
            height={100}
            className="mx-auto"
          />
          <p className="text-[#797671] text-lg mb-5 leading-6 font-medium">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export const AiMl = () => {
  return (
    <div className="grid grid-cols-4 gap-8">
      {aiMlData.map((item, id) => (
        <div
          key={id}
          className="flex flex-col border  rounded-xl justify-center text-center p-5 items-center w-full gap-3 bg-white"
        >
          <Image
            src={item.src}
            alt="logo"
            width={100}
            height={100}
            className="mx-auto"
          />
          <p className="text-[#797671] text-lg mb-5 leading-6 font-medium">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};
