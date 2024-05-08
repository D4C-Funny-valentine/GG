import { Box } from '@mui/material'
import React from 'react'
import { CarouselCard, CustomCarousel, HeadingTextGroup } from "../../../components"

const AboutSection = ({data}) => {
  return (
    <Box>
        <HeadingTextGroup
            miniTitle='Our team'
            mainTitle='Trust the professionals'
        />
        <Box sx={{pt: 8}}>
            <CustomCarousel>
                {
                    data.map((info, index) => (
                        <CarouselCard key={info.name} heading={info.name} text={info.position} imageURL={info.profile} index={index}/>
                    ))
               }
            </CustomCarousel>
        </Box>
    </Box>
  )
}

export default AboutSection