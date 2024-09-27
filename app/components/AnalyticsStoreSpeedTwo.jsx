import { BlockStack, Box, Card, Divider, Icon, InlineStack, Text, Tooltip } from '@shopify/polaris'
import React from 'react'
import {
  AlertCircleIcon, ArrowUpIcon, QuestionCircleIcon
} from '@shopify/polaris-icons';
import StoreSpeedChart from './Charts/StoreSpeedChart';
import StoreSpeedBars from './Charts/StoreSpeedBars';


const BarData = [
  {
    backGroundColor: 'fdc9d0',
    height: 60,
  },
  {
    backGroundColor: '91e0d6',
    height: 75,
  },
  {
    backGroundColor: '92e6b5',
    height: 65
  },
  {
    backGroundColor: 'ffc4b0',
    height: 55,
  }
]


export const AnalyticsStoreSpeedTwo = () => {
  return (
    <Box className="StoreSpeed_Wrap" >
      <Card>
        <BlockStack>
          <InlineStack align='space-between' blockAlign='center'>   <Box> <Text variant='headingLg' fontWeight='bold'> Store Speed Performance </Text> </Box> <Box> <Text variant='bodyLg' >  Mobile</Text> </Box>  </InlineStack>
          <Box className="StoreSpeedScore_Wrap" > <InlineStack align='center'  > <Icon source={ArrowUpIcon} tone='base' /> <Text variant='headingLg'> 49% </Text>
            <Tooltip content="Faster than the previous period">
              <Icon source={AlertCircleIcon} tone='base' />
            </Tooltip>
          </InlineStack> </Box>
          <Box>
            <InlineStack>
              <StoreSpeedChart value={34} />
              {
                BarData.map((item) => {
                  return (
                    <StoreSpeedBars key={item.height} color={item.backGroundColor} height={item.height} />
                  )
                })
              }
            </InlineStack>
          </Box>
          <Divider />
          <InlineStack align='space-around'>
            <Text variant='headingMd' alignment='center'>
              Your store is faster than similar stores on Shopify.
            </Text>
            <Icon source={QuestionCircleIcon} tone='base' />
          </InlineStack>
        </BlockStack>
      </Card>
    </Box>
  )
}
