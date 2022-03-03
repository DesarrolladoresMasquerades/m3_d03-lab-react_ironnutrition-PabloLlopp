import Searching from './components/Searching';
import { useState } from 'react';
import './App.css';
import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';
import foods from "./foods.json";

function App() {

  const [foodList, setFoodList] = useState(foods)
  const [foodData, setFoodData] = useState(foods)

  function addFoodToList(food) {
    setFoodList([...foodList, ...food])
    setFoodData([...foodList, ...food])
  }

  function searchFood(search) {
    let searched = foodData.filter(food => (
      food.name.toLowerCase().includes(search.toLowerCase())
    ))
    setFoodList(searched);
  }

  function deleteFood(foodToDelete) {
    const afterDeleted = foodData.filter(food => food!==foodToDelete)
    setFoodList(afterDeleted)
    setFoodData(afterDeleted)
  }

  return (
    <div className="App">

    <h1>IronNutrition</h1>

    <Searching foodSearch={searchFood}/>

    <AddFoodForm addFood={addFoodToList}/>

      <div className='wrap'>
        
        {foodList.map((food)=> (
          <div key={food.name}>
            <FoodBox food={food} deleteButton={deleteFood}/>
          </div>
        ))}
        </div>

    </div>
  );
}

export default App;
