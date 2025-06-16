import React from "react";
import ContactSection from "../../organisms/contact-section";
import Layout from "../../organisms/layout";
import TitleBar from "../../organisms/page-titlebar/pageTitleBar";

export const ContactUsTemplate = () => {
  return (
    <Layout title="Connect with Us – Your Questions, Our Answers | Cuilsoft Solutions">
      <TitleBar title="Contact Us" text="Contact Us" />
      <ContactSection />
    </Layout>
  );
};
