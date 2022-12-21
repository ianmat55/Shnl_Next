import "../styles/globals.css";
import Layout from "../components/layout";
import { WindowSizeProvider } from "../utils/context";
import React from "react";

interface MyAppProps {
  Component: React.FC;
  pageProps: any;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <WindowSizeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </WindowSizeProvider>
  );
}

export default MyApp;
