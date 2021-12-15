import React from "react";
import { Button, Form, Col } from "react-bootstrap";
import { PagosStyled, StyledCard } from "./styled/Pagos.styled";

export default function Peajes() {
  const p1 = {
    color: "#0085BB",
  };
  const p2 = {
  };

  const lab = {
    marginRight: "10px",
  };
  const butt = {
    background: "#2A98C7",
    height: "90x",
    width: "180px",
    left: "936px",
    top: "995px",
    "border-radius": "25px",
    textAlign: "center",
  };
  const tabl = {
  };

  return (
    <PagosStyled>
      <StyledCard>
        <div>
          <Col sm="10">
            <h1 style={p1}>Crear Peaje</h1>
            <p style={p2}>
              {" "}
              Ingrese todos los datos correspondientes: (Los campos indicados
              con * son obligatorios)
            </p>
            <br />
            <div>
              <label for="text" style={lab}>
                Nombre del peaje*
              </label>
              <input type="text"></input>
              <br />
              <br />
              <br />
              <>
                <label for="text" style={lab}>
                  Consorcio al que pertenece*
                </label>
                <Form.Select size="lg">
                  <option>Consorcio 1</option>
                  <option>Consorcio 2</option>
                  <option>Consorcio 3</option>
                </Form.Select>
              </>
            </div>
            <br />
            <div>
              <label for="text" style={lab}>
                Valor del peaje según tipo de vehiculo:*
              </label>
              <table striped bordered hover style={tabl}>
                <thead>
                  <tr>
                    <th>Categoría</th>
                    <th>Valor en pesos colombianos</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Categoria I (Automoviles, camperos, camionetas,
                      microbusesconeje de llanta sencilla )
                    </td>
                    <td>
                      <input type="text"></input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Categoria II (Buses, busetas, microbuses con eje trasero
                      de doble llanta y camiones de dos ejes)
                    </td>
                    <td>
                      <input type="text"></input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Categoria III (Vehiculos de pasajeros y de carga de tres y
                      cuatro ejes )
                    </td>
                    <td>
                      <input type="text"></input>
                    </td>
                  </tr>
                  <tr>
                    <td>Categoria IV (Vehiculos de carga de cinco ejes)</td>
                    <td>
                      <input type="text"></input>
                    </td>
                  </tr>
                  <tr>
                    <td>Categoria V (Vehiculos de carga de seis ejes)</td>
                    <td>
                      <input type="text"></input>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <label for="text" style={lab}>
                Ubicacion (latitud longitud)*
              </label>
              <input type="text"></input>
            </div>
            <br />
            <br />
            <div>
              <Button style={butt}>Crear peaje</Button>
            </div>
          </Col>
        </div>
      </StyledCard>
    </PagosStyled>
  );
}
