import { Box, Stack } from '@mui/material'
import React from 'react'
import { CustomButton, DynamicGridContainer, GridLayout, Heading, HeadingTextGroup, Paragraph } from '../../components'
import { formatDate } from '../../utils/dateUtils'
import CustomChip from '../../components/UI/buttons/CustomChip'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

const PopularNews = ({data}) => {
  return (
    <Box>
        <HeadingTextGroup mainTitle='The most popular news' description="Keep up to date with what we're working on!" sx={{pb: 10}}>
            <Heading variant='h7'>theFront is an ever evolving theme with regular updates.</Heading>
        </HeadingTextGroup>
        <GridLayout spacing={6}>
            {
                data.map((item, index) => (
                    <DynamicGridContainer key={item.title + index} spacing={4} imgUrl={item.url} imgMaxWidth='100%' imageStyle={{borderRadius: '0.5rem'}} index={index}>
                        <Box>
                            <Box sx={{mb: 1}}>
                                {
                                    item.tags.length > 0 && 
                                    <Stack direction={'row'} spacing={2}>
                                        {
                                            item.tags.map((tag, index) => (
                                                <CustomChip key={index} label={tag}/>
                                            ))
                                        }
                                    </Stack>
                                }
                            </Box>
                            <Heading sx={{fontWeight : 700, mb: 2}}>{item.title}</Heading>
                            <Paragraph variant='subtitle4' sx={{fontStyle : 'italic'}}>{item.author} - {formatDate(item.date, 'DD MMM')}</Paragraph>
                            <Paragraph variant='body2' sx={{mt : 1, width: {xs: '100%', md: '90%'}}}>{item.description}</Paragraph>
                            <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                                <CustomButton variant='text' endIcon={<TrendingFlatIcon/>}>
                                    Read more
                                </CustomButton>
                            </Box>
                        </Box>
                    </DynamicGridContainer>
                ))
            }
        </GridLayout>
    </Box>
  )
}

export default PopularNews