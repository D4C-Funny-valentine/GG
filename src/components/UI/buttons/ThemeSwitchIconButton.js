import React from 'react'
import { IconButton } from "@mui/material";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'
import { useThemeSetting } from '../../../redux/features';



const ThemeSwitchIconButton = () => {
    const {mode, changeMode} = useThemeSetting();
  return (
    <IconButton color={mode === 'light' ? 'primary' : 'secondary'} aria-label="add an alarm" sx={{mb: 0, width: '30px', height: '30px', p: 1}} onClick={changeMode}>
    {
       mode === 'light'
       ? <DarkModeOutlinedIcon/>
       : <WbSunnyOutlinedIcon/> 
     }
    </IconButton>
  )
}

export default ThemeSwitchIconButton