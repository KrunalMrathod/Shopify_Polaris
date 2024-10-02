import { Box, Layout } from "@shopify/polaris";
import Cards from "../components/Cards";
import { cardEntries } from "../components/Charts/ChartsConstants/AppAnalysisConstants";
import Table from "../components/Table";
import { TitleAndTimestamp } from "../components/TitleAndTimestamp";

export default function AppAnalysis() {
  return (
    <Layout.Section>
      <Box className="app_analysis_wrap">
        {/* Title And TimeStamp */}
        <TitleAndTimestamp />

        {/* Card Section */}
        <Cards data={cardEntries} />

        {/* Table */}
        <Table />
      </Box>
    </Layout.Section>
  );
}
