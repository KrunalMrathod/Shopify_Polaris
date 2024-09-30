import {
  BlockStack,
  Box,
  Button,
  Card,
  Icon,
  InlineStack,
  ProgressBar,
  Text,
  Badge,
} from "@shopify/polaris";
import {
  WandIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@shopify/polaris-icons";
import { useState } from "react";
import { AccordianColapse } from "./AccordianColapse";

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
            <AccordianColapse isActive={isActive} />
          </Box>
        </BlockStack>
      </Card>
    </Box>
  );
};

export default Accordian;
