import { Box, InlineGrid } from "@shopify/polaris";
import React, { useEffect, useState } from "react";
import { CommanCard } from "./CommanCard";
import {CardData} from "../components/Charts/ChartsConstants/SaleViewData";

export const AnalyticsSesstion = () => {
  const [CardsData, setCardsData] = useState([]);

  useEffect(() => {
    setCardsData(CardData);
  });
  return (
    <Box className="Anallytics_Sesstion_Wrap">
      <InlineGrid columns={4} gap={400}>
        {CardsData.map((item) => {
          return (
            <CommanCard
              key={item.value}
              title={item.title}
              percentage={item.percentage}
              value={item.value}
              icon={item.icon}
              tootltip={item.tootltip}
            />
          );
        })}
      </InlineGrid>
    </Box>
  );
};
