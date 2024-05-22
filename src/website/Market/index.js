import { Box } from '@mui/material'
import React from 'react'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import { Outlet } from 'react-router-dom'
import MarketCustomThemeProvider from './config/_theme'

const Market = () => {
  return (
    <MarketCustomThemeProvider>
      <Box>
        <Navbar/>
          <Outlet/>
        <Footer/>
      </Box>
    </MarketCustomThemeProvider>
  )
}

export default Market