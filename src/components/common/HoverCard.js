import React from 'react'
import { Paragraph, Heading } from "../UI"
import { Box, Link, Paper } from '@mui/material'

/**
 * Renders a hover card component with information about a person.
 *
 * @param {Object} props - The properties object.
 * @param {Object} props.info - The information about the person.
 * @param {string} props.info.profile - The profile image URL of the person.
 * @param {string} props.info.name - The name of the person.
 * @param {Array<string>} props.info.position - The positions held by the person.
 * @param {Array<Object>} props.info.socialMedia - The social media links of the person.
 * @param {string} props.info.socialMedia[].link - The link of the social media profile.
 * @param {ReactNode} props.info.icon - The icon to display for the social media link.
 * @param {Object} props.sx - The additional styles for the card.
 * @return {React.ReactElement}
 */

const HoverCard = ({info, sx}) => {
    const CARD_HOVER_STYLE = { 
      borderRadius: 2, 
      border: '1px solid #0000001f',
      p : 6, 
      display: 'flex', 
      alignItems: 'center',
      '&:hover': { transform: 'translateY(-0.5rem)' },
      transition: '0.3s all ease-in-out',
      width: '100%',
      height: '100%'
    }

    console.log(info)

    return (
        <Box component={Paper} sx={{...CARD_HOVER_STYLE, ...sx}} elevation={1}>
            <Box sx={{minWidth: '100px', height: '100px', mr: 6}}>
                <img src={info.profile} alt={info.name} style={{width: '100%', height: '100%', borderRadius: 4, objectFit: 'cover'}} loading='lazy'/>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
              <Heading variant='h6' fontWeight={700}>{info.name}</Heading>
              <Paragraph variant='body2' sx={{my: 1}}>{info.position.join(', ')}</Paragraph>
              <Box sx={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                {
                  info.socialMedia && info.socialMedia.length > 0 && info.socialMedia?.map(item => (
                    <Link href={item.link} target='_blank'>{item.icon}</Link>
                  ))
                }
              </Box>
            </Box>
        </Box>
    )
  }

export default HoverCard