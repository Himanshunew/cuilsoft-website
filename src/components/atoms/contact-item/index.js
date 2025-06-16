import React from "react";

export const ContactBtn = ({ title, linkto }) => {
  return (
    <button onClick={linkto} className="outlineBtn outlineBtnWrap hoverBtn">
      <span className="hover:text-[#403D3D]">{title}</span>
    </button>
  );
};
