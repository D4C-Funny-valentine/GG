import React from 'react'
import { Box, Container} from '@mui/material'
import HeroSection from './HeroSection'
import { GridSectionCard, UsagePattern } from '../../../components'
import { jobLists } from '../../../data/carrer'
import ApplyJobSection from './ApplyJobSection'
import Subscribe from './Subscribe'
import { usage_patterns } from '../../../data/common'

const Carrer = () => {
  const padding = { xs: 8, md: 12 };
  return (
    <Box>
        <Box sx={{height: '100%'}}>
          <HeroSection/>
        </Box>
        <Container maxWidth="lg">
          {/* InterSection Work with us */}
           <Box sx={{py: padding}}>
            <GridSectionCard
                miniTitle='WANT TO WORK WITH US?' 
                mainTitle='Turn your ideas into a'
                specialText='success.'
                description='theFront will make your product look modern and professional while saving you precious time.'
                src='https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration3.svg'
            />
           </Box>
          {/* Monitor and analyze */}
           <Box sx={{pb: padding}}>
              <UsagePattern data={usage_patterns} url={'https://assets.maccarianagency.com/backgrounds/img21.jpg'}/>
           </Box>
        </Container>

        <Box sx={{bgcolor: 'info.main'}}>
          <Container sx={{py: padding}}>
              {/* Apply section */}
              <Box sx={{py: padding}}>
                  <ApplyJobSection data={jobLists}/>
              </Box>
          </Container>
        </Box>

        <Container maxWidth="lg">
            <Box sx={{py: padding}}>
              <Subscribe/>
            </Box>
        </Container>
    </Box>
  )
}

export default Carrer