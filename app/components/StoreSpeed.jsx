import { Box, Card, InlineGrid, InlineStack, Text } from "@shopify/polaris";
import React from "react";
import user from "../assests/graphics.svg";

const StoreSpeed = () => {
  return (
    <Box className="ThirdBox">
      <Box className="ThirdF">
        <InlineStack>
          <Card>
            <Text>Store Speed Performance</Text>
            <InlineGrid alignItems="center">
              <img src={user} alt="" />
              <Text>
                We are currently fetching your speed score from Lighthouse,
                which is powered by Google. This is the same test Shopify uses
                to measure your speed score and compare your site speed to
                similar stores. Please check back in a few hours.
              </Text>
            </InlineGrid>
          </Card>
          <Card>
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSYFWnunNFu3_JTbNjpJOI3agotjPAspN1tilYw6TZ9VprdxGcl"
              alt=""
            />
          </Card>
        </InlineStack>
      </Box>
    </Box>
  );
};

export default StoreSpeed;
