import { Heading } from '@globalComponents/index'
import { Box, Paper } from '@mui/material'
import React from 'react'

const PaperCard = ({url, title}) => {
  return (
    <Paper elevation={2} sx={{borderRadius: 2, minHeight: 260, height: '100%', minWidth: 200, width: '100%', boxShadow: '0px 8px 45px rgba(3, 0, 71, 0.09)' }}>
        <Box sx={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '1rem'}}>
            <Box sx={{width: '60px', height: '60px'}}>
                <img src={url} alt='img' width={'100%'} height={'100%'} style={{objectFit: 'contain'}}/>
            </Box>
            {title && <Heading variant='h7' fontWeight={700}>{title}</Heading>}
        </Box>
    </Paper>
  )
}

export default PaperCard