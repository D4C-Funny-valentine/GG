import { Box, Paper } from '@mui/material'
import React from 'react'

/**
 * 
 * @param {object} props - Component props.
 * @param {object} props.sx - Additional styles for the carousel card.
 * @param {number} props.minHeight - Minimum height of the carousel card image. Default is 340 by pixels.
 * @param {string} props.imageURL - Image URL for the card.
 * @param {React.ReactNode} props.children - For the card description Paper component.
 * @returns {React.ReactElement}
 */

const CarouselCard = ({sx= {}, minHeight = 340, imageURL, children}) => {
    return (
        <Box sx={{...sx, position: 'relative', width: '100%', minWidth: '280px', px: 2}}>
            <Box sx={{
                minHeight: minHeight + 'px', 
                zIndex: 3, 
                borderRadius: 2, 
                width: '100%', height: '100%', 
                backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', 
                backgroundImage: `url('${imageURL}')`
                }}
            />
            <Box component={Paper} sx={{ width: '85%', mx: 'auto', marginTop: -15, zIndex: 2}} elevation={1} borderRadius={2}>
                    <Box sx={{my: 2, p: 4, pb: 6}}>
                       {children}                               
                    </Box>
            </Box>
        </Box>
    )
}

export default CarouselCard