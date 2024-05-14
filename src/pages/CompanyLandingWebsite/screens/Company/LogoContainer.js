import { Box } from '@mui/material'
import React from 'react'
import { BrandLogo } from '../../components'

const LogoContainer = ({data}) => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', flexWrap: 'wrap'}}>
        {
            data.slice(0, 6).map(logo => (
                <Box sx={{maxWidth: '90px'}}>
                    <BrandLogo src={logo} alt={logo} maxWidth={'100%'}/>
                </Box>
            ))
        }
    </Box>
  )
}

export default LogoContainer