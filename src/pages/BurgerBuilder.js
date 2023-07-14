import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import Layout from '../components/Layouts/Layout'
import { Box } from '@mui/material';
import '../styles/burgerbuilder.css';

/* */
import bread from '../images/sesame.jpg'
import patty from '../images/patty.webp'
import cheese from '../images/cheese.jpg'
import tomato from '../images/tomato.jpg'
import onion from '../images/onions.jpg'
import lettuce from '../images/leaf.jpg'
import mushroom from '../images/mushrooms.jpg'

import chicken from '../images/chicken.jpg'
import beef from '../images/beef4.jpg'
import lamb from '../images/lambbb.jpg'
import sheep from '../images/sheeep.jpg'

import mozarella from '../images/mozarella.jpg'
import cheddar from '../images/Cheddar.jpg'
import parmesan from '../images/parmesan.jpg'
import mayo from '../images/mayo.jpg'
/* */
const BurgerBuilder = () => {
  const [selectedComponents, setSelectedComponents] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showPattyPopup, setShowPattyPopup] = useState(false);
  const [showCheesePopup, setShowCheesePopup] = useState(false);
  const [selectedPatty, setSelectedPatty] = useState('');
  const [selectedCheese, setSelectedCheese] = useState('');
  const [exportData, setExportData] = useState([]);

  const handleComponentSelect = (component, price) => {
    const newComponent = {
      name: component,
      price: price.toFixed(2),
    };
    setSelectedComponents(prevComponents => [...prevComponents, newComponent]);
    setTotalPrice(prevPrice => prevPrice + price);
    setExportData(prevData => [...prevData, newComponent]);
  };

  const handlePattySelect = (patty, price) => {
    setSelectedPatty(patty);
    setTotalPrice(prevPrice => prevPrice + price);
    setShowPattyPopup(false);
    const newComponent = {
      name: patty,
      price: price.toFixed(2),
    };
    setSelectedComponents(prevComponents => [...prevComponents, newComponent]);
    setExportData(prevData => [...prevData, newComponent]);
  };

  const handleCheeseSelect = (cheese, price) => {
    setSelectedCheese(cheese);
    setTotalPrice(prevPrice => prevPrice + price);
    setShowCheesePopup(false);
    const newComponent = {
      name: cheese,
      price: price.toFixed(2),
    };
    setSelectedComponents(prevComponents => [...prevComponents, newComponent]);
    setExportData(prevData => [...prevData, newComponent]);
  };

  const handlePay = () => {
    const dataWithTotalPrice = [
      ...exportData,
      { name: 'Total Price', price: totalPrice.toFixed(2) },
    ];

    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(dataWithTotalPrice);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'BurgerData');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const excelBlob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(excelBlob, 'burger_data.xlsx');
    console.log('Payment completed!');
  };

  return (
    <Layout>
    <Box className="burgbuilder" sx={{display:"flex", flexDirection: "column", flexWrap: "wrap", justifyContent:'center'}}>
      <h1>Burger Builder</h1>
      <div>
        <h2>Components</h2>
        <button className='cardchoose' onClick={() => handleComponentSelect('Bread', 60)} style={{backgroundImage:`url(${bread})`}}>Add Bread</button>
        <button className='cardchoose' onClick={() => setShowPattyPopup(true)} style={{backgroundImage:`url(${patty})`}}>Add Patty</button>
        <button className='cardchoose' onClick={() => setShowCheesePopup(true)} style={{backgroundImage:`url(${cheese})`}}>Add Cheese</button>
        <button className='cardchoose' onClick={() => handleComponentSelect('Tomato', 25)} style={{backgroundImage:`url(${tomato})`}}>Add Tomato</button>
        <button className='cardchoose' onClick={() => handleComponentSelect('Onion', 12)} style={{backgroundImage:`url(${onion})`}}>Add Onion</button>
        <button className='cardchoose' onClick={() => handleComponentSelect('Lettuce', 10)} style={{backgroundImage:`url(${lettuce})`}}>Add Lettuce</button>
        <button className='cardchoose' onClick={() => handleComponentSelect('Mushroom', 20)} style={{backgroundImage:`url(${mushroom})`}}>Add Mushroom</button>
      </div>
      {showPattyPopup && (
        <div className="popup">
          <h2>Select Patty</h2>
          <button className='cardchoose' onClick={() => handlePattySelect('Chicken Patty', 120)} style={{backgroundImage:`url(${chicken})`}}>Chicken Patty</button>
          <button className='cardchoose' onClick={() => handlePattySelect('Lamb Patty', 150)} style={{backgroundImage:`url(${lamb})`}}>Lamb Patty</button>
          <button className='cardchoose' onClick={() => handlePattySelect('Sheep Patty', 130)} style={{backgroundImage:`url(${sheep})`}}>Sheep Patty</button>
          <button className='cardchoose' onClick={() => handlePattySelect('Beef Patty', 130)} style={{backgroundImage:`url(${beef})`}}>Beef Patty</button>
        </div>
      )}
      {showCheesePopup && (
        <div className="popup">
          <h2>Select Cheese</h2>
          <button className='cardchoose' onClick={() => handleCheeseSelect('Cheddar', 20)} style={{backgroundImage:`url(${cheddar})`}}>Cheddar</button>
          <button className='cardchoose' onClick={() => handleCheeseSelect('Mozzarella', 25)} style={{backgroundImage:`url(${mozarella})`}}>Mozzarella</button>
          <button className='cardchoose' onClick={() => handleCheeseSelect('Parmesan', 22)} style={{backgroundImage:`url(${parmesan})`}}>Parmesan</button>
          <button className='cardchoose' onClick={() => handleCheeseSelect('Mayo', 24)} style={{backgroundImage:`url(${mayo})`}}>Mayo</button>
        </div>
      )}
      <div className='pricecomp'>
        <h2>Selected Components</h2>
        <ul>
          {selectedComponents.map((component, index) => (
            <li key={index}>
              {component.name} - ₹{component.price}
            </li>
          ))}
          <li>
            Total Price - ₹{totalPrice.toFixed(2)}
          </li>
        </ul>
        <button className='payb' onClick={handlePay}>Pay</button>
      </div>
    </Box>
    </Layout>
  );
};

export default BurgerBuilder;
