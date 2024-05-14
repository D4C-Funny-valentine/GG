import { Card, CardContent, CardMedia } from '@mui/material'
import React from 'react'

/**
 * 
 * @param {object} props - Component properties.
 * @param {number} props.imgHeight - Height of the image.
 * @param {string} props.imgUrl - URL of the image.
 * @param {React.ReactNode} props.children - Additional render for the card content.
 * @returns {React.ReactElement}
 */

const CustomPaperCard = ({imgHeight, imgUrl, children}) => {
  return (
    <Card sx={{maxWidth: '100%'}}>
        <CardMedia
            sx={{height: imgHeight ?? 300}}
            image={imgUrl}
            title={'img'}
        />
        <CardContent>
           {children}
        </CardContent>
    </Card>
  )
}

export default CustomPaperCard