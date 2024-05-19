import { GridLayout, Heading, Paragraph } from '@globalComponents/index'
import { Box, Grid } from '@mui/material'
import React from 'react'

const RestApi = () => {
  return (
    <GridLayout spacing={4} sx={{alignItems: 'center'}}>
        <Grid item xs={12} md={5}>
            <Box>
                <Heading>REST API endpoints</Heading>
                <Paragraph>Customize and use existing data structure to implement your server easily.</Paragraph>
            </Box>
        </Grid>
        <Grid item xs={12} md={7}>
            <Box>
                <img src={'https://bazaar.ui-lib.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frest-api-endpoint.c9ade0ec.png&w=640&q=75'} alt='img' width={'100%'} height={'100%'} style={{objectFit: 'contain'}}/>
            </Box>
        </Grid>
    </GridLayout>
  )
}

export default RestApi