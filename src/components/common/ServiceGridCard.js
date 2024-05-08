import { Avatar, Card, CardContent, CardHeader, Grid } from '@mui/material'
import React from 'react'
import { Heading, Paragraph } from '../UI'

/**
 * A component that renders a single card within a grid layout.
 * 
 * @param {object} props - Component props.
 * @param {object} props.service - The service data object containing icon, title, and description properties.
 * @param {number} props.elevation - Elevation for the Grid Card.
 * @param {object} props.sx - Additional Style for the Card.
 * @returns {React.JSX.Element} The rendered ServiceGridCard component.
 */

const ServiceGridCard = ({service, elevation = 0, sx = {}}) => {
    return (
      <Grid item md={4} xs={12}>
        <Card sx={{maxWidth: '100%', display: 'flex', flexDirection: 'column', ...sx}} elevation={elevation}>
          <CardHeader
            avatar={
              <Avatar sx={{bgcolor : 'primary.main', width: 50, height: 50}}>
                  {service.icon}
              </Avatar>
            }
          />
        <CardContent>
          <Heading variant='h5' sx={{mb: 2}}>{service.title}</Heading>
          <Paragraph variant="body2" sx={{ whiteSpace: 'wrap' }}>
            {service.description}
          </Paragraph>
      </CardContent>
      </Card>
    </Grid>
    )
}

export default ServiceGridCard