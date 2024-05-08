import React from 'react'
import { Box, Paper, Container } from "@mui/material";
import { Heading, CustomButton, CustomInput } from '../../../components';
import Marquee from 'react-fast-marquee';
import { useThemeSetting } from '../../../redux/features';
import { brandLogo } from '../../../data/common';
import { useMediaQueryDevice } from '../../../hooks';

const hero_section_container = {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
}

const HeroSection = () => {
  return (
      <>
        <Box className='hero_section' sx={{position: 'relative', zIndex: 4, ...hero_section_container, pt: '104px', color: '#fff'}}>
          <Container maxWidth='lg' sx={{zIndex: 4, ...hero_section_container, gap: '1rem', flexDirection: 'column', py: 14}}>
              <Heading variant='h1'>We craft beautiful websites and digital products</Heading>
              <Heading sx={{ fontWeight : 700 }}>We design, develop and launch websites and products for startups, companies and ourselves.</Heading>
              <Box component={Paper} sx={{ px: {md: 16, xs : 6}, py: {md : 18, xs : 7}, minHeight: '100px', height: '100%', width: '100%', display: 'flex', alignItems: 'center', gap: '1rem', flexDirection: { md : 'row', xs : 'column' } }} elevation={1}>
                  <CustomInput label="Name" placeholder='Name' fullWidth size='medium' />
                  <CustomInput label="Email" placeholder='Email' fullWidth size='medium' />
                  <CustomButton sx={{width : { xs : '100%', md: 'auto' }}}>Send</CustomButton>
              </Box>        
          </Container>
        </Box>
        <LogoContainer />
      </>
  )
}

const LogoContainer = () => {
  const { mode } = useThemeSetting();
  const { mobile }  = useMediaQueryDevice();

  return (
    <Box sx={{ bgcolor: theme => theme.palette.primary.main , minWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: "center" }} className='logo_container'>
    <Marquee
      pauseOnHover={true}
      speed={30}
      gradient={true}
      gradientWidth={mobile ? 50 : 200}
      gradientColor={mode === 'light' ? '#377dff' : '#1976d2'}
      loop={0}
      delay={0}
      style={{height: '100%'}}
    >
      {
        brandLogo.map((img, i) => (
          <BrandLogo key={i} img={img} />
        ))
      }
    </Marquee>
  </Box>
  )
}

const BrandLogo = ({img}) => {
  return (
    <Box sx={{ maxWidth: { md: 120, xs : 100 }, width: '100%', objectFit: 'contain', mx: { md: 20, xs : 8 } }}>
      <img src={img} alt="logo" style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
    </Box>
  )
}

export default HeroSection