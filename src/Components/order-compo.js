import { Badge, Box, Typography } from '@mui/material'
import React from 'react'

const OrderCompo = () => {
  return (
    <Box padding={2} sx={{ background: '#e5f6fd',borderRadius:'8px' }}>
    <Typography variant="h6" gutterBottom>
COMPONENTS <Badge sx={{px:1,'& .MuiBadge-badge':{background:'lightgray'}}} badgeContent={'0'}>
</Badge>
</Typography>   
<Typography variant="body2" sx={{  color: 'grey',mt:2 }} component="div">
                      No Items Found
                  </Typography>
    </Box>
  )
}

export default OrderCompo