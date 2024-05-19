import { FactBox, GridLayout, Heading } from '@globalComponents/index'
import { Box, Grid } from '@mui/material'
import React from 'react'
import { data_structures } from '../config/_showcase'
import CheckIcon from '@mui/icons-material/Check';


const DataStructure = () => {
  return (
    <Box>
        <GridLayout spacing={6} sx={{alignItems: 'center'}}>
            <Grid item xs={12} md={5}>
                <Box sx={{minHeight: 320}}>
                    <img src={'https://bazaar.ui-lib.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproduct-model.3aa3dfec.png&w=640&q=75'} alt='img' width={'100%'} height={'100%'} style={{objectFit: 'contain'}}/>
                </Box>
            </Grid>
            <Grid item xs={12} md={7}>
                <Heading sx={{mb: 6}} variant='h3' color="secondary">Data structure with Typescript Data models</Heading>
                <GridLayout spacing={4}>
                    {
                        data_structures.map(item => (
                            <Grid item xs={12} md={6}>
                                <FactBox text={item.title} textVariant='h7'>
                                    <CheckIcon color="success" sx={{mr: 1}}/>
                                </FactBox>
                            </Grid>
                        ))
                    }
                </GridLayout>
            </Grid>
        </GridLayout>
    </Box>
  )
}

export default DataStructure