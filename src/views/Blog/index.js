import React from 'react'
import { Box, Container} from '@mui/material'
import HeroSection from './HeroSection'
import PopularNews from './PopularNews'
import { popular_news } from '../../data/_blog'
import FeatureStories from './FeatureStories'

const Blog = () => {
    const padding = {xs : 8, md : 12}
  return (
    <Box>
      <Box sx={{height: '100%', pb : padding}}>
        <HeroSection/>
      </Box>
      <Container maxWidth="lg"  sx={{py: padding}}>
        <PopularNews data={popular_news}/>      
      </Container>
      <Box sx={{bgcolor: 'info.main'}}>
        <Container maxWidth="lg" sx={{py: padding}}>
          <FeatureStories/>
        </Container>
      </Box>
    </Box>
  )
}

export default Blog