import { BlockStack, Box, Card, Icon, InlineStack, Text, Tooltip } from '@shopify/polaris'
import React from 'react'
import {
    AlertCircleIcon, ArrowDiagonalIcon
} from '@shopify/polaris-icons';

export const CommanCard = ({ title, value, tootltip, percentage }) => {
    return (
        <Box className="Sesstion_Wrap" >
            <Card>
                <Box className="Sesstion_title_wrap">
                    <Box className="sesstion_Title">
                        <Text>
                            {title}
                        </Text>
                        <Box className="Sesstion_Tooltip_Wrap" >
                            <Tooltip content={tootltip}>
                                <Icon source={AlertCircleIcon} />
                            </Tooltip>
                        </Box>
                    </Box>
                    <Box className="sesstion_value_wrap">
                        <Icon
                            source={ArrowDiagonalIcon}
                            tone="base"
                        />
                        <Text>
                            {percentage}
                        </Text>
                    </Box>
                </Box>
            </Card>
        </Box>
    )
}
