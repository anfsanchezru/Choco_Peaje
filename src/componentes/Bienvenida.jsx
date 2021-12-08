import React from 'react'
import { Container } from 'react-bootstrap';

export default function Principal() {
    const imgStyle = {
        position: 'absolute',
        width: '476px',
        height: '270px',
        left: '868px',
        top: '550px'
    }

    const mainStyle = {
        background: `#F1FAFE`,
        height: `465px`,
        display: "flex",
        "flex-direction": "column",
        "align-items": "flex-start",
        "justify-content": "center"

    }

    const h1 = {
        position: 'absolute',
        width: '399px',
        height: '42px',
        left: '76px',
        top: '559px',

        "font-family": 'Roboto',
        "font-style": 'normal',
        "font-weight": 'bold',
        "font-size": '36px',
        "line-height": '42px',
        "letter-spacing": '-0.025em',

        color: '#000000'

    }

    const p = {
        position: 'absolute',
        height: '28px',
        left: '76px',
        top: '699px',

        "font-family": 'Roboto',
        "font-style": 'normal',
        "font-weight": '300',
        "font-size": '24px',
        "line-height": '28px',
        "letter-spacing": '-0.025em',

        color: '#000000'
    }


    return (
        <div>
            <Container style={mainStyle} fluid className="">
                <Container style={mainStyle} className="container-sm">      
                <h1 style={h1}>Bienvenido Administrador</h1>
                <p style={p}>Por favor seleccione la sección que desea visualizar</p>
                </Container>
                <img style={imgStyle} src="/img/Group8Carro.jpg" alt="car" height="300px"/>
            </Container>
        </div>
    )
}
