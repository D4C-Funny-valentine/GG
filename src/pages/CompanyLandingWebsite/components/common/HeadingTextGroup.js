import { Box } from '@mui/material'
import React from 'react'
import { Heading, Paragraph } from '../UI'

/**
 * A component that displays a mini title, main title, and description in a centered layout.
 * 
 * @param {object} props - The props object.
 * @param {string} props.miniTitle - The mini title displayed above the main title.
 * @param {string} props.mainTitle - The main title of the group.
 * @param {string} props.description - The description text displayed below the main title.
 * @param {'left' | 'center' | 'right'} props.textAlign - Textalign for the text group component.
 * @param {'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7'} props.headingVariant - The main title heading text variant.
 * @param {'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' | 'body1' | 'body2'} props.descriptionVariant - The description text variant.
 * @param {string} props.specialText - Special word with special color.
 * @param {'primary.main' | 'secondary.main'} props.specialTextColor - Special color for special text.
 * @param {string} props.justifyContentForMainTitle - Justify content for main title.
 * @param {object} [props.specialTextSx] - Additional styles to apply to the special text.
 * @param {object} [props.mainTitleSx] - Additional styles to apply to the main text container.
 * @param {object} [props.sx] - Additional styles to apply to the main container (eg. you can add mb or mt).
 * @param {React.ReactNode} [props.children] - Additional component to render in the group.
 * @returns {React.ReactNode}
 */

const HeadingTextGroup = ({ miniTitle = '', mainTitle = '', description = '', textAlign= 'center', headingVariant= 'h3', descriptionVariant = 'h7', specialText = '', specialTextColor = 'primary.main', sx={}, specialTextSx={}, mainTitleSx ={}, justifyContentForMainTitle="center" ,children }) => {
    return (
      <Box sx={{ textAlign: textAlign, display: 'flex', flexDirection: 'column', ...sx }}>
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
          <Paragraph variant='body1' color="secondary" sx={{textTransform: 'uppercase'}}>{miniTitle}</Paragraph>
          <Box sx={{display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: justifyContentForMainTitle,  mt : 1, mb: 2.5, ...mainTitleSx}}>
            <Heading variant={headingVariant}>{mainTitle}</Heading>
            <Heading component={'span'} variant={headingVariant} color={specialTextColor} sx={{...specialTextSx}}>{specialText}</Heading>
          </Box>
          <Heading variant={descriptionVariant}>{description}</Heading>
        </Box>
        <Box>
          {children}
        </Box>
      </Box>
    )
  }
  
  export default HeadingTextGroup;
  