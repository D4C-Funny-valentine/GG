import { Box, Grid } from '@mui/material'
import React from 'react'
import { CustomButton, DynamicGridContainer, GridLayout, Heading, Paragraph } from '../../components'
import { latest_stories } from '../../data/_blog'
import { formatDate } from '../../utils/dateUtils'
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat"

const LoginAndLatestSection = () => {
  return (
    <Box>
        <GridLayout>
            <Grid item xs={12} md={8}>
                <Box>
                    <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', mb: 8}}>
                        <Box>
                            <Heading variant='h6' sx={{mb: 1, fontWeight: 700}}>Latest stories</Heading>
                            <Paragraph variant='body2'>Here’s what we’ve been up to recently.</Paragraph>
                        </Box>
                        <CustomButton variant='outlined'>
                            View all
                        </CustomButton>
                    </Box>
                    <GridLayout spacing={4}>
                        {
                            latest_stories.map((item) => (
                                <DynamicGridContainer index={1} spacing={2} imgUrl={item.url} imgMaxWidth='100%' imageStyle={{height: '200px', borderRadius: '0.5rem'}} imgGridCol={{xs : 12, md: 4}} textGridCol={{xs: 12, md: 8}} textPadding={{left : '0px', right: '0px'}}>
                                    <Box>
                                        <Heading variant='body1' sx={{fontWeight: 700}}>{item.title}</Heading>
                                        <Paragraph variant='caption2' sx={{my: 2, fontStyle : 'italic'}}>{item.author} - {formatDate(item.date, 'DD MMM')}</Paragraph>
                                        <Paragraph variant='body2' numberOfLines={3}>{item.description}</Paragraph>
                                        <Box sx={{display: 'flex', justifyContent: 'flex-end', mr: 1}}>
                                            <CustomButton variant='text' size="small" endIcon={<TrendingFlatIcon/>}>
                                                Read More
                                            </CustomButton>
                                        </Box>
                                    </Box>
                                </DynamicGridContainer>
                            ))
                        }
                    </GridLayout>
                </Box>
            </Grid>
            <Grid item xs={12} md={4}>
                
            </Grid>
        </GridLayout>
    </Box>
  )
}

export default LoginAndLatestSection