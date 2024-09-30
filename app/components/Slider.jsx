import {
  Box,
  Button,
  Card,
  Icon,
  InlineGrid,
  InlineStack,
  Text,
} from "@shopify/polaris";
import React, { useEffect, useState } from "react";
import {
  QuestionCircleIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@shopify/polaris-icons";
import { Sliders } from "../components/Charts/ChartsConstants/SaleViewData/";

const Slider = () => {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setSlides(Sliders);
  }, []);

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
            {slides.length > 0 && (
              <img
                src={slides[currentIndex].image}
                alt={`Slide ${currentIndex + 1}`}
              />
            )}
          </Box>
          <Box>
            <InlineGrid gap={500}>
              <Box className="firstTextBottom">
                <InlineStack align="space-between">
                  <Text variant="headingLg" as="h5">
                    How SpeedPlus Works
                  </Text>
                  <Icon source={QuestionCircleIcon} tone="base" />
                </InlineStack>
              </Box>
              <Box>
                {slides.length > 0 && (
                  <Text variant="headingSm" as="h6">
                    {slides[currentIndex].text}
                  </Text>
                )}
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
                <Box className="vr"></Box>
              </Box>
              <Box>
                <InlineStack align="space-between">
                  <Box>
                    <Button>
                      <Text variant="headingMd" as="h6">
                        Need Help : Live Chat
                      </Text>
                    </Button>
                  </Box>
                  <Box className="SlideButton">
                    <InlineStack align="space-evenly" gap={500}>
                      <Button
                        onClick={handlePrev}
                        disabled={slides.length <= 1}
                      >
                        <Icon source={ChevronLeftIcon} tone="base" />
                      </Button>
                      <Button
                        onClick={handleNext}
                        disabled={slides.length <= 1}
                      >
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
