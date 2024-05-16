import { Box, Stack } from '@mui/material'
import React from 'react'
import { CustomButton, GridLayout, Heading, HeadingTextGroup } from '@globalComponents/index'
import { developmentServices } from '../../data/_portfolio'
import { ServiceGridCard } from '../../components'

const ServicesSection = () => {
  return (
   <Box>
    <HeadingTextGroup miniTitle='SERVICES' mainTitle='We are a small agency of talented designers & developers.'
        description='Unlike teams from big agencies, we will treat your project as ours.'
    >
       <Stack>
        <Heading variant='h7'>We will walk you through our smooth and simple process.</Heading>
        <Box sx={{mt: 1}}>
            <CustomButton>
                Contact us
            </CustomButton>
        </Box>
       </Stack>
    </HeadingTextGroup>
    <GridLayout spacing={4} sx={{mt: 8}}>
        {
            developmentServices.map((item) => (
                <ServiceGridCard 
                    key={item.title} 
                    elevation={0} 
                    flexDirection='row' 
                    md={6} 
                    service={item} 
                    sx={{alignItems: 'flex-start', bgcolor: 'transparent'}}
                    cardContentStyle={{px: 1}}
                    cardHeaderStyle={{px: 1}}
                />
            ))
        }
    </GridLayout>
   </Box>
  )
}

export default ServicesSection