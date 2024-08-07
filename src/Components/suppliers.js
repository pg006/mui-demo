import { Avatar, Badge, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, styled, tableCellClasses } from '@mui/material'
import React from 'react'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#e5f6fd',
      color: 'black',
      borderTop: '1px solid lightgray',
      borderBottom: '1px solid lightgray',
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
    //   backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  function createData(
    name,
    goods,
    freight,
    total,
    cur,
    base
  ) {
    return { name, goods, freight, total, cur ,base};
  }
  
  const rows = [
    createData('Engineering Co.Ltd', 3459.40, 0.0, 3459.40,'EUR', 3811),
    createData('Fintech Co. Ltd -SPARED', 4370.00, 0.0,  4370.00,'USD', 4370),
  ];

const Suppliers = () => {
  return (
    <Box padding={2} sx={{ background: '#e5f6fd', borderRadius: '8px', my: 2 }}>
           <Typography variant="h6" gutterBottom>
                SUPPLIERS <Badge sx={{px:1,'& .MuiBadge-badge':{background:'lightgray'}}} badgeContent={'2'}>
                </Badge>
            </Typography> 
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell>Status</StyledTableCell>
          <StyledTableCell align="right">Supplier Name</StyledTableCell>
          <StyledTableCell align="right">Goods</StyledTableCell>
          <StyledTableCell align="right">Freight</StyledTableCell>
          <StyledTableCell align="right">Total</StyledTableCell>
          <StyledTableCell align="right">Cur</StyledTableCell>
          <StyledTableCell align="right">Base (USD)</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <StyledTableRow key={row.name}>
            <StyledTableCell component="th" scope="row">
            <Avatar alt={row.name} />  
            </StyledTableCell>
            <StyledTableCell align='right'>
            {row.name} 
            </StyledTableCell>
            <StyledTableCell align="right">{row.goods}</StyledTableCell>
            <StyledTableCell align="right">{row.freight}</StyledTableCell>
            <StyledTableCell align="right">{row.total}</StyledTableCell>
            <StyledTableCell align="right">{row.cur}</StyledTableCell>
            <StyledTableCell align="right">{row.base}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </Box>
  )
}

export default Suppliers