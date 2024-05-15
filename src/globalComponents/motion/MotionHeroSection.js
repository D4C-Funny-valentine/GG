import { Box, Container } from '@mui/material'
import { useScroll, useTransform, motion } from 'framer-motion'
import React from 'react'
import "./motion.css"

const MotionHeroSection = ({children, url = "https://assets.maccarianagency.com/backgrounds/img52.jpg", bgPosition = "top", endRatePercent = "50%", isOpacity = true, addDarkCover = false, isBgFull = false, style = {}}) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0,1], ["0%", endRatePercent]);
  const opacity = useTransform(scrollYProgress, [0,1], [1, 0]);
  return (
    <motion.div ref={ref} style={{position: 'relative', display: 'grid', placeItems: 'center', width: '100%', overflow: 'hidden', zIndex: 4, color: '#fff', ...style}} className={isBgFull ? "" : "background_parallax"}>
        <motion.div style={{
          backgroundImage: `url("${url}")`,
          backgroundSize: 'cover',
          backgroundPosition: bgPosition,
          height: '100%',
          width: '100%',
          position: 'absolute',
          zIndex: 1,
          y,
          opacity : isOpacity ? opacity : 'unset'
        }}/>
        {
          addDarkCover && <motion.div 
          style={{
            backgroundColor: '#161c2d66',
            backgroundPosition: 'top',
            width: '100%',
            height: '100%',
            position: 'absolute',
            zIndex: 2,
            y
          }}
        />
        }
        <Box sx={{
          position: 'absolute',
          zIndex: 3,
          width: '100%',
          height: '100%',
          mx: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
           <Container maxWidth="lg">
                {children}
           </Container>
        </Box>
    </motion.div>
  )
}

export default MotionHeroSection