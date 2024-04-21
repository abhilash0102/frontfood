
import './App.css';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Dash2 from './components/Dash2';
import Navbar2 from './components/Navbar2';
import Home5 from './components/Home5';
import Home6 from './components/Home6';
import Cards from './components/Cards';
import Image from './components/Image';
import DataView from './components/DataView';




function App() {
  return (
    <div className="App">
      <DataView/>
      {/* <Image/> */}
      {/* <Dash2/> */}
      {/* <Signup/> */}
      {/* <Dashboard/> */}
      <Routes>
      <Route path='/' element={<><Dash2/><Home6/></>}/> 
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Home5' element={<><Navbar2/><Home5/></>}/>
      <Route path='/Cards' element={<><Navbar2/><Cards/></>}/>
      <Route path='/Signup' element={<Login/>}/>
      
    </Routes>
    {/* <Cards/> */}
    
    {/* <Navbar2/> */}
   {/* <Home5/> */}
     
    {/* <Login/> */}
    </div>
  );
}

export default App;
