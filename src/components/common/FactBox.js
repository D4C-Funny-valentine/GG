import { Box } from '@mui/material'
import React from 'react'
import { Paragraph } from '../UI'

/**
 * 
 * @param {object} props - Component properties.
 * @param {React.ReactNode} props.children - Icon component
 * @param {string} props.text - Text.
 * @param {'body1' | 'body2' | 'subtitle1' | 'subtitle2' | 'subtitle3' | 'subtitle4' | 'caption'} props.textVariant - Text variant.
 * @returns {React.ReactElement}
 */

const FactBox = ({children, text, textVariant = 'body1'}) => {
  return (
    <Box sx={{display: 'flex'}}>
        {children}
        <Paragraph variant={textVariant}>{text}</Paragraph>
    </Box>
  )
}

export default FactBox