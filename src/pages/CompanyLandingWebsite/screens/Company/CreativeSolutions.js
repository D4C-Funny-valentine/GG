import { Box, Grid } from '@mui/material'
import React from 'react'
import { Paragraph, Heading } from '../../components'
import { creativeSolutions, solutionTitle } from '../../data/_company'

const CreativeSolutions = () => {
  return (
    <Box>
        <Grid container spacing={0}>
            <Grid item xs={12} md={6}>
                <Heading variant='h4' fontWeight={900} sx={{mb: { xs: 4, md: 0 }}}>
                    {solutionTitle}
                </Heading>
            </Grid>
            <Grid item xs={12} md={6}>
                <Grid container spacing={5}>
                    {
                        creativeSolutions.map(item => (
                            <SolutionText key={item.solution} text={item.solution}/>
                        ))
                    }
                </Grid>
            </Grid>
        </Grid>
    </Box>
  )
}

const SolutionText = ({text}) => {
    return (
        <Grid item xs={12}>
            <Paragraph variant='body2'>
                {text}
            </Paragraph>
        </Grid>
    )
}

export default CreativeSolutions