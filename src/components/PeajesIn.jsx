import React from "react";
import { Container, Button, label, input,Dropdown, Form  } from 'react-bootstrap';

export default function Peajes() {
    // const cont ={
    //     'background-color':' #F1FAFE',
    //     'padding-left':' 100px',
    //     'position':'absolute', 
    //     width: '2440px',
    //     height: '1000px', 
    //     left: '0px', 
    //     top: '380px'       
    // }
    const cont1 ={
        'background-color': '#F1FAFE',
        'padding-left': '100px',
        'position':'absolute', 
        width: '1440px',
        height: '465px', 
        left: '0px',
        top: '380px'
    }

    const p1 ={
        color: 'rgb(0, 0, 0)',
        height: '50px', 
        'align-items':'center',
        left: '630px',
        top: '451px',
        'border-radius': 'nullpx',
        'font-family': 'Roboto',
       'font-size':' 36px',
       'font-style': 'normal',
       'font-weight': '700',
       'line-height': '42px',
       'letter-spacing': '-0.025em',
       'text-align': 'center',

    }
    const p2 ={
        color: '#000',
        height: '28px',
        left: '100px',
        top: '699px',
        'border-radius':' nullpx',
        'font-family': 'Roboto',
        'font-size': '24px', 
        'font-style': 'normal', 
        'font-weight': '300',
        'line-height': '28px', 
        'letter-spacing': '-0.025em',
        'text-align': 'center'
    }

    const lab ={
        'font-family':'Roboto',
        'font-size': '30px',
        'font-style': 'normal',
        'padding-left': '200px',
        'font-size': '24px',
        'font-style': 'normal',
        'font-weight': '300',
        'line-height': '28px',
        'letter-spacing': '-0.025em',
        'text-align':'left'
    }
    const butt ={
            
        background: '#2A98C7',
        height: '90x',
        width: '180px', 
        left: '936px',
        top: '995px',
        'border-radius': '25px',
    
        'font-family': 'Roboto',
        'font-size': '27px',
        'font-style': 'normal',
        'font-weight': '700',
        'line-height': '42px',
        'letter-spacing': '-0.025em',
        'text-align':'center'
    }
    const tabl ={
        'font-family':'Roboto',
        'font-size': '30px',
        'font-style': 'normal',
        'padding-left': '200px',
        'font-size': '24px',
        'font-style': 'normal',
        'font-weight': '300',
        'line-height': '28px',
        'letter-spacing': '-0.025em',
        'text-align':'center'
    
    }

    return (
        <div>
           
            {/* <Container  fluid className=""></Container>
            <Container fluid className="row"></Container>
            <Container style={cont1} fluid className="col"></Container> */}
            <p style={p1}> Crear Peaje</p>
            <p style={p2}> Ingrese todos los datos correspondientes: (Los campos indicados con * son obligatorios)</p>
            <div>
            <label for="text" style={lab}>Nombre del peaje*</label>
            <input type="text"></input> 
             <br />
             <br />
             <br />
            <>
            <label for="text" style={lab}>Consorcio al que pertenece*</label> 
            <Form.Select size="lg">
                <option>Consorcio 1</option>
                <option>Consorcio 2</option>
                <option>Consorcio 3</option>
            </Form.Select>
            </>
            </div>
            <div>
            <label for="text" style={lab}>Valor del peaje según tipo de vehiculo:*</label>
            <table striped bordered hover style={tabl}>
            <thead>
                <tr>
                <th>Categoría</th>
                <th>Valor en pesos colombianos</th>
                </tr>
                </thead>
            <tbody>
                <tr>
                <td>Categoria I (Automoviles, camperos, camionetas, microbusesconeje de llanta sencilla )</td>
                <td><input type="text"></input></td>
                </tr>
                <tr>
                <td>Categoria II (Buses, busetas, microbuses con eje trasero de doble llanta y camiones de dos ejes)</td>
                <td><input type="text"></input></td>
                </tr>
                <tr>
                <td>Categoria III (Vehiculos de pasajeros y de carga de tres y cuatro ejes )</td>
                <td><input type="text"></input></td>
                </tr>
                <tr>
                <td>Categoria IV (Vehiculos de carga de cinco ejes)</td>
                <td><input type="text"></input></td>
                </tr>
                <tr>
                <td>Categoria V (Vehiculos de carga de seis ejes)</td>
                <td><input type="text"></input></td>
                </tr>
            </tbody>
            </table>
            </div>
            <div>
            <label for="text" style={lab}>Ubicacion  (latitud longitud)*</label>
            <input type="text"></input>
            </div>
            <br />
            <br />
            <div>
            <Button style={butt}>Crear peaje</Button>
            </div>
        </div>
               
              

        )
    } 
      
        
        
        
        
           


