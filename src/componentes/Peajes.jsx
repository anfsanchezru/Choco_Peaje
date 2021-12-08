import React from 'react';
import 'bootstrap.min.css';
import { Button, ButtonGroup, Card, Table,FloatingLabel,Form } from 'react-bootstrap';

export default function Principal() {
    
    const barraBusqueda = {
        position: 'absolute',
        width: '869px',
        height: '52px',
        left: '219px',
        top: '552px',

        background: '#FDFDFD',
        border: '1px solid #000000',
        'box-sizing': 'border-box'
    },

    const titulosSeccion1 = {
        position: 'fixed',
        width: '766px',
        height: '57px',
        left: '219px',
        top: '699px',

        background: '#2A98C7',
        border: '1px solid #000000',
        'box-sizing': 'border-box',
        'box-shadow': '0px 4px 4px rgba(0, 0, 0, 0.25)'
    },

    const Seccion1 = {
        position: 'absolute',
        width: '767px',
        height: '564px',
        left: '219px',
        top: '700px',

        background: '#F1FAFE'
    },

    const boton1={
        position: 'absolute',
        width: '246px',
        height: '59px',
        left: '289px',
        top: '1264px',

        background: '#D6A25E',
        'border-radius': '25px'
    },

    const boton2={
        position: 'absolute',
        width: '246px',
        height: '59px',
        left: '678px',
        top: '1264px',

        background: '#F05B71',
        'border-radius': '25px'
    }

    return (
        <ButtonGroup>
            <Button class="btn btn-secondary btn-lg" type="button" style={barraBusqueda}>
                Escriba el peaje que desea buscar...
            </Button>
            <Button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" style="backgroundcolor:#2E11E3">
                <span class="visually-hidden">Toggle Dropdown</span>
            </Button>
            <ul class="dropdown-menu">
                ...
            </ul>
        </ButtonGroup>,

        <Card style={ Seccion1 }>
        <Card.Header style={titulosSeccion1}>Información del Consorcio</Card.Header>
        <Card.Body>
            <Table>
                <tbody>
                <tr>
                    <th scope="row">Nombre: </th>
                    <FloatingLabel controlId="floatingTextarea" label="" className="mb-3">
                        <Form.Control as="textarea" placeholder="Ingrese el nombre del creador del Consorcio" />
                    </FloatingLabel>
                </tr>
                <tr>
                    <th scope="row">Ubicación: </th>
                </tr>
                <tr>
                    <th scope="row">Longitud: </th>
                    <FloatingLabel controlId="floatingTextarea2" label="">
                        <Form.Control
                            as="textarea"
                            placeholder="Ingrese la coordenada de longitud donde se encuentra el peaje"
                        />
                    </FloatingLabel>
                    <th scope="row">Latitud: </th>
                    <FloatingLabel controlId="floatingTextarea2" label="">
                        <Form.Control
                            as="textarea"
                            placeholder="Ingrese la coordenada de latitud donde se encuentra el peaje"
                        />
                    </FloatingLabel>
                </tr>
                </tbody>
            </Table>

            <Button style={boton1}>Editar</Button> {' '}
            <Button style={boton2}>Eliminar</Button> {' '}

        </Card.Body>
        </Card>

    )
}