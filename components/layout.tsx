import Head from "next/head";
import React from "react";
import Nav from "./navbar";

export default function Layout({ children }: any) {
  return (
    <>
      <Head>
        <title>Shanel Photography</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Shanel Photography"
          content="Honolulu based wedding, gradutaiton and general photography
          services."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Nav />
      <main id="main">{children}</main>
      <footer></footer>
    </>
  );
}
