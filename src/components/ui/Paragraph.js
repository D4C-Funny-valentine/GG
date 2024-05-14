import React from 'react'
import Typography  from "@mui/material/Typography"

/**
 * 
 * @param {object} props - Component props
 * @param {'body1' | 'body2' | 'subtitle1' | 'subtitle2' | 'subtitle3' | 'subtitle4' | 'caption' | 'caption2'} props.variant - Variant of the text (body1, body2, subtitle1, subtitle2, subtitle3, subtitle4, caption).
 * @param {number} props.numberOfLines - Number of lines to display. Defaults to none.
 * @param {React.ReactNode} props.children = Text content.
 * @param {object} [props.sx] - Additional custom style for the text.
 * @returns {React.JSX.Element}
 */

const Paragraph = ({variant = 'body1', sx = {}, numberOfLines, children, ...props}) => {
  return (
    <Typography variant={variant} sx={{...sx, display: '-webkit-box', overflow: 'hidden',WebkitBoxOrient: 'vertical', WebkitLineClamp: numberOfLines ?? 'none'}} {...props}>
        {children}
    </Typography>
  )
}

export default Paragraph