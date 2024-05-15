import { Box, Grid } from '@mui/material'
import React from 'react'
import { GridLayout, CustomButton, HeadingTextGroup } from '../../../globalComponents'

const GridSectionCard = ({miniTitle, mainTitle, specialText, description, src}) => {
  return (
    <Box sx={{width: '100%'}}>
        <GridLayout sx={{width: '100%', alignItems: 'center'}}>
            <Grid item xs={12} md={6}>
                <HeadingTextGroup 
                    miniTitle={miniTitle}
                    mainTitle={mainTitle}
                    headingVariant='h4'
                    mainTitleSx={{fontSize : 700}}
                    description={description}
                    specialText={specialText}
                    descriptionVariant='h7'
                    textAlign='left'
                    sx={{gap: '0.5rem'}}
                    justifyContentForMainTitle='start'
                >
                    <Box sx={{display: 'flex', gap : '1rem', alignItems: 'center', flexDirection: {md : 'row' , xs : 'column'}}}>
                        <CustomButton sx={{width : {md: 'auto', xs: '100%'}}}>
                            Purchase now
                        </CustomButton>
                        <CustomButton sx={{width : {md: 'auto', xs: '100%'}}} variant='outlined'>
                            View documentation
                        </CustomButton>
                    </Box>
                </HeadingTextGroup>
            </Grid>
            <Grid item xs={12} md={6}>
                <Box sx={{width: '100%', minHeight: '350px', height: '100%', mt : {md: 0, xs : 4}}}>
                    <img src={src} alt={'img'} style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
                </Box>
            </Grid>
        </GridLayout>
    </Box>
  )
}

export default GridSectionCard