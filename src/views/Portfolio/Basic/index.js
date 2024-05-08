import React from 'react'
import { Typography, Box} from '@mui/material'

const Basic = () => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: 'pink', height: '100vh'}}>
        <Typography variant="h1" color="initial">Basic</Typography>
    </Box>
  )
}

export default Basic