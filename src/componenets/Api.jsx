import React, { useEffect, useState } from 'react';
import design from './Css/Api.module.css'
const ENDPOINT = 'https://api.spoonacular.com/recipes/complexSearch';
const KEY = '45ef36b2372f49ba841b9195f5adff4a'; 

export default function Api({ food, setFood }) {
  const [search, setSearch] = useState('');
     // useEffect: this is a hook effect that is used to synchronize a component with external system.
    // sythax of useEffect
    // useEffect(()=>{},[])

    // useEffect(()=>{
    //     function demo(){
    //         console.log('My demo')
    //     }
    //     demo()
    // },[search])  

  useEffect(() => {
    async function foodRecipe() {
      const fetching = await fetch(`${ENDPOINT}?query=${search}&apiKey=${KEY}`);
      const data = await fetching.json();
      console.log(data.results);
      setFood(data.results);
    }
    foodRecipe();
  }, [search]);

  return (
    <nav>
      <div className={design.searchdiv}>
        <input
        className={design.search}
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="search"
          type="text"
        />
      </div>
    </nav>
  );
}
