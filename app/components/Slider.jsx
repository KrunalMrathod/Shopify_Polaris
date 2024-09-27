import {
  Box,
  Button,
  Card,
  Icon,
  InlineGrid,
  InlineStack,
  Text,
} from "@shopify/polaris";
import React, { useState } from "react";
import {
  QuestionCircleIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@shopify/polaris-icons";

const slides = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1661964014750-963a28aeddea?w=500&auto=format&fit=crop&q=60",
    text: "1 SpeedPlus is an AI-driven speed optimization tool designed specifically for Shopify stores. By using a combination of publicly known site speed tools, proprietary techniques, and advanced AI algorithms, SpeedPlus aims to provide the best possible speed optimization for Shopify merchants. Here are some reasons why SpeedPlus could be the best choice for speeding up online stores",
  },
  {
    image:
      "https://images.unsplash.com/photo-1721332154161-847851ea188b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
    text: "2 SpeedPlus is an AI-driven speed optimization tool designed specifically for Shopify stores. By using a combination of publicly known site speed tools, proprietary techniques, and advanced AI algorithms, SpeedPlus aims to provide the best possible speed optimization for Shopify merchants. Here are some reasons why SpeedPlus could be the best choice for speeding up online stores",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1677560517139-1836389bf843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    text: "3 SpeedPlus is an AI-driven speed optimization tool designed specifically for Shopify stores. By using a combination of publicly known site speed tools, proprietary techniques, and advanced AI algorithms, SpeedPlus aims to provide the best possible speed optimization for Shopify merchants. Here are some reasons why SpeedPlus could be the best choice for speeding up online stores",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length,
    );
  };

  return (
    <Box className="FourthBox">
      <Card>
        <InlineStack>
          <Box className="ImgBox">
            <img
              src={slides[currentIndex].image}
              alt={`Slide ${currentIndex + 1}`}
            />
          </Box>

          <Box>
            <InlineGrid gap={500}>
              <Box className="fisrtTextBottm">
                <InlineStack align="space-between">
                  <Text variant="headingLg" as="h5">
                    How SpeedPlus Works
                  </Text>
                  <Icon source={QuestionCircleIcon} tone="base" />
                </InlineStack>
              </Box>
              <Box>
                <Text variant="headingSm" as="h6">
                  {slides[currentIndex].text}
                </Text>
              </Box>
              <Box>
                <Text
                  textDecorationLine="underline"
                  tone="success"
                  fontWeight="600"
                  variant="headingLg"
                >
                  Continue Reading
                 
                </Text>
                <Box className="vr" ></Box>
              </Box>
              <Box>
                <InlineStack align="space-between">
                  <Box>
                    <Button > <Text  variant="headingMd" as="h6" >
                    Need Help : Live Chat</Text> </Button>
                  </Box>
                  <Box className="SlideButton">
                    <InlineStack align="space-evenly" gap={500}>
                      <Button onClick={handlePrev}>
                        <Icon source={ChevronLeftIcon} tone="base" />
                      </Button>
                      <Button onClick={handleNext}>
                        <Icon source={ChevronRightIcon} tone="base" />
                      </Button>
                    </InlineStack>
                  </Box>
                </InlineStack>
              </Box>
            </InlineGrid>
          </Box>
        </InlineStack>
      </Card>
    </Box>
  );
};

export default Slider;
