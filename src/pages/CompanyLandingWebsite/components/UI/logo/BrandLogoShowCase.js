import { Box } from '@mui/material'
import React from 'react'
import BrandLogo from './BrandLogo'

/**
 * A component for the brand logo show case
 * 
 * @param {object} props - Components Props
 * @param {Array} props.data -  Data to show the brand logo.
 * @returns {React.ReactElement}
 */

const BrandLogoShowCase = ({data, showAll = false, logoNumber = 6, maxWidth='90px'}) => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', flexWrap: 'wrap'}}>
        {
            data.slice(0, showAll ? data.length : logoNumber).map(logo => (
                <Box sx={{maxWidth: maxWidth}}>
                    <BrandLogo src={logo} alt={logo} maxWidth={'100%'}/>
                </Box>
            ))
        }
    </Box>
  )
}

export default BrandLogoShowCase