import { Box } from '@mui/material'
import React from 'react'

const ImageInterSection = ({src, height}) => {
  return (
    <Box sx={{height}}>
        <img src={src} style={{objectFit: 'cover', height: '100%', width: '100%'}}/>
    </Box>
  )
}

export default ImageInterSection