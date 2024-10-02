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
import { LineChart } from "./Charts/LineChart";

export const SalesAndViews = ({
  Title,
  Iconsrc,
  CharData,
  ChartOptions,
  numbers,
  Mobile,
}) => {
  return (
    <Box className="Sales_View_Wrap">
      <Card>
        <BlockStack>
          <Box className="Sale_Title_Wrap">
            <Text variant="headingLg"> {Title} </Text>
          </Box>
          <Box className="Sale_Count_Wrap">
            <InlineStack align="space-between">
              <Box>
                <InlineStack gap={200} align="center" blockAlign="center">
                  <Icon source={Iconsrc} />
                  <Text variant="headingLg" fontWeight="bold">
                    {numbers}
                  </Text>
                  <Icon source={ArrowUpIcon} />
                  <Text variant="headingLg" tone="success" alignment="center">
                    49%
                  </Text>
                </InlineStack>
              </Box>
              {Mobile && (
                <Box>
                  <InlineStack gap={200}>
                    <Icon source={Iconsrc} />
                    <Text variant="headingLg" fontWeight="bold">
                      {" "}
                      {Mobile}{" "}
                    </Text>
                    <Icon source={ArrowUpIcon} />
                    <Text variant="headingLg" tone="success">
                      20%
                    </Text>
                  </InlineStack>
                </Box>
              )}
              
            </InlineStack>
          </Box>
          <Box className="Sale_Chrat_Wrap">
            <LineChart Data={CharData} options={ChartOptions} />
          </Box>
        </BlockStack>
      </Card>
    </Box>
  );
};
