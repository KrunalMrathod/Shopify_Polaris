import { Box, Button, InlineStack, Text } from '@shopify/polaris'
import React from 'react'
import PlusIcon from "../assests/active_install.png";
import { RotateRightIcon } from "@shopify/polaris-icons";

const InitialApp = () => {
  return (
   <Box className="MainContainer">
     <InlineStack wrap={false} align="space-between">
        <Box width="50%">
          <InlineStack >
            <Box className="IconsBox">
              <RotateRightIcon className="RightIcon" />
            </Box>
            <Box className="TextBox">
              <Box>
                <Text as='span'>Initial Installation: App Activation</Text>
              </Box>
              <Box>
                <Text as='span'>Click here to activate your App feature</Text>
              </Box>
              <Button>Click Here</Button>
            </Box>
          </InlineStack>
        </Box>
        <Box className="RightBox" width='50%'>
          <img src={PlusIcon} alt="Plus Icon" />
        </Box>
      </InlineStack>
   </Box>
  )
}

export default InitialApp