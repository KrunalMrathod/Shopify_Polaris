import { BlockStack, Box, Card, InlineStack, Text } from "@shopify/polaris";
import React from "react";

export const SalesGridBox = ({ data, Title }) => {
  return (
    <Box className="SalesGrid_Wrap">
      <Card>
        <BlockStack>
          <Box className="SaleTitle_Wrap">
            <Text variant="headingLg">{Title}</Text>
          </Box>
          <Box>
            {data &&
              data.map((item) => {
                const  Description = item.description.substring(0, 25);
                return (
                  <Box key={item.id}>
                    <Box className="Products_Wrap" >
                      <InlineStack  >
                        <Box className="UnitSold_Wrap">
                          <BlockStack>
                            <Text variant="headingMd" tone="subdued">Unit Sold</Text> <Text variant="headingMd" tone="subdued">130</Text>
                          </BlockStack>
                        </Box>
                        <Box className="unitImg_Wrap">
                          {" "}
                          <img src={item.images} alt="" />{" "}
                        </Box>
                        <Box className="unitDescription_Wrap">
                          {" "}
                          <Text breakWord={true} > {Description} </Text>{" "}
                        </Box>
                      </InlineStack>
                    </Box>
                  </Box>
                );
              })}
          </Box>
        </BlockStack>
      </Card>
    </Box>
  );
};
