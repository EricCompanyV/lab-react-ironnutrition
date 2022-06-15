// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input, Button } from 'antd';
import { useState } from 'react';

const initialValue = {
  name: '',
  image: '',
  calories: '',
  servings: '',
  display: false
};
// Iteration 4
function AddFoodForm({ setter, data }) {
  const [name, setName] = useState(initialValue.name);
  const [image, setImage] = useState(initialValue.image);
  const [calories, setCalories] = useState(initialValue.calories);
  const [servings, setServings] = useState(initialValue.servings);
  const [display, setDisplay] = useState(initialValue.display)

  const handleChange = (event) => {
    const inputChange = event.target.name;
    switch (inputChange) {
      case 'name':
        setName(event.target.value);
        break;
      case 'image':
        setImage(event.target.value);
        break;
      case 'calories':
        setCalories(event.target.value);
        break;
      case 'servings':
        setServings(event.target.value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const newFoods = new FormData(form);
    const newObj = {};
    for (let name of newFoods.keys()) {
      const input = form.elements[name];
      newObj[input.name] = input.value;
    }
    setter(data.concat(newObj));

    setName(initialValue.name);
    setImage(initialValue.image);
    setCalories(initialValue.calories);
    setServings(initialValue.servings);
  };

  const handleDisplay = ()=>{
    const tempDisplay = !display
    setDisplay(tempDisplay)
  }

  return (
    
    display ? <><form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input name="name" value={name} type="text" onChange={handleChange} />

      <label>Image</label>
      <Input name="image" value={image} type="text" onChange={handleChange} />

      <label>Calories</label>
      <Input
        name="calories"
        value={calories}
        type="number"
        onChange={handleChange} />

      <label>Servings</label>
      <Input
        name="servings"
        value={servings}
        type="number"
        onChange={handleChange} />

      <button type="submit">Create</button>
    </form><Button value={display} type="button" onClick={handleDisplay}><span> Hide form </span></Button></>
    : <Button value={display} type="button" onClick={handleDisplay}><span> Add new Food </span></Button>
  );
}

export default AddFoodForm;
