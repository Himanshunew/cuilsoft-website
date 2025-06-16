import { BlogPostData } from "../../../constants/blogPostData";
import { OurBlogs } from "../../organisms/blog";
import TitleBar from "../../organisms/page-titlebar/pageTitleBar";
import { ReactNativeDeveloperJobData } from "../../organisms/react-native-job-data";
import TrainingLayout from "../../organisms/training-layout";

export const ReactNativeDeveloperJobTemplate = () => {
  return (
    <TrainingLayout title="Transforming Talent in Half the Time: A Unique 3-Month or 6-Month Industrial Training Experience! | Cuilsoft Solutions">
      <TitleBar
        title={"React Native Developer"}
        text={"React Native Developer"}
      />
      <ReactNativeDeveloperJobData />
      <OurBlogs BlogPostData={BlogPostData.slice(0, 3)} />
    </TrainingLayout>
  );
};
