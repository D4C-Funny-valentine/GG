import React from 'react'
import CountOnScrollNumber from './CountOnScrollNumber'
import { Grid } from '@mui/material'
import { Paragraph } from '../UI'

const NumberCountUpCard = ({data, xs = 12, md = 4}) => {
  return (
    <Grid item xs={xs} md={md} sx={{ textAlign: 'center' }}>
        <CountOnScrollNumber n={data.number} unit={data?.unit ?? ''}/>
        <Paragraph variant='body2' sx={{mt: 3}}>{data.description}</Paragraph>
    </Grid>
  )
}

export default NumberCountUpCard