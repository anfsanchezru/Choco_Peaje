import React, { useRef } from "react";
import { Container, Button, Form, Col, Row } from "react-bootstrap";
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
  const cont2 = {
    position: "center",
    width: "maximum",
    top: "659px",
    "text-aling": "center",
    background:
      "linear-gradient(0deg, rgba(240, 91, 113, 0.35), rgba(240, 91, 113, 0.35))",
    paddingTop: "10px",
    paddingBottom: "20px",
  };
  const p1 = {
    color: "#0085BB",
  };

  const p2 = {};

  const lab = {
    marginRight: "10px",
  };

  const lab1 = {
    textAlign: "center",
  };

  const consulta = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "space-between",
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

  const columnCell = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const columnCell2 = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "right",
  };

  const lineBreak = {
    color: "silver",
    backgroundColor: "silver",
    height: 3,
  };

  const input = {
    width: "80%",
    margin: "10px",
  };

  const row = {
    marginBottom: "10px",
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
        metodoRecarga: metodoRecarga.current.value
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
              <Row>
                <Col style={columnCell}>
                  <label for="text" style={lab}>
                    Placas del Vehículo *
                  </label>
                  <input type="text" ref={placa}></input>
                  <br />
                  <Button style={butt} onClick={consultar}>
                    Consultar
                  </Button>
                </Col>

                <Col style={columnCell}>
                  <Container fluid className="" style={cont2}>
                    <label for="text" style={lab1}>
                      Verifique que los datos autogenerados continuación sean
                      correctos:
                    </label>
                    <div style={consulta}>
                      <label for="text" style={lab}>
                        Usuario
                      </label>
                      <input type="text" ref={usuarioConsulta}></input>
                    </div>

                    <div style={consulta}>
                      <label for="text" style={lab}>
                        Categoría del Vehículo
                      </label>
                      <input type="text" ref={vehiculoConsulta}></input>
                    </div>

                    <div style={consulta}>
                      <label for="text" style={lab}>
                        Valor a pagar
                      </label>
                      <input type="text" ref={valorAPagar}></input>
                    </div>
                  </Container>
                </Col>
              </Row>
              <br />
              <br />
              <>
                <label for="text" style={lab}>
                  Seleccione método de pago*
                </label>
                <Form.Select size="lg" ref={metodoDePago}>
                  <option value="1">Efectivo</option>
                  <option value="2">Tarjeta</option>
                </Form.Select>
              </>
              <div>
                <br />
                <div style={columnCell}>
                  <Button style={butt} onClick={pagar}>
                    Pagar
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
              <Row style={row}>
                <Col sm="3" style={columnCell2}>
                  <label for="text" style={lab}>
                    Usuario*
                  </label>
                </Col>

                <Col>
                  <input type="text" style={input} ref={usuarioRecarga}></input>
                </Col>
              </Row>
              <Row>
                <Col sm="3" style={columnCell2}>
                  <label for="text" style={lab}>
                    Valor a recargar*
                  </label>
                </Col>
                <Col>
                  <input type="text" style={input} ref={valorRecarga}></input>
                </Col>
                <br />
              </Row>

              <br />
              <label for="text" style={lab}>
                Seleccione método de pago*
              </label>
              <Form.Select size="lg" ref={metodoRecarga}>
                <option value="1">Efectivo</option>
                <option value="2">Tarjeta</option>
              </Form.Select>
              <br />
              <div style={columnCell}>
                <Button style={butt} onClick={recargar}>
                  Recargar
                </Button>
              </div>
            </Col>
          </div>
        </StyledCard>
      </PagosStyled>
    </div>
  );
}
