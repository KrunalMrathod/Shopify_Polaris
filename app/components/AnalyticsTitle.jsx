import React, { useState } from "react";
import {
  BlockStack,
  Box,
  Button,
  Card,
  Icon,
  InlineGrid,
  InlineStack,
  Text,
  Tooltip,
} from "@shopify/polaris";
import {
  AlertCircleIcon,
  ChevronDownIcon,
  ArrowDownIcon,
  ArrowUpIcon,
} from "@shopify/polaris-icons";

export const AnalyticsTitle = () => {
  return (
    <Box className="AnalyticsTitle_Wrap">
      <InlineStack align="space-between" blockAlign="center" wrap={true}>
        <Box>
          <Text variant="heading2xl" as="h2" fontWeight="600">
            Analytics
          </Text>
        </Box>
        <Box className="AnaliticsButton_Wrap">
          <InlineStack align="space-evenly" gap={300}>
            <Button>
              <Tooltip content="last synched : 08 May, 2022, 08:30 AM  You can synch every hour. ">
                <InlineStack align="space-between" gap={300}>
                  <Text tone="text-inverse" as="h3" variant="headingLg">
                    Sync Data
                  </Text>
                  <Icon source={AlertCircleIcon} tone="primary" />
                </InlineStack>
              </Tooltip>
            </Button>
            <Button>
              <InlineStack align="space-between" gap={300}>
                <Text tone="base" as="h3" variant="headingLg">
                  Last 30 Days
                </Text>
                <Icon source={ChevronDownIcon} tone="base" />
              </InlineStack>
            </Button>
            <Button>
              <InlineStack align="space-between" gap={300}>
                <InlineStack>
                  <Icon source={ArrowUpIcon} tone="base" />
                  <Icon source={ArrowDownIcon} tone="base" />
                </InlineStack>
                <Text tone="base" as="h3" variant="headingLg">
                  Compare: Previous period
                </Text>
              </InlineStack>
            </Button>
          </InlineStack>
        </Box>
      </InlineStack>
    </Box>
  );
};
