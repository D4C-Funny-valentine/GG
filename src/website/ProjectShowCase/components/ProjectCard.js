import { Heading, Paragraph } from '@globalComponents/index'
import { Box, IconButton, Paper, Stack } from '@mui/material'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import React from 'react'
import { Link } from 'react-router-dom';

const ProjectCard = ({data}) => {

  return (
    <Stack spacing={4}>
    <Box
      component={Paper} 
      sx={{
        borderRadius: 2, 
        backgroundImage: `url(${data.img})`, 
        backgroundSize: 'cover', 
        backgroundRepeat: "no-repeat",
        position: 'relative',
        transition: '200ms all ease-in-out',
        minHeight: {xs: 280, sm: 350, md: 400, lg: 500},
        height: '100%',
        width: '100%',
        zIndex: 3,
        overflow: 'hidden',
        '&:hover .overlay': {
            opacity: 1,
          },
        '&:hover .iconWrapper': {
          transform: 'scale(1)',
        },
    }}
    >
        {
        data.brand_new && (
            <Box sx={{position: 'absolute', top: 5, right: 5, zIndex: 2}}>
                <IconButton color="secondary" sx={{bgcolor: 'secondary.main', "&:hover": {bgcolor: 'secondary.main'}}}>
                    <Paragraph sx={{color: 'white'}}>New</Paragraph>
                </IconButton>
            </Box>
        )
        }
        <Box 
            className="overlay"
            sx={{
                position: 'absolute', 
                zIndex: -1, 
                inset: 0, 
                width: '100%', 
                height: '100%', 
                bgcolor: '#0000008a', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                opacity: 0,
                transition: 'opacity 250ms ease-in-out',
            }}
        >
                <Box 
                    className="iconWrapper" 
                    sx={{
                        width: '40px', 
                        height: '40px', 
                        borderRadius: '50%', 
                        bgcolor: 'white', 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        transform: 'scale(0.5)',
                        transition: 'transform 250ms ease-in-out',
                    }}
                >
                    <Link to={'/startup'} target='_blank'>
                        <RemoveRedEyeIcon htmlColor='grey' sx={{mt: 2}}/>
                    </Link>
                </Box>
        </Box>
    </Box>
    <Stack direction={'row'} spacing={1} justifyContent={'center'} alignItems={'center'}>
        <Heading variant='h7'>{data.website_name}</Heading>
        <Paragraph>({data.sold})</Paragraph>
    </Stack>
    </Stack>
  )
}

export default ProjectCard