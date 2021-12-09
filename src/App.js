import './App.css';
import React, { useState } from "react";
import { NavbarChoco } from './components/NavbarChoco';
import BannerChoco from './components/BannerChoco';
import Registro from './components/Registro';
import User from './components/User';
import Comofunciona from './components/Comofunciona';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Login from './components/Login';
import Pagos from './components/Pagos';
import { Container1 } from './components/styled/Container.styled';
import Reportes from './components/Reportes';





function App() {
  const [logged, setLogged] = useState(false)  
 
  
  return (
    <div className="App">
      <BrowserRouter>
      
      <NavbarChoco logged={logged} setLogged={setLogged}/>
      
      <BannerChoco/>
      <Container1/>
        <Routes>
          <Route path="/" element={ <BannerChoco logged={logged}  setLogged={setLogged}/> }></Route>
          <Route path="/login"  element={ <Login logged={logged}  setLogged={setLogged}/> } ></Route>
          <Route path="/registro"  element={ <Registro/> } ></Route>
          <Route path="/user"  element={ <User logged={logged}  setLogged={setLogged}/> } ></Route>
          <Route path="/Comofunciona"  element={ <Comofunciona/> } ></Route>
          <Route path="/pagos"  element={ <Pagos/> } ></Route>
          <Route path="/reportes"  element={ <Reportes/> } ></Route>
        </Routes>
      
      
      </BrowserRouter>
    
    </div>
  );

}

export default App;