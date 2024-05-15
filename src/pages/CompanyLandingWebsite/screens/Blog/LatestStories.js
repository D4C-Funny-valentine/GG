import { Box, Grid, Stack } from '@mui/material'
import React from 'react'
import { CustomButton, CustomPaperCard, CustomChip, DynamicGridContainer, GridLayout, Heading, Paragraph } from '../../../../globalComponents'
import { formatDate } from '../../../../utils/dateUtils'
import { cardBorderColor, hoverCardTranslate } from '../../../../utils/helperStyle'
import { useThemeSetting } from '../../features'

const LatestStories = ({data, upcoming}) => {
    const {mode} = useThemeSetting();
  return (
    <Box>
        <GridLayout spacing={6}>
            <Grid item xs={12} md={upcoming ? 8 : 12}>
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
                    <GridLayout spacing={5}>
                        {
                            data?.map((item, index) => (
                                <Grid item key={item.title + index} xs={12} md={6} sx={{...hoverCardTranslate('Y', -5, '200ms', 'ease-in')}}>
                                    <CustomPaperCard imgHeight={400} imgUrl={item.url}>
                                        <Box>
                                            <Box sx={{mb: 2}}>
                                                {
                                                    item.tags.length > 0 && 
                                                    <Stack direction={'row'} spacing={2} justifyContent={'center'}>
                                                        {
                                                            item.tags.map((tag, index) => (
                                                                <CustomChip key={index} label={tag}/>
                                                            ))
                                                        }
                                                    </Stack>
                                                }
                                            </Box>
                                            <Box>
                                                <Heading variant='h6' sx={{mb: 3, fontWeight : 500}}>{item.title}</Heading>
                                                <Paragraph variant='subtitle4' sx={{fontStyle : 'italic'}}>{item.author} - {formatDate(item.date, 'DD MMM')}</Paragraph>
                                                <Paragraph variant='body2' 
                                                    sx={{mt: 2}}
                                                    numberOfLines={3}
                                                >
                                                    {item.description}</Paragraph>
                                            </Box>
                                        </Box>
                                    </CustomPaperCard>
                                </Grid>
                            ))
                        }
                    </GridLayout>
                </Box>
            </Grid>
            {
                upcoming && upcoming.length > 0 && (
                    <Grid item xs={12} md={4}>
                            <Box sx={{borderRadius: 2, border: 1, ...cardBorderColor(mode), py: 5, px: 3, width: '100%'}}>
                                <Heading variant='h6' sx={{fontWeight : 700, mb: 10}}>Upcoming updates</Heading>
                                <GridLayout spacing={2}>
                                    {
                                        upcoming?.map((item, index) => (
                                            <DynamicGridContainer key={item.title + index} spacing={2} index={1} textPadding={{left: '0px', top: '0px'}} imgUrl={item.backdrop_url} imgMaxWidth='100%' imageStyle={{height: '120px', borderRadius: '0.5rem'}} imgGridCol={{xs: 5,md: 5}} textGridCol={{xs: 7,md: 7}}>
                                                <Box>
                                                    <Paragraph variant='body1' sx={{fontWeight: 700}}>{item.title}</Paragraph>
                                                    <Paragraph variant='caption2' sx={{my: 2, fontStyle : 'italic'}}>{item.author.name} - {formatDate(item.author.create_date, 'DD MMM')}</Paragraph>
                                                    <CustomButton variant='text' size="small" sx={{p: 2}}>
                                                        Read more
                                                    </CustomButton>
                                                </Box>
                                            </DynamicGridContainer>
                                        ))
                                    }
                                </GridLayout>
                            </Box>
                        </Grid>
                )
            }
        </GridLayout>
    </Box>
  )
}

export default LatestStories