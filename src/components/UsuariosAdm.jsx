import React, { useRef } from "react";
import {
  InputGroup,
  Button,
  Card,
  Table,
  Form,
  FormControl,
  Col,
  Row,
} from "react-bootstrap";
import { PagosStyled, StyledCard } from "./styled/Pagos.styled";

export default function Usuarios() {
  const h1 = { color: "#0085BB" };

  const textRight = {
    alignSelf: "flex-end",
  };

  const h2 = {
    fontSize: "20px",
    textAlign: "center",
  };

  const h3 = {
    color: "black",
    fontSize: "20px",
    alignSelf: "center",
  };

  const background = {
    backgroundImage: "linear-gradient(90deg, #2A98C7 0%, #ACCDE5 100%",
    flexGrow: "1",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    aligntItems: "center",
    justifyContent: "center",
  };

  const isFlex = {
    display: "flex",
  };

  const isFlex2 = {
    display: "flex",
    justifyContent: "flex-end",
  };

  const boton1 = {
    height: "90x",
    width: "40%",
    maxWidth: "300px",
    borderRadius: "25px",
    alignSelf: "center",
    justifySelf: "center",
    fontSize: "18px",
  };

  const boton2 = {
    height: "90x",
    width: "40%",
    borderRadius: "25px",
    alignSelf: "center",
    justifySelf: "center",
    fontSize: "18px",
  };

  const isFlexButton = {
    display: "flex",
    justifyContent: "space-around",
  };

  const nombre = useRef();
  const nombreUsuario = useRef();
  const apellido = useRef();
  const documento = useRef();
  const email = useRef();

  const busca = () => {
    console.log(nombre.current.value);
  };

  const habilitarEdicion = () => {
    if (nombreUsuario.current.disabled) {
      nombreUsuario.current.disabled = false;
      apellido.current.disabled = false;
      documento.current.disabled = false;
      email.current.disabled = false;
    } else {
      nombreUsuario.current.disabled = true;
      apellido.current.disabled = true;
      documento.current.disabled = true;
      email.current.disabled = true;
    }
  };
  const editarUsuario = () => {};
  const eliminarUsuario = () => {};

  return (
    <div style={background}>
      <PagosStyled>
        <StyledCard>
          <div style={{ textAlign: "left" }}>
            <h1 style={h1}>Consulta de usuarios</h1>
            <br />
            <InputGroup className="mb-3">
              <FormControl
                aria-label="Text input"
                placeholder="Email del usuario a consultar"
                ref={nombre}
              />
              <Button
                variant="outline-secondary"
                title="Buscar"
                id="input-btn-2"
                align="end"
                onClick={busca}
              >
                Buscar
              </Button>
            </InputGroup>

            <Card>
              <Card.Header class="text-centered  text-justify">
                <h2 style={h2}>Información de Usuario</h2>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col sm={10} style={isFlex}>
                    <h3 style={h3}>Descripción</h3>
                  </Col>
                  <Col sm={2} style={isFlex2}>
                    <Button
                      variant="outline-success"
                      id="button-addon1"
                      style={textRight}
                      onClick={habilitarEdicion}
                    >
                      Editar
                    </Button>
                  </Col>
                </Row>
                <br />
                <InputGroup className="mb-3" controlId="formHorizontalPeaje">
                  <Form.Label column sm={2}>
                    Nombre
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="name"
                      placeholder="Nombre del usuario"
                      disabled={true}
                      ref={nombreUsuario}
                    />
                  </Col>
                </InputGroup>

                <InputGroup className="mb-3" controlId="formHorizontalPeaje">
                  <Form.Label column sm={2}>
                    Apellido
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="lastname"
                      placeholder="Apellido del usuario"
                      disabled={true}
                      ref={apellido}
                    />
                  </Col>
                </InputGroup>

                <InputGroup className="mb-3" controlId="formHorizontalPeaje">
                  <Form.Label column sm={2}>
                    Documento
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="number"
                      placeholder="Número de documento"
                      disabled={true}
                      ref={documento}
                    />
                  </Col>
                </InputGroup>

                <InputGroup className="mb-3" controlId="formHorizontalPeaje">
                  <Form.Label column sm={2}>
                    Email
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      disabled={true}
                      ref={email}
                    />
                  </Col>
                </InputGroup>

                <br />
                <div style={isFlexButton}>
                  <Button
                    variant="outline-success"
                    style={boton1}
                    onClick={editarUsuario}
                  >
                    Actualizar
                  </Button>{" "}
                  <Button
                    variant="outline-danger"
                    style={boton2}
                    onClick={eliminarUsuario}
                  >
                    Eliminar
                  </Button>{" "}
                </div>

                <br />
                <br />

                <InputGroup>
                  <Col xs={12} sm={12} lg={6}>
                    <h2 style={h3}>Pagos realizados</h2>
                    <br />
                    <Table
                      striped
                      bordered
                      hover
                      style={{ textAlign: "center" }}
                    >
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Fecha</th>
                          <th>Medio de pago</th>
                          <th style={{ width: "33%" }}>Valor</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>15/12/2021</td>
                          <td>Tarjeta</td>
                          <td>25.000</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>17/12/2021</td>
                          <td>Efectivo</td>
                          <td>50.000</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>19/12/2021</td>
                          <td>Efectivo</td>
                          <td>60.000</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                  <Col xs={12} sm={12} lg={1}></Col>
                  <Col xs={12} sm={12} lg={5}>
                    <h2 style={h3}>Recargas realizadas</h2>
                    <br />
                    <Table
                      striped
                      bordered
                      hover
                      style={{ textAlign: "center" }}
                    >
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Fecha</th>
                          <th style={{ width: "33%" }}>Valor</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>15/12/2021</td>
                          <td>25.000</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>17/12/2021</td>
                          <td>50.000</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>19/12/2021</td>
                          <td>60.000</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </InputGroup>
              </Card.Body>
            </Card>
            <br />
          </div>
        </StyledCard>
      </PagosStyled>
    </div>
  );
}
