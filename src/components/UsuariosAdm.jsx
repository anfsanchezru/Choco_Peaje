import React, { useRef } from "react";
import {
  InputGroup,
  Button,
  Card,
  Table,
  FloatingLabel,
  Form,
  FormControl,
  DropdownButton,
  Dropdown,
  Col
} from "react-bootstrap";
import { PagosStyled, StyledCard } from "./styled/Pagos.styled";

export default function Usuarios() {
  const h1 = { color: "#0085BB" };

  const titulosSeccion2 = {};

  const titulosSeccion3 = {};

  const Seccion1 = {};

  const Seccion2 = {};

  const Seccion3 = {};

  const h2 = {
    fontSize: "20px",
    textAlign: "center"
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

  const nombre = useRef();
  const nombreUsuario = useRef();
  const apellido = useRef();
  const documento = useRef();
  const email = useRef();


  const busca = () => {
    console.log(nombre.current.value)
  }

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
              >Buscar</Button>
            </InputGroup>

            <Card style={Seccion1}>
              <Card.Header class="text-centered  text-justify">
                <h2 style={h2}>Información de Usuario</h2>
              </Card.Header>
              <Card.Body>
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


                <Table>
                  <tbody>
                    <tr>
                      <th scope="row">Nombre: </th>
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
            <br />

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

            <br />

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
        </StyledCard>
      </PagosStyled>
    </div>
  );
}
