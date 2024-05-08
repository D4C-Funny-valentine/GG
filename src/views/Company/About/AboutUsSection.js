import React from 'react'
import { HeadingTextGroup, GridLayout, HoverCard } from "../../../components"
import { Box, Grid } from '@mui/material'


const AboutUsSection = ({data}) => {
  return (
    <Box>
        <HeadingTextGroup
          miniTitle='Our team'
          mainTitle='Small team. Big hearts'
          description='Our focus is always on finding the best people to work with. Our bar is high, but you look ready to take on the challenge.'
          sx={{mb: {md : 16, xs : 6}}}
        />
       <GridLayout spacing={4}>
          {
            data.map(person => (
              <Grid key={person.profile} item xs={12} md={6} lg={4}>
                <HoverCard info={person}/>
              </Grid>
            ))
          }
       </GridLayout>
    </Box>
  )
}

export default AboutUsSection