import React from 'react'
import { useThemeSetting } from '../../../redux/features';
import { Box, Breadcrumbs } from '@mui/material';
import { Heading, Paragraph } from '..';
import { cardBorderColor, hoverBoxShadowStyle } from '../../../utils/helperStyle';

const CustomListItem = ({ sx ={}, heading, location, jobType, linkIcon}) => {
    const {mode} = useThemeSetting();
  return (
    <Box sx={{
      ...sx, 
      py: 6, px: 4, 
      display: 'flex', alignItems: 'center', 
      border: 1, borderRadius: 1, 
      borderColor: cardBorderColor(mode),
      "&:hover" : {
        boxShadow : hoverBoxShadowStyle(mode)
      },
      transition: 'all 200ms linear'
      }}
    >
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', flex: 1}}>
          <Heading sx={{fontWeight : 500}}>{heading}</Heading>
          <Breadcrumbs sx={{mr: 2}}>
              <Paragraph>{location}</Paragraph>
              <Paragraph>{jobType}</Paragraph>
          </Breadcrumbs>
        </Box>
        {linkIcon}
    </Box>
  )
}

export default CustomListItem