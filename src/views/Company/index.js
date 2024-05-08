import React from 'react'
import { Box } from '@mui/material'
import { Outlet } from "react-router-dom"

const Company = () => {
  return (
      <Box>
        <Outlet/>
      </Box>
  )
}

export default Company