import React from "react";
import { AboutCompany } from "../../organisms/about-company";
import { OurAchievements } from "../../organisms/achievements";
import Layout from "../../organisms/layout";
import { OurMission } from "../../organisms/our-mission";
import { OurTeam } from "../../organisms/our-team";
import { OurVision } from "../../organisms/our-vision";
import TitleBar from "../../organisms/page-titlebar/pageTitleBar";

export const WhoeWeAreTemplate = () => {
  return (
    <Layout title="About Web Development & Mobile Application Innovation company | Cuilsoft Solutions">
      <TitleBar title="Who We Are" text="About" />

      <AboutCompany />

      <OurMission />

      <OurVision />

      <OurAchievements />

      <OurTeam />
    </Layout>
  );
};
