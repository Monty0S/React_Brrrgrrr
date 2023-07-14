import React from 'react'
import Layout from '../components/Layouts/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 10, ml: 10, "& h4":{fontWeight:"bold", mb: 2}}}>
        <Typography variant='h4'>Contact Us</Typography>
        <p>
        At Brrrgrrr, we take pride in serving the most delicious and mouthwatering burgers in the city.<br /> Our passion for quality ingredients, exceptional flavors, and the perfect burger experience drives us to create culinary masterpieces that will satisfy even the most discerning taste buds.<br />
        </p>
      </Box>
      <Box sx={{ m: 3, width: "600px" , ml:10, "@media (max-width:600px)":{
        width: '250px'
      } }}>
        <TableContainer component={Paper}>
        <Table aria-label='contact table'>
          <TableHead>
            <TableRow>
              <TableCell sx={{bgcolor:'goldenrod', color:'white'}} align='center'>Contact Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          <TableRow>
            <TableCell>
              <SupportAgentIcon sx={{color:'red', pt: 1}}/> 1234567890 (tollfree)
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <EmailIcon sx={{color:'red', pt: 1}}/> Brrrgrrr@myrest.com
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <CallIcon sx={{color:'red', pt: 1}}/> 9876543210 (tollfree)
            </TableCell>
          </TableRow>
          </TableBody>
        </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact



