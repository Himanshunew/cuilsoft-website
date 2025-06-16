import React from "react";
import JobBox from "../../organisms/job-box";
import TitleBar from "../../organisms/page-titlebar/pageTitleBar";
import TrainingBox from "../../organisms/training-box";
import TrainingPeriod from "../../organisms/training-period";
import TrainingLayout from "../../organisms/training-layout";
import { BlogPostData } from "../../../constants/blogPostData";
import { OurBlogs } from "../../organisms/blog";
import { TrainingCardsData } from "../../organisms/training-card";

export const TrainingTemplate = () => {
  return (
    <TrainingLayout title="Transforming Talent in Half the Time: A Unique 3-Month or 6-Month Industrial Training Experience! | Cuilsoft Solutions">
      <TitleBar title={"Industrial Training"} text={"Training"} />
      <TrainingCardsData />
      <TrainingPeriod />
      <JobBox />
      <TrainingBox />

      <OurBlogs BlogPostData={BlogPostData.slice(0, 3)} />
    </TrainingLayout>
  );
};
