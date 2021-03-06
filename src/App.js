import './App.css';
import React, { useState } from "react";
import { NavbarChoco } from './components/NavbarChoco';
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
import Reportes from './components/Reportes';
import PagosIn from './components/PagosIn';
import PeajesIn from './components/PeajesIn';
import UsuarioIn from './components/UsuarioIn';
import ConsorciosIn from './components/ConsorciosIn';
import PeajesAdm from './components/PeajesAdm';
import UsuariosAdm from './components/UsuariosAdm';
import ConsorciosAdm from './components/ConsorciosAdm';
import Admin from './components/Admin';
import Home from './components/Home';



function App() {
  const [logged, setLogged] = useState(false)  
 
  
  return (
    <div className="App">
      <BrowserRouter>
      
      <NavbarChoco logged={logged} setLogged={setLogged}/>

        <Routes>
          <Route path="/" element={ <Home logged={logged}  setLogged={setLogged}/> }></Route>
          <Route path="/login"  element={ <Login logged={logged}  setLogged={setLogged}/> } ></Route>
          <Route path="/registro"  element={ <Registro/> } ></Route>
          <Route path="/user"  element={ <User logged={logged}  setLogged={setLogged}/> } ></Route>
          <Route path="/Comofunciona"  element={ <Comofunciona/> } ></Route>
          <Route path="/pagos"  element={ <Pagos/> } ></Route>
          <Route path="/reportes"  element={ <Reportes/> } ></Route>
          <Route path="/pagosin"  element={ <PagosIn/> } ></Route>
          <Route path="/peajesin"  element={ <PeajesIn/> } ></Route>
          <Route path="/usuarioin"  element={ <UsuarioIn/> } ></Route>
          <Route path="/consorciosin"  element={ <ConsorciosIn/> } ></Route>
          <Route path="/peajesadm"  element={ <PeajesAdm/> } ></Route>
          <Route path="/usuarioadm"  element={ <UsuariosAdm/> } ></Route>
          <Route path="/consorciosadm"  element={ <ConsorciosAdm/> } ></Route>
          <Route path="/administrador"  element={ <Admin/> } ></Route>
        </Routes>
      
      
      </BrowserRouter>
    
    </div>
  );

}

export default App;
