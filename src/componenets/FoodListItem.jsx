import React from "react";
import design from './Css/Nav.module.css'
import designs from './Css/FoodListItem.module.css'
export default function FoodListItem({eat,setFoodid}){
    return(
      
    <div className={design.card}>
        <center>
            <h1 className={design.h1}>{eat.title}</h1>
        <img className={design.Foodimage} src={eat.image} alt={eat.title} />
        <br /> <br />
        <button onClick={()=>{
            console.log(eat.id,eat.title)
            setFoodid(eat.id)
        }} 
        className={designs.button}>View Recipe</button>
        </center>
    </div>
        
    )
}  