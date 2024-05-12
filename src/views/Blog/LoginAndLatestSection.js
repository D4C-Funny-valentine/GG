import { Box, Grid } from '@mui/material'
import React from 'react'
import { CustomButton, CustomInput, DynamicGridContainer, GridLayout, Heading, Paragraph } from '../../components'
import { formatDate } from '../../utils/dateUtils'
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat"
import { cardBorderColor } from '../../utils/helperStyle'
import { useThemeSetting } from '../../redux/features'


const LoginAndLatestSection = ({data}) => {
    const {mode} = useThemeSetting();
  return (
    <Box>
        <GridLayout spacing={6}>
            <Grid item xs={12} md={8}>
                <Box>
                    <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', mb: 8}}>
                        <Box>
                            <Heading variant='h6' sx={{mb: 1, fontWeight: 700}}>Latest stories</Heading>
                            <Paragraph variant='body2'>Here’s what we’ve been up to recently.</Paragraph>
                        </Box>
                        <CustomButton variant='outlined'>
                            View all
                        </CustomButton>
                    </Box>
                    <GridLayout spacing={4}>
                        {
                            data.map((item, index) => (
                                <DynamicGridContainer key={item.title + index} index={1} spacing={2} imgUrl={item.url} imgMaxWidth='100%' imageStyle={{height: '200px', borderRadius: '0.5rem'}} imgGridCol={{xs : 12, md: 4}} textGridCol={{xs: 12, md: 8}} textPadding={{left : '0px', right: '0px'}}>
                                    <Box>
                                        <Heading variant='body1' sx={{fontWeight: 700}}>{item.title}</Heading>
                                        <Paragraph variant='caption2' sx={{my: 2, fontStyle : 'italic'}}>{item.author} - {formatDate(item.date, 'DD MMM')}</Paragraph>
                                        <Paragraph variant='body2' numberOfLines={3}>{item.description}</Paragraph>
                                        <Box sx={{display: 'flex', justifyContent: 'flex-end', mr: 1}}>
                                            <CustomButton variant='text' size="small" endIcon={<TrendingFlatIcon/>}>
                                                Read More
                                            </CustomButton>
                                        </Box>
                                    </Box>
                                </DynamicGridContainer>
                            ))
                        }
                    </GridLayout>
                </Box>
            </Grid>
            <Grid item xs={12} md={4}>
                <Box sx={{border: 1, borderRadius: '0.5rem', ...cardBorderColor(mode), py: 5, px: 3}}>
                        <Box sx={{px: 4, py: 2, height: '350px'}}>
                            <img src='https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration2.svg' alt='img' style={{width: '100%', height: '100%', objectFit: 'contain'}}/>
                        </Box>
                        <Box>
                            <Heading variant='body1' sx={{fontWeight: 700, mb: 5}}>Please login to comment</Heading>
                            <GridLayout component="form" spacing={4}>
                                <Grid item xs={12}>
                                    <Paragraph variant='subtitle1' sx={{mb: 3}}>Email</Paragraph>
                                    <CustomInput
                                        required={true}
                                        fullWidth
                                        placeholder='Enter your email'
                                        label='Email'
                                        labelFocusedColor='primary'
                                        borderColor='silver.main'
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Box sx={{mb: 3, display: 'flex', justifyContent: 'space-between'}}>
                                        <Paragraph variant='subtitle1'>Enter your password</Paragraph>
                                        <Paragraph variant='subtitle1' color="primary">Forget your password?</Paragraph>
                                    </Box>
                                    <CustomInput
                                        required={true}
                                        fullWidth
                                        placeholder='Enter your password'
                                        label='Password'
                                        labelFocusedColor='primary'
                                        borderColor='silver.main'
                                    />
                                </Grid>
                                 <Grid item xs={12}>
                                    <Box sx={{mb: 3, display: 'flex', justifyContent: 'space-between'}}>
                                        <Paragraph variant='subtitle1'>Don't have an account yet?</Paragraph>
                                        <Paragraph variant='subtitle1' color="primary" sx={{whiteSpace: 'pre-wrap'}}>Sign up here.</Paragraph>
                                    </Box>
                                    <CustomButton variant='contained'>
                                        Login
                                    </CustomButton>
                                </Grid>
                            </GridLayout>
                        </Box>
                </Box>
            </Grid>
        </GridLayout>
    </Box>
  )
}

export default LoginAndLatestSection