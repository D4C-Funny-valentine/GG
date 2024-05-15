import { Avatar, Card, CardContent, CardHeader, Grid } from '@mui/material'
import React from 'react'
import { Heading, Paragraph } from '../../../globalComponents'

/**
 * A component that renders a single card within a grid layout.
 * 
 * @param {object} props - Component props.
 * @param {object} props.service - The service data object containing icon, title, and description properties.
 * @param {number} props.md - Grid layout for md.
 * @param {string} props.flexDirection - Flex direction for the Card.
 * @param {number} props.elevation - Elevation for the Grid Card.
 * @param {object} props.cardHeaderStyle - Additional Style for the Card Header.
 * @param {object} props.cardContentStyle - Additional Style for the Card Content.
 * @param {object} props.sx - Additional Style for the Card.
 * @returns {React.JSX.Element} The rendered ServiceGridCard component.
 */

const ServiceGridCard = ({service, md = 4, elevation = 0, flexDirection = 'column', cardHeaderStyle = {}, cardContentStyle = {}, sx = {}}) => {
    return (
      <Grid item xs={12} md={md}>
        <Card sx={{maxWidth: '100%', display: 'flex', flexDirection: {md : flexDirection, xs : 'column'}, ...sx}} elevation={elevation}>
          <CardHeader
            sx={{...cardHeaderStyle}}
            avatar={
              <Avatar sx={{bgcolor : 'primary.main', width: 50, height: 50}}>
                  {service.icon}
              </Avatar>
            }
          />
        <CardContent sx={{...cardContentStyle}}>
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