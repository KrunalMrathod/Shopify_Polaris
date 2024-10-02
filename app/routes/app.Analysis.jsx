import { Layout, Page } from "@shopify/polaris";
import React from "react";
import AppAnalysis from "../components/AppAnalysis";

const Analysis = () => {
  return (
    <Page>
      <Layout>
        <Layout.Section>
          <AppAnalysis />
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default Analysis;
