import { Box, InlineGrid, InlineStack } from "@shopify/polaris";
import React, { useEffect, useState } from "react";
import { AnalyticsTitle } from "./AnalyticsTitle";
import { AnaliticsStoreSpeed } from "./AnaliticsStoreSpeed";
import { AnalyticsSesstion } from "./AnalyticsSesstion";
import { SalesAndViews } from "./SalesAndViews";
import { BulletIcon, MinusIcon } from "@shopify/polaris-icons";
import { CommonSalesOptions } from "./Charts/ChartsConstants/SaleViewData";
import { SalesAndViewsdata } from "./Charts/ChartsConstants/SaleViewData";
import { SiteSpeedData } from "./Charts/ChartsConstants/SaleViewData";
import { Revenue } from "./Charts/ChartsConstants/SaleViewData";
import { BarsData } from "./Charts/ChartsConstants/SaleViewData";

const AnalitiscDefault = () => {
  const [BarDataOne, setBarDataOne] = useState([]);
  const [BarDataTwo, setBarDataTwo] = useState([]);

  useEffect(() => {
    // seting barData in array
    setBarDataOne(BarsData.BarData1);
    setBarDataTwo(BarsData.BarData2);
  }, []);

  return (
    <Box className="Analytics_Main_Wrap">
      {/* Analytics Title */}
      <AnalyticsTitle />

      {/* Store Speed Chart */}
      <Box className="Analytics_Charts_Wrap">
        <InlineGrid columns={2} gap={500}>
          <AnaliticsStoreSpeed
            Title={"Store Speed Performance"}
            Value={"50%"}
            BarData={BarDataOne}
          />
          <AnaliticsStoreSpeed
            Title={"Store Speed Performance"}
            Value={"34%"}
            BarData={BarDataTwo}
          />
        </InlineGrid>
      </Box>

      {/* Analytics Cards */}
      <AnalyticsSesstion />

      {/* Sales And View Chart */}
      <SalesAndViews
        Title={"Sales & Views"}
        Iconsrc={BulletIcon}
        CharData={SalesAndViewsdata}
        ChartOptions={CommonSalesOptions}
        numbers={300}
        Mobile={130}
      />
      {/* Site Speed Score */}
      <Box className="SiteSpeed_Wrap">
        <SalesAndViews
          Title={"Site Speed Score"}
          Iconsrc={MinusIcon}
          CharData={SiteSpeedData}
          ChartOptions={CommonSalesOptions}
          numbers={"Mobile"}
          Mobile={"Desktop"}
        />

        {/* Revenue */}
        <SalesAndViews
          Title={"Revenue"}
          Iconsrc={BulletIcon}
          CharData={Revenue}
          ChartOptions={CommonSalesOptions}
          numbers={"$999"}
        />
      </Box>
    </Box>
  );
};

export default AnalitiscDefault;
