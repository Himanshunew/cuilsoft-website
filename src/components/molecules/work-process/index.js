import React from "react";
import { workProcessData } from "../../../constants/workProcessData";
import { WorkprocessStep } from "../../atoms/work-step";

export const WorkProcessFlow = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
      {workProcessData.map((item, idx) => (
        <WorkprocessStep key={idx} id={item.id} title={item.title} des={item.des} />
      ))}
    </div>
  );
};