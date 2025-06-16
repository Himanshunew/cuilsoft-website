/* eslint-disable @next/next/no-img-element */
import React from "react";
import { SectionHeader } from "../components/molecules/section-header";
import { CoreValues } from "../components/organisms/core-values";
import Layout from "../components/organisms/layout";
import TitleBar from "../components/organisms/page-titlebar/pageTitleBar";

const WebDelopment = () => {
  return (
    <Layout>
      <TitleBar title="Web Development" text="Web Development" />
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
              <h2 className="text-4xl font-semibold mb-6">Web Development</h2>
              <p className="text-lg">
                We offer web development services that are custom-tailored to
                your business needs. We create websites that will help drive
                your business, allowing you to reach more customers and increase
                revenue through increased conversions. Our developers use a
                range of tools, including HTML5, CSS3, PHP, JavaScript, and more
                to create engaging websites with a design that pulls an
                appropriate amount of information. We provide high-quality
                bespoke web development solutions to our clients. We have web
                development experts working hand-in-hand with you to create the
                lead magnet, landing page, and website that will bring you leads
                straight to the door. Our team is there with you over time to
                help make sure your site is updated regularly so that it stays
                up-to-date. Web development has never been easier or quicker
                than with us.
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
export default WebDelopment;
