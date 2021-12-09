import './App.css';
import React, { useState } from "react";
import { NavbarChoco } from './components/NavbarChoco';
import BannerChoco from './components/BannerChoco';
import Bienvenida from './components/Bienvenida';
import Usuarios from './components/Usuarios';
import Botones from './components/Botones';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Consorcios from './components/Consorcios';
import Peajes from './components/Peajes';




function App() {
  const [logged, setLogged] = useState(false)  
 
  
  return (
    <div className="App">
      <BrowserRouter>
      
      <NavbarChoco logged={logged} setLogged={setLogged}/>
      
      <BannerChoco/>
        <Routes>
          <Route path="/" element={ <BannerChoco /> }></Route>
          <Route path="/boton"  element={ <Botones /> } ></Route>
          <Route path="/usuario"  element={ <Usuarios/> } ></Route>
          <Route path="/consorcio"  element={ <Consorcios/> } ></Route>
          <Route path="/peaje"  element={ <Peajes/> } ></Route>
        </Routes>
      
      
      </BrowserRouter>
    
    </div>
  );

}

export default App;
