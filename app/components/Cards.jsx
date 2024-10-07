import {
  BlockStack,
  Box,
  Card,
  Icon,
  InlineGrid,
  InlineStack,
  Text,
} from "@shopify/polaris";
import React from "react";
import { Loader } from "../assests/Loader";
const Cards = ({ data, loading }) => {
  return (
    <Box>
      <InlineGrid gap={400} columns={{ xs: 2, sm: 2, md: 3, lg: 3, xl: 4 }}>
        {data.map((card) => (
          <Card padding={500} key={card.title} roundedAbove="xs">
            <Box className={loading ? "" : "show"}>
              <Text as="h4" variant="bodyMd" fontWeight="bold">
                {card.title}
              </Text>
              <Box className="card_wrap">
                <InlineStack
                  wrap={false}
                  blockAlign="center"
                  align="space-between"
                >
                  <Box className="cardIcons_wrap">
                    <Text as="h3" variant="heading2xl">
                      {card.number} <sup> {card.supkeyword} </sup>
                    </Text>
                  </Box>
                  <Icon
                    tone="success"
                    source={card.icon}
                    className="CardIcon"
                  />
                </InlineStack>
              </Box>
            </Box>
            {!loading && (
              <Box className="LoaderText">
                <Box className="Loader_wrap">
                  <Loader />
                </Box>
                <Text variant="headingMd"> Aggregating Analytics </Text>
              </Box>
            )}
          </Card>
        ))}
      </InlineGrid>
    </Box>
  );
};

export default Cards;
