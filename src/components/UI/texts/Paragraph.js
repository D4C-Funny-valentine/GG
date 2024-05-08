import React from 'react'
import Typography  from "@mui/material/Typography"

/**
 * 
 * @param {object} props - Component props
 * @param {'body1' | 'body2' | 'subtitle1' | 'subtitle2' | 'subtitle3' | 'subtitle4' | 'caption'} props.variant - Variant of the text (body1, body2, subtitle1, subtitle2, subtitle3, subtitle4, caption).
 * @param {React.ReactNode} props.children = Text content.
 * @param {object} [props.sx] - Additional custom style for the text.
 * @returns {React.JSX.Element}
 */

const Paragraph = ({variant = 'body1', sx = {}, children, ...props}) => {
  return (
    <Typography variant={variant} sx={sx} {...props}>
        {children}
    </Typography>
  )
}

export default Paragraph