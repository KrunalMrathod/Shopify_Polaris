import { Box, InlineGrid } from '@shopify/polaris'
import React from 'react'
import { CommanCard } from './CommanCard'
import {
    ViewIcon, CashDollarFilledIcon, CartUpIcon, ExportIcon

} from '@shopify/polaris-icons';

const CardData = [
    {
        title: "Sessions",
        percentage: "11.5 %",
        value: "4.320 %",
        iconsThird: ViewIcon,
        tootltip: "Number Of views in last 30 days"
    },
    {
        title: "Conversion Rate",
        percentage: "11.5 %",
        value: '2.79 %',
        iconsThird: ExportIcon,
        tootltip: "Number Of views in last 30 days"
    },
    {
        title: "Total Sales",
        percentage: "11.5 %",
        value: '$79,999',
        iconsThird: CashDollarFilledIcon,
        tootltip: "Number Of views in last 30 days"
    },
    {
        title: "Total Orders",
        percentage: "11.5 %",
        value: 54,
        iconsThird: CartUpIcon,
        tootltip: "Number Of views in last 30 days"
    },
]


export const AnalyticsSesstion = () => {
    return (
        <Box className="Anallytics_Sesstion_Wrap" >
            <InlineGrid columns={4} gap={400} >
                {
                    CardData.map((item) => {
                        return (
                            <CommanCard id={item.title} title={item.title} value={item.value} tootltip={item.tootltip} percentage={item.percentage} />
                        )
                    })
                }
            </InlineGrid>
        </Box>
    )
}
