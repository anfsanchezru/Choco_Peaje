import React, { useRef } from "react";
import { Button, Form, Col, Row, InputGroup } from "react-bootstrap";
import config from "../config";
import { PagosStyled, StyledCard } from "./styled/Pagos.styled";

export default function Peajes() {
  const p1 = {
    color: "#0085BB",
  };

  const butt = {
    background: "#0085BB",
    borderColor: "#0085BB",
    height: "90x",
    width: "300px",
    borderRadius: "25px",
    alignSelf: "center",
    justifySelf: "center",
    fontSize: "18px",
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

  const textStyles = {
    textAlign: "left",
  };

  const inputCenter = {
    alignSelf: "center",
  };

  const h3 = {
    fontSize: "20px",
    alignSelf: "center",
  };

  const isFlex = {
    display: "flex",
  };

  const isFlex2 = {
    display: "flex",
    justifyContent: "center",
    aligntItems: "center",
  };

  const lineBreak = {
    color: "silver",
    backgroundColor: "silver",
    height: 3,
  };

  const peaje = useRef();
  const consorcio = useRef();
  const valor1 = useRef();
  const valor2 = useRef();
  const valor3 = useRef();
  const valor4 = useRef();
  const valor5 = useRef();
  const latitud = useRef();
  const longitud = useRef();
  const host = config.api.host;

  function crearPeaje() {
    const nuevoPeaje = {
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

    fetch(`${host}crearPeaje`, {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(nuevoPeaje),
    })
      .then((res) => res.json())
      .then((res) => alert(res.msg))
      .catch((err) => alert(err.msg));

    console.log(nuevoPeaje);
  }

  return (
    <div style={background}>
      <PagosStyled>
        <StyledCard>
          <div style={textStyles}>
            <Col sm="12">
              <h1 style={p1}>Crear Peaje</h1>
              <p>
                {" "}
                Ingrese todos los datos correspondientes: (Los campos indicados
                con * son obligatorios)
              </p>
              <br />
              <div>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalPeaje"
                >
                  <Form.Label column sm={2}>
                    Peaje
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="name"
                      placeholder="Nombre del peaje"
                      ref={peaje}
                    />
                  </Col>
                </Form.Group>
                <>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="formHorizontalConsorcio"
                  >
                    <Form.Label column sm={2}>
                      Consorcio
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Select size="md" ref={consorcio}>
                        <option>Consorcio 1</option>
                        <option>Consorcio 2</option>
                        <option>Consorcio 3</option>
                      </Form.Select>
                    </Col>
                  </Form.Group>
                </>
              </div>
              <br />
              <br />

              <div style={lineBreak}></div>

              <br />

              <div>
                <Row>
                  <Col sm="9" style={isFlex}>
                    <h3 style={h3}>Categoría del vehículo</h3>
                  </Col>
                  <Col sm="3">
                    <h3 style={h3}>Valor en COP</h3>
                  </Col>
                </Row>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalCat1"
                >
                  <Form.Label column sm={9}>
                    Categoria I (Automoviles, camperos, camionetas,
                    microbusesconeje de llanta sencilla )
                  </Form.Label>
                  <Col sm={3}>
                    <InputGroup>
                      <Form.Control
                        type="number"
                        placeholder="COP"
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
                  <Form.Label column sm={9}>
                    Categoria II (Buses, busetas, microbuses con eje trasero de
                    doble llanta y camiones de dos ejes)
                  </Form.Label>
                  <Col sm={3} style={inputCenter}>
                    <InputGroup>
                      <Form.Control
                        type="number"
                        placeholder="COP"
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
                  <Form.Label column sm={9}>
                    Categoria III (Vehiculos de pasajeros y de carga de tres y
                    cuatro ejes )
                  </Form.Label>
                  <Col sm={3} style={inputCenter}>
                    <InputGroup>
                      <Form.Control
                        type="number"
                        placeholder="COP"
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
                  <Form.Label column sm={9}>
                    Categoria IV (Vehiculos de carga de cinco ejes)
                  </Form.Label>
                  <Col sm={3} style={inputCenter}>
                    <InputGroup>
                      <Form.Control
                        type="number"
                        placeholder="COP"
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
                  <Form.Label column sm={9}>
                    Categoria V (Vehiculos de carga de seis ejes)
                  </Form.Label>
                  <Col sm={3} style={inputCenter}>
                    <InputGroup>
                      <Form.Control
                        type="number"
                        placeholder="COP"
                        ref={valor5}
                      />
                      <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup>
                  </Col>
                </Form.Group>

                <InputGroup className="mb-3">
                  <Form.Label column sm={12}>
                    <h3 style={h3}>Ingrese la ubicación del peaje</h3>
                  </Form.Label>
                  <Form.Control
                    aria-label="Latitud"
                    placeholder="Latitud"
                    type="number"
                    ref={latitud}
                  />
                  <Form.Control
                    aria-label="Longitud"
                    placeholder="Longitud"
                    type="number"
                    ref={longitud}
                  />
                  <br />
                  <InputGroup.Text>Latitud, Longitud</InputGroup.Text>
                </InputGroup>
              </div>
              <br />
              <Row style={isFlex}>
                <Col sm="12" style={isFlex2}>
                  <Button style={butt} onClick={crearPeaje}>
                    CREAR PEAJE
                  </Button>
                </Col>
              </Row>
            </Col>
          </div>
        </StyledCard>
      </PagosStyled>
    </div>
  );
}
