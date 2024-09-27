import { BlockStack, Box, Button, Card, Icon, InlineStack, ProgressBar, Text,Badge, Collapsible  } from "@shopify/polaris";
import {
  WandIcon,
  ChevronDownIcon,
  CircleDownIcon,
  AutomationIcon,
  ChevronUpIcon,
} from "@shopify/polaris-icons";
import { useState } from "react";

const Accordian = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Box className="secondBox">
      <Card>
        <BlockStack>
          <Box className="FistInner">
            <Box
              onClick={() => setIsActive((prev) => !prev)}
              className="DropContainer"
            >
              <InlineStack fontWeight="bold">
                <Button>
                  <Icon source={WandIcon} tone="base" className="icon" />
                </Button>
                <Box>
                  <Text as="p" fontWeight="bold" alignment="center">
                    Currently configuring SpeedPlus to optimize your store speed
                    & performance
                  </Text>
                </Box>
                <Button>
                  {isActive ? (
                    <Icon source={ChevronDownIcon} className="icon" />
                  ) : (
                    <Icon source={ChevronUpIcon} tone="base" />
                  )}
                </Button>
              </InlineStack>
            </Box>

            <Box className="TextContainer">
              <Text as="span" fontWeight="semibold">
                Once the installation and configuration is completed, this
                message and the loading bar below will disappear.
              </Text>
            </Box>
            <Box className="ProgessBox">
              <InlineStack blockAlign="center">
                <Text>1 of 7 Steps Complete</Text>
                <ProgressBar progress={70} size="small" tone="success" />
                <Button>70%</Button>
              </InlineStack>
            </Box>

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
                      Activating FCP(First Contentful Paint) we are working on
                      it,it should be done in x days{" "}
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
          </Box>
        </BlockStack>
      </Card>
    </Box>
  );
};

export default Accordian;
