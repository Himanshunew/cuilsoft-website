import React from "react";
import {
  TrainingNavItem,
} from "../../../constants/navItemData";
import { NavItem } from "../../atoms/nav-link";
import { useRouter } from "next/router";

export const TrainingNavigation = () => {
  const router = useRouter();

  return (
    <div className="hidden md:block">
      <div className="uppercase dropdown items-center text-sm text-[#232323] font-bold lg:flex gap-10">
        {TrainingNavItem.map((item, idx) => (
          <NavItem
            key={idx}
            className={
              router.pathname === item.pathname
                ? "text-secondary border-b-2 border-secondary"
                : "text-[#403D3D]"
            }
            icon={item.icon}
            title={item.title}
            linkto={item.pathname}
          />
        ))}
      </div>
    </div>
  );
};
