import { Box, Drawer, IconButton } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

/**
 * Renders a custom drawer component.
 * @param {object} props - Component props.
 * @param {boolean} props.open - Whether the drawer is open.
 * @param {import('@mui/material').DrawerProps['anchor']} props.anchor - The anchor of the drawer.
 * @param {number} props.minHeight - The minimum width of the drawer.
 * @param {function} props.onClose - The function to handle drawer close.
 * @param {import('@mui/material').DrawerProps['role']} props.role - Role for the drawer.
 * @param {boolean} props.closeButton - Is close button show or not?
 * @param {React.ReactNode} props.children - The content to be displayed inside the drawer.
 * @return {React.JSX.Element} The custom drawer component.
 */

const CustomDrawer = ({open, anchor = 'left', minWidth = 250, onClose, role = "presentation", closeButton=true, children}) => {
  return (
    <Drawer open={open} anchor={anchor} onClose={onClose} role={role}>
        <Box sx={{minWidth: minWidth, width: '100%', position: 'relative'}}>
            {
              closeButton && <Box sx={{position: 'absolute', top: 3, right: 3}}>
              <IconButton onClick={onClose} size='small' sx={{bgcolor: 'primary.main', p: 1, width: '35px', height: '35px', '&:hover': {bgcolor: 'primary.main'}}}>
                <CloseIcon fontSize='small' sx={{color: 'white'}}/>
              </IconButton>
            </Box>
            }
            {children}
        </Box>
    </Drawer>
  )
}

export default CustomDrawer