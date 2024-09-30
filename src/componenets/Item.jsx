import React from "react";
import design from './Css/Item.module.css'
export default function Item({items}){
    return(
    <>
    <div className={design.main}>
        <div className={design.ingredient}>
            <center>
            <div>
                <img className={design.itemimg} src={`https://spoonacular.com/cdn/ingredients_100x100/`+ items.image } alt="" />
            </div>
            <div className={design.itemqty}>
                <strong>
                    <div>Name: {items.name}</div> <br />
                    <div>Quantity: {items.amount}{items.unit}</div>
                </strong>
            </div>   
            </center>
         </div>
    </div>
    </>
    )
}