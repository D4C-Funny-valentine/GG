import { Grid } from '@mui/material'
import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {FactBox} from '../../../globalComponents';

/**
 * 
 * @param {object} props - Component props
 * @param {Array} props.data - Data to loop for the DevPlatform. (data must contain title);
 * @param {number} props.spacing - Spacing between each fact.
 * @param {object} props.sx - Additional Style for the FactLayout child
 * @returns {React.ReactElement}
 */

const FactLayoutGrid = ({data, spacing=0, sx={}, ...props}) => {
    return (
      <Grid container spacing={spacing} sx={{mt: 1}}>
        {
          data.map((platform, index) => (
            <Grid item key={platform.title + index} {...props} sx={{...sx}}>
              <FactBox text={platform.title}>
                <CheckCircleIcon color='secondary' sx={{mr: 3}}/>
              </FactBox>
            </Grid>
          ))
        }
      </Grid>
    )
  }

export default FactLayoutGrid