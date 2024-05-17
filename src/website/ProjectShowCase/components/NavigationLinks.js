import { CustomButton, Paragraph } from '@globalComponents/index'
import { Box } from '@mui/material'
import React from 'react'

const NavigationLinks = ({data, sx}) => {
  return (
    <Box sx={{display: 'flex', ...sx}}>
        {
          data.map(item => (
            <a href={item} key={item}>
              <Paragraph variant='body1' sx={{'&:hover': {color: 'primary.main'}, textTransform: 'capitalize'}}>{item.substring(1)}</Paragraph>
            </a>
          ))
        }
        <Box>
            <CustomButton color='secondary' variant='outlined' sx={{borderColor: 'inherit'}}>
                Purchase now
            </CustomButton>
        </Box>
    </Box>
  )
}

export default NavigationLinks