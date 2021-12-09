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
        // width: '1440px',
        // height: '465px', 
        // left: '0px',
        // top: '380px'
    }
    const cont2 ={
       
    'position': 'center',
    'width': 'maximum',
    'height': '100px',
    // 'left': '800px',
    'top': '659px',
    // 'padding-left': '200px',
    'text-aling':'center',
    
    'background': 'linear-gradient(0deg, rgba(240, 91, 113, 0.35), rgba(240, 91, 113, 0.35))'
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
    
    return (
        <div>
            <Container  fluid className=""></Container>
            <Container fluid className="row"></Container>
            <Container style={cont1} fluid className="col"></Container>
            <div>
            <p style={p1}> Pagos</p>
            <p style={p2}> Ingrese todos los datos correspondientes: (Los campos indicados con * son obligatorios)</p>
            </div>

            <div>
            <label for="text" style={lab}>Placas del Vehículo *</label>
            <input type="text"></input> 
                        
            <>
            <label for="text" style={lab}>Seleccione método de pago*</label> 
            <Form.Select size="lg">
                <option>Efectivo</option>
                <option>Tarjeta</option>
                </Form.Select>
            </>
            <br />
            <br />
            <Button style={butt}>Consultar</Button>
            </div>    
            <br />
            <div>
            <label for="text" style={lab}>Verifique que los datos autogenerados continuación sean correctos:</label>
            <Container fluid className="" style={cont2}> 
            <label for="text" style={lab}>Usuario</label>
            <input type="text"></input> 
            <label for="text" style={lab}>Categoría del Vehículo</label>
            <input type="text"></input> 
            <br />
            <label for="text" style={lab}>Valor a pagar</label>
            <input type="text"></input> 
            </Container>
            <br />
            <Button style={butt}>Pagar</Button>
            </div>
            <br />
            <p style={p1}> Recargas</p>
            <p style={p2}> Ingrese todos los datos correspondientes: (Los campos indicados con * son obligatorios)</p>
            
            <label for="text" style={lab}>Usuario*</label>
            <input type="text"></input> 
            <label for="text" style={lab}>Valor a recargar*</label>
            <input type="text"></input>
             <br />
            
            
            <label for="text" style={lab}>Seleccione método de pago*</label> 
            <Form.Select size="lg">
                <option>Efectivo</option>
                <option>Tarjeta</option>
                </Form.Select>
            <br />
            <br />   
            <Button style={butt}>Recargar</Button>
           
        </div>
               
              

        )
    } 
      
        
        
        
        
           


