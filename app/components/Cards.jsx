import {
  Box,
  Card,
  Icon,
  InlineGrid,
  InlineStack,
  Text,
} from "@shopify/polaris";
import React from "react";
const Cards = ({ data }) => {
  return (
    <InlineGrid gap={400} columns={{ xs: 2, sm: 2, md: 3, lg: 3, xl: 4 }}>
      {data.map((card) => (
        <Card padding={500} key={card.title} roundedAbove="xs">
          <Text as="h6" variant="bodyMd">
            {card.title}
          </Text>
          <Box className="cardicons_wrap">
            <InlineStack wrap={false} blockAlign="center" align="space-between">
              <Box className="cardIcons_wrap">
                <Text as="h3" variant="heading2xl">
                  {card.number} <sup> {card.supkeyword} </sup>
                </Text>
              </Box>
              <Icon tone="success" source={card.icon} />
            </InlineStack>
          </Box>
        </Card>
      ))}
    </InlineGrid>
  );
};

export default Cards;
