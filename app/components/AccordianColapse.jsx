import { Box, Icon, InlineStack, Text, Collapsible } from "@shopify/polaris";
import React from "react";
import { CircleDownIcon, AutomationIcon } from "@shopify/polaris-icons";

export const AccordianColapse = ({ isActive }) => {
  return (
    <Collapsible
      open={isActive}
      id="basic-collapsible"
      transition={{
        duration: "500ms",
        timingFunction: "ease-in-out",
      }}
      expandOnPrint
    >
      <Box className="HideContent">
        <Box>
          <InlineStack align="start" blockAlign="center">
            <Icon source={CircleDownIcon} tone="success" />
            <Text as="h2" fontWeight="bold" tone="success">
              {" "}
              Initail Intallation: App activation{" "}
            </Text>
          </InlineStack>
        </Box>

        <Box>
          <InlineStack align="start" blockAlign="center">
            <Icon source={CircleDownIcon} tone="success" />
            <Text as="h2" fontWeight="bold" tone="success">
              {" "}
              SpeedPlse installation and setup{" "}
            </Text>
          </InlineStack>
        </Box>
        <Box>
          <InlineStack align="start" blockAlign="center">
            <Icon source={AutomationIcon} tone="primary" />
            <Text as="h2" fontWeight="bold" tone="primary">
              {" "}
              Activating FCP(First Contentful Paint) we are working on it,it
              should be done in x days{" "}
            </Text>
          </InlineStack>
        </Box>
        <Box>
          <InlineStack align="start" blockAlign="center">
            <Icon source={AutomationIcon} tone="subdued" />
            <Text as="h2" fontWeight="bold" tone="subdued">
              {" "}
              Activating SL(speed index){" "}
            </Text>
          </InlineStack>
        </Box>
        <Box>
          <InlineStack align="start" blockAlign="center">
            <Icon source={AutomationIcon} tone="subdued" />
            <Text as="h2" fontWeight="bold" tone="subdued">
              {" "}
              Activating LCP(largest contentfull paint){" "}
            </Text>
          </InlineStack>
        </Box>
        <Box>
          <InlineStack align="start" blockAlign="center">
            <Icon source={AutomationIcon} tone="subdued" />
            <Text as="h2" fontWeight="bold" tone="subdued">
              {" "}
              Activating TBT(Total Blocking Time)
            </Text>
          </InlineStack>
        </Box>
        <Box>
          <InlineStack align="start" blockAlign="center">
            <Icon source={AutomationIcon} tone="subdued" />
            <Text as="h2" fontWeight="bold" tone="subdued">
              Activating CLS(Cumulative Layout Shift)
            </Text>
          </InlineStack>
        </Box>
        <Box>
          <InlineStack align="start" blockAlign="center">
            <Icon source={AutomationIcon} tone="subdued" />
            <Text as="h2" fontWeight="bold" tone="subdued">
              Activating IO(Image Optimization)
            </Text>
          </InlineStack>
        </Box>
        <Box>
          <InlineStack align="start" blockAlign="center">
            <Icon source={AutomationIcon} tone="subdued" />
            <Text as="h2" fontWeight="bold" tone="subdued">
              Monitoring and reporting
            </Text>
          </InlineStack>
        </Box>
      </Box>
    </Collapsible>
  );
};
