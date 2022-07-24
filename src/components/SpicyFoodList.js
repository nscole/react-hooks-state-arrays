import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

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
/*function SpicyFoodList() {
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
); };*/


// Removing from an Arry
/*function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const foodList = foods.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  )); 
  function handleLiClick(id) {
    const newFoodArray = foods.filter((food) => food.id !== id);
    setFoods(newFoodArray);
    // console.log("removed");
  }; 

  return (
    <div>
      <button onClick={handleLiClick}>Remove Food</button>
      <ul>{foodList}</ul>
    </div>
  ); };*/

  
// Updating Elements in an array
/*function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const foodList = foods.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  )); 
  function handleLiClick(id) {
    const newFoodArray = foods.map((food) => {
      if (food.id === id) {
        return {
          ...food,
          heatLevel: food.heatLevel + 1,
        };
      } else {
        return food;
      }
    });
    setFoods(newFoodArray);
  } 

  return (
    <div>
      <button onClick={handleLiClick}>Update Food</button>
      <ul>{foodList}</ul>
    </div>
  ); };*/


// Working With Multiple State Variables
/*function SpicyFoodList() {
const [foods, setFoods] = useState(spicyFoods);
const [filterBy, setFilterBy] = useState("All");

const foodsToDisplay = foods.filter((food) => {
  if (filterBy === "All") {
    return true;
  } else {
    return food.cuisine === filterBy;
  }
}); 
function handleLiClick(id){
function handleFilterChange(event) {
  setFilterBy(event.target.value);
}

<select name="filter" onChange={handleFilterChange}>
  <option value="All">All</option>
  <option value="American">American</option>
  <option value="Sichuan">Sichuan</option>
  <option value="Thai">Thai</option>
  <option value="Mexican">Mexican</option>
</select>; 

   const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  )); 

  return (
    <div>
      <button onClick={handleLiClick}>Update Food</button>
      <ul>{foodList}</ul>
    </div>
  );};};*/

  function SpicyFoodList() {
    const [foods, setFoods] = useState(spicyFoods);
  
    function handleAddFood() {
      const newFood = getNewRandomSpicyFood();
      console.log(newFood);
    }
  
    const foodList = foods.map((food) => (
      <li key={food.id}>
        {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
      </li>
    ));
  
    return (
      <div>
        <button onClick={handleAddFood}>Add New Food</button>
        <ul>{foodList}</ul>
      </div>
    );
  }

export default SpicyFoodList;
