import { Box, Paper } from '@mui/material'
import React from 'react'
import { Heading, Paragraph } from '../UI'

/**
 * 
 * @param {object} props - Component props.
 * @param {string} props.imageURL - Image URL for the card.
 * @param {string} props.heading - Title for the card.
 * @param {string} props.text - Text for the card.
 * @returns {React.ReactElement}
 */

const CarouselCard = ({imageURL, heading, text}) => {
    return (
        <Box sx={{position: 'relative', minWidth: '280px', width: '100%', pl: {md : 8 , xs : 0}}}>
            <Box sx={{
                minHeight: '340px', 
                zIndex: 3, 
                borderRadius: 2, 
                width: '100%', height: '100%', 
                backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', 
                backgroundImage: `url('${imageURL}')`
                }}
            />
            <Box component={Paper} sx={{ width: '85%', mx: 'auto', marginTop: -15, zIndex: 2}} elevation={1} borderRadius={2}>
                    <Box sx={{my: 2, p: 4, pb: 6}}>
                        <Heading variant='body1' fontWeight={500}>{heading}</Heading>
                        <Paragraph variant='subtitle2'>
                            {
                                text.toString()
                            }    
                        </Paragraph>                                      
                    </Box>
            </Box>
        </Box>
    )
}

export default CarouselCard