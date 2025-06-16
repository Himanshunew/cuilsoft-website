import { OurBlogs } from "../../organisms/blog";
import TitleBar from "../../organisms/page-titlebar/pageTitleBar";
import TrainingLayout from "../../organisms/training-layout";
import { BlogPostData } from "../../../constants/blogPostData";
import { ReactNativeTrainingData } from "../../organisms/react-native-development";

export const ReactNativeTrainingTemplate = () => {
  return (
    <TrainingLayout title="Transforming Talent in Half the Time: A Unique 3-Month or 6-Month Industrial Training Experience! | Cuilsoft Solutions">
      <TitleBar
        title={"React Native Development"}
        text={"React Native Development"}
      />
      <ReactNativeTrainingData />
      <OurBlogs BlogPostData={BlogPostData.slice(0, 3)} />
    </TrainingLayout>
  );
};
