import Link from "next/link";
import React from "react";
import { SolidButton } from "../../atoms/buttons/solid-bitton";
import { OutlineButton } from "../../atoms/buttons/outline-button";
import { useRouter } from "next/router";

export const ButtonGroup = () => {
  const router = useRouter();
  return (
    <div className="md:flex flex-col md:flex-row gap-4 md:gap-10">
      <SolidButton
        className="uppercase"
        wrapperClass="mb-5 md:mb-0"
        title="Click Here"
        onClick={() => router.push("/contact")}
        hoverText="CLICK HERE"
      />
      {/* <button
        type="button"
        className="uppercase font-bold border-2 border-secondary px-10 py-[18px] text-secondary rounded-xl leading-5"
      >
        <Link href="/who-we-are">Learn More</Link>
      </button> */}
      <OutlineButton
        className="uppercase font-bold"
        title="Learn More"
        onClick={() => router.push("/who-we-are")}
      />
    </div>
  );
};
