import React from 'react'
import 'bootstrap.min.css';
import { Container } from 'react-bootstrap';

export default function Principal() {

    const botones={
        position: 'absolute',
        width: '290px',
        height: '125px',
        left: '118px',
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
}

return (
    <div>
        <button type="button" class="btn btn-primary btn-lg" style={botones}>
            <p style={p}>Consorcios</p>
        </button>
        <button type="button" class="btn btn-primary btn-lg" style={botones}>
            <p style={p}>Peajes</p>
        </button>
        <button type="button" class="btn btn-primary btn-lg" style={botones}>
            <p style={p}>Usuarios</p>
        </button>
    </div>
)