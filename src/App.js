import './App.css';
import React from "react";
import UsuarioIn from './components/UsuarioIn';
import Bienvenida from './components/Bienvenida';
import Botones from './components/Botones';
import Peajes from './components/Peajes';
import Consorcios from './components/Consorcios'
import Pagos from './components/Pagos'
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
          <Route path="/" element={ <UsuarioIn /> }></Route>
          <Route path="/bienvenida" element={ <Bienvenida /> }></Route>
          <Route path="/botones" element={ <Botones /> }></Route>
          <Route path="/peajes" element={ <Peajes /> }></Route>
          <Route path="/consorcios" element={ <Consorcios /> }></Route>
          <Route path="/pagos" element={ <Pagos /> }></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
