import { OurBlogs } from "../../organisms/blog";
import TitleBar from "../../organisms/page-titlebar/pageTitleBar";
import TrainingLayout from "../../organisms/training-layout";
import { BlogPostData } from "../../../constants/blogPostData";
import { UIUXDesignerData } from "../../organisms/uiux-designer";

export const UIUXDesignerTemplate = () => {
  return (
    <TrainingLayout title="Transforming Talent in Half the Time: A Unique 3-Month or 6-Month Industrial Training Experience! | Cuilsoft Solutions">
      <TitleBar title={"UI/UX Designer"} text={"UI/UX Designer"} />
      <UIUXDesignerData />
      <OurBlogs BlogPostData={BlogPostData.slice(0, 3)} />
    </TrainingLayout>
  );
};
