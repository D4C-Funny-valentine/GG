import React from 'react'
import { Box, Button, Container, Divider, Stack } from "@mui/material"
import { Link, NavLink } from 'react-router-dom'
import { Paragraph } from '@globalComponents/index'
import { useStartUpThemeSetting } from '../../features'

const Footer = () => {
  const {mode} = useStartUpThemeSetting();
  return (
    <>
      <Divider/>
      <Container maxWidth="lg" sx={{pt: {md : 10, xs : 5}, pb: 6}} component={'footer'}>
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: {md: 'row', xs : 'column'}}}>
          <NavLink to={"/startup"}>
            <img src={mode === 'light' ? 'https://assets.maccarianagency.com/the-front/logos/logo.svg' : 'https://assets.maccarianagency.com/the-front/logos/logo-negative.svg'} className="logo" alt="logo" style={{maxWidth: '80px', objectFit: 'contain'}} />
          </NavLink>
          <Box sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'} ,gap: '1rem', alignItems: 'center'}}>
            <Stack direction={'row'} gap={'1rem'}>
              <Link to={'/'}><Paragraph variant='subtitle1'>Home</Paragraph></Link>
              <Link to={'/'}><Paragraph variant='subtitle1'>Documentation</Paragraph></Link>
            </Stack>
            <Button variant='outlined' size='small' sx={{fontSize: theme => theme.typography.subtitle1, py: 2.3, px: 1.8}}>
                Purchase now
            </Button>
          </Box>
        </Box>
        <Box sx={{textAlign: 'center', mt: { md: 0, xs : 2 }}}>
          <Paragraph variant='body2'>© theFront. 2021, Maccarian. All rights reserved</Paragraph>
          <Paragraph variant='subtitle4'>
            When you visit or interact with our sites, services or tools, we or our authorised service providers may use cookies for storing information to help provide you with a better, faster and safer experience and for marketing purposes.
          </Paragraph>
        </Box>
      </Container>
    </>
   
  )
}

export default Footer