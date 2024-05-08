import React from 'react'
import { Box } from '@mui/material'
import { Outlet } from "react-router-dom"

const Landing = () => {
  return (
      <Box component={'main'}>
        <Outlet/>
      </Box>
  )
}

export default Landing