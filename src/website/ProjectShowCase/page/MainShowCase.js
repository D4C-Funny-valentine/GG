import { Box, Container } from '@mui/material'
import React from 'react'
import Home from './Home'
import Services from './Services'
import Projects from './Projects'
import ImageInterSection from '../components/ImageInterSection'
import { ContainerDivider } from '@globalComponents/index'
import Features from './Features'
import DataStructure from './DataStructure'
import RestApi from './RestApi'
import { Link } from 'react-router-dom'
import Subscribe from './Subscirbe'

const MainShowCase = () => {
  const padding = {xs: 20, md: 25};
  return (
    <Box>
      <Container maxWidth="xl">
        <Box sx={{height: '100vh', bgcolor: 'white', pt: {md: 10, xs: 15}}}>
            <Home/>
        </Box>
      </Container>
      
      <Box sx={{bgcolor: 'background.silver'}}>
        <Box sx={{pt: 10}}>
            <ImageInterSection src={'https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Flanding%2Fpage-group-2.png&w=3840&q=100'} height={'400px'}/>
          </Box>
          <ContainerDivider maxWidth='sm'/>
        <Container maxWidth="xl" sx={{py: padding}}>
            <Box component={'section'} id='services'>
                <Services/>
            </Box>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{py: padding}}>
        <Box component={'section'} id='features'>
          <Features/>
        </Box>
      </Container>

      <Container maxWidth="md" sx={{py: padding}}>
        <DataStructure/>
      </Container>

      <Container maxWidth="md" sx={{py: padding}}>
        <RestApi/>
      </Container>

      <Container maxWidth="sm" sx={{py: padding}}>
          <Link to={'/'}>
            <img 
              src='https://bazaar.ui-lib.com/_next/image?url=https%3A%2F%2Fui-lib.com%2Fwp-content%2Fuploads%2F2023%2F10%2Fbazaar-server.jpg&w=828&q=75'
              alt="img"
              width={'100%'}
              height={'100%'}
              style={{objectFit: 'contain'}}
            />
          </Link>
      </Container>

      <Container maxWidth="xl" sx={{pt: padding}}>
        <Box component={'section'} id='projects' sx={{minHeight: '100vh'}}>
            <Projects/>
        </Box>
      </Container>

      <ContainerDivider maxWidth='sm'/>

      <Container component={'section'} id='contact' maxWidth="lg" sx={{pb: padding}}>
        <Box>
          <Subscribe/>
        </Box>
      </Container>
    </Box>
  )
}

export default MainShowCase