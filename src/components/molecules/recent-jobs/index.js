import React from "react";
import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";
import { RecentJobsData } from "../../../constants/recentJobsData";
import { useRouter } from "next/router";

export const RecentJobs = () => {
  const router = useRouter();
  return (
    <>
      {RecentJobsData.map((item, id) => {
        return (
          <div key={id} className="mb-4">
            <Link href={item.linkto}>
              <a className={`w-full flex justify-between items-center text-lg transition-all hover:pl-2 duration-500 hover:text-secondary ${router.pathname === item.linkto ? "text-secondary" : "text-black "}`}>
               <div className="w-5/6">{item.title}</div> 
                <MdDoubleArrow className="mt-1" />
              </a>
            </Link>
          </div>
        );
      })}
    </>
  );
};
