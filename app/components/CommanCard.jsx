import {
  BlockStack,
  Box,
  Card,
  Grid,
  Icon,
  InlineGrid,
  InlineStack,
  Text,
  Tooltip,
} from "@shopify/polaris";
import React from "react";
import { AlertCircleIcon, ArrowDiagonalIcon } from "@shopify/polaris-icons";

export const CommanCard = ({ title, percentage, value, icon, tootltip }) => {
  return (
    <Box className="Sesstion_Wrap" >
      <InlineStack wrap={false}>
        <Card>
          <BlockStack gap={500}>
            <Box className="Sesstion_Title_Wrap">
              <InlineStack align="space-between" blockAlign="center">
                <Box className="Title_Wrap">
                  <InlineStack>
                    <Text  variant="bodyLg"> {title} </Text>
                    <Box className="Sesstion_Tooltip_Wrap">
                      <Tooltip content={tootltip}>
                        <Icon source={AlertCircleIcon} tone="base" />
                      </Tooltip>
                    </Box>
                  </InlineStack>
                </Box>
                <Box>
                  <InlineStack align="space-between">
                    <Icon source={ArrowDiagonalIcon} tone="success" />
                    <Text > {percentage} </Text>
                  </InlineStack>
                </Box>
              </InlineStack>
            </Box>
            <Box className="Sesstion_Title_Wrap">
              <InlineStack align="space-between">
                <Box>
                  <Text tone="subdued"  variant="headingXl">{value}</Text>
                </Box>
                <Box>
                  <Icon className="ValueIcon" source={icon} tone="base" />
                </Box>
              </InlineStack>
            </Box>
          </BlockStack>
        </Card>
      </InlineStack>
    </Box>
  );
};
