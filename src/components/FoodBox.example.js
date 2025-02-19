// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Card, Row, Col, Divider, Input, Button } from 'antd';

// Iteration 2
function FoodBox({food, foods, setterDisplay,foodsCurrentData, setterCurrent}) {

  const handleClick = (name) => {
    const newCurrentData = []
    const newDisplayData = []
    foods.forEach(element => {
      if(element.name !== name) {
        newDisplayData.push(element)
      }
    })
    setterDisplay(newDisplayData)
    foodsCurrentData.forEach(element => {
      if(element.name !== name) {
        newCurrentData.push(element)
      }
    });
    setterCurrent(newCurrentData)
  }
  return (
    <Col>
      <Card
        title={food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={food.image} height={60} alt="food" />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {food.calories * food.servings} </b> kcal
        </p>
        <Button name={food.name} type="primary" onClick={()=>handleClick(food.name)}> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
