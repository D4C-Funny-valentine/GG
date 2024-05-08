import { ImageListItem } from '@mui/material'
import React from 'react'

/**
 * 
 * @param {object} props - Components Props
 * @param {object} props.data - The image data object containing img, cols & alt properties.
 * @returns 
 */

const ImageListCard = ({data}) => {
  return (
    <ImageListItem cols={data.cols || 1}>
        <img src={data.img} alt={data.alt} style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem'}} loading="lazy"/>
    </ImageListItem>
  )
}

export default ImageListCard