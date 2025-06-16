import React from "react";
import { AppDevelopmentWrapper } from "../../organisms/app-development-wrapper";
import { UiuxDesignWrapper } from "../../organisms/uiux-design-wrapper";

import Layout from "../../organisms/layout";
import TitleBar from "../../organisms/page-titlebar/pageTitleBar";
import { Portfolio } from "../../organisms/portfolio";
import { WebDeveloperWrapper } from "../../organisms/web-developer-wrapper";
import { useSelector } from "react-redux";
import { selectTab } from "../../../redux/tabs-slice";
import { WorkProcess } from "../../organisms/work-process";

export const OurWorkTemplate = () => {
  const activeTab = useSelector(selectTab);
  return (
    <Layout title="Explore Our Creative Journey | Cuilsoft Solutions">
      <TitleBar title="Our Work" text="Our Work" />
      <Portfolio />
      <WorkProcess />
      <div id="portfolio_list">
        {activeTab === "tab1" ? (
          <WebDeveloperWrapper />
        ) : activeTab === "tab2" ? (
          <UiuxDesignWrapper />
        ) : (
          <AppDevelopmentWrapper />
        )}
      </div>
    </Layout>
  );
};
