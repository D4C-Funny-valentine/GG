import { Box, Grid, Paper } from '@mui/material'
import React from 'react'
import { Paragraph, Heading, BrandLogo } from '../UI'
import { useMediaQueryDevice } from '../../../../hooks'

/**
 * 
 * @param {object} props - Components Props
 * @param {'airbnb' | 'amazon' | 'fitbit' | 'netflix' | 'google' | 'paypal' | 'hubspot' | 'slack' | 'mapbox'} props.logo - Brand Logo image for the left title logo.
 * @param {string} props.bgUrl - Background url for the right side.
 * @returns {React.ReactElement}
 */

const ClassTemplate = ({logo, bgUrl}) => {
    const {tablet} = useMediaQueryDevice();
  return (
    <Box>
        <Grid container spacing={0}>
            <Grid item xs={12} md={6} sx={{ pt: { md : 8, xs : 0 } }}>
                <Box>
                    <BrandLogo src={`https://assets.maccarianagency.com/svg/logos/${logo}-original.svg`} alt={{logo}} maxWidth={tablet ? '120px' : '80px'} className={'brandLogo'}/>
                    <Heading variant='h6' sx={{mb: 8 , mt: 2}}>
                        First class templates. These guys know what they're doing: great code quality, clear naming conventions and clear code structure. Plain awesome and a pleasure to work with.
                    </Heading>
                    <Box>
                        <Heading variant='h6' fontWeight={700}>Jhon Anderson</Heading>
                        <Paragraph variant='body2'>MUI lover</Paragraph>
                    </Box>
                </Box>   
            </Grid>
            <Grid item xs={12} md={6}>
                <Box sx={{pl: {md: 8, xs: 0}, pt: 8 }}>
                    <Box 
                        component={Paper} 
                        elevation={0} 
                        overflow={'hidden'} 
                        borderRadius={2} 
                        sx={{minHeight: '300px', height: '100%', width: '100%', backgroundImage: `url(${bgUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}
                    />
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}


export default ClassTemplate