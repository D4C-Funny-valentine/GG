import React from 'react'
import { Heading, MotionHeroSection } from "../../components"
import { Box } from '@mui/material'
import { useThemeSetting } from '../../features';

const HeroSection = () => {
  const {mode} = useThemeSetting();
  return (
    <MotionHeroSection 
      url='https://assets.maccarianagency.com/backgrounds/img52.jpg' 
      isOpacity={false} 
      addDarkCover={mode === 'light' ? false : true} 
      bgPosition="center"
      style={{clipPath : `ellipse(150% 100% at 50% 0%)`, minHeight: '95vh'}}>
        <Box sx={{textAlign: 'center'}}>
            <Heading variant='h1'>Newsroom</Heading>
            <Heading>Latest updates and Hand-picked resources.</Heading>
        </Box>
    </MotionHeroSection>
  )
}

export default HeroSection