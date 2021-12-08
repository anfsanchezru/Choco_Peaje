import './App.css';
import React from "react";
import Bienvenida from './componentes/Bienvenida';
import Botones from './componentes/Botones';
import Usuarios from './componentes/Usuarios';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";


function App() {
    
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Bienvenida/> }></Route>
          <Route path="/botones"  element={ <Botones/> } ></Route>
          <Route path="/usuarios"  element={ <Usuarios/> } ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
