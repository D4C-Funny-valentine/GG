import React from 'react'
import { Box, Grid } from '@mui/material'
import GridLayout from './GridLayout'
import HeadingTextGroup from './HeadingTextGroup'
import FactLayoutGrid from '../intersection/FactLayoutGrid'

const UsagePattern = ({data, url, factSpacing, descriptionVariant = 'h7', headingStyle = {}}) => {
  return (
    <GridLayout spacing={4} alignItems="center">
        <Grid item xs={12} md={5.5}>
            <Box sx={{width: '100%', height: '100%', mx: 'auto'}}>
              <img src={url} alt='img' style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.5rem'}}/>
            </Box>
        </Grid>
        <Grid item xs={12} md={6.5}>
            <HeadingTextGroup
              mainTitle='Monitor and analyze usage patterns.'
              headingVariant='h4'
              description="Keep track of what's happening with your data, change permissions, and run reports against your data anywhere in the world."
              descriptionVariant={descriptionVariant}
              justifyContentForMainTitle='left'
              textAlign='left'
              sx={{...headingStyle}}
            >
              <FactLayoutGrid spacing={factSpacing} data={data} xs={12} sx={{my: 2}}/>
            </HeadingTextGroup>
        </Grid>
    </GridLayout>
  )
}

export default UsagePattern