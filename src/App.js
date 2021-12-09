import './App.css';
import React from "react";
import UsuarioIn from './components/UsuarioIn';
import Bienvenida from './components/Bienvenida';
import Botones from './components/Botones';
import PeajesIn from './components/PeajesIn';
import ConsorciosIn from './components/ConsorciosIn'
import PagosIn from './components/PagosIn'
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
          <Route path="/UsuarioIn" element={ <UsuarioIn /> }></Route>
          <Route path="/bienvenida" element={ <Bienvenida /> }></Route>
          <Route path="/botones" element={ <Botones /> }></Route>
          <Route path="/peajesIn" element={ <PeajesIn /> }></Route>
          <Route path="/consorciosIn" element={ <ConsorciosIn /> }></Route>
          <Route path="/pagosIn" element={ <PagosIn /> }></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
