import React from "react";
import Header from "../../molecules/header";
import { TopHeader } from "../../molecules/top-header";
import Head from "next/head";

export const MainHeader = ({ title }) => {
  return (
    <>
      <div>
        <Head>
          <title>{title}</title>
        </Head>
      </div>
      <TopHeader />
      <Header />
    </>
  );
};
