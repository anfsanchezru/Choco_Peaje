import React from 'react';
import { Button, Card, Table,FloatingLabel,Form, InputGroup, FormControl,DropdownButton,Dropdown } from 'react-bootstrap';

export default function Consorcios() {

    // const barraBusqueda = {
    //     position: 'absolute',
    //     width: '869px',
    //     height: '52px',
    //     left: '219px',
    //     top: '552px',

    //     background: '#FDFDFD',
    //     border: '1px solid #000000',
    //     'box-sizing': 'border-box'
    // }

    const titulosSeccion1 = {
        background: '#2A98C7',
        border: '1px solid #000000',
        'box-sizing': 'border-box',
        'box-shadow': '0px 4px 4px rgba(0, 0, 0, 0.25)'
    }

    const titulosSeccion2 = {
        background: '#F05B71',
        border: '1px solid #000000',
        'box-sizing': 'border-box',
        'box-shadow': '#F05B71'
    }

    const Seccion1 = {
        position: 'absolute',
        width: '761px',
        height: '487px',
        left: '30px',
        top: '500px',
    }

    const Seccion2 = {
        position: 'absolute',
        width: '390px',
        height: '487px',
        left: '856px',
        top: '500px',
    }

    const boton1={
        position: 'absolute',
        width: '246px',
        height: '59px',
        left: '80px',
        top: '380px',

        background: '#D6A25E',
        'border-radius': '25px'
    }

    const boton2={
        position: 'absolute',
        width: '246px',
        height: '59px',
        left: '417px',
        top: '380px',

        background: '#F05B71',
        'border-radius': '25px'
    }

    const boton3={
        position: 'absolute',
        width: '246px',
        height: '59px',
        left: '77px',
        top: '380px',

        background: '#2A98C7',
        'border-radius': '25px'
    }

    const stt={
        height:'100px'
    }

return (
        
    <div className="ConsorcioAdm">
        <InputGroup className="mb-3">
                <FormControl 
                aria-label="Text input with dropdown button"
                placeholder="Consorcio que desea buscar" />
                <DropdownButton
                variant="outline-secondary"
                title="Buscar"
                id="input-group-dropdown-2"
                align="end"
                >
                <Dropdown.Item href="#">...</Dropdown.Item>
                </DropdownButton>
            </InputGroup>
        
        <Card style={Seccion1}>
            <Card.Header style={titulosSeccion1}>Información del Consorcio</Card.Header>
            <Card.Body>
                <Table>
                    <tbody>
                    <tr>
                        <th scope="row">Creador: </th>
                        <FloatingLabel controlId="floatingTextarea" label="" className="mb-3">
                            <Form.Control as="textarea" placeholder="Ingrese el nombre del creador del Consorcio" />
                        </FloatingLabel>
                    </tr>
                    <tr>
                        <th scope="row">Descripción: </th>
                        <FloatingLabel controlId="floatingTextarea2" label="">
                            <Form.Control
                                as="textarea"
                                placeholder="Escriba una breve descripción del Consorcio"
                                style={stt} 
                            />
                        </FloatingLabel>
                    </tr>
                    <tr>
                        <th scope="row">Peajes: </th>
                        <Form.Select size="lg">
                            <option>Peaje 1</option>
                            <option>Peaje 2</option>
                            <option>Peaje 3</option>
                            <option>Peaje 4</option>
                        </Form.Select>
                    </tr>
                    </tbody>
                </Table>

                <Button style={boton1}>Editar</Button> {' '}
                <Button style={boton2}>Enviar</Button> {' '}
            
            </Card.Body>
        </Card>

        <Card style={ Seccion2 }>
            <Card.Header style={titulosSeccion2}>Peajes a cargo</Card.Header>
            <Card.Body>
            <Table>
                <tbody>
                <tr>
                    <th scope="row">Nombre: </th>
                    <Form.Select size="lg">
                            <option>Peaje 1</option>
                            <option>Peaje 2</option>
                            <option>Peaje 3</option>
                            <option>Peaje 4</option>
                    </Form.Select>
                </tr>
                <tr>
                    <th scope="row">Ubicación: </th>
                </tr>
                <tr>
                    <th scope="row">Longitud </th>
                    <FloatingLabel controlId="floatingTextarea2" label="">
                        <Form.Control
                            as="textarea"
                        />
                    </FloatingLabel>
                </tr>
                <tr>
                    <th scope="row">Latitud </th>
                    <FloatingLabel controlId="floatingTextarea2" label="">
                        <Form.Control
                            as="textarea"
                        />
                    </FloatingLabel>
                </tr>
                </tbody>
            </Table>
            <Button variant="primary" style={boton3}>Ir a información del peaje</Button>
            </Card.Body>
        </Card>
    </div>

)
}