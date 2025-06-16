import { BlogPostData } from "../../../constants/blogPostData";
import { OurBlogs } from "../../organisms/blog";
import TitleBar from "../../organisms/page-titlebar/pageTitleBar";
import { PythonDeveloperJobData } from "../../organisms/python-develop-job";
import TrainingLayout from "../../organisms/training-layout";

export const PythonDeveloperJobTemplate = () => {
  return (
    <TrainingLayout title="Transforming Talent in Half the Time: A Unique 3-Month or 6-Month Industrial Training Experience! | Cuilsoft Solutions">
      <TitleBar title={"Python Developer"} text={"Python Developer"} />
      <PythonDeveloperJobData />
      <OurBlogs BlogPostData={BlogPostData.slice(0, 3)} />
    </TrainingLayout>
  );
};
