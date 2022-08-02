
import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import PlantContainer from './PlantContainer'

function App() {
 const [plants, setPlants]=useState([])

  useEffect(()=>{
    fetch('http://localhost:9292/plants')
      .then(res=>res.json())
      .then(plantsData => setPlants(plantsData))
  },[])
  console.log(plants)
  return (
    <div>
      <NavBar/>
      <PlantContainer plants={plants}/>
    </div>
    
  );
}

export default App;
