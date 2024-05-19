import { GridLayout, Heading } from '@globalComponents/index'
import { Box, Grid } from '@mui/material'
import React from 'react'
import { features } from '../config/_showcase'
import PaperCard from '../components/PaperCard'

const Features = () => {
  return (
   <Box>
        <Heading variant='h3' color="secondary" textAlign="center" sx={{mb: 6}}>POWERFUL FEATURES</Heading>
        <GridLayout spacing={8} sx={{py: 10}}>
            {
                features.map(item => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={item.img}>
                        <PaperCard url={item.img} title={item.title}/>
                    </Grid>
                ))
            }
        </GridLayout>
   </Box>
  )
}

export default Features