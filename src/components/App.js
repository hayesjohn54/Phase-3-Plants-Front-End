
import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import PlantContainer from './PlantContainer';
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import NewPlantForm from './NewPlantForm';

import UserContainer from './UserContainer';
import UserForm from './UserForm';


function App() {
 const [plants, setPlants]=useState([])


  useEffect(()=>{
    fetch('http://localhost:9292/plants')
      .then(res=>res.json())
      .then(plantsData => setPlants(plantsData))
  },[])
  console.log(plants)

  const [users, setUsers]=useState([])


  useEffect(()=>{
    fetch('http://localhost:9292/users')
      .then(res=>res.json())
      .then(usersData => setUsers(usersData))
  },[])
  console.log(users)


  function handleUpdatePlants(updatedPlant){
    const updatePlant = plants.map((plant)=> plant.id === plants.id ? updatedPlant : plant);
    setPlants(updatePlant)
  }

  return (
    <div>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/plantcontainer" element={<PlantContainer plants={plants} onUpdatePlant={handleUpdatePlants}/>}/>
          
          <Route path="//NewPlantform" element={<NewPlantForm/>}/>
          <Route path="/usercontainer" element={<UserContainer users={users}/>}/>
          <Route path="/userForm" element={<UserForm setUsers={setUsers}/>}/>
        </Routes>

    </div>
    
  );
}

export default App;
