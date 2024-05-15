import React from 'react'
import { CustomButton, CustomListItem, GridLayout, HeadingTextGroup } from '../../../../components'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { Box, Grid } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ApplyJobSection = ({data}) => {
  return (
    <Box>
        <HeadingTextGroup 
            mainTitle='Our process to find you a new job is fast'
            description='Fill out our standardized application on our platform. Most applicants finish in under an hour.'
            sx={{mb : 4}}
        >
            <CustomButton sx={{mt: 2}} endIcon={<TrendingFlatIcon/>}>
                Start searching
            </CustomButton>
        </HeadingTextGroup>
        <Box sx={{pt : 8}}>
            <GridLayout spacing={8}>
                {
                    data.map((job, index) => (
                        <Grid item xs={12} key={index}>
                            <CustomListItem 
                                linkIcon={<ArrowForwardIosIcon color='primary'/>}
                                heading={job.title}
                                location={job.location}
                                jobType={job.type}
                                sx={{py: 5, px: 4}} 
                            />
                        </Grid>
                    ))
                }
            </GridLayout>
        </Box>
    </Box>
  )
}

export default ApplyJobSection