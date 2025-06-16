import React from "react";
import { CoreValues } from "../../organisms/core-values";
import Layout from "../../organisms/layout";
import TitleBar from "../../organisms/page-titlebar/pageTitleBar";
import ServicesBoxes from "../../organisms/service-boxes";

export const ServicesTemplate = () => {
  return (
    <Layout title="Explore Our Distinctive Range of Services, Crafted Just for You! | Cuilsoft Solutions">
      <TitleBar title="Our Services" text="Services" />
      <ServicesBoxes />
      <CoreValues />
    </Layout>
  );
};
