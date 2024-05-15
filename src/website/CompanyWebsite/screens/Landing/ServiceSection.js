import { Box } from '@mui/material'
import React from 'react'
import { ServiceGridCardLayout } from '../../components'
import { HeadingTextGroup } from '@globalComponents/index'

/**
 * 
 * @param {object} props - Component props
 * @param {Array} props.data - Data to map for the grid card container. Each element should have icon, title, and description properties.
 * @param {number} props.spacing - The spacing between grid items. Defaults to 0.
 * @param {number} props.elevation - Elevation for the Grid Card.
 * @returns {React.JSX.Element}
 */
const ServiceSection = ({data, spacing, elevation}) => {
  return (
    <Box sx={{pt: {md: 12, xs : 0}}}>
        <HeadingTextGroup
          miniTitle='What we do?'
          mainTitle='We craft beautiful websites and digital products'
          description='We design, develop and launch websites and products for startups, companies and ourselves.'
          sx={{mb: {md : 32, xs : 8}}}
        />
        <ServiceGridCardLayout data={data} elevation={elevation} spacing={spacing}/>
      </Box>
  )
}

export default ServiceSection