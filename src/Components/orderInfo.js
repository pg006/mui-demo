import { Alert, Avatar, Box, Grid, Typography } from '@mui/material'
import React from 'react'
import AcUnitIcon from '@mui/icons-material/AcUnit';

const OrderInfo = () => {
  return (
    <Box component={"div"} sx={{ background: '#e5f6fd' }}>
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flex: '1 0 auto', p: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar sx={{ width: 26, height: 26, mx: 1 }} alt="Cindy Baker" src="" />
        <Typography sx={{ fontWeight: 600 }} component="div">
          4909 - 00019 - Hotel/Tech Work Order
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Alert sx={{
          px: 0.5, py: 0.5, color: 'darkslategray', backgroundColor: '#87CEEB', '& .MuiAlert-message, .MuiAlert-icon': {
            padding: 0.5,
          }
        }} icon={<AcUnitIcon fontSize="inherit" />} variant='filled' severity="info">
          Lorum Ipsum
        </Alert>
      </Box>
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flex: '1 0 auto', p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={2} md={2}>
          <Typography variant="body2" sx={{ textAlign: 'left', color: 'grey' }} component="div">
            Date Requested
          </Typography>
          <Typography variant="subtitle2" sx={{ textAlign: 'left', }} component="div">
            12 Jul 2019
          </Typography>
        </Grid>
        <Grid item xs={2} md={2}>
          <Typography variant="body2" sx={{ textAlign: 'left', color: 'grey' }} component="div">
            Type
          </Typography>
          <Typography variant="subtitle2" sx={{ textAlign: 'left', }} component="div">
            Services
          </Typography>
        </Grid>
        <Grid item xs={4} md={4}>
          <Typography variant="body2" sx={{ textAlign: 'left', color: 'grey' }} component="div">
            Account Code
          </Typography>
          <Typography variant="subtitle2" sx={{ textAlign: 'left', }} component="div">
            5830042 - HM PAX ACCOMODATION (HOTEL)
          </Typography>
        </Grid>
        <Grid item xs={2} md={2} display={'flex'} alignItems={'end'}>

          <Typography variant="subtitle2" sx={{ textAlign: 'left', color: 'green', textDecoration: 'underline', cursor: 'pointer' }} component="div">
            Order Summary
          </Typography>
        </Grid>
        <Grid item xs={2} md={2} display={'flex'} alignItems={'end'}>

          <Typography variant="subtitle2" sx={{ textAlign: 'left', color: 'green', textDecoration: 'underline', cursor: 'pointer' }} component="div">
            Order Progress
          </Typography>
        </Grid>
      </Grid>
    </Box>
  </Box>
  )
}

export default OrderInfo