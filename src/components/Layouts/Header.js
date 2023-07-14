import React,{useState} from 'react'
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import { Link } from 'react-router-dom';
import '../../styles/HeaderStyles.css';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import InfoIcon from '@mui/icons-material/Info';
import ContactPageIcon from '@mui/icons-material/ContactPage';

const Header = () => {
  const [MobileOpen, setMobileOpen] = useState(false)

  // hndle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!MobileOpen)
  }


  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
    <Typography variant="h6" component="div" sx={{ flexGrow: 1, my: 2 }}>
    It's Brrrgrrr Time!</Typography>
      <Divider />
      <ul className='mobile-navigation'>
        <li>
          
         <Link to={'/'}><HomeIcon sx={{paddingTop:.5}}/>Home</Link>
        </li>
        <li>
         <Link to={'/menu'}><RestaurantMenuIcon sx={{paddingTop:.5}}/>Menu</Link>
        </li>
        <li>
         <Link to={'/about'}><InfoIcon sx={{paddingTop:.5}}/>About</Link>
        </li>
        <li>
         <Link to={'/contact'}><ContactPageIcon sx={{paddingTop:.5}}/>Contact</Link>
        </li>
      </ul>
    </Box>
  )
  return (
    <>
       <Box>
         <AppBar component={'nav'} sx={{ bgcolor: 'goldenrod' }}>
          <Toolbar>
            <IconButton color="inherit" aria-label="open drawer" edge="start" sx={{
              me: 2,
              display: { sm: "none" }
            }}
            onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <LunchDiningIcon />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
            Brrrgrrr</Typography>
            <Box sx={{display: { xs:'none', sm: "block" } }}>
              <ul className='navigation-menu'>
                <li>
                 <Link to={'/'}>Home</Link>
                </li>
                <li>
                 <Link to={'/menu'}>Menu</Link>
                </li>
                <li>
                 <Link to={'/about'}>About</Link>
                </li>
                <li>
                 <Link to={'/contact'}>Contact</Link>
                </li>
              </ul>
            </Box>
           </Toolbar>
         </AppBar>
         <Box component="nav">
            <Drawer variant="temporary" open={MobileOpen} 
            onClose={handleDrawerToggle}
            sx={{display:{xs:'block', sm:'none'}, "& .MuiDrawer-paper":{
              boxSizing: 'border-box',
              width: "160px",
            } }}
            >
              {drawer}
            </Drawer>
         </Box>
         <Box>
         <Toolbar />
         </Box>
       </Box>
    </>
  )
}

export default Header