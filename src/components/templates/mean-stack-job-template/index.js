import { BlogPostData } from "../../../constants/blogPostData";
import { OurBlogs } from "../../organisms/blog";
import { MeanStackDevelopmentData } from "../../organisms/mean-stack-job-data";
import TitleBar from "../../organisms/page-titlebar/pageTitleBar";
import TrainingLayout from "../../organisms/training-layout";

export const MeanStackDevelopmentTemplate = () => {
  return (
    <TrainingLayout title="Transforming Talent in Half the Time: A Unique 3-Month or 6-Month Industrial Training Experience! | Cuilsoft Solutions">
      <TitleBar title={"MEAN Stack Developer"} text={"MEAN Stack Developer"} />
      <MeanStackDevelopmentData />
      <OurBlogs BlogPostData={BlogPostData.slice(0, 3)} />
    </TrainingLayout>
  );
};
