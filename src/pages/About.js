import React from 'react'
import Layout from '../components/Layouts/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
       <Box sx = {{
        my: 15,
        textAlign: "center",
        p:2,
        "& h4":{
          fontWeight:"bold",
          my: 2,
          fontSize: '2rem',
        },
        "& p":{
          textAlign: 'center',
        },
        "@media (max-width : 600px)":{
          mt: 0,
          "& h4":{
            fontSize: "1.5rem",
          }
        }
       }}>
        <Typography variant='h4'>Welcome to Brrrgrrr </Typography>
        <h4>Capital of the Best Burgers!</h4>
        <p>
          At Brrrgrrr, we take pride in serving the most delicious and mouthwatering burgers in the city.<br /> Our passion for quality ingredients, exceptional flavors, and the perfect burger experience drives us to create culinary masterpieces that will satisfy even the most discerning taste buds.<br /><br />

          We believe that a great burger starts with the finest ingredients.<br /> That's why we source the freshest, locally-sourced produce, high-quality meats, and artisanal bread buns to ensure every bite is a burst of flavor.<br /> Our dedicated team of expert chefs meticulously crafts each burger with love, infusing them with unique seasonings and gourmet toppings that will leave you craving for more.<br /><br />
          
          At Brrrgrrr, we understand that everyone has different preferences when it comes to their perfect burger.<br /> That's why we offer a wide range of options to customize your burger just the way you like it.<br /> From classic combinations to innovative creations, our menu caters to all taste preferences.<br /> Want to add extra cheese, bacon, or avocado?<br /> No problem!<br /> Our build-your-own burger option allows you to create a personalized masterpiece that suits your cravings.<br /><br />
          
          Not only do we serve amazing burgers, but we also believe in providing an unforgettable dining experience.<br /> Our cozy and welcoming ambiance, combined with our friendly and attentive staff, ensures that every visit to Brrrgrrr is a delightful one.<br /> Whether you're grabbing a quick bite during lunch or enjoying a relaxed dinner with friends and family, we strive to make your time with us truly enjoyable.<br /><br />
          
          At Brrrgrrr, we are committed to delivering excellence in every aspect of our service.<br /> From the moment you step into our restaurant to the last bite of your juicy burger, we aim to exceed your expectations.<br /> We continuously seek to innovate and improve, constantly introducing new flavors and seasonal specials to surprise and delight our loyal customers.<br /><br />
          
          So, if you're a burger lover looking for an extraordinary dining experience, Brrrgrrr is the place to be.<br /> Join us on this gastronomic journey and discover why our burgers have become the talk of the town.<br /> We can't wait to serve you the best burgers you've ever tasted!<br /><br />
          
          Visit Brrrgrrr today and treat yourself to the ultimate burger experience.<br /> Your taste buds will thank you! <br />
        </p>
       </Box>
    </Layout>
  )
}

export default About