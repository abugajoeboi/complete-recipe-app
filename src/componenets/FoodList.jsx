import React from 'react';
import FoodListItem from './FoodListItem';
export default function FoodList({ food,setFoodid }) {
  return (
    <div>
      {food.map((eat) => (
        <FoodListItem
            eat ={eat}
            key = {eat.id} 
            setFoodid={setFoodid} 
        /> 
      ))}
      
    </div>
  );
}


  