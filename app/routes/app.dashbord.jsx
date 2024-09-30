import { Layout, Page } from "@shopify/polaris";
import React from "react";
import DashbordDefault from "../components/DashbordDefault"
const DashBorad = () => {
  return (
    <Page>
      <Layout>
        <Layout.Section>
          <DashbordDefault />
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default DashBorad;
