import { AppProps } from "next/app";
import React from "react";
import ResetCSS from "../src/style/ResetCSS";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ResetCSS />
    </>
  );
}

export default MyApp;
