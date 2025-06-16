import React from "react";
import Layout from "../../organisms/layout";
import { SwiperBanner } from "../../organisms/swiper-banner";
import { CompanyServices } from "../../organisms/company-services";
import { ClientTestimonial } from "../../organisms/client-testimonial";
import { Counter } from "../../organisms/counter";
import { HomeAbout } from "../../organisms/home-about";
import { HomePortfolio } from "../../organisms/home-portfolio";
import { OurBlogs } from "../../organisms/blog";
import { BlogPostData } from "../../../constants/blogPostData";
import { ContactPopup } from "../contact-popup-template";
import { Tabs } from "../tabs";
import { IndustriesTemplate } from "../industrial-serve-template";
import Faq from "../../organisms/faq";
import { WhyCustomersLovesTemplate } from "../why-customers-loves-template";
export const HomePageTemplate = () => {
  return (
    <Layout title="Cuilsoft Solutions | Crafting Stunning Mobile Apps and Web Solutions">
      <SwiperBanner />

      <CompanyServices />

      <Counter />

      <Tabs />

      {/* <HomeAbout /> */}


      <IndustriesTemplate />

      <OurBlogs BlogPostData={BlogPostData.slice(0, 3)} showAll />


      <HomePortfolio />

      <WhyCustomersLovesTemplate />
      <Faq />

      {/* <ClientTestimonial /> */}

      <ContactPopup />
    </Layout>
  );
};
