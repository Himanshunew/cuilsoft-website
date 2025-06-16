import { OurBlogs } from "../../organisms/blog";
import { PythonWebDevelopmentData } from "../../organisms/python-web-development-data";
import TitleBar from "../../organisms/page-titlebar/pageTitleBar";
import TrainingLayout from "../../organisms/training-layout";
import { BlogPostData } from "../../../constants/blogPostData";

export const FullStackTrainingTemplate = () => {
  return (
    <TrainingLayout title="Transforming Talent in Half the Time: A Unique 3-Month or 6-Month Industrial Training Experience! | Cuilsoft Solutions">
      <TitleBar
        title={"Python Web Development"}
        text={"Python Web Development"}
      />
      <PythonWebDevelopmentData />
      <OurBlogs BlogPostData={BlogPostData.slice(0, 3)} />
    </TrainingLayout>
  );
};
