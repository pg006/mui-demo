import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Alert, Avatar, Badge, Button, Card, CardContent, Grid, MenuItem, OutlinedInput, Select, Stack, TextField } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import OrderItem from './Components/orderItem';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import OrderInfo from './Components/orderInfo';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import PrintIcon from '@mui/icons-material/Print';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ReportIcon from '@mui/icons-material/Report';
import AttractionsIcon from '@mui/icons-material/Attractions';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import OrderCompo from './Components/order-compo';
import SupplierInfo from './Components/supplier-info';
import Suppliers from './Components/suppliers';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

export default function App() {
  const actions = [
    { icon: <SaveAsIcon />, name: 'Edit Order ' },
    { icon: <PrintIcon />, name: 'Print Order ' },
    { icon: <LocalShippingIcon />, name: 'Change Delivery' },
    { icon: <ReportIcon />, name: 'Reports' },
    { icon: <AttractionsIcon />, name: 'Actions' },
  ]
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ my: 2, mx: 2 }}>
      <Grid container spacing={2}>

        <Grid sx={{
          paddingRight: 2,
        }} item xs={12} md={4}>
          <Box component={"div"} sx={{ background: '#e5f6fd',borderRadius:'10px',boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flex: '1 0 auto', p: 2 }}>
              <TextField
                placeholder="My Responsibilities"
                sx={{ '& .MuiInputBase-input': { p: 0, pl: 2 },mr:1 }}
                fullWidth
                InputProps={{
                  startAdornment: <DirectionsBoatIcon />,
                  endAdornment: <SearchIcon />,
                  style: {
                    borderRadius: "25px", height: '38px', background: 'darkgray', color: 'black', fontSize: '13px'
                  }
                }}
              />
              <Select
                displayEmpty
                input={<OutlinedInput />}
                sx={{ '& .MuiSelect-select': { p: 0, pl: 2 },ml:1,borderRadius: "25px", height: '38px', background: 'darkgray', color: 'black', fontSize: '13px' }}
                fullWidth
                renderValue={(selected) => {
                  return <>PO</>;
                  if (selected?.length === 0) {
                  }

                  return selected?.join(', ');
                }}
                // MenuProps={MenuProps}
                inputProps={{
                  'aria-label': 'Without label',
                }}
              >
                <MenuItem disabled value="">
                  <em>Placeholder</em>
                </MenuItem>

              </Select>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flex: '1 0 auto', p: 2 }}>
              <Stack spacing={0} width={'100%'} sx={{mr:1}}>
                  <Typography  variant="body2" sx={{  color: 'grey' }} gutterBottom>
                   Coy Id
                  </Typography>
                  <TextField id="standard-basic" inputProps={{style:{fontSize:'13px'}}} fullWidth placeholder="Enter Coy ID" variant="standard" />
                </Stack>
                <Stack spacing={0} width={'100%'} sx={{ml:1}}>
                <Typography  variant="body2" sx={{  color: 'grey' }} gutterBottom>
                  Order No
                  </Typography>
                  <TextField id="standard-basic" fullWidth inputProps={{style:{fontSize:'13px'}}} placeholder="Enter Order No" variant="standard" />
                </Stack>
              </Box>
          </Box>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Orders
          </Typography>
          <Box  sx={{ overflowY: 'scroll', height: 'calc(100vh - 100px)', p:1,paddingBottom: '160px', "&::-webkit-scrollbar": {
            height: "2px",
            width: "1px"
          }}}>
            {[1, 2, 3, 4, 5, 6,7,8,9,10].map((value) => {
              return (
                <OrderItem key={value} value={value} />
              );
            })
            }

          </Box>
        </Grid>
        <Grid item sx={{
          overflowY: 'scroll', height: '100vh', paddingBottom: '20px', "&::-webkit-scrollbar": {
            height: "2px",
          }
        }} xs={12} md={8}>
          <Card sx={{ boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
            <OrderInfo />
            <Box component={'div'} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid lightgray', flex: '1 0 auto', px: 2, py: 1 }}>
              {
                actions.map((action, index) => {

                  return <Button size="small" color="success" startIcon={action.icon}>{action.name}</Button>
                })
              }
            </Box>
            <Box sx={{ width: '100%', mt: 2, typography: 'body1' }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList sx={{
                    "& .MuiTab-root.Mui-selected": {
                      color: 'black'
                    }, '& .MuiTab-root': { fontSize: '13px' }
                  }} TabIndicatorProps={{
                    style: {
                      backgroundColor: "black",
                    }
                  }} onChange={handleChange} scrollButtons={false} variant="scrollable" aria-label="lab API tabs example">
                    <Tab label="Summary" value="1" />
                    <Tab label="Order Lines" value="2" />
                    <Tab label="Suppliers" value="3" />
                    <Tab label="Analysis" value="4" />
                    <Tab label="Freight Details" value="5" />
                    <Tab label="Delivery" value="6" />
                    <Tab label="Invoice" value="7" />
                    <Tab label="Memos" value="8" />
                    <Tab label="Notes & Attachment" value="9" />
                    <Tab label="Budget" value="10" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <OrderCompo />
                  <SupplierInfo />
                  <Suppliers />
                </TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
              </TabContext>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
