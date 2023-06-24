import React from 'react';
import {  useState, useEffect } from 'react';
//import db from "./constant/db.json";
import {Header, Jumbotron, About, OurMenu, Delivery, Footer} from './components';

const App = () => {
  const [dataFood, setDataFood] = useState([])
  const [dataDrink, setDataDrink] = useState([])
  
  const getDataMenu = async () => {
    try {
      const response = await fetch('db.json')
      const data = await response.json();
      setDataFood(data.food);
      setDataDrink(data.drink);
    } catch (err) {
      console.log(err)
    }
  }
  
  useEffect(() => {
    getDataMenu()
  }, []);
  
  return (
    <div>
      <Header />
      <Jumbotron />
      <About  />
      <OurMenu  food={dataFood} drink={dataDrink} />
      <Delivery  />
      <Footer />
    </div>
  );
}

export default App;