import React from 'react';
import 'bootstrap.min.css';
import { Container, Table, Button } from 'react-bootstrap';

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
        position: 'absolute',
        width: '422.62px',
        height: '42px',
        left: '127px',
        top: '710px',

        background: '#F05B71',
        border: '1px solid #000000',
        'box-sizing': 'border-box',
        'box-shadow': '0px 4px 4px rgba(0, 0, 0, 0.25)'
    }

    const titulosSeccion2 = {
        position: 'absolute',
        width: '422.62px',
        height: '56px',
        left: '951.58px',
        top: '714px',

        background: '#D6A25E',
        border: '1px solid #000000',
        'box-sizing': 'border-box',
        'box-shadow': '0px 4px 4px rgba(0, 0, 0, 0.25)'
    }

    const titulosSeccion3 = {
        position: 'absolute',
        width: '422.62px',
        height: '42px',
        left: '525px',
        top: '999px',

        background: '#2A98C7',
        border: '1px solid #000000',
        'box-sizing': 'border-box',
        'box-shadow': '0px 4px 4px rgba(0, 0, 0, 0.25)'
    }


return (
    <div class="btn-group">
        <Button class="btn btn-secondary btn-lg" type="button" style={barraBusqueda}>
            Escriba el usuario que quiere buscar...
        </Button>
        <Button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" style="backgroundcolor:#2E11E3">
            <span class="visually-hidden">Toggle Dropdown</span>
        </Button>
        <ul class="dropdown-menu">
            ...
        </ul>
    </div>,
  <Table striped bordered hover >
        <thead style={titulosSeccion1}>
        <tr>
            <th scope="col"> </th>
            <th scope="col">Información del usuario</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">Nombre: </th>
            <input type="text" class="form-control" id="nombreInput" aria-describedby="nameHelp"></input>
        </tr>
        <tr>
            <th scope="row">Consorcios: </th>
            <div class="btn-group">
                <Button class="btn btn-secondary btn-lg" type="button" style={barraBusqueda}>
                    Consorcio
                </Button>
                <Button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" style="backgroundcolor:#2E11E3">
                    <span class="visually-hidden">Toggle Dropdown</span>
                </Button>
                <ul class="dropdown-menu">
                    ...
                </ul>
            </div>
        </tr>
        <tr>
            <th scope="row">Peajes: </th>
            <div class="btn-group">
                <Button class="btn btn-secondary btn-lg" type="button" style={barraBusqueda}>
                    Peaje
                </Button>
                <Button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" style="backgroundcolor:#2E11E3">
                    <span class="visually-hidden">Toggle Dropdown</span>
                </Button>
                <ul class="dropdown-menu">
                    ...
                </ul>
            </div>
        </tr>
        </tbody>
  </Table>,

    <Table>
        <thead style={titulosSeccion2}>
        <tr>
            <th scope="col"> </th>
            <th scope="col">Cobros recogidos por medio de pago</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">Efectivo: </th>
            <input type="text" class="form-control" id="efectivoInput" aria-describedby="efectivoHelp"></input>
        </tr>
        <tr>
            <th scope="row">Tarjeta: </th>
            <input type="text" class="form-control" id="tarjetaInput" aria-describedby="tarjetaHelp"></input>
        </tr>
        </tbody>
    </Table>,

  <Table>
        <th scope="col"> </th>
        <thead style={titulosSeccion3}>
        <tr>
            <th scope="col"> </th>
            <th scope="col">Recargas realizadas</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">Recargas Realizadas </th>
            <input type="text" class="form-control" id="recargasInput" aria-describedby="recargasHelp"></input>
        </tr>
        </tbody>
  </Table>

)
}