import React from 'react'
import { useStartUpThemeSetting } from '../../features'
import { Heading, MotionHeroSection } from '@globalComponents/index';
import { Box } from '@mui/material';

const HeroSection = () => {
    const {mode} = useStartUpThemeSetting();
  return (
    <MotionHeroSection
        url='https://assets.maccarianagency.com/backgrounds/img44.jpg' 
        isOpacity={false} 
        addDarkCover={mode === 'light' ? false : true} 
        bgPosition="center"
        style={{height: '100vh'}}
        >
        <Box>
            <Heading variant='h1'>OUR WORK</Heading>
            <Heading>We are founded by a leading academic and researcher in the field of Industrial Systems Engineering.</Heading>
        </Box>
    </MotionHeroSection>
  )
}

export default HeroSection