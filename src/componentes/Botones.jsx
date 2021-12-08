import React from 'react';
import { Container, Button, ButtonGroup } from 'react-bootstrap';

export default function Principal() {

    const boton1={
        position: 'absolute',
        width: '290px',
        height: '125px',
        left: '118px',
        top: '1056px',

        background: '#2A98C7',
        'border-radius': '25px'
    },

    const boton2={
        position: 'absolute',
        width: '290px',
        height: '125px',
        left: '575px',
        top: '1056px',

        background: '#2A98C7',
        'border-radius': '25px'
    },

    const boton3={
        position: 'absolute',
        width: '290px',
        height: '125px',
        left: '1032px',
        top: '1056px',

        background: '#2A98C7',
        'border-radius': '25px'
    },

    const p = {
        position: 'absolute',
        width: '206px',
        height: '42px',
        left: '160px',
        top: '1095px',
        
        'font-family': 'Roboto',
        'font-style': 'normal',
        'font-weight': 'bold',
        'font-size': '36px',
        'line-height': '42px',
        'letter-spacing': '-0.025em',
        
        color: '#FFFFFF'
    }

return (
    <>
        <Button style={boton1}>
            <p style={p}>Consorcios</p>
        </Button> {' '}
        <Button style={boton2}>
            <p style={p}>Peajes</p>
        </Button> {' '}
        <Button style={boton3}>
            <p style={p}>Usuarios</p>
        </Button> {' '}
    </>
)

}