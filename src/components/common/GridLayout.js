import { Grid } from '@mui/material'
import React from 'react'

/**
 * GridLayout Component
 * 
 * A grid layout component based on Material-UI's Grid component.
 * 
 * @param {object} props - Component props
 * @param {number} props.spacing - Spacing for the grid layout
 * @param {object} props.sx - Additional styles for the grid layout
 * @param {React.ReactNode} props.children - Child components to be rendered inside the grid
 * @returns {React.ReactNode}
 */

const GridLayout = ({spacing, sx = {}, children, ...props}) => {
  return (
    <Grid container spacing={spacing} sx={{...sx}} {...props}>
        {children}
    </Grid>
  )
}

export default GridLayout