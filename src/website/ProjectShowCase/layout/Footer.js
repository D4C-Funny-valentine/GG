import { Paragraph } from '@globalComponents/index'
import { Box, Container, Stack } from '@mui/material'
import React from 'react'
import { socialMedia } from '../config/_showcase'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Container component={'footer'} maxWidth="xl" sx={{mt: 'auto', minHeight: 100}}>
      <Box sx={{display: 'flex', flexDirection:{xs: 'column-reverse', md: 'row'}, justifyContent: {xs: 'center', md: 'space-between'}, alignItems: 'center', height: '100%'}}>
        <Paragraph>Developed with ❤️ by C3</Paragraph>
        <Stack direction={'row'} spacing={4}>
          {
            socialMedia.map(item => (
              <Link to={item.link} key={item.link} target='_blank'>
                {item.icon}
              </Link>
            ))
          }
        </Stack>
      </Box>
    </Container>
  )
}

export default Footer