import React from 'react'
import { Box, Container} from '@mui/material'
import HeroSection from './HeroSection'
import PopularNews from './PopularNews'
import { feature_stories, popular_news } from '../../data/_blog'
import FeatureStories from './FeatureStories'
import LatestStories from './LatestStories'

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
          <FeatureStories data={feature_stories}/>
        </Container>
      </Box>
      <Container maxWidth="lg" sx={{py: padding}}>
        <LatestStories/>
      </Container>
    </Box>
  )
}

export default Blog