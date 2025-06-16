/* eslint-disable @next/next/no-img-element */
import React from "react";
import { SectionHeader } from "../components/molecules/section-header";
import { CoreValues } from "../components/organisms/core-values";
import Layout from "../components/organisms/layout";
import TitleBar from "../components/organisms/page-titlebar/pageTitleBar";

const AppDevelopment = () => {
  return (
    <Layout>
      <TitleBar title="Mobile App Development" text="Mobile App Development" />
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
                Mobile App Development
              </h2>
              <p className="text-lg">
                At Cuilsoft, we believe in creating great products for our
                customers. Our app development process involves huge number of
                prototyping, user testing, and customer interview to ensure that
                our products will make life easier. Our experience in building
                highly scalable, real-time mobile apps using modern technologies
                such as Relational Database Management System (RDBMS) allows us
                to deliver cutting-edge solutions for our clients. Our team of
                developers is widely experienced in creating content-rich apps
                for iOS and Android platforms. We create enterprise apps that
                are designed to run on multiple devices and deliver an
                exceptional user experience. Our apps are designed by
                developers, created by designers, and conceived by
                entrepreneurs.
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
export default AppDevelopment;
