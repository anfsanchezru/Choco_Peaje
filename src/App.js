import './App.css';
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
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
import Botones from './componentes/Botones';

function App() {
  const [logged, setLogged] = useState(false)  
 
  
  return (
    <div className="App">
      <BrowserRouter>
      <NavbarChoco logged={logged} setLogged={setLogged}/>
        <Routes>
          <Route path="/" element={ <BannerChoco logged={logged}  setLogged={setLogged}/> }></Route>
          <Route path="/login"  element={ <Login logged={logged}  setLogged={setLogged}/> } ></Route>
          <Route path="/registro"  element={ <Registro/> } ></Route>
          <Route path="/user"  element={ <User logged={logged}  setLogged={setLogged}/> } ></Route>
          <Route path="/Comofunciona"  element={ <Comofunciona/> } ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
