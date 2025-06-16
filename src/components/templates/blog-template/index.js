import React from "react";import Layout from "../../organisms/layout";
import TitleBar from "../../organisms/page-titlebar/pageTitleBar";
import { OurBlogs } from "../../organisms/blog";
import { BlogPostData } from "../../../constants/blogPostData";

export const BlogTemplate = () => {
  return (
    <Layout>
      <TitleBar title="Blog" text="Blog" />
      <OurBlogs BlogPostData={BlogPostData} showAll />
    </Layout>
  );
};
