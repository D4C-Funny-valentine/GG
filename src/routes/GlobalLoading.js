import { Box, Typography } from '@mui/material'
import React from 'react'
import Lottie from 'react-lottie';
import Loading from "../assets/animation/loading.json";
// 0f3460
// 7d879c

const GlobalLoading = () => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center', alignItems:'center', height: '100vh', bgcolor: '#f6f9fc'}}>
        <Lottie
            options={{
                animationData: Loading,
                loop: true,
                autoplay: true,
                rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice'
                }
            }}
            width={200}
            height={50}
        />
        <Box textAlign={"center"} color={'#0f3460'}>
            <Typography variant='h4' fontWeight={900}>LOADING</Typography>
            <Typography variant='h6'>It will take a few second</Typography>
        </Box>
    </Box>
  )
}

export default GlobalLoading