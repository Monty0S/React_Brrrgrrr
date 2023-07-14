/*
import React from 'react'
import Header from "./Header"
import Footer from './Footer';


const Layout = ({ children }) => {
  return (
    <>
       <Header  />
       <div className='content' >{children}</div>
       <Footer />
    </>   
  );
};

export default Layout

*/
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;