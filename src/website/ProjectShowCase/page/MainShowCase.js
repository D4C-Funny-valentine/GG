import { Box, Container } from '@mui/material'
import React from 'react'
import Home from './Home'
import Features from './Features'
import Projects from './Projects'
import ImageInterSection from '../components/ImageInterSection'

const MainShowCase = () => {
  return (
    <Box>
      <Container maxWidth="xl">
        <Box component={'section'} id='home' sx={{height: '85vh', pt : {md: 10, xs: 42}}}>
            <Home/>
        </Box>
      </Container>
        <Box>
          <ImageInterSection src={'https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Flanding%2Fpage-group-2.png&w=3840&q=100'} height={400}/>
        </Box>
      <Container maxWidth="xl">
          <Box component={'section'} id='features' sx={{height: '100vh'}}>
              <Features/>
          </Box>
      </Container>
      <Container maxWidth="xl">
        <Box component={'section'} id='projects' sx={{minHeight: '100vh'}}>
            <Projects/>
        </Box>
      </Container>
    </Box>
  )
}

export default MainShowCase