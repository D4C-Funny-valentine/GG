import { Box, Drawer } from '@mui/material'
import React from 'react'

/**
 * Renders a custom drawer component.
 * @param {object} props - Component props.
 * @param {boolean} props.open - Whether the drawer is open.
 * @param {import('@mui/material').DrawerProps['anchor']} props.anchor - The anchor of the drawer.
 * @param {number} props.minHeight - The minimum width of the drawer.
 * @param {function} props.onClose - The function to handle drawer close.
 * @param {import('@mui/material').DrawerProps['role']} props.role - Role for the drawer.
 * @param {React.ReactNode} props.children - The content to be displayed inside the drawer.
 * @return {React.JSX.Element} The custom drawer component.
 */

const CustomDrawer = ({open, anchor = 'left', minWidth = 280, onClose, role = "presentation", children}) => {
  return (
    <Drawer open={open} anchor={anchor} onClose={onClose} role={role}>
        <Box sx={{minWidth: minWidth, width: '100%'}}>
            {children}
        </Box>
    </Drawer>
  )
}

export default CustomDrawer