import Link from "next/link";
import React from "react";

export const TrainingBUtton = () => {
  return (
    <div className="rotating-text-wrapper">
      <Link href="/industrial-training">
        <a className="floating-text block cursor-pointer px-3 text-base w-fit py-1 text-white m-0 bg-secondary">Training Program!!</a>
      </Link>
    </div>
  );
};
