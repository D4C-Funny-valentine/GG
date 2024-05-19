import { InputAdornment } from '@mui/material'
import React from 'react'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { CustomInput, SubscriptionBox } from '@globalComponents/index';

const Subscribe = () => {
  return (
        <SubscriptionBox 
            title='Subscribe to our newsletter'
            description="Don't lose a chance to be among the firsts to know about our upcoming news and updates."
        >
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
        </SubscriptionBox>
  )
}

export default Subscribe