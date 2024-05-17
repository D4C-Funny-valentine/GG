import React from 'react'
import { Box } from '@mui/material'
import { Heading, MotionHeroSection } from "@globalComponents"
import { useStartUpThemeSetting } from '../../features'

const HeroSection = () => {
  const {mode} = useStartUpThemeSetting();
  return (
    <MotionHeroSection 
      url='https://assets.maccarianagency.com/backgrounds/img1.jpg' 
      isOpacity={false} 
      addDarkCover={mode === 'light' ? false : true} 
      bgPosition="center"
      style={{clipPath : `polygon(0 0, 100% 0, 100% 65%, 0% 100%)`, minHeight: '90vh'}}>
        <Box>
            <Heading variant='h1'>Careers</Heading>
            <Heading>We are founded by a leading academic and researcher in the field of Industrial Systems Engineering.</Heading>
        </Box>
    </MotionHeroSection>
  )
}

export default HeroSection