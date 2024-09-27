import { BlockStack, Box, Card, Divider, Icon, InlineStack, Text, Tooltip } from '@shopify/polaris'
import React from 'react'
import {
    AlertCircleIcon, ArrowUpIcon, QuestionCircleIcon
} from '@shopify/polaris-icons';
import StoreSpeedChart from './Charts/StoreSpeedChart';
import StoreSppedBar from "../components/Charts/StoreSpeedBars"

const BarData = [
    {
        backGroundColor: 'fdc9d0',
        height: 60
    },
    {
        backGroundColor: '91e0d6',
        height: 75
    },
    {
        backGroundColor: '92e6b5',
        height: 65
    },
    {
        backGroundColor: 'ffc4b0',
        height: 55
    }
]

export const AnaliticsStoreSpeed = () => {
    return (
        <Box className="StoreSpeed_Wrap" >
            <Card>
                <BlockStack>
                    <Box> <Text variant='headingLg' fontWeight='bold'> Store Speed Performance </Text> </Box>
                    <Box className="StoreSpeedScore_Wrap" > <InlineStack align='center'  > <Icon source={ArrowUpIcon} tone='base' /> <Text variant='headingLg'> 49% </Text>
                        <Tooltip content="Faster than the previous period">
                            <Icon source={AlertCircleIcon} tone='base' />
                        </Tooltip>
                    </InlineStack> </Box>
                    <Box>
                        <InlineStack>
                            <StoreSpeedChart value={54} />
                            {
                                BarData.map((item) => {
                                    return (
                                        <StoreSppedBar color={item.backGroundColor} height={item.height} />
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
