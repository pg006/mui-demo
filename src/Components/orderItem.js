import { Alert, Avatar, Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import AcUnitIcon from '@mui/icons-material/AcUnit';

const OrderItem = () => {
    return (
        <Card sx={{ display: 'flex', background: '#e5f6fd',boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',borderRadius:'10px',mb:2 }}>
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between', flex: '1 0 auto', p: 2 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 600 }} component="div">
                        4909-00019
                    </Typography>
                    <Typography sx={{ fontWeight: 600 }} component="div">
                        Hotel/Tech Work Order
                    </Typography>
                    <Alert sx={{
                        mt: 1, px: 0.5, py: 0.5, color: 'darkslategray', backgroundColor: '#87CEEB', '& .MuiAlert-message, .MuiAlert-icon': {
                            padding: 0.5,
                        }
                    }} icon={<AcUnitIcon fontSize="inherit" />} variant='filled' severity="info">
                        Lorum Ipsum
                    </Alert>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                        <CleaningServicesIcon sx={{ mx: 2 }} />
                        <Avatar sx={{ width: 26, height: 26 }} alt="Cindy Baker" src="" />
                    </Box>
                    <Box>
                        <Typography variant="body2" sx={{ textAlign: 'right', color: 'grey' }} component="div">
                            Services
                        </Typography>
                        <Typography variant="body2" sx={{ textAlign: 'right', color: 'grey' }} component="div">
                            12 Jul 2019
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    )
}

export default OrderItem