import { Box, Layout } from "@shopify/polaris";
import Cards from "../components/Cards";
import { cardEntries } from "../components/Charts/ChartsConstants/AppAnalysisConstants";
import Table from "../components/Table";
import { TitleAndTimestamp } from "../components/TitleAndTimestamp";
import { useState } from "react";
import { useEffect } from "react";

export default function AppAnalysis() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(!loading);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []); 

  return (
    <Layout.Section>
      <Box className="app_analysis_wrap">
        {/* Title And TimeStamp */}
        <TitleAndTimestamp />

        {/* Card Section */}
        <Cards data={cardEntries} loading={loading} />

        {/* Table */}
        <Table  loading={loading} />
      </Box>
    </Layout.Section>
  );
}
