import React from 'react'
import { IconButton } from "@mui/material";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'


const ThemeSwitchIconButton = ({width = '30px', height = '30px', sx={}, mode, onClick}) => {
  return (
    <IconButton color={mode === 'light' ? 'primary' : 'secondary'} aria-label="add an alarm" sx={{mb: 0, width: width, height: height, p: 1, ...sx}} onClick={onClick}>
    {
       mode === 'light'
       ? <DarkModeOutlinedIcon/>
       : <WbSunnyOutlinedIcon/> 
     }
    </IconButton>
  )
}

export default ThemeSwitchIconButton