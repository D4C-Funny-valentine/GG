import { Avatar, Box, Divider, Stack } from '@mui/material'
import React from 'react'
import { CarouselCard, CustomButton, CustomCarousel, Heading, Paragraph } from '../../../../globalComponents'
import { hoverCardTranslate } from '../../../../utils/helperStyle'
import { formatDate } from '../../../../utils/dateUtils'

const FeatureStories = ({data}) => {
  return (
    <Box sx={{}}>
        <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', mb: 8}}>
            <Box>
                <Heading variant='h3' sx={{mb: 2}}>Feature stories</Heading>
                <Paragraph variant='body2'>Here’s what we’ve been up to recently.</Paragraph>
            </Box>
            <CustomButton variant='outlined'>
                View all
            </CustomButton>
        </Box>
        <CustomCarousel
            breakpoint={{
                xl: 3,
                lg: 3,
                md: 2,
                sm: 1
            }}
            autoPlay={true}
        >
            {
                data.map((item, index) => (
                    <CarouselCard key={`${item.title}-${index}`} imageURL={item.backdrop_url} minHeight={420} sx={{...hoverCardTranslate('Y', -5, '200ms', 'ease-in')}}>
                        <Box>
                            <Heading sx={{mb:2}}>{item.title}</Heading>
                            <Paragraph variant='body2'>{item.description}</Paragraph>
                        </Box>
                        <Divider sx={{mt: 5, mb: 3}}/>
                        <Stack direction={'row'} alignItems={'center'} justifyContent={"space-between"}>
                            <Stack direction={'row'} alignItems={'center'} spacing={2}>
                                <Avatar alt={item.author.name} src={item.author.profile}/>
                                <Paragraph variant='body2'>{item.author.name}</Paragraph>
                            </Stack>
                            <Paragraph variant='body2'>{formatDate(item.author.create_date, 'DD MMM')}</Paragraph>
                        </Stack>
                    </CarouselCard>
                ))
            }
        </CustomCarousel>
    </Box>
  )
}

export default FeatureStories