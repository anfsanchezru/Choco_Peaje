import React, { useRef } from "react";
import { Button, Row, Form } from "react-bootstrap";
import config from "../config";
import { PagosStyled, StyledCard } from "./styled/Pagos.styled";

export default function Peajes() {
  const p1 = {
    color: "#0085BB",
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

  const textArea = {
    resize: "none",
    height: "100px",
  };

  const butt = {
    background: "#0085BB",
    borderColor: "#0085BB",
    width: "270px",
    borderRadius: "20px",
    alignSelf: "center",
    justifySelf: "center",
    fontSize: "18px",
  };

  const nombre = useRef();
  const descripcion = useRef();
  const host = config.api.host;

  function crearConsorcio() {
    const nuevoConsorcio = {
      nombre: nombre.current.value,
      descripcion: descripcion.current.value,
    };

    fetch(`${host}crearConsorcio`, {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(nuevoConsorcio),
    })
      .then((res) => res.json())
      .then((res) => alert(res.msg))
      .catch((err) => alert(err.msg));

    console.log(nuevoConsorcio);
  }

  return (
    <div style={background}>
      <PagosStyled>
        <StyledCard>
          <div style={textStyles}>
            <Row>
              <h1 style={p1}>Crear consorcio</h1>
              <p>
                {" "}
                Ingrese todos los datos correspondientes: (Los campos indicados
                con * son obligatorios)
              </p>
            </Row>
            <br />
            <Form>
              <Form.Group className="mb-3" controlId="nombreConsorcio">
                <Form.Label>Nombre del Consorcio*</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Consorcio del Chocó"
                  ref={nombre}
                />
              </Form.Group>
              <br />
              <Form.Group className="mb-3" controlId="descripcionConsorcio">
                <Form.Label>Descripción del Consorcio*</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Ingrese una descripción (max: 250 caracteres)"
                  style={textArea}
                  maxLength="250"
                  ref={descripcion}
                />
              </Form.Group>
            </Form>
            <br />
            <div>
              <Button style={butt} onClick={crearConsorcio}>
                CREAR CONSORCIO
              </Button>
            </div>
          </div>
        </StyledCard>
      </PagosStyled>
    </div>
  );
}
