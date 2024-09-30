import {
  BlockStack,
  Box,
  Card,
  Divider,
  Icon,
  InlineStack,
  Text,
  Tooltip,
} from "@shopify/polaris";
import React from "react";
import {
  AlertCircleIcon,
  ArrowUpIcon,
  QuestionCircleIcon,
} from "@shopify/polaris-icons";
import StoreSpeedChart from "./Charts/StoreSpeedChart";
import StoreSpeedBars from "../components/Charts/StoreSpeedBars";

export const AnaliticsStoreSpeed = ({ Title, Value ,BarData}) => {
  return (
    <Box className="StoreSpeed_Wrap">
      <Card>
        <BlockStack>
          <Box>
            <Text variant="headingLg" fontWeight="bold">
              {Title}
            </Text>
          </Box>
          <Box className="StoreSpeedScore_Wrap">
            <InlineStack align="center">
              <Icon source={ArrowUpIcon} tone="base" />
              <Text variant="headingLg"> 49% </Text>
              <Tooltip content="Faster than the previous period">
                <Icon source={AlertCircleIcon} tone="base" />
              </Tooltip>
            </InlineStack>
          </Box>
          <Box>
            <InlineStack>
              <StoreSpeedChart value={Value} />
              {BarData.map((item) => {
                return (
                  <StoreSpeedBars
                    key={item.height}
                    color={item.backGroundColor}
                    height={item.height}
                  />
                );
              })}
            </InlineStack>
          </Box>
          <Divider />
          <InlineStack align="space-around">
            <Text variant="headingMd" alignment="center">
              Your store is faster than similar stores on Shopify.
            </Text>
            <Icon source={QuestionCircleIcon} tone="base" />
          </InlineStack>
        </BlockStack>
      </Card>
    </Box>
  );
};
