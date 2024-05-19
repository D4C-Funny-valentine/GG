import { Box } from '@mui/material'
import React from 'react'
import { Heading } from '@globalComponents/ui';

/**
 * 
 * @param {object} props - Component properties.
 * @param {string} props.title - Title for the subscription.
 * @param {string} props.titleVariant - Title variant for the subscription.
 * @param {string} props.descriptionVariant - Descirption variant for the subscription.
 * @param {string} props.description - Description for the subscription.
 * @param {object} props.sx - Additional style for the subscription.
 * @param {object} props.titleStyle - Additional title style for the subscription.
 * @param {React.ReactNode} props.children - Additional children for the subscription.
 * @returns {React.ReactElement}
 */

const SubscriptionBox = ({title, description, sx={}, titleVariant="h3", descriptionVariant= "h6", titleStyle ={}, children}) => {
  return (
    <Box sx={{...sx, bgcolor: 'primary.main', borderRadius: 4, color: 'white', px: 1}}>
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', color:'inherit', alignItems: 'center', textAlign: 'center', gap: '1rem', minHeight: 300, height: '100%', width: '100%'}}>
            <Heading variant={titleVariant} sx={{...titleStyle, color: 'white'}}>{title}</Heading>
            <Heading variant={descriptionVariant}>{description}</Heading>
            <Box>
                {
                    children
                }
            </Box>
        </Box>
    </Box>
  )
}

export default SubscriptionBox