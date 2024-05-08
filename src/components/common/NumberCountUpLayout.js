import { Grid } from '@mui/material'
import React from 'react'
import NumberCountUpCard from './NumberCountUpCard'

/**
 * A layout component for displaying multiple number count-up cards in a grid layout.
 * 
 * @param {object} props - Component props.
 * @param {Array} props.data - Data for the number count-up cards, each containing the number, unit, and description properties.
 * @param {number} props.spacing - The spacing between grid items in the layout. Defaults to 5.
 * @param {number} props.xs - The number of columns the component should occupy on extra small screens.
 * @param {number} props.md - The number of columns the component should occupy on medium screens.
 * @returns {React.ReactElement}
 */

const NumberCountUpLayout = ({data, spacing = 5, xs, md}) => {
  return (
   
        <Grid maxWidth={"lg"} container spacing={spacing}>
           {
            data.map((item, index) => (
                <NumberCountUpCard data={item} key={index} xs={xs} md={md}/>
            ))
           }
        </Grid>
  )
}

export default NumberCountUpLayout