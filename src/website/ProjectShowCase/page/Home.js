import { CustomButton, FactBox, Heading, Paragraph } from '@globalComponents/index'
import { Box, Container, Stack, Tooltip } from '@mui/material'
import React from 'react'
import { facts } from '../config/_showcase'
import CheckIcon from '@mui/icons-material/Check';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{height: '100%'}}>
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height:"100%", flexDirection: 'column', gap: {xs: '1rem', md: "2rem"}}}>
                <Heading variant='h1' textAlign="center">
                    Build your online store with
                    <Box sx={{color: 'primary.main'}}>Bazaar</Box>
                </Heading>

                <Container maxWidth="sm">
                    <Heading variant='h6' textAlign="center">
                        SEO friendly Next.js Ecommerce Template. Helps you to build performant online store faster.
                    </Heading>
                </Container>

                <Stack direction={{md: 'row', xs : 'column'}} spacing={3} justifyContent={'center'} alignItems={{md: 'center', xs: 'start'}}>
                    {
                        facts.map(item => (
                            <FactBox text={item.title} key={item.title} textVariant='body1'>
                                <CheckIcon color='success' sx={{mr: 2}}/>
                            </FactBox>
                        ))
                    }
                </Stack>

                <Stack direction={{md: 'row', xs : 'column'}} alignItems={'center'} spacing={3}>
                    <CustomButton variant='outlined' size="large">
                        <a href='#services'>What's inside</a>
                    </CustomButton>
                    <CustomButton variant='contained' size='large'>
                        <a href='#projects'>View Projects</a>
                    </CustomButton>
                </Stack>
                
                <Stack direction={'row'} spacing={1}>
                    <Paragraph component="a" variant='body1' sx={{textDecoration : 'underline', cursor: 'pointer'}}>I need server integration</Paragraph>
                    <Tooltip title="Bazaar has REST API integrated on the frontend. Click here if you also need a server side solution." placement="right" arrow>
                        <HelpOutlinedIcon color='secondary' sx={{fontSize: '20px'}}/>
                    </Tooltip>
                </Stack>
        </Box>
    </Container>
  )
}

export default Home