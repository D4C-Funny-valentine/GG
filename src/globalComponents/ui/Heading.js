import React from 'react'
import Typography  from "@mui/material/Typography"

/**
 * 
 * @param {object} props - Component props
 * @param {'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7'} props.variant - Variant of the text (h1, h2, h3, h4, h5, h6, h7).
 * @param {React.ReactNode} props.children = Text content.
 * @param {object} [props.sx] - Additional custom style for the text.
 * @returns {React.JSX.Element}
 */

const Heading = ({variant = 'h6', sx = {}, children, ...props}) => {
  return (
    <Typography variant={variant} sx={sx} {...props}>
        {children}
    </Typography>
  )
}

export default Heading