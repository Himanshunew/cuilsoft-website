/* eslint-disable @next/next/no-img-element */
import React from "react";
import { SectionHeader } from "../components/molecules/section-header";
import { CoreValues } from "../components/organisms/core-values";
import Layout from "../components/organisms/layout";
import TitleBar from "../components/organisms/page-titlebar/pageTitleBar";

const SoftwareDevelopment = () => {
  return (
    <Layout>
      <TitleBar
        title="Software/SAAS Development"
        text="Software/SAAS Development"
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
                Software/SAAS Development
              </h2>
              <p className="text-lg">
                Cuilsoft develops functional and efficient software solutions
                for businesses regardless of size and industry. Our unique and
                proven methodologies, technologies, modeling, and packaging will
                help you deliver world-class products to market more quickly. We
                build intuitive and emotionally addictive consumer technologies.
                We provide software/SAAS development services that enable
                companies of all sizes to build, deploy, and maintain the
                products that they offer to the world. Compete. Collaborate.
                Prosper. Our software development team utilizes the best
                practices, technologies, and processes to provide you with
                solutions that are designed for ease of use and integration. Our
                projects are delivered on time, within budget, and on the
                specification which means our clients get value for money
                through exceptional results.
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
export default SoftwareDevelopment;
