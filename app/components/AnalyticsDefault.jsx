import { Box, InlineGrid, InlineStack } from '@shopify/polaris';
import React from 'react';
import { AnalyticsTitle } from './AnalyticsTitle';
import { AnaliticsStoreSpeed } from './AnaliticsStoreSpeed';
import { AnalyticsStoreSpeedTwo } from './AnalyticsStoreSpeedTwo';
import { AnalyticsSesstion } from './AnalyticsSesstion';
const AnalitiscDefault = () => {


    return (
        <Box className="Analytics_Main_Wrap" >
            <AnalyticsTitle />
            <Box className="Analytics_Charts_Wrap"  >
                <InlineGrid columns={2} gap={500}>
                    <AnaliticsStoreSpeed />
                    <AnalyticsStoreSpeedTwo />
                </InlineGrid>
            </Box>
            <AnalyticsSesstion/>


        </Box>
    );
};

export default AnalitiscDefault;
