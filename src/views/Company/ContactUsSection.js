import { Avatar, Box, Container, Grid, List, ListItem } from '@mui/material'
import React from 'react'
import { Paragraph, Heading, GoogleMap } from '../../web/CompanyLandingWebsite/components'
import { contact } from '../../data/common'

const ContactUsSection = () => {
  return (
    <Box sx={{display: 'flex', position: 'relative', flexDirection: {xs: 'column', md: 'row'}}}>
        <Container maxWidth="lg" sx={{width: '100%', py: { xs: 12, md: 16 }}}>
            <Grid container spacing={0}>
                <Grid item xs={12} md={6}>
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                        <Heading variant='h3'>Contact us</Heading>
                        <Paragraph variant='body2'>
                            Rather than worrying about switching offices every couple years, you can instead stay in the same location and grow-up from your shared coworking space to an office that takes up an entire floor.
                        </Paragraph>
                        <List sx={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                            {
                                contact.map(item => (
                                    <ContactListItem key={item.method} item={item}/>
                                ))
                            }
                        </List>
                    </Box>
                </Grid>
            </Grid>
        </Container>
        <Box sx={{position: { md: 'absolute', xs : 'relative' }, right: 0, top: 0, width: { md: '50%', xs: '100%' }, height: { md: '100%', xs: '400px' }}}>
            <GoogleMap src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d344.1466378305959!2d96.2259738382856!3d16.775749155467953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1ed7e2f7231c3%3A0x4bf2e6fd8286b8!2sBuilding%20A2!5e0!3m2!1sen!2smm!4v1713608460650!5m2!1sen!2smm'}/>
        </Box>
    </Box>
  )
}

const ContactListItem = ({item}) => {
    return (
    <ListItem disablePadding>
        <Avatar sx={{backgroundColor: 'secondary.main', mr: 4}}>{item.icon}</Avatar>
        <Box>
            <Heading variant='body1'>{item.method}</Heading>
            <Paragraph variant='body2'>{item.value}</Paragraph>
        </Box>
    </ListItem>
    )
}

export default ContactUsSection