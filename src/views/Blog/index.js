import React from 'react'
import { Box, Container} from '@mui/material'
import HeroSection from './HeroSection'
import PopularNews from './PopularNews'

const Blog = () => {
    const padding = {xs : 8, md : 12}
  return (
    <Box>
      <Box sx={{height: '100%', pb : padding}}>
        <HeroSection/>
      </Box>
      <Container maxWidth="lg"  sx={{py: padding}}>
        <PopularNews data={[]}/>      
      </Container>
    </Box>
  )
}

export default Blog