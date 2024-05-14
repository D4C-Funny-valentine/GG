import { Box } from '@mui/material'
import React from 'react'
import { CarouselCard, CustomCarousel, Heading, HeadingTextGroup, Paragraph } from "../../components"

const AboutSection = ({data}) => {
  return (
    <Box>
        <HeadingTextGroup
            miniTitle='Our team'
            mainTitle='Trust the professionals'
        />
        <Box sx={{pt: 8}}>
            <CustomCarousel autoPlay={false}>
                {
                    data.map((info, index) => (
                        <CarouselCard key={info.name} imageURL={info.profile}>
                            <Box>
                                <Heading variant='body1' fontWeight={500}>{info.name}</Heading>
                                <Paragraph variant='subtitle2'>
                                    {
                                        info.position.toString()
                                    }    
                                </Paragraph>       
                            </Box>
                        </CarouselCard>
                    ))
               }
            </CustomCarousel>
        </Box>
    </Box>
  )
}

export default AboutSection