import { Box, InputAdornment } from '@mui/material'
import React from 'react'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { CustomInput, Heading } from '@globalComponents/index';

const Subscribe = () => {
  return (
    <Box sx={{bgcolor: 'primary.main', borderRadius: 4, color: 'white'}}>
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', gap: '1rem', minHeight: 300, height: '100%', width: '100%'}}>
            <Heading variant='h3'>Subscribe to our newsletter</Heading>
            <Heading>Don't lose a chance to be among the firsts to know about our upcoming news and updates.</Heading>
            <Box>
                <CustomInput
                    labelFocusedColor='white'
                    placeholder='Enter your email'
                    fontColor='white'
                    borderColor='white'
                    hoverBorderColor='white'
                    InputProps={{
                        endAdornment : (
                            <InputAdornment position="end">
                                <NotificationsNoneOutlinedIcon color='sky'/>
                            </InputAdornment>
                        )
                    }}
                    inputProps={{ style: { color: "white" } }}
                    color="sky"
                    size='medium'
                    sx={{"::placeholder": {color : 'lightgrey'}}}
                />
            </Box>
        </Box>
    </Box>
  )
}

export default Subscribe