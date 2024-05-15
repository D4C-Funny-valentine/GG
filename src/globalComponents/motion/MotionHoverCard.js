import { Box } from '@mui/material'
import React from 'react'
import {motion} from "framer-motion";
import { useMediaQueryDevice } from '@hooks/index';

const MotionHoverCard = ({children, url, minHeight}) => {
    const {tablet} = useMediaQueryDevice();
    const imgScale = {
        initial : {scale : 1},
        animate : {scale : 1.4}
    }
  return (
    <motion.div initial="initial" whileHover={'animate'} style={{position: 'relative', height: '100%', width: '100%', minHeight: minHeight ? minHeight : tablet ? '600px' : '400px', overflow: 'hidden', color: 'white', borderRadius: '0.7rem'}}>
            <motion.img
                variants={imgScale}
                src={url}
                alt='image'
                style={{height: '100%', width: '100%', objectFit : 'cover', position: 'relative'}}
                transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 40,
                    mass: 1.4,
                    ease: 'easeInOut',
                }}
            />
        <Box sx={{position: 'absolute', bottom: 0, left: 0, right: 0, width: '100%'}}>
            {children}
        </Box>
    </motion.div>
  )
}

export default MotionHoverCard