import React from "react";
import Link from "next/link";
import { PopularTrainingsData } from "../../../constants/popularTrainingsData";
import { MdDoubleArrow } from "react-icons/md";
import { useRouter } from "next/router";

export const PopularTrainings = () => {
  const router = useRouter();
  return (
    <>
      {PopularTrainingsData.map((item, id) => {
        return (
          <div key={id} className="mb-4">
            <Link href={item.linkto}>
              <a className={`w-full flex justify-between items-center text-lg transition-all hover:pl-2 duration-500 hover:text-secondary ${router.pathname === item.linkto ? "text-secondary" : "text-black "}`}>
                {item.title}
                <MdDoubleArrow />
              </a>
            </Link>
          </div>
        );
      })}
    </>
  );
};
