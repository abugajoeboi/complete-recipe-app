import React from "react";
import Item from "./Item";
export default function IngredientsList({display,isLoading}){
    return(
        <div>
            {isLoading ?
        <p>loading...</p>: display.extendedIngredients.map((items)=> <Item items={items}/> )}
        </div>
    )
}   