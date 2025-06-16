import Link from "next/link";
import React from "react";

export const NavItem = ({ title, icon, linkto, className }) => {
  return (
    <div>
      <Link href={linkto}>
        <a
          className={`${className} py-2 flex items-center gap-1.5`}
        >
          {icon}
          {title}
        </a>
      </Link>
    </div>
  );
};
