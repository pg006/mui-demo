import { Badge, Box, Stack, Typography } from '@mui/material'
import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import TtyIcon from '@mui/icons-material/Tty';
import EmailIcon from '@mui/icons-material/Email';
const SupplierInfo = () => {
    const details = [{ title: 'Date Authorized', value: '12 Jul 2019' }, { title: 'Authorized By', value: 'Jim Darren' }, { title: 'Invoice Chased Date', value: '-' }, { title: 'PO Chased Date', value: '-' }, { title: 'PO Ref No.', value: '-' }]
    const star = 4;
    const info = [{ icon: <LocationOnIcon sx={{ mr: 2 }} />, value: 'No. 1, 2nd Floor, 1st Main, 2nd Cross, 3rd Block, Jayanagar, Bangalore - 560011' }, { icon: <CallIcon sx={{ mr: 2 }} />, value: '+91 80 2654 1234' }, { icon: <TtyIcon sx={{ mr: 2 }} />, value: '+91 80 2654 1234' }, { icon: <EmailIcon sx={{ mr: 2 }} />, value: 'repairs@service.com' }]
    return (
        <Box padding={2} sx={{ background: '#e5f6fd', borderRadius: '8px', my: 2 }}>
            <Typography variant="h6" gutterBottom>
                AUTHORIZED SUPPLIERS <Badge sx={{ ml: '70px', '& .MuiBadge-badge': { background: 'lightgray' } }} badgeContent={'Ref:PRJ0001963SRIN'}>
                </Badge>
            </Typography>
            <Box component={'div'} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flex: '1 0 auto', mt: 2, mb: 2 }}>
                {
                    details.map((item, index) => {
                        return (
                            <Box component={'div'} padding={0} margin={0} key={index}>
                                <Typography variant="body2" sx={{ textAlign: 'left', color: 'grey' }} component="div">
                                    {item.title}
                                </Typography>
                                <Typography variant="subtitle2" sx={{ textAlign: 'left', }} component="div">
                                    {item.value}
                                </Typography>
                            </Box>
                        )
                    })
                }

            </Box>
            <Typography sx={{ color: 'blue' }} variant="subtitle2" gutterBottom>
                Repairs (Riding Squads / Manpower)
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', flex: '1 0 auto', mb: 2 }}>
                {
                    new Array(star).fill(0).map((item, index) => {
                        return <StarIcon key={index} sx={{ color: 'orange' }} />
                    })
                }
                {
                    new Array(5 - star).fill(0).map((item, index) => {
                        return <StarBorderIcon key={index} sx={{ color: 'lightgray' }} />
                    })
                }
            </Box>
            <Stack spacing={1}>
                {
                    info.map((item, index) => {
                        return (
                            <Box component={'div'} padding={0} margin={0} key={index}>
                                <Typography variant="body2" display={'flex'} alignItems={'center'} sx={{ textAlign: 'left', color: 'green' }} component="div">
                                    {item.icon} {item.value}
                                </Typography>
                            </Box>
                        )
                    })
                }
            </Stack>
        </Box>
    )
}

export default SupplierInfo