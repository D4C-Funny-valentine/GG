import { ImageListItem } from '@mui/material'
import React from 'react'

/**
 * 
 * @param {object} props - Components Props
 * @param {string} props.url - The image url.
 * @param {number} props.cols -  Column number of the image.
 * @param {object} props.style - Style of the image tag.
 * @param {object} props.sx - Additional style for the image list item.
 * @returns {React.ReactElement} 
 */

const ImageList = ({url, cols, style={}, sx={}}) => {
  return (
    <ImageListItem cols={cols || 1} sx={{...sx}}>
        <img src={url} alt={url} style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem', ...style}} loading="lazy"/>
    </ImageListItem>
  )
}

export default ImageList