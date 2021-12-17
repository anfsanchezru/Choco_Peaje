import React, { useRef } from "react";
import {
  Button,
  InputGroup,
  Card,
  Form,
  FormControl,
  Row,
  Col,
  Table,
} from "react-bootstrap";
import { PagosStyled, StyledCard } from "./styled/Pagos.styled";
import config from "../config";

export default function Peajes() {
  const titulosSeccion1 = {};

  const Seccion1 = {};

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

  const h1 = {
    color: "#0085BB",
  };

  const h2 = {
    color: "black",
    fontSize: "20px",
    textAlign: "center",
  };

  const h3 = {
    color: "black",
    fontSize: "20px",
    alignSelf: "center",
  };

  const textLeft = {
    textAlign: "left",
  };

  const textRight = {
    alignSelf: "flex-end",
  };

  const inputCenter = {
    alignSelf: "center",
  };

  const isFlex = {
    display: "flex",
  };

  const isFlex2 = {
    display: "flex",
    justifyContent: "flex-end",
  };

  const isFlexButton = {
    display: "flex",
    justifyContent: "space-around",
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

  // Funcionalidad de la página

  const nombrePeaje = useRef("");
  const peaje = useRef("");
  const latitud = useRef();
  const longitud = useRef();
  const consorcio = useRef();
  const valor1 = useRef();
  const valor2 = useRef();
  const valor3 = useRef();
  const valor4 = useRef();
  const valor5 = useRef();
  const host = config.api.host;

  const consultarPeaje = () => {
    const peajeConsulta = nombrePeaje.current.value;

    fetch(`${host}placas/${peajeConsulta}`)
      .then((res) => res.json())
      .then((res) => {
        peaje.current.value = res.peaje;
        latitud.current.value = res.latitud;
        longitud.current.value = res.longitud;
        consorcio.current.value = res.consorcio;
        valor1.current.value = res.valor1;
        valor2.current.value = res.valor1;
        valor3.current.value = res.valor1;
        valor4.current.value = res.valor1;
        valor5.current.value = res.valor1;
      })
      .catch((err) => {
        alert(
          "Ha ocurrido un error en la consulta verifique la placa o contacte con el administrador"
        );
        console.log(err);
      });

    console.log(peajeConsulta);
  };

  const habilitarEdicion = () => {
    if (peaje.current.disabled === true) {
      peaje.current.disabled = false;
      consorcio.current.disabled = false;
      valor1.current.disabled = false;
      valor2.current.disabled = false;
      valor3.current.disabled = false;
      valor4.current.disabled = false;
      valor5.current.disabled = false;
      latitud.current.disabled = false;
      longitud.current.disabled = false;
    } else {
      peaje.current.disabled = true;
      consorcio.current.disabled = true;
      valor1.current.disabled = true;
      valor2.current.disabled = true;
      valor3.current.disabled = true;
      valor4.current.disabled = true;
      valor5.current.disabled = true;
      latitud.current.disabled = true;
      longitud.current.disabled = true;
    }
  };

  const editarPeaje = () => {
    const editarPeaje = {
      peaje: peaje.current.value,
      consorcio: consorcio.current.value,
      valor1: valor1.current.value,
      valor2: valor2.current.value,
      valor3: valor3.current.value,
      valor4: valor4.current.value,
      valor5: valor5.current.value,
      latitud: latitud.current.value,
      longitud: longitud.current.value,
    };

    fetch(`${host}editarPeaje`, {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(editarPeaje),
    })
      .then((res) => res.json())
      .then((res) => alert(res.msg))
      .catch((err) => alert(err.msg));

    peaje.current.disabled = true;
    consorcio.current.disabled = true;
    valor1.current.disabled = true;
    valor2.current.disabled = true;
    valor3.current.disabled = true;
    valor4.current.disabled = true;
    valor5.current.disabled = true;
    latitud.current.disabled = true;
    longitud.current.disabled = true;

    console.log(editarPeaje);
  };

  const eliminarPeaje = () => {
    const eliminarPeaje = {
      peaje: peaje.current.value,
      consorcio: consorcio.current.value,
      valor1: valor1.current.value,
      valor2: valor2.current.value,
      valor3: valor3.current.value,
      valor4: valor4.current.value,
      valor5: valor5.current.value,
      latitud: latitud.current.value,
      longitud: longitud.current.value,
    };

    if (!window.confirm(`Desea eliminar el peaje ${eliminarPeaje.peaje}?`)) {
      return;
    }

    fetch(`${host}eliminarPeaje`, {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(eliminarPeaje),
    })
      .then((res) => res.json())
      .then((res) => alert(res.msg))
      .catch((err) => alert(err.msg));

    console.log(eliminarPeaje);
  };

  return (
    <div style={background}>
      <PagosStyled style={{ paddingBottom: "0px" }}>
        <StyledCard>
          <div style={textLeft}>
            <h1 style={h1}>Consulta de Peajes</h1>
            <br />
            <InputGroup className="mb-3">
              <FormControl
                aria-label="Peaje"
                aria-describedby="basic-addon1"
                placeholder="Nombre del peaje"
                ref={nombrePeaje}
              />
              <Button
                variant="outline-secondary"
                id="button-addon1"
                onClick={consultarPeaje}
              >
                Buscar
              </Button>
            </InputGroup>
            <Card style={Seccion1}>
              <Card.Header style={titulosSeccion1}>
                <h2 style={h2}>Información del Peaje {peaje.current.value}</h2>
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
                      placeholder="Nombre del peaje"
                      disabled="true"
                      ref={peaje}
                    />
                  </Col>
                </InputGroup>
                <InputGroup className="mb-3">
                  <Form.Label column sm={2}>
                    Ubicación
                  </Form.Label>
                  <Form.Control
                    aria-label="Latitud"
                    placeholder="Latitud"
                    type="number"
                    disabled="true"
                    ref={latitud}
                  />
                  <Form.Control
                    aria-label="Longitud"
                    placeholder="Longitud"
                    type="number"
                    disabled="true"
                    ref={longitud}
                  />
                  <InputGroup.Text>Latitud, Longitud</InputGroup.Text>
                </InputGroup>
                <InputGroup
                  className="mb-3"
                  controlId="formHorizontalConsorcio"
                >
                  <Form.Label column sm={2}>
                    Consorcio
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Select size="md" ref={consorcio} disabled="true">
                      <option>Consorcio 1</option>
                      <option>Consorcio 2</option>
                      <option>Consorcio 3</option>
                    </Form.Select>
                  </Col>
                </InputGroup>
                <br />
                <Row>
                  <h3 style={h3}>Precios por categoría del vehículo</h3>
                </Row>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalCat1"
                >
                  <Form.Label column sm={2}>
                    Categoria I
                  </Form.Label>
                  <Col sm={10}>
                    <InputGroup>
                      <Form.Control
                        type="number"
                        placeholder="COP"
                        disabled="true"
                        ref={valor1}
                      />
                      <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup>
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalPCat2"
                >
                  <Form.Label column sm={2}>
                    Categoria II
                  </Form.Label>
                  <Col sm={10} style={inputCenter}>
                    <InputGroup>
                      <Form.Control
                        type="number"
                        placeholder="COP"
                        disabled="true"
                        ref={valor2}
                      />
                      <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup>
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalPCat3"
                >
                  <Form.Label column sm={2}>
                    Categoria III
                  </Form.Label>
                  <Col sm={10} style={inputCenter}>
                    <InputGroup>
                      <Form.Control
                        type="number"
                        placeholder="COP"
                        disabled="true"
                        ref={valor3}
                      />
                      <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup>
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalPCat4"
                >
                  <Form.Label column sm={2}>
                    Categoria IV
                  </Form.Label>
                  <Col sm={10} style={inputCenter}>
                    <InputGroup>
                      <Form.Control
                        type="number"
                        placeholder="COP"
                        disabled="true"
                        ref={valor4}
                      />
                      <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup>
                  </Col>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalPCat5"
                >
                  <Form.Label column sm={2}>
                    Categoria V
                  </Form.Label>
                  <Col sm={10} style={inputCenter}>
                    <InputGroup>
                      <Form.Control
                        type="number"
                        placeholder="COP"
                        disabled="true"
                        ref={valor5}
                      />
                      <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup>
                  </Col>
                </Form.Group>
              </Card.Body>
            </Card>
            <br />
            <div style={isFlexButton}>
              <Button
                variant="outline-success"
                style={boton1}
                onClick={editarPeaje}
              >
                Actualizar
              </Button>{" "}
              <Button
                variant="outline-danger"
                style={boton2}
                onClick={eliminarPeaje}
              >
                Eliminar
              </Button>{" "}
            </div>
          </div>
        </StyledCard>
      </PagosStyled>

      <PagosStyled style={{ paddingTop: "0px", marginTop: "-50px" }}>
        <StyledCard>
          <div style={textLeft}>
            <h2 style={h1}>Peajes Actuales</h2>
            <br />
            <Table striped bordered hover style={{ textAlign: "center" }}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Peaje</th>
                  <th>Consorcio</th>
                  <th>Latitud</th>
                  <th>Longitud</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Peaje del Chocó</td>
                  <td>Consorcio 1</td>
                  <td>5.324570</td>
                  <td>-76.298139</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Alpes</td>
                  <td>Consorcio 2</td>
                  <td>5.387965</td>
                  <td>-74.789564</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Los Jazminez</td>
                  <td>Consorcio 3</td>
                  <td>5.387957</td>
                  <td>-75.578426</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </StyledCard>
      </PagosStyled>
    </div>
  );
}
