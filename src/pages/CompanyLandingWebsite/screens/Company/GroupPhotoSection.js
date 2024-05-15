import { Box } from '@mui/material'
import React from 'react'
import { HeadingTextGroup, ImageList, ImageListContainer } from '../../../../globalComponents';

const GroupPhotoSection = ({data}) => {
  return (
    <Box>
        <HeadingTextGroup
            miniTitle='Gallery'
            mainTitle='Small team. Big hearts'
            description='Our focus is always on finding the best people to work with. Our bar is high, but you look ready to take on the challenge.'
            sx={{mb: {md : 16, xs : 6}}}
        />
        <ImageListContainer>
            {
                data.map(image => (
                   <ImageList key={image.img} url={image.img} cols={image.cols}/>
                ))
            }
        </ImageListContainer>
    </Box>
  )
}

export default GroupPhotoSection