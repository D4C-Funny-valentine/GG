import { Box } from '@mui/material'
import React from 'react'
import { Paragraph, Heading } from "../../components"
import "./about.css"

const HeroSection = () => {
  return (
    <Box sx={{position: 'relative'}} className="aboutus_hero_section">
        <Box sx={{position: 'relative', zIndex: 3, textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1rem', }}>
          <Heading variant='h1'>About us</Heading>
          <Paragraph variant='h7'>We take you by hand on each step of the process.</Paragraph>
          <Paragraph variant='h7'>As experts in both design & development, we help you go through the complete process. From your new website idea, to design, development, launch and scale!</Paragraph>
        </Box>
    </Box>
  )
}

export default HeroSection