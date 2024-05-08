import React from 'react'
import { FactLayoutGrid, GridLayout, HeadingTextGroup } from '../../../components'
import { Box, Grid } from '@mui/material'

const UsagePattern = ({data}) => {
  return (
    <GridLayout spacing={4} alignItems="center">
        <Grid item xs={12} md={5.5}>
            <Box sx={{width: '100%', height: '100%', mx: 'auto'}}>
              <img src='https://assets.maccarianagency.com/backgrounds/img21.jpg' alt='img' style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.5rem'}}/>
            </Box>
        </Grid>
        <Grid item xs={12} md={6.5}>
            <HeadingTextGroup
              mainTitle='Monitor and analyze usage patterns.'
              headingVariant='h4'
              description="Keep track of what's happening with your data, change permissions, and run reports against your data anywhere in the world."
              descriptionVariant='h7'
              justifyContentForMainTitle='left'
              textAlign='left'
            >
              <FactLayoutGrid data={data} xs={12} sx={{my: 2}}/>
            </HeadingTextGroup>
        </Grid>
    </GridLayout>
  )
}

export default UsagePattern