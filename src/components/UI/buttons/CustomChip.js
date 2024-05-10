import { Chip } from '@mui/material'
import React from 'react'

/**
 * CustomChip is a reusable component that renders a Material-UI Chip with default props.
 *
 * @param {Object} props - Component props
 * @param {string} props.label - The text to be displayed in the Chip
 * @param {('small'|'medium')} [props.size='small'] - The size of the Chip
 * @param {('primary' | 'secondary' | 'sky' | 'silver')} [props.color='primary'] - The color of the Chip
 * @param {object} [props.sx = {}] - Additional style fot the Chip.
 *
 * @returns {React.ReactElement}
*/

const CustomChip = ({label, size="small", color="primary", sx}) => {
  return (
    <Chip label={label} size={size} color={color} sx={{pt: 1, ...sx}}/>
)
}

export default CustomChip