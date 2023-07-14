import React from 'react'
import Layout from '../components/Layouts/Layout'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'
import Banner from '../images/burger-2.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";// requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../styles/Carousel.css';
import '../styles/HomeStyles.css';

/*
const Slider = () => {
     
    return(
      
        <div className="carousel-container">
        <div className="carousel">
        <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} interval={4000} className="my-carousel" showStatus={false} >
          <div>
            <img src="https://cdn.pixabay.com/photo/2016/03/26/23/19/hamburger-1281855_640.jpg" alt="Slide 1" className="slide-image" />
          </div>
          <div>
            <img src="https://cdn.pixabay.com/photo/2020/03/21/11/17/burger-4953465_1280.jpg" alt="Slide 2" className="slide-image"/>
          </div>
          <div>
            <img src="https://cdn.pixabay.com/photo/2019/07/29/05/52/burger-4369973_640.jpg" alt="Slide 3" className="slide-image"/>
          </div>
        </Carousel>
        </div>

        <div className="text-container" sx={{display:{xs:'block', sm:'none'}}}>
        <Typography fontSize={'120%'} align='center'>
        Are You Hungry? Are Your craving for some Burgers?<br />
        Here is our Menu for you. We have prepared various menu for your taste.<br />
        Well...is this not enough? Are You bored of the regular Burgers? We knew that!!<br />
        You can be creative. We are able to make your special orders.<br />
        Browse the Menu and customize your Burgers. You can also add your favorite ingredients to our Burgers.<br />
        So, Why Delay!! Go and Customize Your own Burgers!</Typography>
        </div>
        
      </div>
        
    );
}


const Home = () => {
  return (
    <Layout>
      <div className="home" style={{backgroundImage:`url(${Banner})`}}>
        <div className='headerContainer'>
         <div className='headmoto'>
          <h1>Brrrgrrr</h1>
         </div>
         <p>Best Burger in India</p>
         <Slider />
         <Link to='/menu'>
         <button>
            ORDER NOW!
         </button>
         </Link>
        </div>
        <Typography className="moto" variant="h6" component="div" sx={{ flexGrow: 1, my: 2 }} >
          a</Typography>
      </div>
    </Layout>
  )
}

export default Home

*/


const Home = () => {
  return (
    <Layout>
      <div className="home" style={{backgroundImage:`url(${Banner})`}}>
        <div className='headerContainer' /*sx={{"@media (max-width : 600px)":{
          display:'none',/*Changes made here , added the sx  
        }}} */ >
          <div className='headmoto'>
            <h1>Brrrgrrr</h1>
          </div>
          <p>Best Burger in India</p>

          <div className="carousel-container">
            <div className="carousel">
              <Carousel showThumbs={false} infiniteLoop autoPlay interval={4000} className="my-carousel" showStatus={false}>
                <div>
                  <img src="https://cdn.pixabay.com/photo/2016/03/26/23/19/hamburger-1281855_640.jpg" alt="Slide 1" className="slide-image" />
                </div>
                <div>
                  <img src="https://cdn.pixabay.com/photo/2020/03/21/11/17/burger-4953465_1280.jpg" alt="Slide 2" className="slide-image"/>
                </div>
                <div>
                  <img src="https://cdn.pixabay.com/photo/2019/07/29/05/52/burger-4369973_640.jpg" alt="Slide 3" className="slide-image"/>
                </div>
              </Carousel>
            </div>

            <div className="text-container" >
              <Typography fontSize={'120%'} align='center' >
                Are You Hungry? Are Your craving for some Burgers?<br />
                Here is our Menu for you. We have prepared various menu for your taste.<br />
                Well...is this not enough? Are You bored of the regular Burgers? We knew that!!<br />
                You can be creative. We are able to make your special orders.<br />
                Browse the Menu and customize your Burgers. You can also add your favorite ingredients to our Burgers.<br />
                So, Why Delay!! Go and Customize Your own Burgers!</Typography>
            </div>
          </div>

          <Link to='/menu'>
            <button>
              ORDER NOW!
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home
