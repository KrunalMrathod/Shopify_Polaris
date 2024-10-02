import { Box, Button, Icon, InlineStack, Text } from "@shopify/polaris";
import React from "react";
import { QuestionCircleIcon } from "@shopify/polaris-icons";

export function TitleAndTimestamp() {
  return (
    <Box paddingBlockEnd={300}>
      <InlineStack align="space-between" wrap={{ xs: true, lg: false }}>
        <Box>
          <Text variant="headingXl" as="h4">
            App Analysis
          </Text>
        </Box>
        <Box>
          <InlineStack
            blockAlign="center"
            gap={400}
            paddingBlockEnd="500"
            wrap={{ xs: true, lg: false }}
          >
            <Text variant="bodyLg" as="p">
              Last Analysis Date 25 July, 2023
            </Text>
            <Icon source={QuestionCircleIcon} tone="base" />
            <Box>
              <Button variant="primary" tone="success">
                Re-run App Analysis
              </Button>
            </Box>
          </InlineStack>
        </Box>
      </InlineStack>
    </Box>
  );
}
