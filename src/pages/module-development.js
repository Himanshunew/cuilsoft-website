/* eslint-disable @next/next/no-img-element */
import React from "react";
import { SectionHeader } from "../components/molecules/section-header";
import { CoreValues } from "../components/organisms/core-values";
import Layout from "../components/organisms/layout";
import TitleBar from "../components/organisms/page-titlebar/pageTitleBar";

const ModuleDevelopment = () => {
  return (
    <Layout>
      <TitleBar
        title="Module/Plugin Development"
        text="Module/Plugin Development"
      />
      <section className="pt-20">
        <div className="container">
          <SectionHeader
            subtitle="OUR SERVICES"
            title="We provide IT & Business solutions"
            des="Our purpose is to provide innovative IT and business solutions that exceed our customers’ expectations and provide the benefits they need. We don’t just help but we provide solutions that suit your need."
          />
        </div>
      </section>
      <section className="py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-semibold mb-6">
                Module/Plugin Development
              </h2>
              <p className="text-lg">
                We offer a complete set of Mods and plugins for the Magento
                eCommerce store. Our Modules are developed by highly qualified
                professionals, skilled in PHP and MySQL. Our modules are
                designed keeping in mind the business needs of various types of
                websites and their requirements. This helps not only to provide
                an excellent user experience but also make your online retailing
                business a success. It provides an object-oriented environment
                for developing custom modules/plugins for your favorite
                software, allowing you to integrate advanced functions with ease
                and flexibility. We have developed some important modules and
                plugins for various projects of our clients.
              </p>
            </div>
            <div>
              <img src="/images/keyfeatures.jpg" alt="alt-text" />
            </div>
          </div>
        </div>
      </section>
      <CoreValues />
    </Layout>
  );
};
export default ModuleDevelopment;
