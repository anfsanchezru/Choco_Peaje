import React, { useRef } from "react";
import {
  Button,
  Card,
  Table,
  Form,
  InputGroup,
  FormControl,
  Row,
  Col,
} from "react-bootstrap";
import { PagosStyled, StyledCard } from "./styled/Pagos.styled";
import config from "../config";

export default function Consorcios() {
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

  const isFlex = {
    display: "flex",
  };

  const isFlex2 = {
    display: "flex",
    justifyContent: "flex-end",
  };

  const textRight = {
    alignSelf: "flex-end",
  };

  const textArea = {
    resize: "none",
    height: "100px",
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

  const nombreConsorcio = useRef();
  const consorcio = useRef("");
  const descripcion = useRef("");
  const host = config.api.host;

  const consultarConsorcio = () => {};
  const consultarPeaje = (e) => {
    console.log(e.target.id);
  };
  const habilitarEdicion = () => {
    if (consorcio.current.disabled) {
      consorcio.current.disabled = false;
      descripcion.current.disabled = false;
    } else {
      consorcio.current.disabled = true;
      descripcion.current.disabled = true;
    }
  };

  const editarConsorcio = () => {
    const editarConsorcio = {
      consorcio: consorcio.current.value,
      descripcion: descripcion.current.value,
    };

    fetch(`${host}editarConsorcio`, {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(editarConsorcio),
    })
      .then((res) => res.json())
      .then((res) => alert(res.msg))
      .catch((err) => alert(err.msg));

    consorcio.current.disabled = true;
    descripcion.current.disabled = true;

    console.log(editarConsorcio);
  };

  const eliminarConsorcio = () => {
    const eliminarConsorcio = {
      consorcio: consorcio.current.value,
      descripcion: descripcion.current.value,
    };

    if (!window.confirm(`Desea eliminar el peaje ${eliminarConsorcio.consorcio}?`)) {
      return;
    }

    fetch(`${host}eliminarConsorcio`, {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(eliminarConsorcio),
    })
      .then((res) => res.json())
      .then((res) => alert(res.msg))
      .catch((err) => alert(err.msg));

    console.log(eliminarConsorcio);
  };

  return (
    <div style={background}>
      <PagosStyled>
        <StyledCard>
          <Col style={{ textAlign: "left" }}>
            <h1 style={{ color: "#0085BB", textAlign: "left" }}>
              Consulta de Consorcios
            </h1>
            <br />
            <InputGroup className="mb-3">
              <FormControl
                aria-label="Peaje"
                aria-describedby="basic-addon1"
                placeholder="Nombre del consorcio"
                ref={nombreConsorcio}
              />
              <Button
                variant="outline-secondary"
                id="button-addon1"
                onClick={consultarConsorcio}
              >
                Buscar
              </Button>
            </InputGroup>

            <Card>
              <Card.Header>
                <h2 style={h2}>
                  Información del Consorcio {consorcio.current.value}
                </h2>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col sm={10} style={isFlex}>
                    <h3 style={h3}>Atributos</h3>
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
                      placeholder="Nombre del consorcio"
                      disabled="true"
                      ref={consorcio}
                    />
                  </Col>
                </InputGroup>
                <InputGroup className="mb-3" controlId="descripcionConsorcio">
                  <Col sm={2}>
                    <Form.Label>Descripción</Form.Label>
                  </Col>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Ingrese una descripción (max: 250 caracteres)"
                    style={textArea}
                    maxLength="250"
                    disabled="true"
                    ref={descripcion}
                  />
                </InputGroup>
                <br />
                <div style={isFlexButton}>
                  <Button
                    variant="outline-success"
                    style={boton1}
                    onClick={editarConsorcio}
                  >
                    Actualizar
                  </Button>{" "}
                  <Button
                    variant="outline-danger"
                    style={boton2}
                    onClick={eliminarConsorcio}
                  >
                    Eliminar
                  </Button>{" "}
                </div>
              </Card.Body>
            </Card>

            <br />
            <br />

            <div style={{ textAlign: "left" }}>
              <h3 style={h3}>Lista de peajes actuales del consorcio</h3>
              <br />
              <Table striped bordered hover style={{ textAlign: "center" }}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Peaje</th>
                    <th>Consorcio</th>
                    <th>Latitud</th>
                    <th>Longitud</th>
                    <th>Accion</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Peaje del Chocó</td>
                    <td>Consorcio</td>
                    <td>5.324570</td>
                    <td>-76.298139</td>
                    <td>
                      <Button
                        variant="outline-primary"
                        id="button-addon1"
                        onClick={consultarPeaje}
                      >
                        Consultar
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Alpes</td>
                    <td>Consorcio</td>
                    <td>5.387965</td>
                    <td>-74.789564</td>
                    <td>
                      <Button
                        variant="outline-primary"
                        id="button-addon1"
                        onClick={consultarPeaje}
                      >
                        Consultar
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Los Jazminez</td>
                    <td>Consorcio</td>
                    <td>5.387957</td>
                    <td>-75.578426</td>
                    <td>
                      <Button
                        variant="outline-primary"
                        id="Los Jazminez"
                        onClick={consultarPeaje}
                      >
                        Consultar
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </StyledCard>
      </PagosStyled>
    </div>
  );
}
