/* eslint-disable @next/next/no-img-element */
import React from "react";
import { SectionHeader } from "../components/molecules/section-header";
import { CoreValues } from "../components/organisms/core-values";
import Layout from "../components/organisms/layout";
import TitleBar from "../components/organisms/page-titlebar/pageTitleBar";

const DigitalMarketing = () => {
  return (
    <Layout>
      <TitleBar title="Digital Marketing" text="Digital Marketing" />
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
              <h2 className="text-4xl font-semibold mb-6">Digital Marketing</h2>
              <p className="text-lg">
                We make your business appear in the best light possible. We
                create individualized campaigns across multiple channels and
                deliver measurable results with high-impact marketing activities
                like SEO, Content Production, Email Marketing, PPC, and more. We
                provide digital strategy and marketing services to help you
                reach your target audience. We create, implement, and monitor
                all strategies, campaigns, analytics, and sales processes. We
                research to determine the best strategies to use based on your
                goals. Once a plan is determined we execute it with dedicated
                staff who understands how to run successful projects.
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
export default DigitalMarketing;
