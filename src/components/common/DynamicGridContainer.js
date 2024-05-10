import React from 'react'
import { calculateEven } from '../../utils/calculation'
import { Box, Grid } from '@mui/material'

/**
 * @param {object} props - Component properties
 * @param {number} props.spacing - Spacing property for the Grid.
 * @param {string} props.imgUrl - For the img of the Img container
 * @param {string} props.imgMaxWidth - Maximum width of the image in percentage.
 * @param {number} props.index - The index of the feature.
 * @param {object} props.imageStyle - Style for the image box.
 * @param {object} props.imgGridCol - Column layout for the image.
 * @param {object} props.textGridCol - Column layout for the text.
 * @param {object} props.textPadding - Text padding for the text box. (Only left and top) should be string.
 * @param {object} props.sx - Style for the Feature Grid box.
 * @param {React.ReactNode} props.children - Additional render components.
 * @returns {React.ReactElement}
 */

const DynamicGridContainer = ({spacing = 0, imgUrl, imgMaxWidth = '80%', index, imageStyle, imgGridCol= {xs: 12, md: 6}, textGridCol= {xs: 12, md: 6}, textPadding, sx={}, children}) => {
  return (
          <Grid container item spacing={spacing} xs={12} alignItems={'center'} sx={{pt: 8, flexDirection: { md: calculateEven(index) ? 'row' : 'row-reverse'}, ...sx}}>
              <Grid item xs={textGridCol.xs} md={textGridCol.md} sx={{pl : textPadding?.left ? textPadding.left : { md: calculateEven(index) ? 0 : 14, xs: 0 }, pt: textPadding?.top ? textPadding.top : calculateEven(index) ? 0 : 8 }}>
                    {children}
              </Grid>
              <Grid item xs={imgGridCol.xs} md={imgGridCol.md} sx={{pt: calculateEven(index) ? 8 : 0}}>
                    <Box sx={{ maxWidth: imgMaxWidth, mx: { md: calculateEven(index) ? 'auto' : 0, xs : 'auto' }, width: '100%', height: '100%' }}>
                      <img src={imgUrl} width={'100%'} height={'100%'} style={{objectFit: 'cover', ...imageStyle}} alt={imgUrl}/>
                    </Box>
              </Grid>
        </Grid>
  )
}

export default DynamicGridContainer