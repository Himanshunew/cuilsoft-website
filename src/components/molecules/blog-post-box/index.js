import Image from "next/image";
import React from "react";
import { CustomText } from "../../atoms/custom-text";
import { AnchorButton } from "../../atoms/buttons/anchor-button";
import { useRouter } from "next/router";

export const BlogPost = ({ source, date, month, title, des, linkto, id }) => {
  const router = useRouter();
  return (
    <div className="bg-white blogBox md:w-auto mx-auto rounded-lg shadow-xl px-5 pt-5 pb-8 cursor-pointer" onClick={()=>router.push(`${linkto}?blog_id=${id}`)}>
      <div className="relative">
        <Image
          src={source}
          alt="alt-text"
          width={360}
          height={225}
          className="bg-white rounded-lg shadow-xl p-5"
        />
        <div className="date text-secondary text-2xl font-bold text-center leading-6">
          <CustomText className="text-secondary mb-0 leading-6" size="lg">
            {date} <br /> <span className="text-black text-lg">{month}</span>
          </CustomText>
        </div>
      </div>
      <div className="lg:px-6 pt-14 flex justify-between flex-col min-h-[260px]">
        <div>
          <CustomText className="mt-0 mb-0 blogCardTitle" size="sm">
            {title}
          </CustomText>
          <CustomText className="mt-3 leading-7 blogCardDes" size="base">
            {des}
          </CustomText>
        </div>
        <div>
          <AnchorButton title="Read More" linkTo={`${linkto}?blog_id=${id}`} className="pl-0 hover:pl-4" />
        </div>
      </div>
    </div>
  );
};
