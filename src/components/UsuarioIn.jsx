import React from "react";
import { Container, Button, ButtonGroup, Col } from 'react-bootstrap';
import { PagosStyled, StyledCard } from "./styled/Pagos.styled";

export default function UsuarioIn() {
    const cont = {
        background:'F1FAFE'}
    
    const cont2 ={
        background: '#F1FAFE',
        position:'absolute',
        width: '1440px',
        height: '465px',
        left: '0px',
        top: '380px',
        padding: '100px'}
    
    const p1={
        color: 'rgb(0, 0, 0)',
        height: '42px',
        width: '415px', 
        left: '76px',
        top: '359px',
                
        'font-family': 'Roboto',
        'font-size': '36px',
        'font-style': 'normal',
        'font-weight': '700',
        'line-height': '42px',
        'letter-spacing': '-0.025em',
        'text-align':' left'
}
    
        const p2={
            color: '#000',
            height: '28px',
            width: '526px',
            left: '279px',
            top: '699px',
                    
            'font-family': 'Roboto',
            'font-size': '24px',
            'font-style': 'normal',
            'font-weight': '300',
            'line-height': '28px',
            'letter-spacing': '-0.025em',
            'text-align':' left'
    }
        const butt ={
            
            background: '#2A98C7',
            height: '90x',
            width: '180px', 
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
        <PagosStyled>
        <StyledCard>
        <div>
            <Col sm="10">
            <p style={p1}>Bienvenido Usuario interno</p>
            <p style={p2}> Por favor seleccione el trámite que desea realizar</p>
            
            <ButtonGroup className="mb-2">
            <Button style={butt}>Consorcio</Button>
            <Button style={butt}>Peajes</Button>
            <Button style={butt}>Pago</Button>
            </ButtonGroup>
            
            {/* <img style={imgStyle} src=".\public\img\car.jpg" alt="car" height="300px"/> */}
            </Col>
        </div>
        
        </StyledCard>       
        </PagosStyled>      
        )
}
