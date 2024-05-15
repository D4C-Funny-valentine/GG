import { Box, Grid, Paper } from '@mui/material'
import React from 'react'
import { Paragraph, Heading, CustomButton } from '../../../globalComponents'
import FactLayoutGrid from './FactLayoutGrid'

const DevPlatformFeatures = ({data}) => {
  return (
   <Box>
    <Box component={Paper} elevation={1} boxShadow={4}>
      <Grid container spacing={0} sx={{ p: {lg : 8, md: 4, xs: 2}, pb: {md : 4, xs : 2}}}>
        <Grid item xs={12} md={6}>
            <Box sx={{pt: 8, pl: 8}}>
              <Heading variant='h6' fontWeight={600}>Dedicated app development platform</Heading>
              <Paragraph variant='body1'>From open source to premium services.</Paragraph>
              <FactLayoutGrid data={data} xs={12} md={6} sx={{my: 3}}/>
            </Box>
        </Grid>
        <Grid item xs={12} md={6}>
            <Box sx={{pt: 8, pl: 8, borderLeft: {md: 1 , xs: 0}, borderTop: { md: 0, xs : 1 }, borderColor: {md: 'lightgray', xs : 'lightgray'}}}>
              <Heading variant='h6' fontWeight={600}>A better way to expand.</Heading>
              <Heading variant='h6' fontWeight={600}>Globally.</Heading>
              <Paragraph variant='body1' sx={{mt: 1}}>We make it simple to hire, onboard, and pay your global workforce in 150+ countries in full compliance with local laws.</Paragraph>
              <CustomButton sx={{my: 4}}>
                Learn more
              </CustomButton>
            </Box>
        </Grid>
      </Grid>
    </Box>
   </Box>

  )
}

export default DevPlatformFeatures