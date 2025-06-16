import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

export const SiteLogo = ({ srcpath, width, height }) => {
  const { push } = useRouter();
  const handleGoToHome = () => {
    push("/");
  };
  return (
    <div className=" w-3/4 lg:w-auto">
      <Image
        onClick={handleGoToHome}
        className="cursor-pointer"
        src={srcpath}
        alt="alt-text"
        width={width}
        height={height}
      />
    </div>
  );
};
