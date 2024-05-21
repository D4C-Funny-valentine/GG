import { Box } from '@mui/material'
import React from 'react'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import { Outlet } from 'react-router-dom'
import CommonThemeProvider from '@config/_common-theme'

const Market = () => {
  return (
    <CommonThemeProvider>
      <Box>
        <Navbar/>
          <Outlet/>
        <Footer/>
      </Box>
    </CommonThemeProvider>
  )
}

export default Market