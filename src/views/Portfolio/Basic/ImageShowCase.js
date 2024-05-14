import React from 'react'
import { ImageListCard, ImageListContainer } from '../../../components'

const ImageShowCase = ({data}) => {
  return (
    <ImageListContainer>
        {
            data.map(item => (
                <ImageListCard key={item.url} url={item.url} cols={item.cols}/>
            ))
        }
    </ImageListContainer>
  )
}

export default ImageShowCase