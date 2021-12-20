import React, { useRef } from "react";
import { Container, Button, Form, Col, Row, InputGroup } from "react-bootstrap";
import config from "../config";
import { PagosStyled, StyledCard } from "./styled/Pagos.styled";

export default function Peajes() {
  const background = {
    backgroundImage: "linear-gradient(90deg, #2A98C7 0%, #ACCDE5 100%",
    flexGrow: "1",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    aligntItems: "center",
    justifyContent: "center",
  };

  const insideCard = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "left",
  };

  const cont1 = {
    "background-color": "#F1FAFE",
    position: "absolute",
  };

  const p1 = {
    color: "#0085BB",
  };

  const p2 = {};

  const lab = {
    marginRight: "10px",
  };

  const butt = {
    background: "#0085BB",
    borderColor: "#0085BB",
    width: "200px",
    borderRadius: "20px",
    alignSelf: "center",
    justifySelf: "center",
    fontSize: "18px",
  };

  const columnCell = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const lineBreak = {
    color: "silver",
    backgroundColor: "silver",
    height: 3,
  };

  const placa = useRef();
  const usuarioConsulta = useRef();
  const vehiculoConsulta = useRef();
  const valorAPagar = useRef();
  const metodoDePago = useRef();
  const usuarioRecarga = useRef();
  const valorRecarga = useRef();
  const metodoRecarga = useRef();
  const host = config.api.host;

  function consultar() {
    const placaConsulta = placa.current.value;

    fetch(`${host}placas/${placaConsulta}`)
      .then((res) => res.json())
      .then((res) => {
        usuarioConsulta.current.value = res.usuario;
        vehiculoConsulta.current.value = res.tipoVehiculo;
        valorAPagar.current.value = res.valorAPagar;
      })
      .catch((err) => {
        alert(
          "Ha ocurrido un error en la consulta verifique la placa o contacte con el administrador"
        );
        console.log(err);
      });

    console.log(placaConsulta);
  }

  function pagar() {
    const metodo = metodoDePago.current.value;
    const valorPago = valorAPagar.current.value;
    console.log(
      `Se cancelará un valor de ${valorPago} mediante metodo de pago ${metodo}`
    );
    const formResponse = {
      placa: placa.current.value,
      usuario: usuarioConsulta.current.value,
      tipoVehiculo: vehiculoConsulta.current.value,
      metodoPago: metodo,
      valorPago: valorPago,
    };

    // Verificar ruta host: http://localhost:8080/ -> accion recargar: http://localhost:8080/pagar
    fetch(`${host}pagar`, {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(formResponse),
    })
      .then((res) => res.json())
      .then((res) => alert(res.msg))
      .catch((err) => alert(err.msg));

    console.log(formResponse);
  }

  function recargar() {
    const formResponse = {
      usuario: usuarioRecarga.current.value,
      recarga: valorRecarga.current.value,
      metodoRecarga: metodoRecarga.current.value,
    };

    // Verificar ruta host: http://localhost:8080/ -> accion recargar: http://localhost:8080/recargar
    fetch(`${host}recargar`, {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(formResponse),
    })
      .then((res) => res.json())
      .then((res) => alert(res.msg))
      .catch((err) => alert(err.msg));

    console.log(formResponse);
  }

  return (
    <div style={background}>
      <PagosStyled>
        <StyledCard>
          <div style={insideCard}>
            <Col sm="12">
              <Container fluid className=""></Container>
              <Container fluid className="row"></Container>
              <Container style={cont1} fluid className="col"></Container>
              <div>
                <h1 style={p1}> Pagos</h1>
                <p style={p2}>
                  {" "}
                  Ingrese todos los datos correspondientes: (Los campos
                  indicados con * son obligatorios)
                </p>
              </div>
              <br />
              <InputGroup className="mb-3">
                <Form.Label column sm={2}>
                  Placa
                </Form.Label>
                <Form.Control
                  placeholder="AAA000"
                  aria-label="Placa"
                  aria-describedby="basic-addon2"
                  ref={placa}
                />
                <Button
                  variant="outline-secondary"
                  id="button-addon2"
                  onClick={consultar}
                >
                  Consultar
                </Button>
              </InputGroup>

              <br />
              <p>
                Verifique que los datos autogenerados a continuación sean
                correctos:
              </p>

              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Usuario"
                  aria-label="Usuario"
                  aria-describedby="basic-addon1"
                  ref={usuarioConsulta}
                  disabled
                />
                <InputGroup.Text id="basic-addon1">Usuario</InputGroup.Text>
              </InputGroup>

              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Categoría I"
                  aria-label="Categoria del vehiculo"
                  aria-describedby="basic-addon1"
                  ref={vehiculoConsulta}
                  disabled
                />
                <InputGroup.Text id="basic-addon1">
                  Categoría del vehículo
                </InputGroup.Text>
              </InputGroup>

              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Valor en COP"
                  aria-label="Valor"
                  aria-describedby="basic-addon1"
                  ref={valorAPagar}
                  disabled
                />
                <InputGroup.Text id="basic-addon1">
                  Valor a pagar
                </InputGroup.Text>
              </InputGroup>
              <br />
              <>
                <label for="text" style={lab}>
                  Seleccione método de pago*
                </label>
                <Form.Select size="md" ref={metodoDePago}>
                  <option value="1">Efectivo</option>
                  <option value="2">Tarjeta</option>
                </Form.Select>
              </>
              <div>
                <br />
                <div style={columnCell}>
                  <Button style={butt} onClick={pagar}>
                    PAGAR
                  </Button>
                </div>
              </div>
              <br />
              <br />

              <div style={lineBreak}></div>

              <br />
              <br />

              <h1 style={p1}>Recargas</h1>
              <p style={p2}>
                {" "}
                Ingrese todos los datos correspondientes: (Los campos indicados
                con * son obligatorios)
              </p>
              <br />
              <Row>
                <Form.Label column lg={2}>
                  Usuario*
                </Form.Label>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Usuario"
                    ref={usuarioRecarga}
                  />
                </Col>
              </Row>
              <br />

              <Row>
                <Form.Label column lg={2}>
                  Valor a recargar*
                </Form.Label>
                <Col>
                  <Form.Control
                    type="number"
                    placeholder="$ COP"
                    ref={valorRecarga}
                  />
                </Col>
              </Row>
              <br />

              <label for="text" style={lab}>
                Seleccione método de pago*
              </label>
              <Form.Select size="md" ref={metodoRecarga}>
                <option value="1">Efectivo</option>
                <option value="2">Tarjeta</option>
              </Form.Select>
              <br />
              <div style={columnCell}>
                <Button style={butt} onClick={recargar}>
                  RECARGAR
                </Button>
              </div>
            </Col>
          </div>
        </StyledCard>
      </PagosStyled>
    </div>
  );
}
