import { CustomButton, Paragraph } from '@globalComponents/index'
import useScrollNavbar from '@hooks/useScrollNavbar'
import { Box } from '@mui/material'
import React from 'react'
import { useProjectShowCaseDrawer } from '../features'

const NavigationLinks = ({data, sx}) => {
  const {isScrolled} = useScrollNavbar(40);
  const {onCloseDrawer} = useProjectShowCaseDrawer();
  return (
    <Box sx={{display: 'flex', ...sx}}>
        {
          data.map(item => (
            <a href={item} key={item} onClick={onCloseDrawer}>
              <Paragraph variant={isScrolled ? 'body1' : 'body2'} sx={{'&:hover': {color: 'primary.main'}, textTransform: 'capitalize'}}>{item.substring(1)}</Paragraph>
            </a>
          ))
        }
        <Box>
            <CustomButton color='secondary' variant='outlined' sx={{borderColor: 'inherit'}} onClick={onCloseDrawer}>
                <a href='#contact'>Purchase now</a>
            </CustomButton>
        </Box>
    </Box>
  )
}

export default NavigationLinks