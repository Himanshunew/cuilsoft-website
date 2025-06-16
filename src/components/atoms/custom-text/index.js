import React from "react";

export const CustomText = ({ children, size, className }) => {
  let titlesize = "text-base text-secondary uppercase leading-6 font-bold";
  switch (size) {
    case "base":
      titlesize = "text-base text-body";
      break;
    case "xs":
      titlesize = "text-sm  uppercase font-bold ";
      break;
    case "sm":
      titlesize = "xl:text-lg text-base  mt-2 mb-4 font-bold text-black";
      break;
    case "md":
      titlesize = "text-xl my-5 leading-6";
      break;
    case "lg":
      titlesize = "lg:text-2xl text-lg font-bold mb-2";
      break;
    case "xl":
      titlesize = "lg:text-4xl font-bold my-5 capitalize text-black text-3xl";
      break;
    case "xxl":
      titlesize = "lg:text-56 text-4xl font-bold leading-none";
      break;
    case "centered":
      titlesize =
        "text-4xl font-bold leading-10 text-center text-white relative";
      break;
  }
  return (
    <>
      <p className={`${titlesize} ${className}`}>{children}</p>
    </>
  );
};
