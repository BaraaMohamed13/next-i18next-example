import React from "react";
import { appWithTranslation } from "next-i18next";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="google" content="notranslate" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};
export default appWithTranslation(App);
