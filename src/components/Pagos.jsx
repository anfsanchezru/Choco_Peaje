import { Form, Col, Button } from "react-bootstrap";
import { PagosStyled, StyledCard } from "./styled/Pagos.styled";
import PrettyCar from "../images/undrawCar.svg";
import { useRef } from "react";
import config from "../config";

export default function Pagos() {
  const background = {
    backgroundImage: "linear-gradient(90deg, #2A98C7 0%, #ACCDE5 100%",
    flexGrow: "1",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    aligntItems: "center",
    justifyContent: "center",
  };

  const button = {
    marginTop: "20px",
    borderRadius: "30px",
    height: "45px",
    width: "100%",
    background: "#0085BB",
  };

  const metodoPago = useRef();
  const entidadBancaria = useRef();
  const tipoIdentificacion = useRef();
  const numIdentificacion = useRef();
  const direccion = useRef();
  const correo = useRef();
  const valorRecarga = useRef();
  const host = config.api.host;

  function recargar() {
    const formResponse = {
      metodoPago: metodoPago.current.value,
      entidadBancaria: entidadBancaria.current.value,
      tipoIdentificacion: tipoIdentificacion.current.value,
      numIdentificacion: numIdentificacion.current.value,
      direccion: direccion.current.value,
      correo: correo.current.value,
      valorRecarga: valorRecarga.current.value,
      host,
    };

    // Verificar ruta host: http://localhost:8080/ -> accion recargar: http://localhost:8080/recargar
    fetch(`${host}recargar`, {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify( formResponse )
    })
      .then((res) => res.json())
      .then((res) => alert(res.msg))
      .catch(err => alert(err.msg));

    console.log(formResponse);
  }

  return (
    <div style={background}>
      <PagosStyled>
        <StyledCard>
          <div>
            <Col sm="10">
              <Form.Select ref={metodoPago}>
                <option defaultValue value="">Seleccione el método de pago</option>
                <option value="1">Tarjeta de Crédito</option>
                <option value="2">Tarjeta Debito</option>
                <option value="3">PSE</option>
              </Form.Select>
              <br />

              <Form.Select ref={entidadBancaria}>
                <option defaultValue value="">Seleccione la entidad bancaria</option>
                <option value="1">Bancolombia</option>
                <option value="2">Davivienda</option>
                <option value="3">Banco Genérico 3</option>
              </Form.Select>
              <br />

              <Form.Select ref={tipoIdentificacion}>
                <option defaultValue value="">Introduzca el tipo de identificación</option>
                <option value="1">C.C.</option>
                <option value="2">T.I.</option>
                <option value="3">Pasaporte</option>
              </Form.Select>
              <br />

              <Form.Control
                ref={numIdentificacion}
                type="text"
                placeholder="Introduzca su número de identificación"
              />
              <br />
              <Form.Control
                ref={direccion}
                type="text"
                placeholder="Introduzca su dirección "
              />
              <br />
              <Form.Control
                ref={correo}
                type="text"
                placeholder="Introduzca su correo "
              />

              <br />
              <Form.Control
                ref={valorRecarga}
                type="number"
                placeholder="Introduzca el valor a recargar "
              />

              <br />
              <Button
                variant="primary"
                type="submit"
                style={button}
                onClick={recargar}
              >
                Recargar
              </Button>
            </Col>
          </div>
          <div>
            <img alt="car-svg" src={PrettyCar}></img>
          </div>
          <br />
        </StyledCard>
      </PagosStyled>
    </div>
  );
}
