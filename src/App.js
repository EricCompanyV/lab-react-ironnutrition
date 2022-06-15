import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foodsData from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox.example';
import AddFoodForm from './components/AddFoodForm.example';
import Search from './components/Search.example';
import Image from './components/Image';


function App() {

  const [foodsDisplay, setFoodsDisplay] = useState(foodsData)
  const [foodsCurrentData, setFoodsCurrentData] = useState(foodsData)

  return (
  <div className="App">
    <AddFoodForm setter={setFoodsCurrentData} data={foodsCurrentData}/>
    <Search setter={setFoodsDisplay} data={foodsCurrentData}/>
    {foodsCurrentData.length 
    ? foodsDisplay.map((element, index, array)=>(
      <FoodBox key={index} food={element} foods={array} setterDisplay={setFoodsDisplay} foodsCurrentData={foodsCurrentData} setterCurrent={setFoodsCurrentData}/>
    ))
    
    : <Image />
    }
    </div>
    )
}
export default App;