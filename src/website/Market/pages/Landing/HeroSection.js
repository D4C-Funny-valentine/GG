import { CustomCarousel, GridLayout, Heading } from '@globalComponents/index'
import { Box, Button, Container, Grid } from '@mui/material'
import React from 'react'
import { hero_section_data } from 'website/Market/config/_landing'

const HeroSection = () => {
  return (
    <Box sx={{height: '100vh',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Container maxWidth="xl">
            <GridLayout spacing={0}>
                <Grid item xs={12} md={9}>
                    <Box sx={{
                    }}>
                         <Box sx={{
                             minWidth: '100%',
                             minHeight: '500px',
                             width: '100%',
                             height: '100%',
                             display: 'flex',
                             alignItems: 'center',
                             backgroundSize: 'cover',
                             backgroundRepeat: 'no-repeat',
                             backgroundImage: `url(${'https://bazaar.ui-lib.com/assets/images/banners/banner-25.jpg'})`,
                         }}>
                             <Box sx={{
                                pl: 10,
                                color: 'text.lightgrey',
                             }}>
                                 <Heading sx={{textTransform: "uppercase", letterSpacing: 1.2}} variant='h3' fontWeight={400}>{'Lifestyle Collection'}</Heading>
                                 <Heading sx={{textTransform: 'uppercase'}} variant='h1'>Women</Heading>
                                 <Heading variant='h3' sx={{textTransform: 'uppercase'}} fontWeight={400}>Sale up to <span style={{color: '#D23F57'}}>35% Off</span></Heading>
                                 <Heading variant='h7' sx={{mb: 4}} fontWeight={400}>Get Free Shipping on orders over $99.00</Heading>
                                 <Box>
                                 <Button variant='contained' size='large' sx={{px: 8, py: 2, bgcolor: 'text.lightgrey', borderRadius: '0px'}}>
                                    Shop Now
                                 </Button>
                                 </Box>
                             </Box>
                         </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                        <Box sx={{bgcolor: 'red', height: '100%'}}>
                            
                        </Box>
                </Grid>
            </GridLayout>
        </Container>
    </Box>
  )
}

export default HeroSection