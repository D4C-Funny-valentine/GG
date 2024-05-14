import { Box, Container } from '@mui/material'
import React from 'react'
import { CustomButton, CustomInput, HeadingTextGroup } from '../../components'

const Subscription = () => {
  return (
    <Box>
        <HeadingTextGroup mainTitle='Get our stories delivered' description='From us to your inbox weekly.'>
            <Container maxWidth="sm" sx={{display: 'flex', flexDirection: {md: 'row', xs: 'column'}, alignItems: 'center', gap: 3, justifyContent: 'center', mt: 3}}>
                <CustomInput
                    fullWidth
                    placeholder='Enter your email'
                    borderColor='silver.main'
                />
                <CustomButton sx={{width: {md: 'auto', xs: '100%'}}}>
                    Subscribe
                </CustomButton>
            </Container>
        </HeadingTextGroup>
    </Box>
  )
}

export default Subscription