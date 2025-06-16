import { BlogPostData } from "../../../constants/blogPostData";
import { OurBlogs } from "../../organisms/blog";
import TitleBar from "../../organisms/page-titlebar/pageTitleBar";
import { ReactDeveloperJob } from "../../organisms/react-developer-job-data";
import TrainingLayout from "../../organisms/training-layout";

export const ReactDeveloperJobTemplate = () => {
  return (
    <TrainingLayout title="Transforming Talent in Half the Time: A Unique 3-Month or 6-Month Industrial Training Experience! | Cuilsoft Solutions">
      <TitleBar title={"React Developer"} text={"React Developer"} />
      <ReactDeveloperJob />
      <OurBlogs BlogPostData={BlogPostData.slice(0, 3)} />
    </TrainingLayout>
  );
};
