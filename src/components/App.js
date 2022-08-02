
import NavBar from './NavBar';
import PlantContainer from './PlantContainer';
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Login from './Login';


function App() {
  return (
    <div>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/plantcontainer" element={<PlantContainer/>}/>
          
        </Routes>
      
    </div>
    
  );
}

export default App;
