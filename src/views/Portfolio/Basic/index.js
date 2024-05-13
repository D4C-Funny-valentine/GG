import React from 'react'
import { Box, Container, useTheme} from '@mui/material'
import HeroSection from './HeroSection';
import ShowCase from './ShowCase';
import ServicesSection from './ServicesSection';
import { showCases } from '../../../data/_portfolio';

const Basic = () => {
  const theme  = useTheme();
  const data = showCases(theme);
  const padding = {xs : 8, md : 12};
  return (
    <Box>
      <Box sx={{pb: padding, height: '100%'}}>
        <HeroSection/>
      </Box>
      <Container maxWidth="lg" sx={{py: padding}}>
        <ShowCase data={data}/>
      </Container>

      <Box sx={{bgcolor: 'info.main'}}>
        <Container maxWidth="lg" sx={{py: padding}}>
            <ServicesSection/>
        </Container>
      </Box>
    </Box>
  )
}

export default Basic