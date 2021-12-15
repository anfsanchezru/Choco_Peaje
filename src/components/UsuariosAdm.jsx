import React from "react";
import {
  InputGroup,
  Card,
  Table,
  FloatingLabel,
  Form,
  FormControl,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { PagosStyled } from "./styled/Pagos.styled";

export default function Usuarios() {
//   const barraBusqueda = {
//     position: "absolute",
//     width: "869px",
//     height: "52px",
//     left: "219px",
//     top: "552px",

//     background: "#FDFDFD",
//     border: "1px solid #000000",
//     "box-sizing": "border-box",
//   };

  const titulosSeccion1 = {
    height: "40px",
    background: "#F05B71",
    border: "1px solid #000000",
    "box-sizing": "border-box",
    "box-shadow": "0px 4px 4px rgba(0, 0, 0, 0.25)",
  };

  const titulosSeccion2 = {
    background: "#D6A25E",
    border: "1px solid #000000",
    "box-sizing": "border-box",
    "box-shadow": "0px 4px 4px rgba(0, 0, 0, 0.25)",
  };

  const titulosSeccion3 = {
    background: "#2A98C7",
    border: "1px solid #000000",
    "box-sizing": "border-box",
    "box-shadow": "0px 4px 4px rgba(0, 0, 0, 0.25)",
  };

  const Seccion1 = {
    position: "absolute",
    width: "422px",
    height: "255px",
    left: "200px",
    top: "550px",
  };

  const Seccion2 = {
    position: "absolute",
    width: "390px",
    height: "206px",
    left: "802px",
    top: "570px",
  };

  const Seccion3 = {
    position: "absolute",
    width: "390px",
    height: "151px",
    left: "525px",
    top: "830px",
  };

  const h2 = {
    "font-weight": "bold",
    "font-size": "20px",
    "line-height": "35px",
    "text-align": "center",
    "letter-spacing": "-0.025em",

    color: "#000000",
  };

  return (
    <PagosStyled>
      <div className="UsuarioAdm">
        <InputGroup className="mb-3">
          <FormControl
            aria-label="Text input with dropdown button"
            placeholder="Usuario que desea buscar"
            style={{ height: "50px" }}
          />
          <DropdownButton
            variant="outline-secondary"
            title="Buscar"
            id="input-group-dropdown-2"
            align="end"
          >
            <Dropdown.Item href="#">...</Dropdown.Item>
          </DropdownButton>
        </InputGroup>

        <Card style={Seccion1}>
          <Card.Header
            class="text-centered  text-justify"
            style={titulosSeccion1}
          >
            <h2 style={h2}>Información de Usuario</h2>
          </Card.Header>
          <Card.Body>
            <Table>
              <tbody>
                <tr>
                  <th scope="row" class="text-center">
                    Nombre:{" "}
                  </th>
                  <FloatingLabel
                    controlId="floatingTextarea"
                    label=""
                    className="mb-3"
                  >
                    <Form.Control
                      as="textarea"
                      placeholder=""
                      style={{ width: "260px", height: "30px" }}
                    />
                  </FloatingLabel>
                </tr>
                <tr>
                  <th scope="row">Consorcios: </th>
                  <InputGroup className="mb-3">
                    <FormControl
                      aria-label="Text input with dropdown button"
                      style={{ height: "38px", width: "200px" }}
                    />
                    <DropdownButton
                      variant="outline-secondary"
                      title=""
                      id="input-group-dropdown-2"
                      align="end"
                    >
                      <Dropdown.Item href="#">...</Dropdown.Item>
                    </DropdownButton>
                  </InputGroup>
                </tr>
                <tr>
                  <th scope="row">Peajes: </th>
                  <InputGroup className="mb-3">
                    <FormControl
                      aria-label="Text input with dropdown button"
                      placeholder=""
                    />
                    <DropdownButton
                      variant="outline-secondary"
                      title=""
                      id="input-group-dropdown-2"
                      align="end"
                    >
                      <Dropdown.Item href="#">...</Dropdown.Item>
                    </DropdownButton>
                  </InputGroup>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>

        <Card style={Seccion2}>
          <Card.Header
            class="text-centered  text-justify"
            style={titulosSeccion2}
          >
            <h2 style={h2}>Cobros recogidos por medio de pago</h2>
          </Card.Header>
          <Card.Body>
            <Table>
              <tbody>
                <tr>
                  <th scope="row">Efectivo: </th>
                  <FloatingLabel
                    controlId="floatingTextarea"
                    label=""
                    className="mb-3"
                  >
                    <Form.Control
                      as="textarea"
                      placeholder=""
                      style={{ width: "260px", height: "30px" }}
                    />
                  </FloatingLabel>
                </tr>
                <tr>
                  <th scope="row">Tarjeta: </th>
                  <FloatingLabel
                    controlId="floatingTextarea"
                    label=""
                    className="mb-3"
                  >
                    <Form.Control
                      as="textarea"
                      placeholder=""
                      style={{ width: "260px", height: "30px" }}
                    />
                  </FloatingLabel>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>

        <Card style={Seccion3}>
          <Card.Header style={titulosSeccion3}>
            {" "}
            <h2 style={h2}>Recargas realizadas</h2>
          </Card.Header>
          <Card.Body>
            <Table>
              <tbody class="text-justify">
                <tr>
                  <th scope="row">Recargas</th>
                  <FloatingLabel
                    controlId="floatingTextarea"
                    label=""
                    className="mb-3"
                  >
                    <Form.Control
                      as="textarea"
                      placeholder=""
                      style={{ width: "260px", height: "20px" }}
                    />
                  </FloatingLabel>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
    </PagosStyled>
  );
}
