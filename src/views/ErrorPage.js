import React from 'react'
import Navigation from '../layout/Navbar/Navigation'
import Footer from '../layout/Footer/Footer'
import {Box, Typography} from "@mui/material"

const root_main_layout = {
    display: 'flex',
    flexDirection: 'column',
}

const ErrorPage = () => {
  return (
    <Box sx={root_main_layout}> 
        <Navigation/>
            <Box sx={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Typography variant="h4" color="initial">
                    Error
                </Typography>
            </Box>
        <Footer/>
    </Box>
  )
}

export default ErrorPage