import { Heading, Paragraph } from '@globalComponents/index'
import { Box, Container } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Container component={'footer'} maxWidth="xl" sx={{mt: 'auto'}}>
      <Box>
        <Heading>Footer</Heading>
        <Paragraph>Hello</Paragraph>
      </Box>
    </Container>
  )
}

export default Footer