
import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import PlantContainer from './PlantContainer';
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Login from './Login';


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
=======
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/plantcontainer" element={<PlantContainer/>}/>
          
        </Routes>

    </div>
    
  );
}

export default App;
