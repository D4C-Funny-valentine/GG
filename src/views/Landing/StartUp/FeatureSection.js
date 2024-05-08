import { Box } from '@mui/material'
import React from 'react'
import { CustomButton, DynamicGridContainer, GridLayout, Heading, HeadingTextGroup, Paragraph } from '../../../components'
import EmailIcon from '@mui/icons-material/Email';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
// animation data-aos="fade-up", data-aos-delay="0", data-aos-offset="100", data-aos-duration="600"

const FeatureSection = ({data}) => {
  return (
    <Box sx={{pt: { md: 18, xs : 6 }}}>
      <HeadingTextGroup 
        miniTitle='Our work' 
        mainTitle='We are a small agency of talented designers & developers'
        description='Unlike teams from big agencies, we will treat your project as ours. We will walk you through our smooth and simple process.'
      >
          <CustomButton sx={{mt: 4}} startIcon={<EmailIcon/>}>
            Contact us
          </CustomButton>
      </HeadingTextGroup>
      <Box>
       <GridLayout sx={{pt: 8}}>
          {
            data.map((feature, index) => (
              <DynamicGridContainer imgUrl={feature.img} index={index} key={feature.title} justifyContentForMainTitle='start'>
                  <Box>
                    <Heading>{feature.title}</Heading>
                    <Paragraph variant='body2' sx={{my: 2}}>{feature.description}</Paragraph>
                    <CustomButton variant='text' endIcon={<TrendingFlatIcon/>}>
                        Learn more
                    </CustomButton>
                  </Box>
              </DynamicGridContainer>
            ))
          }
       </GridLayout>
      </Box>
    </Box>
  )
}

export default FeatureSection