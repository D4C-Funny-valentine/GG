import React from 'react'
import {Box, Button, Container, Typography} from "@mui/material"
import { Link } from 'react-router-dom'

const root_main_layout = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
}

const ErrorPage = () => {
  return (
    <Box sx={root_main_layout}> 
            <Box sx={{height: '100%', display:'flex', color:'white', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '0.5rem', bgcolor: '#2C3E50'}}>
                <Typography 
                    fontWeight={900} 
                    fontFamily={'sans-serif'}
                    sx={{
                        backgroundImage: `url('https://img.freepik.com/free-photo/fantasy-style-galaxy-background_23-2151114327.jpg')`,
                        backgroundSize: 'cover',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        backgroundPosition: 'center',
                        color: 'transparent',
                        backgroundRepeat: 'no-repeat',
                        fontSize: {lg: '14rem', md : '10rem', xs : '5rem'}
                    }}
                >
                    Opps!
                </Typography>
                <Typography sx={{fontSize: {md: '2rem', xs : '1rem'}}}>404 - PAGE NOT FOUND</Typography>
                <Container maxWidth="sm">
                    <Typography textAlign={'center'}>The page you are looking for might have been removed had it's name changed or it's temporarily unavailble</Typography>
                </Container>
                <Link to={'/'}>
                    <Button variant='contained' size='small' color='primary' sx={{borderRadius: 8, color: 'white'}}>
                        GO TO HOMEPAGE
                    </Button>
                </Link>
            </Box>
    </Box>
  )
}

export default ErrorPage