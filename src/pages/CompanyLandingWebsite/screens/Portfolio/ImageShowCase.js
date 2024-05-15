import React from 'react'
import { ImageList, ImageListContainer } from '../../../../globalComponents'

const ImageShowCase = ({data}) => {
  return (
    <ImageListContainer>
        {
            data.map(item => (
                <ImageList key={item.url} url={item.url} cols={item.cols}/>
            ))
        }
    </ImageListContainer>
  )
}

export default ImageShowCase