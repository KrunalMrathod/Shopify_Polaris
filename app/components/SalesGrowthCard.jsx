import {
  BlockStack,
  Box,
  Card,
  Icon,
  InlineStack,
  Text,
} from "@shopify/polaris";
import React from "react";
import { ArrowUpIcon } from "@shopify/polaris-icons";

export default function SalesGrowthCard({ Title,Percentage,GrowthPercentage }) {
  return (
    <Box className="SalesCard_Wrap">
      <Card>
        <BlockStack>
          <Text variant="headingLg"> {Title} </Text>
          <Text variant="heading2xl" tone="subdued">
            {Percentage}
          </Text>
          <Text>
            <InlineStack>
              <Icon source={ArrowUpIcon} tone="success" />
              <Text tone="success"> {GrowthPercentage}  </Text>
            </InlineStack>
          </Text>
          <Text>vs Previous year's growth</Text>
        </BlockStack>
      </Card>
    </Box>
  );
}
