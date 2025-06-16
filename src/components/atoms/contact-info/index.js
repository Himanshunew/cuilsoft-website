import React from "react";

export const ContactInfo = ({ title, icon, linkto }) => {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <a href={linkto}>{title}</a>
    </div>
  );
};
