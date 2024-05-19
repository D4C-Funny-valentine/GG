import { CustomButton, DynamicGridContainer, GridLayout, Heading, Paragraph } from '@globalComponents/index'
import { Box, Grid } from '@mui/material'
import React from 'react'
import { services } from '../config/_showcase'

const Services = () => {
  return (
    <Box>
      <Heading variant='h3' color="secondary" textAlign="center" sx={{mb: 6}}>WHAT YOU GET?</Heading>
      <Box>
        <GridLayout spacing={4}>
            {
              services.map(item => (
                <Grid item xs={12} md={6}>
                  <DynamicGridContainer 
                    spacing={4} 
                    imgUrl={item.img} 
                    imageStyle={{
                      borderRadius: '1rem', 
                      objectFit: 'cover'
                    }} 
                    imgMaxWidth='100%' 
                    imgGridCol={{xs: 12, md: 5}} 
                    textGridCol={{xs: 12, md: 7}} 
                    textPadding={{left: '0px', top: '0px'}}
                    imgGridSx={{width: '100%'}}
                    textGridSx={{width: '100%'}}
                    index={1} 
                    sx={{alignItems: 'start', flexDirection: {md: 'row-reverse', xs: 'column-reverse'}}}
                  >
                    <Box sx={{display: 'flex', flexDirection: "column", gap: '0.4rem', justifyContent: {md: 'space-between', xs: 'left'}, mb: {xs: 6, md: 0}}}>
                      <Box>
                        <Heading variant='h6'>{item.title}</Heading>
                        <Paragraph sx={{mt: 1, mb: 2}}>{item.description}</Paragraph>
                      </Box>
                      <Box sx={{mt: 'auto'}}>
                        <CustomButton variant='outlined'>
                          Browser {item.btnText}
                        </CustomButton>
                      </Box>
                    </Box>
                  </DynamicGridContainer>
                </Grid>
              ))
            }
        </GridLayout>
      </Box>
    </Box>
  )
}

export default Services