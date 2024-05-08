import { Grid } from '@mui/material'
import React from 'react'
import ServiceGridCard from './ServiceGridCard'

/**
 * A component that renders a grid layout of cards based on provided data.
 * 
 * @param {object} props - Component props.
 * @param {Array} props.data - Data to map for the grid card container. Each element should have icon, title, and description properties.
 * @param {number} props.elevation - Elevation for the Grid Card.
 * @param {number} props.spacing - The spacing between grid items. Defaults to 0.
 * @returns {React.JSX.Element}
 */

const ServiceGridCardLayout = ({spacing = 0, data, elevation}) => {
    return (
      <Grid container spacing={spacing}>
        {
          data?.map(service => (
            <ServiceGridCard key={service.title} service={service} elevation={elevation}/>
          ))
        }
      </Grid>
    )
}

export default ServiceGridCardLayout