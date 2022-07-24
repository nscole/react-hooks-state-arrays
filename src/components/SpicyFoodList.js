import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

// ORIGINAL FUNCTION
/*function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    console.log(newFood);
  }

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{}</ul>
    </div>
  );
}*/

// Adding Elements to an Array
function SpicyFoodList() {
const [foods, setFoods] = useState(spicyFoods);
const foodList = foods.map((food) => (
  <li key={food.id}>
    {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
  </li>
));

function handleAddFood() {
  const newFood = getNewSpicyFood();
  const newFoodArray = [...foods, newFood];
  setFoods(newFoodArray);
} 

return (
  <div>
    <button onClick={handleAddFood}>Add New Food</button>
    <ul>{foodList}</ul>
  </div>
); };





export default SpicyFoodList;
