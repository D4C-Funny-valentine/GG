import React from 'react'
import { Box, Container, useTheme} from '@mui/material'
import HeroSection from './HeroSection';
import ShowCase from './ShowCase';
import ServicesSection from './ServicesSection';
import { imageShowCase, showCases } from '../../data/_portfolio';
import { UsagePattern } from '../../web/CompanyLandingWebsite/components';
import { usage_patterns } from '../../data/common';
import ImageShowCase from './ImageShowCase';

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

      <Box sx={{bgcolor: 'primary.main'}}>
        <Container maxWidth="lg" sx={{py: padding}}>
            <UsagePattern 
              data={usage_patterns} 
              url={'https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration2.svg'}
              descriptionVariant='h6'
              headingStyle={{color: 'white'}}
              factSpacing={1}
            />
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{py: padding}}>
        <ImageShowCase data={imageShowCase}/>
      </Container>
    </Box>
  )
}

export default Basic