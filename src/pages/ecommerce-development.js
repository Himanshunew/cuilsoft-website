/* eslint-disable @next/next/no-img-element */
import React from "react";
import { SectionHeader } from "../components/molecules/section-header";
import { CoreValues } from "../components/organisms/core-values";
import Layout from "../components/organisms/layout";
import TitleBar from "../components/organisms/page-titlebar/pageTitleBar";

const EcommerceDevelopment = () => {
  return (
    <Layout>
      <TitleBar title="E-commerce Development" text="E-commerce Development" />
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
              <h2 className="text-4xl font-semibold mb-6">E-commerce Development</h2>
              <p className="text-lg">
                We do everything differently in a highly productive and
                professional manner. We will develop your site to the highest
                standards and constantly improve our offering as well as that of
                our clientele. E-Commerce Development is a creative and
                technical process that converges creative and technical
                capabilities in a company to deliver new, innovative solutions.
                It aims to create consumer engagement around brands, companies,
                and products of all sizes. We create and operate your accounts,
                websites and apps to let buyers find you - whether that’s via a
                website, an e-commerce app, or a marketplace. We develop,
                design, and build the best e-commerce platform based on your
                goals; you can choose from many standardized templates we&apos;ve
                already developed with us.
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
export default EcommerceDevelopment;
