import { CustomButton, Paragraph } from '@globalComponents/index'
import { Box } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const NavigationLinks = ({data, sx}) => {
  return (
    <Box sx={{display: 'flex', ...sx}}>
        {
          data.map(item => (
            <NavLink to={item} key={item}>
              <Paragraph variant='body1' sx={{'&:hover': {color: 'primary.main'}, textTransform: 'capitalize'}}>{item.substring(1)}</Paragraph>
            </NavLink>
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