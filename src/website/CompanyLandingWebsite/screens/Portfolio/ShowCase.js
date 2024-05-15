import React from 'react'
import { CustomButton, GridLayout, Heading, MotionHoverCard } from '@globalComponents/index'
import { Box, Grid } from '@mui/material'

const ShowCase = ({data}) => {
   
  return (
    <GridLayout spacing={4}>
        {
            data.map((item ,index) => (
                <Grid item xs={12} md={6} key={index}>
                    <MotionHoverCard url={item.backdrop_image}>
                        <Box sx={{backgroundImage: `linear-gradient(#00000000, ${item.backgroundColor})`, width: '100%', p: 5}}>
                            <Heading variant='h3'>{item.title}</Heading>
                            <Heading sx={{fontWeight : 700, mb: 2}}>{item.description}</Heading>
                            <CustomButton variant='contained' color='secondary' sx={{'&:hover' : {bgcolor: 'secondary.main'}, color:"white"}} >
                                Read More
                            </CustomButton>
                        </Box>
                    </MotionHoverCard>
                </Grid>
            ))
        }
    </GridLayout>
  )
}

export default ShowCase