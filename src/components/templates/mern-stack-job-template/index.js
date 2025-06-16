import { BlogPostData } from "../../../constants/blogPostData";
import { OurBlogs } from "../../organisms/blog";
import { MernStackJobData } from "../../organisms/mern-stack-job";
import TitleBar from "../../organisms/page-titlebar/pageTitleBar";
import TrainingLayout from "../../organisms/training-layout";

export const MernStackDeveloperJobTemplate = () => {
  return (
    <TrainingLayout title="Transforming Talent in Half the Time: A Unique 3-Month or 6-Month Industrial Training Experience! | Cuilsoft Solutions">
      <TitleBar title={"MERN Stack Developer"} text={"MERN Stack Developer"} />
      <MernStackJobData />
      <OurBlogs BlogPostData={BlogPostData.slice(0, 3)} />
    </TrainingLayout>
  );
};
