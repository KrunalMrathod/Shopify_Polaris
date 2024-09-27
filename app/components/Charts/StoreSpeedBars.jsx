import { BlockStack, Box, Card, InlineStack, Text } from "@shopify/polaris";
import React from "react";

export default function StorePerformance({color,height}) {
    return (
        <Box className="StoreSpeed_Bars_Wrap" >
            <InlineStack>
                <Box className="StoreSpeedBars"> <Box className="Bars_First_Fill" style={{ height: `${height}%`, backgroundColor:`#${color}` }} ></Box>  </Box>
            </InlineStack>
        </Box>
    )
}
