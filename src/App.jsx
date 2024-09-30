import { useState } from 'react';
import Api from './componenets/Api';
import FoodList from './componenets/FoodList';
import Nav from './componenets/Nav';
import Container from './componenets/Container';
import Inner from './componenets/Inner';
import FoodDetails from './componenets/FoodDetails';
function App() {
  const [food, setFood] = useState([]);
  const [foodId,setFoodid] = useState('656329') 
  return (
    <>
      <Nav/>
      <Api food={food} setFood={setFood} />

      <Container>
        <Inner>
          <FoodList 
          setFoodid ={setFoodid} 
          food={food} /> 
        </Inner>

        <Inner>
          <FoodDetails
            foodId={foodId}
          />
        </Inner>
      </Container>

    </>
  );
}

export default App;
 