import React from 'react'
import { Box, ImageList } from '@mui/material'
import { useMediaQueryDevice } from '../../../../hooks';

/**
 * A container component for rendering images in a grid layout.
 * 
 * @param {object} props - Component props.'
 * @param {object} props.sx - Additional image container style.
 * @param {number} [props.cols=3] - The number of columns in the grid layout.
 * @param {number} [props.rowHeight=300] - The height of each row in the grid layout.
 * @param {React.ReactNode} props.children - The images or components to be rendered within the container.
 * @returns {React.ReactElement}
 */

const ImageListContainer = ({sx = {}, cols = 3, rowHeight = 300, children}) => {
    const { tablet } = useMediaQueryDevice();
  return (
    <Box sx={{...sx}}>
      <ImageList cols={cols} gap={tablet ? 16 : 4} rowHeight={tablet ? rowHeight : (rowHeight - 100)} sx={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
       {children}
      </ImageList>
    </Box>
  )
}

export default ImageListContainer