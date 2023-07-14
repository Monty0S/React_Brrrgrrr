import React from 'react'
import { MenuList } from '../data/data.js';
import Layout from '../components/Layouts/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import '../styles/button.css'

const Menu = () => {
  return (
    <Layout>
      <Box sx={{display:"flex", flexWrap: "wrap", justifyContent:'center'}}>
        {
          MenuList.map(menu => (
            <Card sx={{maxWidth: "390px", display:"flex", m: 2}}>
              <CardActionArea>
               <CardMedia sx={{minHeight:'400px'}} component={'img'} src={menu.image} alt={menu.name} />
               <CardContent>
                 <Typography variant='h5' gutterBottom component={'div'}>
                   {menu.name}
                 </Typography>
                 <Typography variant="body2">
                   {menu.description}
                 </Typography>
               </CardContent>
              </CardActionArea>
            </Card>
          ))
        }
      </Box>
      <Typography variant='h6' marginLeft={'20px'} fontFamily={'sans-serif bold'}  >
        Well...is this not enough?<br />You can be creative. We are able to make your special orders.
      </Typography>
      <Link to='/customBurger'>
         <button className='Cbutton' >
            Custom Burger
         </button>
      </Link>
    </Layout>
  )
}

export default Menu


