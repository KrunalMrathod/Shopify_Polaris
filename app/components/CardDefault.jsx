import React from "react";
import { Box } from "@shopify/polaris";

import Accordian from "./Accordian";
import StoreSpeed from "./StoreSpeed";
import Slider from "./Slider";
import InitialApp from "./InitialApp";

function CardDefault() {
  return (
    <Box shadow="800">

      {/* Initial App Activation */}
      <InitialApp />

      {/* Accordian */}
      <Accordian />

      {/* StoreSpeed */}
      <StoreSpeed />

      {/* Slider */}
      <Slider />
      
    </Box>
  );
}
export default CardDefault;
