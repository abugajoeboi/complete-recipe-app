import React,{useState,useEffect} from "react";
import design from './Css/FoodDetails.module.css'
import IngredientsList from "./IngredientsList";
import pic from '../media/glogo.png'
export default function FoodDetails({ foodId }){
  const [display,setDisplay]=useState({})
  const [isLoading,setisLoading]=useState(true)
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`
    const KEY = '45ef36b2372f49ba841b9195f5adff4a'  
    
  useEffect(() => {
    async function fetchFood() {
      const fetching = await fetch(`${URL}?apiKey=${KEY}`);
      const data = await fetching.json();
      console.log(data);
      setDisplay(data)
      setisLoading(false)
    //   setFoodid(data.results);
    } 
    fetchFood();
  }, [foodId]);
  
    return(
        <div>

          <div className={design.infocard}>

            <h1>{display.title}</h1>
            <img className={design.infoImg} src={display.image} alt='picture not available 😥' /> <br />
            <strong>
            <div className={design.span}>
              <span>⏱<strong>{display.readyInMinutes} Minutes</strong></span> 

              <span>  👨‍👨‍👧‍👧Serves: <strong>{display.servings}</strong></span> 

               <span><strong>{display.vegetarian?'🥕Vegetarian':'🍗Non-Vegetarian'}</strong></span> 

               <span><strong>{display.vegan?'Vegan':''}</strong></span>
            </div>

            <div>
              💲<span>{ display.pricePerServing/100 } Per-serving</span>
            </div>
            </strong>

            <h2>INGREDIENTS</h2>
              <IngredientsList
              display={display}
              isLoading={isLoading}
              />

             <h2>INSTRUCTIONS</h2>
            <div>
              <ol>
              {isLoading ? <p>Loading..</p>:
              display.analyzedInstructions[0].steps.map((items)=><li>{items.step}</li>)}
              </ol>
            </div>
            
          </div>
          
            
        </div>
    )
} 