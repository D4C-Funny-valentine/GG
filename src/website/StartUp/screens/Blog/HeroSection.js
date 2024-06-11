import React from 'react'
import { Heading, MotionHeroSection } from "@globalComponents/index"
import { Box } from '@mui/material'

const HeroSection = () => {
  return (
    <MotionHeroSection 
      url='https://assets.maccarianagency.com/backgrounds/img52.jpg' 
      isOpacity={false} 
      addDarkCover={true} 
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