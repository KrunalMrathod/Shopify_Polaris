import { Layout, Page } from "@shopify/polaris";
import React from "react";
import AnalitiscDefault from "../components/AnalyticsDefault";
const dashBordPage = () => {
  return (
    <Page>
      <Layout>
        <Layout.Section>
          <AnalitiscDefault />
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default dashBordPage;
