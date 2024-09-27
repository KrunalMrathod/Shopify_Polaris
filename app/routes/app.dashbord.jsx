import { Layout, Page } from "@shopify/polaris";
import React from "react";
import CardDefault from "../components/CardDefault";

const dashBordPage = () => {
  return (
    <Page>
      <Layout>
        <Layout.Section>
          <CardDefault />
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default dashBordPage;
