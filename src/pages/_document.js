/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

const MyDocument = () => {
  return (
    <>
      <Html>
        <Head>
          <link rel="shortcut icon" href="/favicon.svg" />
          <title>
            Cuilsoft Solutions | Crafting Stunning Mobile Apps and Web Solutions
          </title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    </>
  );
};
export default MyDocument;
