import { Box, Stack } from '@mui/material'
import React from 'react'
import { DynamicGridContainer, GridLayout, Heading, HeadingTextGroup, Paragraph } from '../../components'
import { popular_news } from '../../data/_blog'
import { formatDate } from '../../utils/dateUtils'
import CustomChip from '../../components/UI/buttons/CustomChip'

const PopularNews = () => {
  return (
    <Box>
        <HeadingTextGroup mainTitle='The most popular news' description="Keep up to date with what we're working on!">
            <Heading variant='h7'>theFront is an ever evolving theme with regular updates.</Heading>
        </HeadingTextGroup>
        <GridLayout spacing={4}>
            {
                popular_news.map((item, index) => (
                    <DynamicGridContainer imgUrl={item.url} imgMaxWidth='100%' index={index}>
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
                            <Paragraph variant='body2' sx={{mt : 1}}>{item.description}</Paragraph>
                        </Box>
                    </DynamicGridContainer>
                ))
            }
        </GridLayout>
    </Box>
  )
}

export default PopularNews