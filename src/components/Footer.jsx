import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  const imgStyle = {
    position: `relative`,
    right: "0px",
  };

  const imgContainer = {
    textAlign: "center",
  };

  const bannerStyle = {
    height: `auto`,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "left",
    flexGrow: "1",
  };

  const containerStyle = {
    background: `#4C5966`,
    height: `auto`,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
    paddingLeft: "100px",
    paddingRight: "70px",
    paddingTop: "30px",
    paddingBottom: "30px"
  };

  const h1 = {
    fontSize: "36px",
    lineHeight: "42px",
    letterSpacing: "-0.025em",
    color: "#000000",
  };

  const h2 = {
    fontSize: "20px",
    fontWeight: "300",
    lineHeight: "32px",
    letterSpacing: "-0.025em",
    color: "#FFFFFF",
    textAlign: "right"
  };

  return (
    <>
      <Container style={containerStyle} fluid className="">
        <Row style={bannerStyle}>
          <Col className="d-lg-block d-md-block" style={imgContainer} xs={12} md={4} lg={3}>
            <img
              className="img-fluid"
              style={imgStyle}
              src="/images/logoGov.png"
              alt="car"
              height="400px"
            />
          </Col>
          <Col className="d-none d-lg-block" lg={2}></Col>
          <Col className="text-sm-left" xs={12} lg={7} md={8}>
            <h2 style={h2}>
              Plataforma gestionada por la Gobernación del Chocó <br/>
              Dirección: Sede Principal Cll 31 con Cra. 1ª esquina Edificio La Confianza <br/>
              Horario de atención: De Lunes a Viernes de 8:00 am a 12:00 pm - de 2:00 pm a 6:00 pm <br/>
              Correo institucional: sgeneral@choco.gov.co
            </h2>
          </Col>
        </Row>
      </Container>
    </>
  );
}
